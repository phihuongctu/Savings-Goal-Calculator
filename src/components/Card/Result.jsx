import theme from "~/configs/ThemeConfig";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const MonthAmountBox = styled(Box)(({ theme }) => ({
    border: "1px solid rgba(233, 238, 242, 1)",
    borderRadius: "0.5rem",
    marginTop: "0.5rem",
    [theme.breakpoints.up("md")]: {
        marginTop: "0",
    },
}));

const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
    [theme.breakpoints.up("md")]: {
        padding: "1.5rem 2rem 1rem",
    },
}));

const InfoDetail = styled(Box)(({ theme }) => ({
    fontFamily: "Work Sans",
    fontSize: "0.75rem",
    fontWeight: "400",
    lineHeight: "1rem",
    textAlign: "center",
    color: "rgba(28, 30, 31, 1)",
    padding: "1.5rem 2rem",
    backgroundColor: "rgba(244, 248, 250, 1)",
    "& span": {
        fontSize: "0.75rem",
        fontWeight: "600",
    },
    [theme.breakpoints.up("md")]: {
        textAlign: "left",
    },
}));

function CardResult({ currency, monthlyAmount, totalMonth, amountResult, month, year }) {
    return (
        <MonthAmountBox>
            <TitleBox>
                <Typography variant="h6" color={"primary.text"}>
                    Monthly amount
                </Typography>
                <Typography variant="headingMedium" color={"primary.lightBlue"}>
                    {currency}
                    {monthlyAmount}
                </Typography>
            </TitleBox>
            <InfoDetail>
                You’re planning <Typography component={"span"}>{totalMonth} monthly deposits </Typography>to reach your <Typography component={"span"}>{currency}{amountResult}</Typography> goal by <Typography component={"span"}>{month} {year}.</Typography>
            </InfoDetail>
        </MonthAmountBox>
    );
}

export default CardResult;
