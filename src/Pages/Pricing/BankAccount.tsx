import Styles from "./Pricing.module.scss"
import { Button, Dropdown, Option, Input } from "@fluentui/react-components";
const BankAccount = () => {
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
            <h1 className={`${Styles.Heading} text-white`}>Account Details</h1>
            <div className={`${Styles.Section} !pb-5`}>
                <div className="w-full flex-col flex justify-center items-center">
                    <img src="./images/Profile.png" />
                    <div className="w-full grid grid-cols-3 pt-16">
                        <div className="block">
                            <div className="flex justify-center items-center gap-2">
                                <img src="./images/Vector.png" alt="User" />
                                <span className="text-[#FFD700] text-base font-bold">Personal Details</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="name" placeholder="Enter Your Name" />
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="phNumber" placeholder="Phone Number" />
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="dob" placeholder="Date of Birth" />
                            </div>
                        </div>
                        <div className="block">
                            <div className="flex justify-center items-center gap-2">
                                <img src="./images/download-removebg-preview.png" alt="User" />
                                <span className="text-[#FFD700] text-base font-bold">UPI Details</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="upiId" placeholder="UPI ID" />
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="phonePeId" placeholder="Phone pe ID" />
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="paytmId" placeholder="Paytm ID" />
                            </div>
                        </div>

                        <div className="block">
                            <div className="flex justify-center items-center gap-2">
                                <img src="./images/Vector2.png" alt="User" />
                                <span className="text-[#FFD700] text-base font-bold">Bank Details</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="bankName" placeholder="Bank Name" />
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="ifscCode" placeholder="IFSC Code" />
                                <Input className={`${Styles.BuyNowInput} !w-[300px] !h-[50px] mt-5`} type="text" value="" name="accountNumber" placeholder="Account Numberh" />
                            </div>
                        </div>

                    </div>


                    <Button className="!h-[80px] !w-[350px] !rounded-[10px] !bg-[#FFD700] !text-[#FFFFFF] !text-2xl !mt-10 !font-bold mx-auto">Save</Button>
                </div>

            </div>

        </div >
    );
}

export default BankAccount;


