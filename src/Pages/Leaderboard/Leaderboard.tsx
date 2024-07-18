import { FC } from "react";
import Styles from "./Leaderboard.module.scss"
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";
import PlayedGame from "../../Components/PlayedGame/PlayedGame";


export interface ILeaderboardProps {

}

const columns = [
    { columnKey: "rank", label: "Rank" },
    { columnKey: "name", label: "Name" },
    { columnKey: "totalBets", label: "Total Bets" },
    { columnKey: "royalWins", label: "Royal Wins" },

];
const Rows = [
    {
        rank: 1,
        name: "Prince Kurmi",
        totalBets: 1200,
        royalWins: 300,
    },
    {
        rank: 2,
        name: "Alex Johnson",
        totalBets: 1100,
        royalWins: 250,
    },
    {
        rank: 3,
        name: "Maria Gonzalez",
        totalBets: 1300,
        royalWins: 320,
    },
    {
        rank: 4,
        name: "John Doe",
        totalBets: 1400,
        royalWins: 400,
    },
    {
        rank: 5,
        name: "Jane Smith",
        totalBets: 1250,
        royalWins: 275,
    },
    {
        rank: 6,
        name: "Chris Lee",
        totalBets: 1350,
        royalWins: 310,
    },
    {
        rank: 7,
        name: "Sophia Martinez",
        totalBets: 1450,
        royalWins: 350,
    },
    {
        rank: 8,
        name: "David Brown",
        totalBets: 1500,
        royalWins: 380,
    },
    {
        rank: 9,
        name: "Emily Davis",
        totalBets: 1550,
        royalWins: 390,
    },
    {
        rank: 10,
        name: "Michael Wilson",
        totalBets: 1600,
        royalWins: 410,
    },
];


const Leaderboard: FC<ILeaderboardProps> = ({ }) => {
    return (
        <div className={`${Styles.Container}`}>
            <div className={`${Styles.HeaderSection} w-full min-h-[250px]`} >
                <div>
                    <p className="text-3xl font-bold text-[#FFD700]">Leaderboard</p>
                    <p className="text-[10px] font-bold text-white">Rise to the Top: Track Your Betting Brilliance on the Leaderboard!</p>
                </div>
                <img className="h" src="./images/CustomRoulette.png" />
            </div>
            <div className={`${Styles.Section}`}>
                <Table className={`${Styles.Table} `}>
                    <TableHeader className="h-14">
                        <TableRow className="py-4">
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
            </div>
        </div>

    );
}

export default Leaderboard;