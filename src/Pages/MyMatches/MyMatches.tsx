import { FC } from "react";
import Styles from "./MyMatches.module.scss"
import PlayedGame from "../../Components/PlayedGame/PlayedGame";

export interface IMyMatchesProps {

}
const MyMatches: FC<IMyMatchesProps> = ({ }) => {
    return (
        <div className={`${Styles.Container}`}>
            <div className={`${Styles.HeaderSection} w-full min-h-[250px]`} >
                <div>
                    <p className="text-3xl font-bold text-[#FFD700] text-center">My Matches</p>
                    <p className="text-[10px] font-bold text-white text-center">Review Your Bets: Relive the Thrill of Every Match!</p>
                </div>
                <img className="h" src="./images/CustomRoulette.png" />
            </div>
            <div className={`${Styles.Section}`}>
                <p className="py-2 text-center text-xl font-bold text-white">Harup Game</p>
                <PlayedGame />
            </div>
            <div className={`${Styles.Section}`}>
                <p className="py-2 text-center text-xl font-bold text-white">Jodi Game</p>
                <PlayedGame />
            </div>
        </div>
    );
}

export default MyMatches;