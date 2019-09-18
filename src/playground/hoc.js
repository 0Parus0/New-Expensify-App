import React from 'react';
import ReactDOM from 'react-dom';

/**
|--------------------------------------------------
|         Higher Order Component
 A component that renders other components
 Reuse code 
 Render Hijacking
 Prop manipulation
 Abstract state
|--------------------------------------------------
*/

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The details are: {props.details}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} /> 
      ) : (
        <p>Please log in to see the info</p>
      )}
    </div>
  );
};

const AdminWarning = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminWarning isAdmin details="Your details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated details="Your details" />, document.getElementById('app'));
