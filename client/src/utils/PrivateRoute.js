import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;

        // 
        if (!currentUser) {
        //   return <Component {...props} />;
        // } else {
        //   return <Redirect to="/login" />;
        // }
        return <Redirect to={{ pathname: '/login', state: {from: props.location}}} />}
        if (roles && roles.indexOf(currentUser.role) === -1) {
          return <Redirect to={{ pathname: '/'}} />
        }
        return <Component {...props} />
      }} />
  );
};

