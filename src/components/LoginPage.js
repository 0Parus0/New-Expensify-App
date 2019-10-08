import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


// eslint-disable-next-line no-shadow
export const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <button type="button" onClick={startLogin}>Login</button>  
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
