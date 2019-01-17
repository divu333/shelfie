// import React, { Component } from 'react';
// import './App.css';
// import Dashboard from './component/Dashboard/Dashboard';
// import Form from './component/Form/Form';
// import Header from './component/Header/Header';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Header/>
       
//          <Form/>
//          <Dashboard/>
     
//       </div>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from  './components/Form/Form';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div className="body-content">
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/new-product-form" component={Form} />
							<Route path="/edit-product-form/:id" component={Form} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;