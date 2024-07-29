import { Link } from "react-router-dom";
import Styles from "./Footer.module.scss";
import { Discord, Facebook, Instagram, Whatsapp, X } from "./Icons"
const Footer = () => {
    return (
        <div className={Styles.Footer}>
            <img src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238966/theroyalgame/logo.png" alt="Logo" className="w-8 h-8 md:w-11 md:h-11 lg:w-[80px] lg:h-[60px]" />
            <img src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238966/theroyalgame/name.png" alt="Name" className="w-12 h-3  md:w-32 md:h-6 lg:w-[150px] lg:h-[30px]" />
            <hr className={Styles.Hr} />
            <div className={Styles.CopyrightSection}>
                <span>2024 RoyalGame.com</span>
                <hr className={Styles.Hr} />
                <span>All Rights Reserved</span>
            </div>
            <hr className="w-[80%] border-white border" />
            <div className={Styles.ContactSection}>
                <span>Contact Us</span>
                <hr className={Styles.Hr} />
                <span>Follow Us</span>
            </div>
            <div className={Styles.SocialSection}>
                <Link className={Styles.SocialLink} to={"/"}>
                    <Discord />
                    <span>@royalgame</span>
                </Link>
                <Link className={Styles.SocialLink} to={"/"}>
                    <Instagram />
                    <span>@royalgame</span>
                </Link>
                <Link className={Styles.SocialLink} to={"/"}>
                    <Facebook />
                    <span>@royalgame</span>
                </Link>
                <Link className={Styles.SocialLink} to={"/"}>
                    <Whatsapp />
                    <span>+91 8755507582</span>
                </Link>
                <Link className={Styles.SocialLink} to={"/"}>
                    <X />
                    <span>@royalgame</span>
                </Link>

            </div>
        </div>
    );
}
export default Footer;