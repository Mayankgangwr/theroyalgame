import Styles from "./MobileLayout.module.scss";
import Flex, { FlexDirection, AlignItems, JustifyContent } from "../../Flex/Flex";
import {
    Persona, Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,
} from "@fluentui/react-components";
import { AlertFilled, NavigationFilled } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

const MobileHeader = () => {
    return (
        <>
            <div className={`${Styles.Container}`}>
                <Menu>
                    <MenuTrigger disableButtonEnhancement>
                        <NavigationFilled fontSize={27} color="#FFFF" />
                    </MenuTrigger>
                    <MenuPopover>
                        <MenuList>
                            <MenuItem><Link to="/">Home</Link></MenuItem>
                            <MenuItem><Link to="/mymatch">My Matches</Link></MenuItem>
                            <MenuItem><Link to="/leaderboard">Leaderboard</Link></MenuItem>
                            <MenuItem><Link to="#">Games</Link></MenuItem>
                        </MenuList>
                    </MenuPopover>
                </Menu>

                <img className={Styles.Logo} src="./images/namelogo.png" alt="Logo" />
                <Flex className="gap-3" direction={FlexDirection.ROW} alignItems={AlignItems.CENTER} justifyContent={JustifyContent.END}>
                    <div className={Styles.AlertMessage}><AlertFilled fontSize={25} /></div>
                    <Menu>
                        <MenuTrigger disableButtonEnhancement>
                            <Persona avatar={`https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg`} />
                        </MenuTrigger>

                        <MenuPopover>
                            <MenuList>
                                <MenuItem><Link to="/pricing">Pricing</Link></MenuItem>
                                <MenuItem><Link to="/buynow">Buy Now</Link></MenuItem>
                                <MenuItem><Link to="/withdraw">Withdraw</Link></MenuItem>
                                <MenuItem><Link to="/bankaccount">Bank Account</Link></MenuItem>
                            </MenuList>
                        </MenuPopover>
                    </Menu>
                </Flex>
            </div>
        </>
    );
}
export default MobileHeader;