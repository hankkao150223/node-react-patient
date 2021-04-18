import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import PatientList from './components/patientList';
import * as actions from './store/actions';

const App = (props) => {
  
  useEffect(() => {
    props.fetchPatientList();
    props.fetchOrderList();
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <PatientList />
    </Container>
  );
}

export default connect(null, actions)(App);
