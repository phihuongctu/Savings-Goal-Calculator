import Typography from "@mui/material/Typography";
import { Stack, styled } from "@mui/material";

import CardGoal from "~/components/Card";

const Description = styled(Typography)(({ theme }) => ({
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    textAlign: "center",
    marginTop: "2rem",
    color: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
        marginTop: "3rem",
    },
}));

function SavingGoal() {
    return (
        <Stack alignItems="center" gap={3}>
            <Description color="primary">
                Lets plan your&nbsp;
                <Typography variant="h6" component="span" fontWeight={600}>
                    saving goal.
                </Typography>
            </Description>
            <CardGoal />
        </Stack>
    );
}

export default SavingGoal;
