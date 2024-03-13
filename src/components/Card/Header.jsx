import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

// Component con
function CardHeader({ name, icon }) {
    return (
        <Stack direction="row" gap={2} alignItems="center">
            <Box component="img" alt="Icon House" src={icon} />
            <Stack gap={0.5}>
                <Typography variant="h4" color="primary.text">
                    {name}
                </Typography>
                <Typography variant="body1" color="primary.subtitle">
                    Saving goal
                </Typography>
            </Stack>
        </Stack>
    );
}

export default CardHeader;