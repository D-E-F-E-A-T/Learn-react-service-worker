import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1> There seems to be a problem </h1>;
		}
		return this.props.children;
	}
}
