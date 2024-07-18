import { FC } from "react";
import Styles from "./Home.module.scss"
import { Link } from "react-router-dom";

export interface IHome {

}
const Home: FC<IHome> = ({ }) => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Navbar}>
                <Link to={"/"} >
                    <img className={Styles.Logo} src="./images/namelogo.png" alt="Logo" />
                </Link>
            </div>
            <div className={Styles.BannerContainer}>
                <div className={Styles.AuthContainer}>
                    <div>
                        <img className={Styles.Logo} src="./images/logo.png" alt="Logo" />
                        <img className={Styles.Logo} src="./images/name.png" alt="Name" />
                    </div>
                    <img className={Styles.Logo} src="./images/googleAuth.png" alt="Google Auth" />
                </div>
            </div>

        </div>
    );
}

export default Home;