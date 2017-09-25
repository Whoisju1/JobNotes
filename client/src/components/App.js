import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as actions from '../actions';
import {connect} from 'react-redux';

// import components
import Header from './Header';	
import Landing from './Landing';
import Dashboard from './Dashboard';
import FormData from './PostForm';
import requireAuth from './HOC/requireAuth';
import SingleItem from './SingleItem';
import UpdateForm from './UpdateForm';
import NotFound from './NotFound.js';
import searchResults from './searchResults';

class App extends React.Component {

	componentDidMount () {
		this.props.fetchUser();
	}
	
	
	constructor(props) {
		super(props);
		this.state = { someKey: 'someValue' };
	}

	render() {
		return (
			<div className="main-container">
				<BrowserRouter>
					<div className='main-container'>
						<Header />
						<Switch>
							<Route path='/add' component={requireAuth(FormData)}/> 
							<Route exact path='/' component={Landing}/>
							<Route exact path='/applications' component={requireAuth(Dashboard)}/>
							<Route exact path='/application/:id' component={requireAuth(SingleItem)}/>
							<Route exact path='/edit/:id' component={requireAuth(UpdateForm)}/>
							{/* <Route path='/search/:searchTerm' component={requireAuth(searchResults)}/> */}
							<Route path='*' component={NotFound}/>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
