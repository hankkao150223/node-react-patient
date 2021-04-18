import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const HomePage = ({ patients, onClickItem }) => {
  return (
    <>
      <Typography
          variant="h4"
          align="center"
          color="primary"
      >Patient List</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {
          patients.map((p) => (
            <ListItem
              key={p.id}
              button
              onClick={() => onClickItem(p)}
            >
              <ListItemText primary={p.name} />
            </ListItem>
          ))
        }
      </List>
    </>
  );
};

HomePage.propTypes = {
  onClickItem: PropTypes.func.isRequired,
};

const mapStateToProps = ({ patients }) => {
  return { patients };
}

export default connect(mapStateToProps, null)(HomePage);
