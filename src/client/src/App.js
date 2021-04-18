import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import HomePage from './components/HomePage';
import OrderDialog from './components/OrderDialog';
import * as actions from './store/actions';

const App = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [patient, setPatient] = useState(null);

  const handlePatientItemClick = (patient) => {
    setPatient(patient);
    setOpenDialog(true);
  };

  const handleDialogClose = (patient) => {
    setPatient(null);
    setOpenDialog(false);
  };

  useEffect(() => {
    props.fetchPatientList();
    props.fetchOrderList();
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <HomePage onClickItem={handlePatientItemClick} />
      {
        openDialog ? <OrderDialog
          open={openDialog}
          onClose={handleDialogClose}
          patient={patient}
        /> : ''
      }
      
    </Container>
  );
}

export default connect(null, actions)(App);
