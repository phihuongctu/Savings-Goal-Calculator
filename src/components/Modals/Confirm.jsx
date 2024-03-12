import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Stack, styled } from "@mui/material";

const ModalBox = styled(Stack)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 2rem )",
    maxWidth: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 1rem 2rem 0px rgba(30, 42, 50, 0.08)",
    padding: "1rem",
    borderRadius: "0.5rem",
    gap: "1rem",
    [theme.breakpoints.up]: {
        width: "100%",
        padding: "1rem 1.5rem",
    },
}));

const ButtonConfirm = styled(Button)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1.25rem",
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.lightBlue,
    color: theme.palette.primary.white,
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
                            <Typography id="transition-modal-title" variant="h4" textTransform={"capitalize"}>
                                {serviceName}
                            </Typography>
                            <ButtonClose aria-label="close" onClick={close}>
                                <CloseIcon />
                            </ButtonClose>
                        </Stack>
                        <Stack alignItems={"center"} gap={0}>
                            <Box component="img" alt={serviceName} src={icon} width={100} height={100} />
                            <Typography variant="h5" color={"primary.lightBlue"} fontWeight={500}>{`${currency}${monthlyDeposits} monthly`}</Typography>
                            <Typography variant="caption" textAlign={"center"} mt={0.5}>
                                Your planned success involves making <b>{reachDate} monthly deposits</b> to reach your <b>{currency}{amount} </b> goal by <b>{month} {year}</b>.
                            </Typography>
                        </Stack>
                        <ButtonConfirm onClick={close}>Close</ButtonConfirm>
                    </ModalBox>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalConfirm;
