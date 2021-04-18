import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import * as actions from './store/actions';

const App = (props) => {
  useEffect(() => {
    props.fetchPatientList();
    props.fetchOrderList();
  });
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        你好，世界
      </Button>
    </div>
  );
}

export default connect(null, actions)(App);
