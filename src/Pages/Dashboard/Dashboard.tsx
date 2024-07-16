import { FC } from "react";
import Styles from "./Dashboard.module.scss"
import { Link } from "react-router-dom";
import CustomCarousel from "../../Components/Carousel/Carousel";
import LiveResult from "../../Components/LiveResult/LiveResult";
import LiveGame from "../../Components/LiveGame/LiveGame";
import Footer from "../../Components/Layout/Footer/Footer";


const navItems = [
    { text: 'Home', url: '#' },
    { text: 'My Matches', url: '#' },
    { text: 'Leaderboard', url: '#' },
    { text: 'Games', url: '#' }
];

const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];
export interface IDashboard {

}
const Dashboard: FC<IDashboard> = ({ }) => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Navbar}>
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
                <div className={Styles.NavItems}>
                    <Link className={Styles.LinkIcons} to={"/"}>
                        <img className={Styles.Icons} src="./images/notification.png" alt="" />
                    </Link>
                    <Link className={Styles.LinkIcons} to={"/"}>
                        <img className={Styles.Icons} src="./images/user.png" alt="" />
                    </Link>
                </div>
            </div>
            <div className={Styles.Content}>
                <div className={Styles.CarouselContainer}>
                    <CustomCarousel images={images} />
                </div>
                <div className={Styles.LiveResultContainer}>
                    <LiveResult name={"TAJ"} result={93} id={"game01"} />
                    <LiveResult name={"TAJ"} result={93} id={"game01"} />
                    <LiveResult name={"TAJ"} result={93} id={"game01"} />
                    <LiveResult name={"TAJ"} result={93} id={"game01"} />
                    <LiveResult name={"TAJ"} result={93} id={"game01"} />
                </div>
                <div className={Styles.LiveGameContainer}>
                    <LiveGame name={"TAJ"} />
                    <LiveGame name={"TAJ"} />
                    <LiveGame name={"TAJ"} />
                    <LiveGame name={"TAJ"} />
                    <LiveGame name={"TAJ"} />
                    <LiveGame name={"TAJ"} />
                    <LiveGame name={"TAJ"} />
                    <LiveGame name={"TAJ"} />
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;