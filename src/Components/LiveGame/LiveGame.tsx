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
        <Link className={Styles.LiveGame} style={{ backgroundImage: "url(https://res.cloudinary.com/chaiaurcodelearn/image/upload/f_auto,q_auto/pte3apvrfjbrevlsdrgn)" }} to={`/game`} key={id}>
            <div className={Styles.Header}>
                {isLIve && <img className={Styles.IsLive} src="https://res.cloudinary.com/chaiaurcodelearn/image/upload/v1722238809/theroyalgame/IsLive.png" alt="Is Live" />}
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