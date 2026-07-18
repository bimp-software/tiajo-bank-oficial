import Logo from "../../../shared/assets/icons/logo-tiajobank.webp";
import "./pageLoader.css";

export function PageLoader() {
    return (
        <div className="page-loader">
            <img src={Logo} alt="TíaJo Bank" className="page-loader-logo" />
            <div className="page-loader-bar">
                <span></span>
            </div>
            <p className="page-loader-text">Cargando...</p>
        </div>
    );
}