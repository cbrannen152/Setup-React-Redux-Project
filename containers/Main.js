import { connect } from 'react-redux';

import Main from '../components/Main';

const mapStateToProps = (state) => {
	return state;
	
};


export default connect(
	mapStateToProps,
	{ }
)(Main);