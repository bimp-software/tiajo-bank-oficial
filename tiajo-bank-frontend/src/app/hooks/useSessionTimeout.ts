import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

type UseSessionTimeoutProps = {
    inactivityMinutes?: number;
    warningSeconds?: number;
    onLogout: () => void | Promise<void>;
};

export default function useSessionTimeout({
    inactivityMinutes = 15,
    warningSeconds = 60,
    onLogout,
}: UseSessionTimeoutProps) {
    const inactivityTimer = useRef<number | null>(null);
    const logoutTimer = useRef<number | null>(null);

    useEffect(() => {
        const inactivityTime = inactivityMinutes * 60 * 1000;
        const warningTime = warningSeconds * 1000;

        let warningVisible = false;

        const clearTimers = () => {
            if (inactivityTimer.current !== null) {
                window.clearTimeout(inactivityTimer.current);
                inactivityTimer.current = null;
            }

            if (logoutTimer.current !== null) {
                window.clearTimeout(logoutTimer.current);
                logoutTimer.current = null;
            }
        };

        const logout = async () => {
            clearTimers();
            Swal.close();

            await onLogout();
        };

        const resetTimer = () => {
            /*
             * Mientras la alerta está abierta no reiniciamos el temporizador
             * por movimientos o clics realizados sobre SweetAlert.
             */
            if (warningVisible) {
                return;
            }

            clearTimers();

            inactivityTimer.current = window.setTimeout(() => {
                void showWarning();
            }, inactivityTime);
        };

        const showWarning = async () => {
            warningVisible = true;

            /*
             * Limpiamos únicamente el temporizador de inactividad,
             * porque ya se alcanzó el tiempo límite.
             */
            if (inactivityTimer.current !== null) {
                window.clearTimeout(inactivityTimer.current);
                inactivityTimer.current = null;
            }

            logoutTimer.current = window.setTimeout(() => {
                void logout();
            }, warningTime);

            const result = await Swal.fire({
                icon: "warning",
                title: "Sesión inactiva",
                text: "Por seguridad, tu sesión se cerrará si no continúas.",
                showCancelButton: true,
                confirmButtonText: "Mantener sesión",
                cancelButtonText: "Cerrar sesión",
                confirmButtonColor: "#16a34a",
                cancelButtonColor: "#dc2626",
                timer: warningTime,
                timerProgressBar: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
            });

            warningVisible = false;

            if (result.isConfirmed) {
                clearTimers();
                resetTimer();
                return;
            }

            await logout();
        };

        const events: Array<keyof DocumentEventMap> = [
            "click",
            "mousemove",
            "keydown",
            "scroll",
            "touchstart",
        ];

        events.forEach((eventName) => {
            document.addEventListener(eventName, resetTimer);
        });

        resetTimer();

        return () => {
            clearTimers();
            Swal.close();

            events.forEach((eventName) => {
                document.removeEventListener(eventName, resetTimer);
            });
        };
    }, [inactivityMinutes, warningSeconds, onLogout]);
}