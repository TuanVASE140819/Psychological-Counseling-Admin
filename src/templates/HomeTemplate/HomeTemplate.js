import { Fragment } from "react";
import { Route } from "react-router-dom";





export const HomeTemplate = (props) => {

    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(routeProps) => {
        return <Fragment>
            <Component {...routeProps}></Component>
        </Fragment>
    }} />
}