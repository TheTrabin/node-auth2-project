/** @format */

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/nav/nav';
import Login from './components/auth/login.js';
import RegForm from './components/auth/RegForm.js';

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
			<Router>
				<Nav />

				<Route exact path='/'>
					Home
				</Route>
				<Route path='/register' component={RegForm} />
				<Route path='/login' component={Login} />
			</Router>
		</div>
	);
}

export default App;
