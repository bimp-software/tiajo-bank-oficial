import { Navigate, Outlet, useParams } from "react-router-dom"
import { LanguageSync } from "../i18n/LanguageSync"

const SUPPORTED = ["es","en","fr","ja","zh","pt"];

export default function LangGuard() {
    const { lang } = useParams();
    if (!lang || !SUPPORTED.includes(lang)) {
        return <Navigate to="/es" replace />;
    }
    return (
        <>
            <LanguageSync />
            <Outlet />
        </>
    );
}