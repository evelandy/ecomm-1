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
        // fetch(`http://127.0.0.1:5000/api/v1/addProduct/${this.state.checkVal}`, {
        //     method: 'POST',
        //     body: JSON.stringify({"item": test})
        // })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h2>Add Item</h2>
                    <select defaultValue={this.state.value} onChange={this.handleChange}>
                        <option value='build'>build</option>
                        <option value='part'>part</option>
                        <option value='service'>service</option>
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
