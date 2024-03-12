import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Button, Grid, IconButton, Stack, styled } from "@mui/material";

const ModalBox = styled(Stack)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 2rem )",
    maxWidth: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 1rem 2rem 0px rgba(30, 42, 50, 0.08)",
    padding: "1rem 1.5rem",
    borderRadius: "0.5rem",
    gap: "1rem",
    [theme.breakpoints.up]: {
        width: "100%",
    },
}));

const ButtonConfirm = styled(Button)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1.25rem",
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: theme.palette.secondary.main,
    color: "rgba(255, 255, 255, 1)",
    padding: "0.625rem",
    width: "100%",
    alignSelf: "center",
    borderRadius: "99px",
    marginTop: "0.5rem",
    ":hover": {
        backgroundColor: theme.palette.primary.main,
    },
}));

const ButtonClose = styled(IconButton)(({ theme }) => ({
    background: "rgba(0,0,0,0.08)",
}));

function ModalConfirm({ serviceName, icon, amount, reachDate, monthlyDeposits, month, year, currency, open, close }) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={close}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}>
                <Fade in={open}>
                    <ModalBox>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <Typography id="transition-modal-title" variant="h5" component="h3" textTransform={"capitalize"}>
                                {serviceName}
                            </Typography>
                            <ButtonClose aria-label="close" onClick={close}>
                                <CloseIcon />
                            </ButtonClose>
                        </Stack>
                        <Stack alignItems={"center"} gap={0}>
                            <Box component="img" alt={serviceName} src={icon} width={100} height={100} />
                            <Typography variant="h6">{`${currency}${monthlyDeposits} monthly`}</Typography>
                            <Typography
                                variant="caption"
                                textAlign={"center"}>{`Your planned success involves making ${reachDate} monthly deposits to reach your  ${currency}${amount} goal by ${month} ${year}.`}</Typography>
                        </Stack>
                        <ButtonConfirm onClick={close}>Close</ButtonConfirm>
                    </ModalBox>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalConfirm;
