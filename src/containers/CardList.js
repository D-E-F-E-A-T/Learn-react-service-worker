import React from 'react';
import Card from '../components/Card';

export default ({ robots }) => {
	return robots.map((robot, index) => {
		return <Card key={index} {...robot} />;
	});
};
