import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const OrderSelect = ({ orders, value, onChange, onDelete }) => {
  return (
    <ListItem>
      <Select value={value} onChange={onChange}>
        {
          orders.map(o => <MenuItem key={o.id} value={o.id}>{o.message}</MenuItem>)
        }
      </Select>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

OrderSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = ({ orders }) => {
  return { orders };
}

export default connect(mapStateToProps, null)(OrderSelect);
