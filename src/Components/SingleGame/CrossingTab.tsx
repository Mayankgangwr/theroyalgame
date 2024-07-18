import { FC } from "react";
import Styles from "./SingleGame.module.scss"
import { Button, Checkbox, Input } from "@fluentui/react-components";

export interface ICrossingTabProps {

}
const CrossingTab: FC<ICrossingTabProps> = ({ }) => {
    const numbers = Array.from({ length: 10 }, (_, index) => index)
    return (
        <div className={Styles.GameDataEnterTabContainer}>
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <label className="w-[90%] text-base font-bold text-[#FFFFFF]">IN Numbers</label>
                <Input className={`${Styles.InputField} !w-[90%] !h-14`} type="text" name="inNumber" value="" placeholder="00" />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <label className="w-[90%] text-base font-bold text-[#FFFFFF]">OUT Numbers</label>
                <Input className={`${Styles.InputField} !w-[90%] !h-14`} type="text" name="outNumber" value="" placeholder="00" />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <label className="w-[90%] text-base font-bold text-[#FFFFFF]">Crossing into price</label>
                <Input className={`${Styles.InputField} !w-[90%] !h-14`} type="text" name="crossingIntoPrice" value="" placeholder="00" />
            </div>
            <div className="w-[90%] p-0 m-0">
                <Checkbox className={`${Styles.Checkbox} !flex`} labelPosition="before" label="Without Joda" />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <Button className="w-[280px] h-[84px] border-[10px] !text-3xl !font-bold !text-[#000000]" style={{
                    background: " linear-gradient(180deg, #FFD700 0%, #998100 100%)"
                }}>Save</Button>
                <label className="text-base font-bold text-[#FFFFFF]">Total Number of Crossing</label>
            </div>
            <div className="w-full grid grid-cols-3 mt-16">
                <div className="w-[100/3%] mx-auto">
                    <span className="text-white text-2xl font-extrabold block text-center">TOTAL AMOUNT</span>
                    <span className="text-[#FFD700] text-3xl font-extrabold block text-center">₹ 500</span>

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

export default CrossingTab;

