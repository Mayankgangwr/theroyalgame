import Styles from "./Layout.module.scss";
import DesktopHeader from "./DesktopLayout/DesktopHeader";
import MobileHeader from "./MobileLayout/MobileHeader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <div className={Styles.Layout}>
            <div className={Styles.Content}>
                <div className={Styles.MobileLayout}>
                    <MobileHeader />
                    <Outlet />
                </div>

                <div className={Styles.DesktopLayout}>
                    <DesktopHeader />
                    <Outlet />
                </div>
            </div>
            <div className={Styles.FooterContainer}>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
