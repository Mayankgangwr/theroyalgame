import { FC } from "react";
import Styles from "./SingleGame.module.scss"
import { MoreCircleRegular } from "@fluentui/react-icons";

export interface IGameOverViewProps {

}
const GameOverView: FC<IGameOverViewProps> = ({ }) => {
    return (
        <div className={Styles.Container}>
            <div className="text-end pt-3 pr-7">
                <MoreCircleRegular
                    color="#fff"
                    fontSize={24}
                />
            </div>
            <div className={Styles.GameSection}>
                <div className={Styles.GameDetails}>
                    <img src="./images/tajAvatar.jpg" />
                    <div className={Styles.Details}>
                        <div className=" flex justify-start items-start flex-col">
                            <span className=" text-white ">GAME NAME</span>
                            <span className="text-3xl font-extrabold text-[#FFD700]">TAJ</span>
                        </div>
                        <div className=" flex justify-start items-start flex-col">
                            <span className=" text-white ">GAME NAME</span>
                            <span className="text-3xl font-extrabold text-[#FFD700]">TAJ</span>
                        </div>
                        <div className=" flex justify-start items-start flex-col">
                            <span className=" text-white ">GAME NAME</span>
                            <span className="text-3xl font-extrabold text-[#FFD700]">TAJ</span>
                        </div>

                    </div>
                </div>
                <div className={Styles.WinningSection}>
                    <div className={Styles.Result}>
                        <span className="text-8xl font-extrabold">98</span>
                        <span className="text-sm font-extrabold">LAST WINNER</span>
                        <img src="./images/crown.png" alt="Crown" />
                    </div>
                    <span className="text-3xl font-extrabold text-[#FFD700]">THE ROYAL WINNER</span>
                </div>
            </div>
        </div>
    );
}

export default GameOverView;