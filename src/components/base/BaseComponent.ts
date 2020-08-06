import React from "react";

export interface BaseComponentProps {

}

export interface BaseComponentState {

}

export default class BaseComponent<P extends BaseComponentProps, S extends BaseComponentState> extends React.PureComponent<P, S> {

}