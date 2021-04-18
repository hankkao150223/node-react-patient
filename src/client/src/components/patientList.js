import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const patientList = (props) => {
  const handleListItemClick = (patientId) => {
    console.log(patientId);
  };
  return (
    <>
      <Typography
          variant="h4"
          align="center"
          color="primary"
      >Patient List</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {
          props.patients.map((p) => (
            <ListItem
              key={p.id}
              button
              onClick={() => handleListItemClick(p.id)}
            >
              <ListItemText primary={p.name} />
            </ListItem>
          ))
        }
      </List>
    </>
  );
};

const mapStateToProps = ({ patients }) => {
  return { patients };
}

export default connect(mapStateToProps, null)(patientList);
