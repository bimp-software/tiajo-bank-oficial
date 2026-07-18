import { createContext } from "react";
import type { AccessibilitySettings } from "./AccessibilityProvider";

export interface AccessibilityContextValue {
  settings: AccessibilitySettings;
  update: <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => void;
  reset: () => void;
}

export const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);