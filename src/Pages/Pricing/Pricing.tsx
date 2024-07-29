import Styles from "./Pricing.module.scss"
import { Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom"
const Pricing = () => {

    const navigate = useNavigate();
    return (
        <div className={Styles.Container}>
            <h1 className={`${Styles.Heading} text-[#FFD700] `}>Royal Money ₹</h1>
            <div className={`${Styles.Section} grid grid-cols-1 md:grid-cols-3 gap-10`}>
                <div className={Styles.InnerSection}>
                    <span className=" text-center text-5xl font-bold text-white">₹ 100</span>
                    <Button
                        className="!h-[60px] !w-[170px] !rounded-[30px] !bg-[#37188E] !text-[#FFD700] !text-2xl !font-bold"
                        onClick={() => navigate('/buynow/1')}
                    >Buy Now</Button>
                </div>
                <div className={Styles.InnerSection}>
                    <span className=" text-center text-5xl font-bold text-white">₹ 100</span>
                    <Button
                        className="!h-[60px] !w-[170px] !rounded-[30px] !bg-[#37188E] !text-[#FFD700] !text-2xl !font-bold"
                        onClick={() => navigate('/buynow/2')}
                    >Buy Now</Button>
                </div>
                <div className={Styles.InnerSection}>
                    <span className=" text-center text-5xl font-bold text-white">₹ 100</span>
                    <Button
                        className="!h-[60px] !w-[170px] !rounded-[30px] !bg-[#37188E] !text-[#FFD700] !text-2xl !font-bold"
                    >Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;


