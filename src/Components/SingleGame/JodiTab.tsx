import { FC, useEffect, useState } from "react";
import Styles from "./SingleGame.module.scss"
import { Button, Input } from "@fluentui/react-components";
import { jodiData as Data } from "./Data";
import { values } from "@fluentui/react";
import { DismissFilled } from "@fluentui/react-icons";

export interface IJodiTabProps {

}
const JodiTab: FC<IJodiTabProps> = ({ }) => {
    const [jodiData, setJodiData] = useState<Map<string, number>>(Data)
    const [totalBetAmt, setTotalBetAmt] = useState<number>(0);
    const [betOn, setBetOn] = useState<{ key: string; value: string }>({ key: "", value: "" });
    const [newbetAmt, setNewbetAmt] = useState<string>("");
    const numbers = Array.from({ length: 100 }, (_, index) => index);
    useEffect(() => {
        setJodiData(Data);
        sumofBetAmt(Data);
    }, [Data]);
    const handleBet = () => {
        if (!jodiData.has(betOn.key) || !betOn.value || !newbetAmt) return;
        const totalAmt = Number(betOn.value) + Number(newbetAmt);
        setJodiData(jodiData.set(betOn.key, totalAmt));
        sumofBetAmt(jodiData.set(betOn.key, totalAmt));
        setBetOn({ key: "", value: "" })
    }

    const sumofBetAmt = (map: Map<string, number>) => {
        let sum = 0;
        map.forEach(value => {
            sum += value;
        });
        setTotalBetAmt(sum);
    }

    return (
        <div className={Styles.GameDataEnterTabContainer}>
            <p className="text-white text-center text-2xl font-extrabold">Choose any number to place a Bet</p>
            <p className="text-[#FFD700] text-center text-base font-extrabold">Maximum Amount 5000₹</p>
            {betOn.key ?
                (
                    <div className={`${Styles.InnerSection} relative`}>
                        <DismissFilled className=" absolute top-2 right-4" color="#FFD700" onClick={() => setBetOn({ key: "", value: "" })} fontSize={20} />
                        <div className={`${Styles.DataBox} justify-center items-center`}>
                            <span className="text-white font-extrabold text-2xl text-center">{betOn.key}</span>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center gap-2">
                            <label className="w-[90%] text-base font-bold text-[#FFFFFF]">Betting Price on Selected Number</label>
                            <Input className={`${Styles.InputField} !w-[90%] !h-14`} type="text" name="betPrice" value={newbetAmt}
                                onChange={(_event, data) => { if(typeof Number(data.value) === 'number') setNewbetAmt(data.value) }} placeholder="00" />
                        </div>
                        <div className="w-[100/3%] mx-auto mt-10">
                            <Button
                                className="w-[280px] h-[60px] border-[10px] !rounded-[28px] !text-3xl !font-bold !text-[#000000]"
                                style={{ background: " linear-gradient(180deg, #FFD700 0%, #998100 100%)" }}
                                onClick={() => handleBet()}
                            >Save</Button>
                        </div>
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-10 justify-items-center items-center">
                        {Array.from(jodiData.entries()).map(([key, value]) => (
                            <div key={key} className={`${Styles.DataBox}`} onClick={() =>
                                setBetOn({
                                    key,
                                    value: String(value)
                                })}>
                                <span className="text-white font-extrabold text-2xl text-center">{key}</span>
                                <span className="text-[#37188E] font-extrabold text-sm text-center">{`₹${value}`}</span>
                            </div>
                        ))}
                    </div>

                )}

            <div className="w-full grid grid-cols-3 mt-16">
                <div className="w-[100/3%] mx-auto">
                    <span className="text-white text-2xl font-extrabold block text-center">TOTAL AMOUNT</span>
                    <span className="text-[#FFD700] text-3xl font-extrabold block text-center">₹ {totalBetAmt}</span>
                </div>
                <div className="w-[100/3%] mx-auto">
                    <Button className="w-[280px] h-[84px] border-[10px] !text-3xl !font-bold !text-[#000000]" style={{
                        background: " linear-gradient(180deg, #FFD700 0%, #998100 100%)"
                    }}>Place a Bet</Button>
                </div>
            </div>
        </div>
    );
}

export default JodiTab;

