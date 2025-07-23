import logo_inverted from "../../assets/imgs/logo-inverted.png";
import "./Header.css";
import { useState } from "react";

const Header = () => {

    const [isClosed, setIsClosed] = useState(false);

    const handleClick = () => {
        setIsClosed((prev) => !prev);
    };

    return (
        <>
            <header>
                <article className="logo">
                    <a href="#">
                        <img src={logo_inverted} alt="Thekinoloji Logo" />
                        <h1>Thekinoloji</h1>
                    </a>
                </article>
                <article className="menu">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Notícias</a>
                            </li>
                            <li>
                                <a href="#">Análises</a>
                            </li>
                            <li>
                                <a href="#">Produtos</a>
                            </li>
                        </ul>
                    </nav>
                </article>
                <article className="mobile-menu">
                    <div id="clickWrapper" onClick={handleClick}>
                        <div className={`${isClosed ? "close" : "mobile-menu-icon"} animate`}></div>
                    </div>
                </article>
            </header>
        </>
    );
};

export default Header;
