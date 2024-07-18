import Styles from "./Layout.module.scss";
import DesktopHeader from "./DesktopLayout/DesktopHeader";
import MobileHeader from "./MobileLayout/MobileHeader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <>
            <div className={Styles.MobileLayout}>
                <MobileHeader />
                <Outlet />
                <Footer />
            </div>

            <div className={Styles.DesktopHeader}>
                <DesktopHeader />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
export default Layout;
