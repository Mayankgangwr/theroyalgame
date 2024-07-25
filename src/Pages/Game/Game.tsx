import { FC, useState } from "react";
import Styles from "./Game.module.scss"
import GameOverView from "../../Components/SingleGame/GameOverView";
import { Tab, TabList } from "@fluentui/react-components";
import JodiTab from "../../Components/SingleGame/JodiTab";
import HarukTab from "../../Components/SingleGame/HarukTab";
import CrossingTab from "../../Components/SingleGame/CrossingTab";

export interface IGameProps {

}
const Game: FC<IGameProps> = ({ }) => {
    const [orderStatus, setOrderStatus] = useState("jodi");
    const GameTab = () => {
        if (orderStatus === "crossing") {
            return <CrossingTab />;
        } else if (orderStatus === "harup") {
            return <HarukTab />;
        } else {
            return <JodiTab />;
        }
    }
    return (
        <div className={`${Styles.Container} pb-10`}>
            <GameOverView />
            <TabList className="w-[96%] md:w-[90%] lg:w-[80%] mx-auto justify-between pt-2 md:pt-4 lg:pt-7 pb-[2px] md:pb-1 lg:pb-2" defaultSelectedValue="jodi" onTabSelect={(_event: any, data: any) => {
                const value = data.value;
                setOrderStatus(value)
            }}>
                <Tab className={`${Styles.Tabs} ${orderStatus === "jodi" && Styles.ActiveTab}`} value="jodi">{`JODI`}</Tab>
                <Tab className={`${Styles.Tabs} ${orderStatus === "harup" && Styles.ActiveTab}`} value="harup">{`HARUP`}</Tab>
                <Tab className={`${Styles.Tabs} ${orderStatus === "crossing" && Styles.ActiveTab}`} value="crossing">{`CROSSING`}</Tab>
            </TabList>
            <GameTab />
        </div>
    );
}

export default Game;