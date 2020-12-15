import React from 'react';
import '../modal/cartMiniModal.css';

export default class CartMiniModal extends React.Component {
    state = {
        id: '',
        item_id: '',
        item_name: '',
        item_description: '',
        item_price: '',
        quantity: '',
        item: []
    }
    showCart = () => {
        fetch('http://127.0.0.1:5000/api/v1/cart')
        .then((res) => {
            let data = res.json();
            return data;
        })
        .then((data) => {
            let item = {
                'id': data.message[0].id,
                'item_id': data.message[0].item_id,
                'item_name': data.message[0].item_name,
                'item_description': data.message[0].item_description,
                'item_price': data.message[0].item_price,
                'quantity': data.message[0].quantity
            }
            this.setState({
                item: item
            })
        })
    }
    componentDidMount() {
        this.showCart()
    }
    render() {
        return (
            <div className="miniModalContainer">
                <h2>Shopping Cart</h2>
                <div>
                    <div>
                        {this.state.item['item_name']}
                        <button>X</button>
                    </div>
                    <div>
                        {this.state.item['item_description']}
                    </div>
                    <div>
                        {`Cost: $${this.state.item['item_price']}(${this.state.item['quantity']})`}
                    </div>
                    <div>
                        {`Total: $${this.state.item['quantity'] * this.state.item['item_price']}`}
                    </div>
                    <button>CheckOut</button>
                </div>
            </div>
        );
    }
}
