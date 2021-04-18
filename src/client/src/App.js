import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import HomePage from './components/HomePage';
import OrderDialog from './components/OrderDialog';
import * as actions from './store/actions';

const App = ({ loading, fetchPatientList, fetchOrderList }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [patient, setPatient] = useState(null);

  const handlePatientItemClick = (patient) => {
    setOpenDialog(true);
    setPatient(patient);
  };

  const handleDialogClose = (patient) => {
    setOpenDialog(false);
    setPatient(null);
  };

  useEffect(() => {
    fetchPatientList();
    fetchOrderList();
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <HomePage onClickItem={handlePatientItemClick} />
      {
        openDialog ? <OrderDialog
          open={openDialog}
          patient={patient}
          onClose={handleDialogClose}
        /> : ''
      }
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}

const mapStateToProps = ({ loading }) => {
  return { loading };
}

export default connect(mapStateToProps, actions)(App);
