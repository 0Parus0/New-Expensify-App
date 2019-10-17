import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


// eslint-disable-next-line no-shadow
export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>Its time to get your expenses under control.</p>
        <button type="button" onClick={startLogin} className="button">Login with Google</button>  
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
