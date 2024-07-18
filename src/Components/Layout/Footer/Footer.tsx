import { Link } from "react-router-dom";
import Styles from "./Footer.module.scss";
import { Discord, Facebook, Instagram, Whatsapp, X } from "./Icons"
const Footer = () => {
    return (
        <div className={Styles.Footer}>
            <img src="./images/logo.png" alt="Logo" width={`80px`} height={`80px`} />
            <img src="./images/name.png" alt="Name" width={`150px`} height={`30px`} />
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