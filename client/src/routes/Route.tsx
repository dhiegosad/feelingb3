import React from "react";
import { Route, Redirect } from "react-router-dom";

type Props = {
  component: React.ReactType;
  isPrivate?: boolean;
  exact?: boolean;
  path: string;
};

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: Props) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}
