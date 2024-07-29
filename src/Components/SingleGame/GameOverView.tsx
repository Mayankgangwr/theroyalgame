import { FC } from "react";
import Styles from "./SingleGame.module.scss"
import { MoreCircleRegular } from "@fluentui/react-icons";

export interface IGameOverViewProps {

}
const GameOverView: FC<IGameOverViewProps> = ({ }) => {
    return (
        <div className={`${Styles.Container} relative`}>
            <div className=" absolute top-0 md:top-1 lg:top-4 right-2 md:right-3 lg:right-8">
                <MoreCircleRegular
                    className="text-base md:text-xl lg:text-2xl"
                    color="#fff"

                />
            </div>
            <div className={Styles.GameSection}>
                <div className={Styles.GameDetails}>
                    <img src="./images/tajAvatar.jpg" />
                    <div className={Styles.Details}>
                        <div className="w-full flex justify-start items-start flex-col">
                            <span className=" text-white text-[9px] md:text-base lg:text-xl">GAME NAME</span>
                            <span className="text-sm md:text-2xl lg:text-3xl font-extrabold text-[#FFD700]">TAJ</span>
                        </div>
                        <div className="w-full flex justify-start items-start flex-col">
                            <span className=" text-white text-[9px] md:text-base lg:text-xl">BETTING OPEN TIME</span>
                            <span className="text-sm md:text-2xl lg:text-3xl font-extrabold text-[#FFD700]">5:40 PM</span>
                        </div>
                        <div className="w-full flex justify-start items-start flex-col">
                            <span className=" text-white text-[9px] md:text-base lg:text-xl">BETTING CLOSE TIME</span>
                            <span className="text-sm md:text-2xl lg:text-3xl font-extrabold text-[#FFD700]">6:30 PM</span>
                        </div>

                    </div>
                </div>
                <div className={Styles.WinningSection}>
                    <div className={Styles.Result}>
                        <span className="text-2xl md:text-5xl lg:text-8xl font-extrabold">98</span>
                        <span className="text-sm font-extrabold">LAST WINNER</span>
                        <img src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238478/theroyalgame/crown.png" alt="Crown" />
                    </div>
                    <span className="text-xs md:text-2xl lg:text-3xl font-extrabold text-[#FFD700]">THE ROYAL WINNER</span>
                </div>
            </div>
        </div>
    );
}

export default GameOverView;