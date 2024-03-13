import { useState, useEffect } from "react";
import useFormatterCurrency from "../../utils/currencyFormat";
import theme, { Icon } from "../../configs/ThemeConfig";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Stack, styled } from "@mui/material";

import CardResult from "./Result";
import CardHeader from "./Header";
import ModalConfirm from "../Modals/Confirm";

const IconHouse = Icon("icon-house.svg")
const IconDollar = Icon("icon-dollar-sign.svg")
const IconArrowLeft = Icon("icon-chevron-left.svg")
const IconArrowRight = Icon("icon-chevron-right.svg")


const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "1rem",
    maxWidth: "35rem",
    boxShadow: "0 1rem 2rem 0px rgba(30, 42, 50, 0.08)",
    padding: "1.5rem",
    borderRadius: "0.5rem",

    [theme.breakpoints.up("md")]: {
        padding: " 1.25rem 2rem 2.5rem",
        gap: "1.5rem"
    }
}));

const AmountInput = styled(Box)(({ theme }) => ({
    fontFamily: "Rubik",
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: "1.5rem",
    color: "rgba(77, 100, 117, 1)",
    borderRadius: 4,
    height: "3.5rem",
    padding: "1rem 0.75rem 1rem  2.75rem",
    border: `1px solid ${theme.palette.border.main}`,
    outline: "none",
    width: "100%",
    ":hover, :focus": {
        borderColor: theme.palette.primary.lightBlue
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        lineHeight: "1.75rem"
    }
}));

const IconAmount = styled(Box)({
    position: "absolute",
    left: 12,
    top: 16,
    height: 24,
    width: 24
});

const ReachDateBox = styled(Stack)(({ theme }) => ({
    border: `1px solid ${theme.palette.border.main}`,
    borderRadius: "0.25rem",
    padding: "0",
    height: "3.5rem",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: '0.25rem',
    ":hover, :focus": {
        borderColor: theme.palette.primary.lightBlue
    }
}));

const ReachDateInput = styled("input")(({ theme }) => ({
    fontFamily: "Work Sans",
    width: "100%",
    fontSize: "0.875rem",
    fontWeight: "600",
    lineHeight: "1.25rem",
    textAlign: "center",
    color: theme.palette.primary.text,
    borderRadius: 4,
    padding: "0",
    border: "none",
    outline: "none",

    ":hover, :focus": {
        borderColor: theme.palette.primary.lightBlue
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
        lineHeight: "1.5rem"
    }
}));

const ButtonArrow = styled(IconButton)({
    height: "3.5rem",
    width: "3rem",
    padding: 0,
    borderRadius: "initial"
});

const ButtonConfirm = styled(Button)(({ theme }) => ({
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
    alignSelf: "center",
    borderRadius: "99px",
    marginTop: "0.5rem",
    ":hover": {
        backgroundColor: theme.palette.primary.lightBlue
    }
}));

// Mockup data services
const DataServices = {
    name: "Buy a house",
    icon: IconHouse
};

function CardGoal() {
    const formatCurrency = useFormatterCurrency();
    const currentDay = new Date();
    const [amount, setAmount] = useState("");
    const [reachDate, setReachDate] = useState(currentDay);
    const [totalMonth, setTotalMonth] = useState(0);
    const [isDateFocused, setIsDateFocused] = useState(false);
    const [open, setOpen] = useState(false);

    const currency = "$";
    // Lấy giá trị tháng, năm sau khi user đã chọn trong input Reach Date
    const dateInfo = new Date(reachDate);
    const month = dateInfo.toLocaleDateString("en-US", { month: "long" });
    const year = dateInfo.toLocaleDateString("en-US", { year: "numeric" });

    // Kiểm tra nếu input amount rỗng thì set amountResult = 0
    const amountResult = amount !== "" ? amount : 0;

    // Chuyển đổi một chuỗi số có chứa dấu phẩy sang dạng số thực
    const parseAmount = amount.trim() !== "" ? parseFloat(amount.replace(/,/g, "")) : 0;

    // Kiểm tra tổng số tháng đã chọn phải khác 0 thì mới tính kết quả
    const monthlyAmount = totalMonth !== 0 ? parseAmount / totalMonth : 0;
    const formattedMonthlyAmount = monthlyAmount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    //kiểm tra monthlyAmount có bằng 0
    const isMonthlyAmountZero = monthlyAmount !== 0 ? false : true

    // Xử lí khi input month được focus thì trigger arrow keyboard
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (isDateFocused) {
                if (event.key === "ArrowLeft") {
                    handlePrevMonth();
                } else if (event.key === "ArrowRight") {
                    handleNextMonth();
                }
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [reachDate, isDateFocused]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputMonthFocus = () => {
        setIsDateFocused(true);
    };

    const handleInputMonthBlur = () => {
        setIsDateFocused(false);
    };

    // Kiểm tra xem giá trị hiện tại có phải là tháng trước không
    const isPastMonth = (date) => {
        return date.getFullYear() < currentDay.getFullYear() || (date.getFullYear() === currentDay.getFullYear() && date.getMonth() < currentDay.getMonth());
    };

    const handleInputAmount = (event) => {
        const inputAmount = event.target.value;
        //loại bỏ tất cả các ký tự không phải là số và dấu chấm(.)
        const formattedValue = formatCurrency(inputAmount.replace(/[^0-9.]/g, ""));
        setAmount(formattedValue);
    };

    // Xử lí chỉ giảm tháng đến tháng hiện tại
    const handlePrevMonth = () => {
        const prevMonth = new Date(reachDate.getFullYear(), reachDate.getMonth() - 1);
        if (!isPastMonth(prevMonth)) {
            setReachDate(prevMonth);
            setTotalMonth(prevMonth.getMonth() - currentDay.getMonth() + 12 * (prevMonth.getFullYear() - currentDay.getFullYear()));
        }
    };

    // Xử lí tăng tháng lên
    const handleNextMonth = () => {
        const nextMonth = new Date(reachDate.getFullYear(), reachDate.getMonth() + 1);
        setReachDate(nextMonth);
        setTotalMonth(nextMonth.getMonth() - currentDay.getMonth() + 12 * (nextMonth.getFullYear() - currentDay.getFullYear()));
    };

    return (
        <>
            <StyledCard>
                <CardHeader name={DataServices.name} icon={DataServices.icon} />
                <Grid container columnSpacing={{ xs: 0, md: 2 }} rowSpacing={{ xs: 2, md: 0 }} alignItems="center">
                    <Grid item xs={12} md={7} >
                        <Typography variant="body2" component="label" htmlFor="amount" color="primary.text">
                            Total amount
                        </Typography>
                        <Stack direction="row" gap={1} alignItems="center" position="relative" mt={0.5}>
                            <IconAmount
                                component="img"
                                sx={{
                                    height: 24,
                                    width: 24
                                }}
                                alt="Icon amount"
                                src={IconDollar}
                            />
                            <AmountInput component="input" id="amount" className="amount" type="text" aria-label="amount" placeholder="0" value={amount} onChange={handleInputAmount} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="body2" component="label" htmlFor="reachDate" color="primary.text">
                            Reach goal by
                        </Typography>
                        <ReachDateBox
                            direction="row"
                            onFocus={handleInputMonthFocus}
                            onBlur={handleInputMonthBlur}
                            sx={{
                                borderColor: isDateFocused ? theme.palette.primary.lightBlue : theme.palette.border.main
                            }}>
                            <ButtonArrow onClick={handlePrevMonth} aria-label="prev month">
                                <img src={IconArrowLeft} width={24} height={24} alt="prev month" />
                            </ButtonArrow>
                            <Stack direction="column" alignItems="center">
                                <ReachDateInput id="reachDate" className="month" aria-label="month" value={reachDate.toLocaleDateString("en-US", { month: "long" })} readOnly />
                                <ReachDateInput className="year" aria-label="year" sx={{ fontWeight: 400, color: theme.palette.primary.subtitle }} value={reachDate.toLocaleDateString("en-US", { year: "numeric" })} readOnly />
                            </Stack>
                            <ButtonArrow onClick={handleNextMonth} aria-label="next month">
                                <img src={IconArrowRight} width={24} height={24} alt="next month" />
                            </ButtonArrow>
                        </ReachDateBox>
                    </Grid>
                </Grid>
                <CardResult amountResult={amountResult} totalMonth={totalMonth} monthlyAmount={formattedMonthlyAmount} month={month} year={year} currency={currency} />
                <ButtonConfirm disabled={isMonthlyAmountZero} onClick={handleOpen} sx={{ background: isMonthlyAmountZero ? theme.palette.primary.disable : theme.palette.primary.main }}>
                    Confirm
                </ButtonConfirm>
            </StyledCard>
            {open && <ModalConfirm
                serviceName={DataServices.name}
                icon={DataServices.icon}
                amount={amountResult}
                reachDate={totalMonth}
                monthlyDeposits={formattedMonthlyAmount}
                month={month}
                year={year}
                currency={currency}
                open={open}
                close={handleClose}
            />}
        </>
    );
}

export default CardGoal;
