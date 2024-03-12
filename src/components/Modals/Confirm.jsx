import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Stack, styled } from "@mui/material";

const ModalBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 2rem )",
    maxWidth: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 1rem 2rem 0px rgba(30, 42, 50, 0.08)",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    [theme.breakpoints.up]: {
        width: "100%",
    },
}));

const ButtonClose = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: ".5rem",
    right: ".5rem",
    background: "rgba(0,0,0,0.08)",
}));

function ModalConfirm({ amount, reachDate, monthly, currency, open, close }) {
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
                        <ButtonClose aria-label="close" onClick={close}>
                            <CloseIcon />
                        </ButtonClose>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Summary Saving Goal
                        </Typography>
                        <Typography sx={{ mt: 2 }}>{` Amount: ${currency}${amount} `}</Typography>
                        <Typography sx={{ mt: 2 }}>{` Reach Date: ${reachDate} month`}</Typography>
                        <Typography sx={{ mt: 2 }}>{`Monthly Deposit: ${currency}${monthly} `}</Typography>
                    </ModalBox>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalConfirm;
