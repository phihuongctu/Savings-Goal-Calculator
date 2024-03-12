import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

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
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Summary Saving Goal
                            {`Summary `}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {` Amount: ${currency}${amount} `}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>{` Reach Date: ${reachDate} month`}</Typography>
                        <Typography sx={{ mt: 2 }}>{`Monthly Deposit: ${currency}${monthly} `}</Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalConfirm;
