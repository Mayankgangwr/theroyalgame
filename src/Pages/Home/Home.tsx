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
                    <img className="h-12 md:h-full" src="./images/namelogo.png" alt="Logo" />
                </Link>
            </div>
            <div className={Styles.BannerContainer}>
                <div className={Styles.AuthContainer}>
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-12 md:h-full" src="./images/logo.png" alt="Logo" />
                        <img className="h-10 md:h-full" src="./images/name.png" alt="Name" />
                    </div>
                    <Link to={"/"} >
                        <img className="h-10 md:h-full" src="./images/googleAuth.png" alt="Google Auth" />
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Home;