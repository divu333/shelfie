
// import React, { Component } from 'react';
// import axios from "axios";



// class Form extends Component {
// constructor(props){
//     super(props);

//     this.state ={
//     imgurl: '',
//     name:'',
//     price: 0

  
// }
// this.changeurl = this.changeurl.bind(this)
// //this.addInventory = this.addInventory.bind(this);

// }

//  changeurl = (event)=> {
//   this.setState({
//     imgurl: event.target.value

//   })
// console.log(event.target.value)
//   }

//   addInventory() {
 
//     if (this.state.name && this.state.price) {
//       axios
//         .put(`/api/create/${this.props.match.params.id}`, {
//           name: this.state.name,
//           price: this.state.price
//         })
//     }
//   }

// onFieldNameChange = (e) => {
//     this.setState({ name: e.target.value });
//   }

//   onFieldPriceChange = (e) => {
//     this.setState({ price: e.target.value });
//   }





// render() {
//     const { 
//         name, 
//         price, 
//         /* Destructure other fields... */ 
//       } = this.state;
//     return (
//       <div className="form" >
//         {/* <div className="form-preview"  style ={ {backgroundImage: 'url(' + this.state.imgurl + ')'} }>
//        </div>
//        <p> Image URL:</p>
//        <input type="text" onChange={this.changeurl}  value={this.state.imgurl}/> */}
// 	<img
// 					className="form-preview"
// 					src={
// 						this.state.image_url === '' ? (
// 							'http://experienceidyllwild.com/images/no-image-available2.jpg'
// 						) : (
// 							this.state.image_url
// 						)
// 					}
// 					alt={this.state.name}
// 				/>

//         <p> Product Name:</p>
//         <input type="text" onChange={this.onFieldNameChange} value={name} /> 
//         <p> Price:</p>
//         <input type="text" pattern="[0-9*" value={price} onChange={this.onFieldPriceChange}/> 
//         <div className="form-button">
//         <button> Cancel</button>
//         <button onClick={() => this.addInventory()}>Add to Inventory</button>
//         </div>
//     </div>
//     );
// }
  
// }

// export default Form;





import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			price: "",
			image_url: "",
            currentId: null,
            
		};
	}
	componentWillMount(props) {
		if (this.props.match.params.id) {
            axios.get('/api/inventory/'+this.props.match.params.id)
            .then(response=> {
                this.setState({
                    name: response.data[0].name,
                    price: response.data[0].price,
                    image_url:response.data[0].image_url,
                    currentId:response.data[0].product_id
                })
            })
		}
         
    }
    componentDidUpdate(props){
        if(props.match.params.id !== this.props.match.params.id){
            this.setState({
                name: "",
			    price: "",
			image_url: "",
            currentId: null,
            })
        }
    }
   
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	
	addItem() {
		const newItem = {
			name: this.state.name,
			price: this.state.price,
			image_url: this.state.image_url
		};

		axios.post('/api/inventory', newItem).then(() => {
			
		});
	}
	updateItem() {
		const editedItem = {
			name: this.state.name,
			price: this.state.price,
			image_url: this.state.image_url
		};

		axios.put('/api/inventory/' + this.state.currentId, editedItem).then(() => {
		});
	}
	render() {
		const addOrUpdate = this.state.currentId ? (
			<button onClick={() => this.updateItem()}>Save Changes</button>
		) : (
			<button onClick={() => this.addItem()}>Add to inventory</button>
		);
		return (
			<div className="form">
				<img
					className="image-preview"
					src={
						this.state.image_url === '' ? (
							'http://experienceidyllwild.com/images/no-image-available2.jpg'
						) : (
							this.state.image_url
						)
					}
					alt={this.state.name}
				/>
				<div className="form-inputs">
					<p className="input-label">Image URL:</p>
					<input value={this.state.image_url} onChange={(e) => this.handleChange(e, 'image_url')} />
					<p className="input-label">Product Name:</p>
					<input value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} />
					<p className="input-label">Price:</p>
					<input value={this.state.price} onChange={(e) => this.handleChange(e, 'price')} />
					<div className="form-buttons-container">
						<Link to="/"><button>Cancel</button>
						</Link>
						<Link to="/">{addOrUpdate}</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Form;
