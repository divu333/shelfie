
import React, { Component } from 'react';
import axios from "axios";



class Form extends Component {
constructor(){
    super();

    this.state ={
    imgurl: '',
    name:'',
    price: 0

  
}
this.changeurl = this.changeurl.bind(this)
//this.addInventory = this.addInventory.bind(this);

}

 changeurl = (event)=> {
  this.setState({
    imgurl: event.target.value

  })
console.log(event.target.value)
  }

//   addInventory() {
 
//     if (this.state.name && this.state.price) {
//       axios
//         .put(`/api/create/${this.props.match.params.id}`, {
//           name: this.state.name,
//           price: this.state.price
//         })
//     }
//   }

onFieldNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  onFieldPriceChange = (e) => {
    this.setState({ price: e.target.value });
  }





render() {
    const { 
        name, 
        price, 
        /* Destructure other fields... */ 
      } = this.state;
    return (
      <div className="form" >
        <div className="form-preview"  style ={ {backgroundImage: 'url(' + this.state.imgurl + ')'} }>
       </div>
       <p> Image URL:</p>
       <input type="text" onChange={this.changeurl}  value={this.state.imgurl}/>
        <p> Product Name:</p>
        <input type="text" onChange={this.onFieldNameChange} value={name} /> 
        <p> Price:</p>
        <input type="text" pattern="[0-9*" value={price} onChange={this.onFieldPriceChange}/> 
        <div className="form-button">
        <button> Cancel</button>
        <button onClick={() => this.addInventory()}>Add to Inventory</button>
        </div>
    </div>
    );
}
  
}

export default Form;
