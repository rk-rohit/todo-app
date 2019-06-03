import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Todo from './Todo';
import Post from './component/Post'
import Background from './img/Background.jpg';

class App extends Component {
	render() {
		const pstyle = {
			backgroundSize : 'cover',
			height : '-webkit-fill-available',
            backgroundImage: `url(${Background})`
        }
		return (
			<BrowserRouter>
				<div className="app" style={pstyle}>
					<Navbar/>
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/todo" component={Todo} />
							<Route path="/:post_id" component={Post} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}
export default App;
