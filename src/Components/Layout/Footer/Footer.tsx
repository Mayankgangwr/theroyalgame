import Styles from "./Footer.module.scss";


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
        </div>
    );
}
export default Footer;