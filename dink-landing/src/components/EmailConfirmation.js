import { Slide, Snackbar, Typography } from "@mui/material";
import { ColorCode } from "../enum/colorCodes.ts";

const EmailConfirmation = (props) => {
  const { isOpen, setIsOpen } = props;

  const handleClose = () => {
    setIsOpen(false);
  };

  const message = (
    <div>
      <Typography sx={{ fontFamily: "Lato" }}>
        Thanks for signing up!
      </Typography>
      <Typography sx={{ fontFamily: "Lato" }}>
        Keep an eye out for an email when our Beta is available!
      </Typography>{" "}
    </div>
  );
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isOpen}
        onClose={handleClose}
        message={message}
        TransitionComponent={Slide}
        autoHideDuration={7000}
        ContentProps={{
          sx: { backgroundColor: ColorCode.Jade, borderRadius: "12px" },
        }}
      />
    </div>
  );
};

export default EmailConfirmation;
