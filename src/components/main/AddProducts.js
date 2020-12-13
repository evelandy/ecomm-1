import React from 'react';

export default class AddProducts extends React.Component {
    state = {
        checkVal: "",
        itemId: '',
        itemName: '',
        itemDescription: '',
        itemPrice: ''
    }
    handleChange = (e) => {
        this.setState({checkVal: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault();
        let addItem = {
            'itemId': this.state.itemId, 
            'itemName': this.state.itemName, 
            'itemDescription': this.state.itemDescription, 
            'itemPrice': this.state.itemPrice, 
            'checkVal': this.state.checkVal
        }
        fetch(`http://127.0.0.1:5000/api/v1/addProduct`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({addItem})
        })
        .then((res) => {
            let data = res.json();
            return data;
        })
        .then((data) => {
            console.log(data.msg)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h2>Add Item</h2>
                    <select defaultValue={this.state.value} onChange={this.handleChange}>
                        <option value=""></option>
                        <option value='BuildInv'>BuildInv</option>
                        <option value='PartInv'>PartInv</option>
                        <option value='ServiceInv'>ServiceInv</option>
                    </select>
                    <label>
                        Item Id:
                        <input type="text" name="item_id" value={this.state.itemId} onChange={(e) => this.setState({itemId: e.target.value})} />
                    </label>
                    <label>
                        Item Name:
                        <input type="text" name="item_name" value={this.state.itemName} onChange={(e) => this.setState({itemName: e.target.value})} />
                    </label>
                    <label>
                        Item Description:
                        <input type="text" name="item_description" value={this.state.itemDescription} onChange={(e) => this.setState({itemDescription: e.target.value})} />
                    </label>
                    <label>
                        Item Price:
                        <input type="text" name="item_price" value={this.state.itemPrice} onChange={(e) => this.setState({itemPrice: e.target.value})} />
                    </label>
                    <input type='submit' value="submit" />
                </form>
            </div>
        );
    }
}
