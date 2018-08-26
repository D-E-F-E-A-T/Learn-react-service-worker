import React, { Component } from 'react';
import CardList from './CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { changeSearchField, robotRequest } from '../Actions';

const SearchBox = ({ onSearchHandler }) => {
	return (
		<div className="pa2">
			<input
				onChange={onSearchHandler}
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="Search Robo Friends"
			/>
		</div>
	);
};

const ScrollView = ({ children }) => {
	return <div style={{ overflowY: 'scroll', height: 800, border: '1px solid #000' }}>{children}</div>;
};

class App extends Component {
	componentDidMount() {
		return this.props.makeRobotsRequest();
	}

	render() {
		const { searchField, onSearchChange, robots } = this.props;

		let filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>ROBO FRIENDS</h1>
				<SearchBox onSearchHandler={onSearchChange} />
				<ScrollView>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</ScrollView>
			</div>
		);
	}
}

const mapStateToProps = ({ searchField: { searchField }, robots: { robots } }) => ({
	searchField,
	robots,
});

const mapDispatchToProps = dispatch => ({
	onSearchChange: ({ target: { value } }) => dispatch(changeSearchField(value)),
	makeRobotsRequest: () => dispatch(robotRequest()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
