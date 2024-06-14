import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";

interface DialogComponentProps {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
  title: { text: string; color: string };
  whenClose?: () => void;
}

export default function DialogComponent(props: DialogComponentProps) {
  const {
    content,
    open,
    setOpen,
    title: { text, color },
    whenClose,
  } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen?.(false);
    whenClose?.();
  };

  const { t } = useTranslation();
  const close = t("closeDialog");

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle color={color}>{text}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          {close}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
