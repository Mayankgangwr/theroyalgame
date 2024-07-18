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
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-base font-bold text-[#FFD700]">Enter Your Details</label>
                            <Input className={`${Styles.BuyNowInput} !w-[300px] !h-14`} type="text" value="" placeholder="UPI Number" />
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
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-base font-bold text-[#FFD700]">Add Screenshot</label>
                            {/* <UploadButton uploader={uploader}
                            options={options}
                            onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
                            {({ onClick }) =>
                                <Button className={`${Styles.BuyNowBtn} !w-[300px] !h-14`} onClick={onClick}>
                                    Upload...
                                </Button>
                            }
                        </UploadButton> */}
                            <input className={`${Styles.BuyNowBtn} !w-[300px] !h-14`} type="file" value="" placeholder="UPI Number" />

                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className={`text-center text-2xl font-bold text-[#FFD700]`}>Amount ₹ 100</h1>
                        <img src="./images/QR.png" alt="QR Code" />
                        <h1 className={`text-center text-3xl font-bold text-[#FFFFFF] pt-2`}>xyz@upi</h1>
                    </div>
                </div>
                <div className="w-full flex justify-center pt-10">
                    <Button className="!h-[80px] !w-[350px] !rounded-[10px] !bg-[#FFD700] !text-[#FFFFFF] !text-2xl !font-bold mx-auto">Confirm</Button>
                </div>
            </div>
            <h1 className={`${Styles.Heading} text-white !text-xl !pt-4`}>Scan & Bet: Instant Access to Your Betting World!</h1>

            

        </div>
    );
}

export default BuyNow;


