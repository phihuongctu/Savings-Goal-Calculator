import Typography from "@mui/material/Typography";
import { Stack, styled } from "@mui/material";

import CardGoal from "~/components/Card";

const Description = styled(Typography)(({ theme }) => ({
    marginTop: "2rem",
    [theme.breakpoints.up("md")]: {
        marginTop: "3rem",
    },
}));

function SavingGoal() {
    return (
        <Stack alignItems="center" gap={3}>
            <Description variant="h6" color="primary.main">
                Lets plan your <Typography variant="h6" component="span" fontWeight={600}>saving goal.</Typography>
            </Description>
            <CardGoal />
        </Stack>
    );
}

export default SavingGoal;
