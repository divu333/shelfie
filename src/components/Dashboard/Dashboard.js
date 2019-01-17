// import React, { Component } from 'react';
// import Product from '../product/Product';

// class Dashboard extends Component {
//   render() {
//     return (
//     <div className="dash">         
       
//          <Product/>

//          </div>
//     );
//   }
// }

// export default Dashboard;



import React, { Component } from 'react';
import Product from '../product/Product';
import './dashboard.css';
import axios from 'axios'

class Dashboard extends Component {
	constructor(){
		super()
		this.state={
			inventoryList:[]
		}
	}
	componentWillMount() {
		this.getItemList();
	}
	componentDidUpdate(){
		this.getItemList()
	}
	getItemList() {
		axios.get('/api/inventory').then((response) => {
			this.setState({ inventoryList: response.data });
		});
	}
	render() {
		const list = this.state.inventoryList.map((product, index) => {
			return (
				<Product
					getItemList={()=>this.getItemList()}
					currentProduct={product}
					key={index}
				/>
			);
		});
		return <div>{list}</div>;
	}
}
export default Dashboard;
