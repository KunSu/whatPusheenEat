import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(buttonName: string, itemName: string[]) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var itemOutput = getItemRandom(itemName);
  const [item, setNewItem] = React.useState(itemOutput);
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {buttonName}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Pusheen said let's go eat!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {item}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              var newitemOutput = getItemRandom(itemName);
              while (item === newitemOutput) {
                newitemOutput = getItemRandom(itemName);
              }
              setNewItem(newitemOutput);
            }}
          >
            Another food
          </Button>
          <Button onClick={handleClose} autoFocus>
            GO!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function getItemRandom(itemName: string[]) {
  const list = itemName;
  const total = itemName.length;
  var index = Math.floor(Math.random() * total);
  const newitemOutput = list[index];
  return newitemOutput;
}
