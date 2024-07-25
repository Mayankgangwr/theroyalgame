import Styles from "./Pricing.module.scss"
import { Button, Dropdown, Option, Input } from "@fluentui/react-components";
const BuyNow = () => {
    const DropdownOptions = [
        "Cat",
        "Caterpillar",
        "Corgi",
        "Chupacabra",
        "Dog",
        "Ferret",
        "Fish",
        "Fox",
        "Hamster",
        "Snake",
    ];
    return (
        <div className={Styles.Container}>
            <h1 className={`${Styles.Heading} text-white`}>Pay Now</h1>
            <div className={`${Styles.Section} !pb-5`}>
                <div className="w-full flex justify-between flex-col-reverse md:flex-row items-center">
                    <div className="w-full flex flex-col justify-center items-center gap-5">
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <label className="text-base font-bold text-[#FFD700]">Enter Your Details</label>
                            <Input className={`${Styles.BuyNowInput} !w-full !h-[50px]`} type="text" value="" placeholder="UPI Number" />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <label className="text-base font-bold text-[#FFD700]">Send Payment Request</label>
                            <Dropdown
                                placeholder="Select an animal"
                                className={`${Styles.BuyNowDropdown}  !w-full !h-[50px]`}
                            >
                                {DropdownOptions.map((option) => (
                                    <Option key={option} disabled={option === "Ferret"}>
                                        {option}
                                    </Option>
                                ))}
                            </Dropdown>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <label className="text-base font-bold text-[#FFD700]">Add Screenshot</label>
                            <input className={`${Styles.BuyNowBtn} !max-w-full !w-full !h-[50px]`} type="file" value="" placeholder="UPI Number" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 pb-3 md:pb-0">
                        <h1 className={`text-center text-2xl font-bold text-[#FFD700]`}>Amount ₹ 100</h1>
                        <img src="./images/QR.png" alt="QR Code" />
                        <h1 className={`text-center text-3xl font-bold text-[#FFFFFF] pt-2`}>xyz@upi</h1>
                    </div>
                </div>
                <div className="flex justify-center pt-2 md:pt-7 lg:pt-10">
                    <Button className="w-40 md:w-60 lg:w-72 h-10 md:h-14 lg:h-[84px] !text-sm !md:text-2xl !lg:text-3xl !font-bold  !bg-[#FFD700] !text-[#FFFFFF] !mt-10 mx-auto">Confirm</Button>
                </div>
            </div>
            <h1 className={`${Styles.Heading} text-white !text-xl !pt-4`}>Scan & Bet: Instant Access to Your Betting World!</h1>
        </div>
    );
}

export default BuyNow;


