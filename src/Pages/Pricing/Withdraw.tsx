import Styles from "./Pricing.module.scss"
import { Button, Dropdown, Option, Input } from "@fluentui/react-components";
const Withdraw = () => {
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
                <div className="w-full flex flex-col justify-between items-center h-[400px]">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-base font-bold text-[#FFD700]">Enter Your Details</label>
                            <Input className={`${Styles.BuyNowInput} !w-[300px] !h-14`} type="text" value="" placeholder="Enter Amount" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-base font-bold text-[#FFD700]">Send Payment Request</label>
                            <Dropdown
                                placeholder="Select an animal"
                                className={`${Styles.BuyNowDropdown} !w-[300px] !h-14`}
                            >
                                {DropdownOptions.map((option) => (
                                    <Option key={option} disabled={option === "Ferret"}>
                                        {option}
                                    </Option>
                                ))}
                            </Dropdown>
                        </div>
                    </div>
                    <Button className="!h-[80px] !w-[350px] !rounded-[10px] !bg-[#FFD700] !text-[#FFFFFF] !text-2xl !font-bold mx-auto">Confirm</Button>
                </div>
            </div>
            <h1 className={`${Styles.Heading} text-white !text-xl !pt-4`}>Scan & Bet: Instant Access to Your Betting World!</h1>



        </div>
    );
}

export default Withdraw;


