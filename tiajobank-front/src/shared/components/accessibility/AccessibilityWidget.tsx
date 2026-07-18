// src/shared/components/accessibility/AccessibilityWidget.tsx
import { useState } from "react";
import { useAccessibility } from "./useAccessibility";
import "./accessibility.css";

export function AccessibilityWidget() {
    const [open, setOpen] = useState(false);
    const { settings, update, reset } = useAccessibility();

    return (
        <div className="a11y-widget">
            <button
                type="button"
                className="a11y-toggle-btn"
                onClick={() => setOpen((v) => !v)}
                aria-label="Opciones de accesibilidad"
                aria-expanded={open}
            >
                <i className="bi bi-universal-access" />
            </button>

            {open && (
                <div className="a11y-panel" role="dialog" aria-label="Panel de accesibilidad">
                    <div className="a11y-panel-header">
                        <h3>Accesibilidad</h3>
                        <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar">
                            <i className="bi bi-x-lg" />
                        </button>
                    </div>

                    <div className="a11y-group">
                        <span>Tamaño de texto</span>
                        <div className="a11y-btn-row">
                            <button type="button" onClick={() => update("fontScale", Math.max(1, settings.fontScale - 0.1))}>A-</button>
                            <button type="button" onClick={() => update("fontScale", 1)}>A</button>
                            <button type="button" onClick={() => update("fontScale", Math.min(1.5, settings.fontScale + 0.1))}>A+</button>
                        </div>
                    </div>

                    <label className="a11y-switch">
                        <input type="checkbox" checked={settings.highContrast} onChange={(e) => update("highContrast", e.target.checked)} />
                        Alto contraste
                    </label>

                    <label className="a11y-switch">
                        <input type="checkbox" checked={settings.grayscale} onChange={(e) => update("grayscale", e.target.checked)} />
                        Escala de grises
                    </label>

                    <label className="a11y-switch">
                        <input type="checkbox" checked={settings.underlineLinks} onChange={(e) => update("underlineLinks", e.target.checked)} />
                        Subrayar enlaces
                    </label>

                    <label className="a11y-switch">
                        <input type="checkbox" checked={settings.dyslexiaFont} onChange={(e) => update("dyslexiaFont", e.target.checked)} />
                        Fuente para dislexia
                    </label>

                    <label className="a11y-switch">
                        <input type="checkbox" checked={settings.reduceMotion} onChange={(e) => update("reduceMotion", e.target.checked)} />
                        Reducir animaciones
                    </label>

                    <label className="a11y-switch">
                        <input type="checkbox" checked={settings.bigCursor} onChange={(e) => update("bigCursor", e.target.checked)} />
                        Cursor grande
                    </label>

                    <button type="button" className="a11y-reset-btn" onClick={reset}>
                        Restablecer todo
                    </button>
                </div>
            )}
        </div>
    );
}