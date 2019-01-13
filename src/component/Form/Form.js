
import React, { Component } from 'react';
class Form extends Component {




render() {
 

    return (
      <div className="form">
        <div className="form-preview" ></div>
       <p> Image URL:</p>
       <input type="text" onPaste={this.onPaste} />
        
        <p> Product Name:</p>
        <input type="text" value=""/> 
        <p> Price:</p>
        <input type="text" pattern="[0-9*" value="0"/> 
        <div className="form-button">
        <button> Cancel</button>
        <button>Add to Inventory</button>
        </div>
    </div>
    );
}
  
}

export default Form;
