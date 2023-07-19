import { useTranslation } from "react-i18next";
import background from "../components/images/Background.png";

const Home = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div
            className="container"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
            }}
        >
            <div className="main-content">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>{t("home.message")}</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default Home;
