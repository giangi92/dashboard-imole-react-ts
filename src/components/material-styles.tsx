import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles({
  header: {
    // background: 'linear-gradient(45deg, #1D1D1D 30%, #FF8E53 90%)',
    background: '#2B2B2B',
    border: 0,
    // borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 20, .3)',
    color: 'white',
    padding: '0 30px',
    paddingBottom: '10px'
  },
  footer: {
    background: 'linear-gradient(45deg, #2B2B2B 30%, #2B2B2B 90%)',
    border: 0,
    // borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 20, .3)',
    color: 'white',
    padding: '0 30px',
    paddingBottom: '10px'
  },
});

export default UseStyles;