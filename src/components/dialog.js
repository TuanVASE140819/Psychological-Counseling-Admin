import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, handleClose, data, onChange, handleFromSubmit }) {
  const { name, email, address, phone } = data;

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">Create New User</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              value={name}
              onChange={e => onChange(e)}
              id="name"
              placeholder="Họ và tên"
              fullWidth
              label="Họ Và Tên"
              variant="outlined"
              margin="dense"
            />
            <TextField
              value={email}
              onChange={e => onChange(e)}
              id="email"
              placeholder="Email"
              fullWidth
              label="Email"
              variant="outlined"
              margin="dense"
            />
            <TextField
              value={address}
              onChange={e => onChange(e)}
              id="address"
              placeholder="Địa chỉ"
              fullWidth
              label="Địa chỉ"
              variant="outlined"
              margin="dense"
            />
            <TextField
              value={phone}
              onChange={e => onChange(e)}
              id="phone"
              placeholder="Số điện thoại"
              fullWidth
              label="Số điện thoại"
              variant="outlined"
              margin="dense"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button color="primary" variant="outlined" autoFocus onClick={()=>console.log(data)}>
            Summit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
