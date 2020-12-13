import React from 'react';
import '../styles/modal.css';

export default class AddItem extends React.Component {
    state = {
        value: '1',
        itemId: '',
        itemName: '',
        itemDescription: '',
        itemPrice: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value)
        console.log(this.props.price)
        console.log(this.props.name)
        console.log(this.props.type_desc)
        console.log(this.props.itemId)
    }
    handleChange = (e) => {
        this.setState({value: e.target.value})
    }
    addToCart = () => {
        fetch('http://127.0.0.1:5000/api/v1/cart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
    }
    render() {
        return (
            <span>
                {
                this.props.show 
                ? 
                <div className="addItemContainer">
                    <span onClick={this.props.close}>X</span>
                    <h2>Add Item</h2>

                    <h3>{this.props.name}</h3>
                    <h4>{this.props.itemId}</h4>
                    
                    <h3>{this.props.type_desc}</h3>
                    <img src={this.props.src} alt="build" />
                    <div className="addItemPrice">
                        ${this.props.price}
                    </div>
                    <form className="addItemForm" onSubmit={this.handleSubmit}>
                        <select defaultValue={this.state.value} onChange={this.handleChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <button>Add</button>
                    </form>
                </div> 
                : 
                null
                }
            </span>
        );
    }
}

// export default function AddItem(props) {
//     const [amnt, setAmnt] = useState('1');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(amnt)
//     }
//     const handleChange = (e) => {
//         setAmnt({value: e.target.value})
//     }
//     return (
//         <span>
//             {
//             props.show 
//             ? 
//             <div className="addItemContainer">
//                 <h2>Add Item</h2>
//                 <img src={props.src} alt="build" />
//                 <div>
//                     ${props.price}
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <select defaultValue={amnt} onChange={handleChange}>
//                         <option value='1'>1</option>
//                         <option value='2'>2</option>
//                         <option value='3'>3</option>
//                         <option value='4'>4</option>
//                         <option value='5'>5</option>
//                     </select>
//                     <button>Add</button>
//                 </form>
//             </div> 
//             : 
//             null
//             }
//         </span>
//     );
// }
