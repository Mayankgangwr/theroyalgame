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
                    <img className="h-12 md:h-full" src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238850/theroyalgame/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className={Styles.BannerContainer}>
                <div className={Styles.AuthContainer}>
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-12 md:h-full" src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238850/theroyalgame/logo.png" alt="Logo" />
                        <img className="h-10 md:h-full" src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238966/theroyalgame/name.png" alt="Name" />
                    </div>
                    <Link to={"/"} >
                        <img className="h-10 md:h-full" src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238753/theroyalgame/googleAuth.png" alt="Google Auth" />
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Home;