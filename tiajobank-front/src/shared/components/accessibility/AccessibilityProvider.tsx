// src/shared/components/accessibility/AccessibilityProvider.tsx
import { useEffect, useState, type ReactNode } from "react";
import { AccessibilityContext } from "./AccessibilityContext";

export interface AccessibilitySettings {
  fontScale: number;
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  dyslexiaFont: boolean;
  reduceMotion: boolean;
  bigCursor: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontScale: 1,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  dyslexiaFont: false,
  reduceMotion: false,
  bigCursor: false,
};

const STORAGE_KEY = "tiajo_a11y_settings";

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    const root = document.documentElement;
    root.style.setProperty("--a11y-font-scale", String(settings.fontScale));
    root.classList.toggle("a11y-high-contrast", settings.highContrast);
    root.classList.toggle("a11y-grayscale", settings.grayscale);
    root.classList.toggle("a11y-underline-links", settings.underlineLinks);
    root.classList.toggle("a11y-dyslexia-font", settings.dyslexiaFont);
    root.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
    root.classList.toggle("a11y-big-cursor", settings.bigCursor);
  }, [settings]);

  const update = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => setSettings(DEFAULT_SETTINGS);

  return (
    <AccessibilityContext.Provider value={{ settings, update, reset }}>
      {children}
    </AccessibilityContext.Provider>
  );
}