import Styles from "./DesktopLayout.module.scss";
import Flex, { FlexDirection, AlignItems, JustifyContent, FlexWrap } from "../../Flex/Flex";
import { Text, Persona } from "@fluentui/react-components";
import moment from "moment";
import InputField from "../../DataFields/InputField";
import { AlertFilled, WeatherMoonRegular, WeatherSunnyFilled } from "@fluentui/react-icons";
import { useEffect, useState } from "react";

const DesktopHeader = () => {
    const [hasShadow, setHasShadow] = useState(false);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 76) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Flex className={`${Styles.Container} ${hasShadow  && Styles.Scrolled}`} direction={FlexDirection.ROW} alignItems={AlignItems.CENTER} justifyContent={JustifyContent.BETWEEN} flexWrap={FlexWrap.WRAP}>
            <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} justifyContent={JustifyContent.CENTER}>
                <Text className={Styles.Header}>Dashboard</Text>
                <Text className={Styles.Time}>{moment().format("Do MMM YYYY")}</Text>
            </Flex>
            <Flex className="gap-3" direction={FlexDirection.ROW} alignItems={AlignItems.CENTER} justifyContent={JustifyContent.CENTER}>
                <InputField
                    className={Styles.SearchField}
                    type="search"
                    name={"search"}
                    value={""}
                    placeholder="Search"
                    setValue={() => { }}
                />
                <Flex
                    className={Styles.ThemeManage}
                    direction={FlexDirection.ROW}
                    alignItems={AlignItems.CENTER}
                    justifyContent={JustifyContent.BETWEEN}
                    flexWrap={FlexWrap.WRAP}
                >
                    <WeatherSunnyFilled fontSize={32} color="#fdbd22" />
                    <WeatherMoonRegular fontSize={32} />
                </Flex>
                <div className={Styles.AlertMessage}><AlertFilled fontSize={32} /></div>
                <Persona name="Prince Kurmi" textAlignment="center" size="extra-large" />
            </Flex>
        </Flex>
    );
}
export default DesktopHeader;