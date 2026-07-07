import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import i18n from "../../app/i18n";

export default function PublicLayout(){

    const { lang = "es" } = useParams();

    useEffect(() => {
        i18n.changeLanguage(lang);
    },[lang]);

    return (
        <>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </>
    );
}
