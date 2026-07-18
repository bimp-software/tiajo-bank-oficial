// src/shared/components/accessibility/useAccessibility.ts
import { useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility debe usarse dentro de AccessibilityProvider");
  return ctx;
}