import { FC, useEffect, useState } from "react";
import Styles from "./SingleGame.module.scss"
import { Button, Input } from "@fluentui/react-components";
import { harukAndarData, harukBaharData } from "./Data";
import { DismissFilled } from "@fluentui/react-icons";

export interface IHarukTabProps {

}
const HarukTab: FC<IHarukTabProps> = ({ }) => {
    const [andarData, setAndarData] = useState<Map<string, number>>(harukAndarData);
    const [baharData, setBaharData] = useState<Map<string, number>>(harukBaharData);
    const [totalBetAmt, setTotalBetAmt] = useState<number>(0);
    const [betOn, setBetOn] = useState<{ type: String; key: string; value: string }>({
        type: "",
        key: "",
        value: ""
    });
    const [newbetAmt, setNewbetAmt] = useState<string>("");

    useEffect(() => {
        setAndarData(harukAndarData);
        setBaharData(harukBaharData);
        sumofBetAmt(harukAndarData, harukBaharData);
    }, [harukAndarData, harukBaharData]);

    const handleBet = () => {
        if (!andarData.has(betOn.key) || !betOn.value || !newbetAmt) return;
        const totalAmt = Number(betOn.value) + Number(newbetAmt);
        if (betOn.type === "ander") {
            setAndarData(() => andarData.set(betOn.key, totalAmt));
            sumofBetAmt(andarData.set(betOn.key, totalAmt), baharData);
        }
        if (betOn.type === "bahar") {
            setBaharData(() => baharData.set(betOn.key, totalAmt));
            sumofBetAmt(andarData, baharData.set(betOn.key, totalAmt));
        }
        setBetOn({ type: "", key: "", value: "" })
    }

    const sumofBetAmt = (harukAndarData: Map<string, number>, harukBaharData: Map<string, number>) => {
        let sum = 0;
        harukAndarData.forEach(value => {
            sum += value;
        });
        harukBaharData.forEach(value => {
            sum += value;
        });
        setTotalBetAmt(sum);
    }

    return (
        <div className={Styles.GameDataEnterTabContainer}>
            <p className="text-white text-center text-xs md:text-base lg:text-2xl font-extrabold">Choose any number to place a Bet</p>
            {betOn.key ?
                (
                    <div className={`${Styles.InnerSection} relative`}>
                        <DismissFilled className=" absolute top-2 right-4" color="#FFD700" onClick={() => setBetOn({ type: "", key: "", value: "" })} fontSize={20} />
                        <div className={`${Styles.DataBox} justify-center items-center`}>
                            <span className="text-white font-extrabold text-sm md:text-base lg:text-2xl text-center">{betOn.key}</span>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center gap-[3px] md:gap-2">
                            <label className="w-[90%] text-xs md:text-sm lg:text-base font-bold text-[#FFFFFF]">Betting Price on Selected Number</label>
                            <Input className={`${Styles.InputField} !rounded-[15px] !md:rounded-[22px] !lg:rounded-[28px] !w-[90%] !h-10 !md:h-12 !lg:h-14`} type="text" name="betPrice" value={newbetAmt}
                                onChange={(_event, data) => { if (typeof Number(data.value) === 'number') setNewbetAmt(data.value) }} placeholder="00" />
                        </div>
                        <div className="w-[100/3%] mx-auto mt-4 md:mt-8 lg:mt-10">
                            <Button
                                className="w-40 md:w-60 lg:w-72 h-10 md:h-14 lg:h-[84px] !rounded-[12px] !md:rounded-[24px] !lg:rounded-[28px] !text-sm !md:text-2xl !lg:text-3xl !font-bold !text-[#000000]"
                                style={{ background: " linear-gradient(180deg, #FFD700 0%, #998100 100%)" }}
                                onClick={() => handleBet()}
                            >Save</Button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="w-full">
                            <p className="w-full text-white text-start text-xs md:text-base lg:text-2xl font-extrabold pl-[2%]">Andar</p>
                            <div className="w-full grid grid-cols-10 justify-items-center items-center">
                                {Array.from(andarData.entries()).map(([key, value]) => (
                                    <div key={key} className={`${Styles.DataBox}`} onClick={() =>
                                        setBetOn({
                                            type: "ander",
                                            key,
                                            value: String(value)
                                        })}>
                                        <span className={Styles.Label}>{key}</span>
                                        <span className={Styles.Value}>{`₹${value}`}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full">
                            <p className="w-full text-white text-start text-xs md:text-base lg:text-2xl font-extrabold pl-[2%]">Bahar</p>
                            <div className="w-full grid grid-cols-10 justify-items-center items-center">
                                {Array.from(baharData.entries()).map(([key, value]) => (
                                    <div key={key} className={`${Styles.DataBox}`} onClick={() =>
                                        setBetOn({
                                            type: "bahar",
                                            key,
                                            value: String(value)
                                        })}>
                                        <span className={Styles.Label}>{key}</span>
                                        <span className={Styles.Value}>{`₹${value}`}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}


            <div className="w-full grid grid-cols-3 mt-8 md:mt-12 lg:mt-16 pb-2 md:pb-4 lg:pb-6">
                <div className="w-[100/3%] mx-auto">
                    <span className="text-white text-xs md:text-base lg:text-2xl font-extrabold block text-center">TOTAL AMOUNT</span>
                    <span className="text-[#FFD700] text-sm md:text-xl lg:text-3xl font-extrabold block text-center">₹ {totalBetAmt}</span>
                </div>
                <div className="w-[100/3%] mx-auto">
                    <Button className="w-40 md:w-60 lg:w-72 h-10 md:h-14 lg:h-[84px] !text-sm !md:text-2xl !lg:text-3xl !font-bold !text-[#000000]" style={{
                        background: " linear-gradient(180deg, #FFD700 0%, #998100 100%)"
                    }}>Place a Bet</Button>
                </div>
            </div>
        </div>
    );
}

export default HarukTab;

