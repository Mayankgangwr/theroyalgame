import React, { FC } from "react";
import Styles from "./LiveResult.module.scss"
import { Link } from "react-router-dom";

export interface LiveResultProps {
    colorCode?: string;
    image?: string;
    name: string;
    result: number
    id: string

}
const LiveResult: FC<LiveResultProps> = ({
    colorCode = '#FFD700',
    image = './images/GameLogo.png',
    name = "TAJ",
    result = 93,
    id = "game01" }) => {
    return (
        <Link className={Styles.LiveResult} to={`/${id}`}>
            <img className={Styles.Image} src={image} alt="" />
            <span className={Styles.Name}>{name}</span>
            <span className={`${Styles.Result} bg-${colorCode}`}>{result}</span>
        </Link >
    );
}
export default LiveResult