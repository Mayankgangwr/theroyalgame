import {
    Table,
    TableHeader,
    TableHeaderCell,
    TableRow,
    TableBody,
    TableCell,
} from "@fluentui/react-components";
import Styles from "./PlayedGame.module.scss";
const columns = [
    { columnKey: "gameName", label: "Game Name" },
    { columnKey: "betAmount", label: "Bet Amount" },
    { columnKey: "betNumber", label: "Bet Number" },
    { columnKey: "time", label: "Time" },
    { columnKey: "date", label: "Date" },
    { columnKey: "rewards", label: "Rewards" },

];
const Rows = [
    {
        gameName: "Taj",
        betAmount: 10,
        betNumber: 12,
        time: "10:00 PM",
        date: "12/09/2024",
        rewards: "No"
    },
    {
        gameName: "GHAZIABAD",
        betAmount: 10,
        betNumber: 12,
        time: "10:00 PM",
        date: "12/09/2024",
        rewards: "No"
    },
    {
        gameName: "DESHAWER",
        betAmount: 10,
        betNumber: 12,
        time: "10:00 PM",
        date: "12/09/2024",
        rewards: "No"
    },
    
]
const PlayedGame = () => {
    return (
        <Table className={`${Styles.Table} `}>
            <TableHeader>
                <TableRow>
                    {columns.map((item) => (
                        <TableHeaderCell className={Styles.TableHeaderCell} key={item.columnKey}>{item.label}</TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {Rows.map((row: any) => (
                    <TableRow className={Styles.TableRow} key={row.id}>
                        {Object.keys(row).map((key) => (
                            <TableCell className={Styles.TableCell}>{row[key]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    );
}
export default PlayedGame;