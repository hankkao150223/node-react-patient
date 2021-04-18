import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import OrderSelect from './OrderSelect';

const OrderDialog = ({ onClose, open, patient, orders }) => {
  const [patientOrders, setPatientOrders] = useState(patient.orders);
  const handleAdd = () => {
    setPatientOrders([
      ...patientOrders,
      orders[0].id,
    ]);
  };
  const handleOrderChange = (e, index) => {
    const newPatientOrders = [...patientOrders];
    newPatientOrders[index] = e.target.value;
    setPatientOrders(newPatientOrders);
  };
  const handleOrderDelete = (index) => {
    const newPatientOrders = patientOrders.filter((_, pIdx) => pIdx !== index);
    setPatientOrders(newPatientOrders);
  };
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
        <Grid justify="space-between" container>
          <Grid item>
            <Typography variant="h6">Order</Typography>
          </Grid>
          <Grid item>
            <Button color="primary" onClick={handleAdd}>Add</Button>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {
            patientOrders.map((orderId, index) => <OrderSelect
              key={index}
              value={orderId}
              onChange={e => handleOrderChange(e, index)}
              onDelete={() => handleOrderDelete(index)}
            />
            )
          }
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

OrderDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  patient: PropTypes.object.isRequired,
};

const mapStateToProps = ({ orders }) => {
  return { orders };
}

export default connect(mapStateToProps, null)(OrderDialog);
