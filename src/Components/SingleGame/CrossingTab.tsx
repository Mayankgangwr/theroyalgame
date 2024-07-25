import { FC } from "react";
import Styles from "./SingleGame.module.scss"
import { Button, Checkbox, Input } from "@fluentui/react-components";

export interface ICrossingTabProps {

}
const CrossingTab: FC<ICrossingTabProps> = ({ }) => {
    return (
        <div className={`${Styles.GameDataEnterTabContainer} pt-4 md:pt-8 lg:pt-10`}>
            <div className="w-full flex flex-col justify-center items-center gap-[3px] md:gap-2">
                <label className="w-[90%] text-xs md:text-sm lg:text-base font-bold text-[#FFFFFF]">IN Numbers</label>
                <Input className={`${Styles.InputField} !rounded-[15px] !md:rounded-[22px] !lg:rounded-[28px]  !w-[90%] !h-10 !md:h-12 !lg:h-14`} type="text" name="inNumber" value="" placeholder="00" />
            </div>
            <div className="w-full flex flex-col justify-center items-center  gap-[3px] md:gap-2">
                <label className="w-[90%] text-xs md:text-sm lg:text-base font-bold text-[#FFFFFF]">OUT Numbers</label>
                <Input className={`${Styles.InputField}  !rounded-[15px] !md:rounded-[22px] !lg:rounded-[28px]  !w-[90%] !h-10 !md:h-12 !lg:h-14`} type="text" name="outNumber" value="" placeholder="00" />
            </div>
            <div className="w-full flex flex-col justify-center items-center  gap-[3px] md:gap-2">
                <label className="w-[90%] text-xs md:text-sm lg:text-base font-bold text-[#FFFFFF]">Crossing into price</label>
                <Input className={`${Styles.InputField}  !rounded-[15px] !md:rounded-[22px] !lg:rounded-[28px] !w-[90%] !h-10 !md:h-12 !lg:h-14`} type="text" name="crossingIntoPrice" value="" placeholder="00" />
            </div>
            <div className="w-[90%] p-0 m-0">
                <Checkbox className={`${Styles.Checkbox} !flex`} labelPosition="before" label="Without Joda" />
            </div>
            <div className="w-full flex flex-col justify-center items-center  gap-[3px] md:gap-2">
                <Button className="w-40 md:w-60 lg:w-72 h-10 md:h-14 lg:h-[84px] !text-sm !md:text-2xl !lg:text-3xl !font-bold !text-[#000000]" style={{
                    background: " linear-gradient(180deg, #FFD700 0%, #998100 100%)"
                }}>Save</Button>
                <label className="text-xs md:text-sm lg:text-base font-bold text-[#FFFFFF]">Total Number of Crossing</label>
            </div>
            <div className="w-full grid grid-cols-3 mt-8 md:mt-12 lg:mt-16 pb-2 md:pb-4 lg:pb-6">
                <div className="w-[100/3%] mx-auto">
                    <span className="text-white text-xs md:text-base lg:text-2xl font-extrabold block text-center">TOTAL AMOUNT</span>
                    <span className="text-[#FFD700] text-sm md:text-xl lg:text-3xl font-extrabold block text-center">₹ {500}</span>
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

export default CrossingTab;

