import Styles from "./DesktopLayout.module.scss";
import Flex, { FlexDirection, AlignItems, JustifyContent, FlexWrap } from "../../Flex/Flex";
import { Persona } from "@fluentui/react-components";
import { AlertFilled } from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const navItems = [
    { text: 'Home', url: '/' },
    { text: 'My Matches', url: 'mymatch' },
    { text: 'Leaderboard', url: 'leaderboard' },
    { text: 'Games', url: '#' }
];
const DesktopHeader = () => {
    const [hasShadow, setHasShadow] = useState(false);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 76) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={Styles.Container}>
            <Flex className={`${Styles.Navbar} ${hasShadow && Styles.Scrolled}`} alignItems={AlignItems.CENTER} justifyContent={JustifyContent.BETWEEN} flexWrap={FlexWrap.WRAP}>
                <Link to={"/"} >
                    <img className={Styles.Logo} src="./images/namelogo.png" alt="Logo" />
                </Link>
                <ul className={Styles.NavItems}>
                    {navItems.map((item, index) => (
                        <li className={Styles.NavItem} key={index}>
                            <Link className={Styles.Link} to={`/${item.url}`}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Flex className="gap-3" direction={FlexDirection.ROW} alignItems={AlignItems.CENTER} justifyContent={JustifyContent.CENTER}>
                    <div className={Styles.AlertMessage}><AlertFilled fontSize={32} /></div>
                    <Persona className={Styles.Persona} name="Prince Kurmi" textAlignment="center" color="#FFFFF" size="extra-large" />
                </Flex>
            </Flex>
        </div>
    );
}
export default DesktopHeader;