import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const OrderDialog = ({ onClose, open }) => {
  const handleSave = () => {

  };
  return (
    <Dialog
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        <Grid
          justify="space-between"
          container 
          spacing={24}
        >
          <Grid item>
            <Typography variant="title">Order</Typography>
          </Grid>
          <Grid item>
            <Button>Add Order</Button>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent
        dividers
      >
        Google, even when no apps are running.
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

OrderDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default OrderDialog;
