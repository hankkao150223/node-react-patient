import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import HomePage from './components/HomePage';
import OrderDialog from './components/OrderDialog';
import * as actions from './store/actions';

const App = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [orderId, setOrderId] = useState(0);

  const handlePatientItemClick = (patientId) => {
    setOrderId(patientId);
    setOpenDialog(true);
  };

  useEffect(() => {
    props.fetchPatientList();
    props.fetchOrderList();
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <HomePage onClickItem={handlePatientItemClick} />
      <OrderDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        orderId={orderId}
      />
    </Container>
  );
}

export default connect(null, actions)(App);
