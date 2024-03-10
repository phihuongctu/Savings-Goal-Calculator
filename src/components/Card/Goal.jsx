import { theme } from "~/configs/ThemeConfig";
import { useState } from "react";
import useFormatterCurrency from "~/utils/currencyFormat";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, styled } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import IconHouse from "~/assets/icons/icon-house.svg";
import IconDollar from "~/assets/icons/icon-dollar-sign.svg";

const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "560px",
    boxShadow: "0px 16px 32px 0px rgba(30, 42, 50, 0.08)",
    padding: "1.5rem",
    borderRadius: "0.5rem",

    [theme.breakpoints.up("md")]: {
        padding: " 1.25rem 2rem 2.5rem",
    },
}));

const GoalTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "Rubik",
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: "24px",
    color: "rgba(30, 42, 50, 1)",
    [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        lineHeight: "28.8px",
    },
}));

const GoalSubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.25rem",
    color: "rgba(112, 135, 151, 1)",
    [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
    },
}));

const AmountBox = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("md")]: {
        width: "60%",
    },
}));

const Label = styled(InputLabel)(() => ({
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.25rem",
    color: "rgba(30, 42, 50, 1)",
    transform: "none",
    position: "relative",
    marginBottom: "0.25rem",
}));

const AmountInput = styled(Box)(({ theme }) => ({
    fontFamily: "Rubik",
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: "1.5rem",
    color: "rgba(77, 100, 117, 1)",
    borderRadius: 4,
    height: "3.5rem",
    padding: "1rem 0.75rem 1rem  44px",
    border: "1px solid rgba(233, 238, 242, 1)",
    outline: "none",
    width: "100%",
    ":hover, :focus": {
        borderColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        lineHeight: "28.8px",
    },
}));

const IconAmount = styled(Box)({
    position: "absolute",
    left: 12,
    top: 16,
    height: 24,
    width: 24,
});

const MonthAmountBox = styled(Box)({
    border: "1px solid rgba(233, 238, 242, 1)",
    borderRadius: "0.5rem",
});

const MonthTitle = styled(Typography)({
    fontSize: "1.125rem",
    fontWeight: "400",
    lineHeight: "1.25rem",
    color: "rgba(30, 42, 50, 1)",
    [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
    },
});

const MonthPrice = styled(Typography)(({ theme }) => ({
    fontFamily: "Rubik",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1.75rem",
    color: theme.palette.secondary.main,
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
        lineHeight: "2.375rem",
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
    textAlign: "left",
    color: "rgba(28, 30, 31, 1)",
    padding: "1.5rem 2rem",
    backgroundColor: "rgba(244, 248, 250, 1)",
}));

const ButtonConfirm = styled(Button)(({ theme }) => ({
    // fontFamily: "Work Sans",
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1.25rem",
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    color: "rgba(255, 255, 255, 1)",
    padding: "1.125rem",
    width: "100%",
    maxWidth: "20rem",
    alignSelf:'center',
    borderRadius:"99px",
    marginTop:'0.5rem',
    ":hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function CardGoal() {
    const [amount, setAmount] = useState("");
    const formatCurrency = useFormatterCurrency();

    const handleChange = (event) => {
        const input = event.target.value;
        const formattedValue = formatCurrency(input.replace(/[^0-9.]/g, ""));
        setAmount(formattedValue);
    };
    return (
        <StyledCard>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
                <Box component="img" alt="Icon House" src={IconHouse} />
                <Stack gap={0.5}>
                    <GoalTitle>Buy a house</GoalTitle>
                    <GoalSubTitle>Saving goal</GoalSubTitle>
                </Stack>
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }} gap={2} alignItems={"center"}>
                <AmountBox variant="outlined">
                    <Label component={"label"} htmlFor="amount">
                        Total amount
                    </Label>
                    <Stack direction={"row"} gap={1} alignItems={"center"} position={"relative"}>
                        <IconAmount
                            component="img"
                            sx={{
                                height: 24,
                                width: 24,
                            }}
                            alt="Icon amount"
                            src={IconDollar}
                        />
                        <AmountInput component={"input"} id="amount" className="amount" type="text" value={amount} onChange={handleChange} />
                    </Stack>
                </AmountBox>
                <FormControl variant="outlined">
                    <Label component={"label"} htmlFor="ReachGoal">
                        Reach goal by
                    </Label>
                    <OutlinedInput
                        id="ReachGoal"
                        startAdornment={
                            <InputAdornment position="start">
                                <Box
                                    component="img"
                                    sx={{
                                        height: 24,
                                        width: 24,
                                    }}
                                    alt="Icon amount"
                                    src={IconDollar}
                                />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Stack>
            <MonthAmountBox>
                <TitleBox>
                    <MonthTitle>Monthly amount</MonthTitle>
                    <MonthPrice>$520.83</MonthPrice>
                </TitleBox>
                <InfoDetail>
                    You’re planning&nbsp;
                    <Typography fontSize={12} component={"span"} fontWeight={600}>
                        48 monthly deposits&nbsp;
                    </Typography>
                    to reach your&nbsp;
                    <Typography fontSize={12} component={"span"} fontWeight={600}>
                        $25,000&nbsp;
                    </Typography>
                    goal by&nbsp;
                    <Typography fontSize={12} component={"span"} fontWeight={600}>
                        October 2020.
                    </Typography>
                </InfoDetail>
            </MonthAmountBox>

            <ButtonConfirm>Confirm</ButtonConfirm>
        </StyledCard>
    );
}

export default CardGoal;
