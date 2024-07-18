import { FC } from "react";
import Styles from "./LiveGame.module.scss"
import { Link } from "react-router-dom";
import { MoreCircleRegular } from "@fluentui/react-icons";

export interface LiveGameProps {
    isLIve?: boolean;
    name: string;
    id?: string

}
const LiveGame: FC<LiveGameProps> = ({
    isLIve = true,
    name = "TAJ",
    id = "game01" }) => {
    return (
        <Link className={Styles.LiveGame} to={`/game`} key={id}>
            <div className={Styles.Header}>
                <img className={Styles.IsLive} src="./images/IsLive.png" alt="Is Live" />
                <MoreCircleRegular
                    color="#fff"
                    fontSize={24}
                />
            </div>
            <div className={Styles.Content}>
                <span>{name}</span>
            </div>
        </Link >
    );
}
export default LiveGame