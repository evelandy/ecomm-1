import React, { useState } from 'react';
import AddItem from '../modal/AddItem';
import '../styles/parts.css';

export default function PartCard(props) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setShowModal(!showModal)
    }
    return (
        <div>
            <AddItem close={handleClose} name={props.name} itemId={props.id} type_desc={props.type_desc} price={props.price} src={props.build} show={showModal} />
            <div className="partsCardContainer">
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.type_desc}
                </p>
                <img src={props.build} alt='parts'/>
                <div>
                    ${props.price}
                </div>
                <span className="btnContainer">
                    <button onClick={() => setShowModal(!showModal)}>add</button>
                    <button>view</button>
                </span>
            </div>
        </div>
    );
}

// export default class PartCard extends React.Component {
//     state = {showModal: false}
//     handleOpen = e => {
//         e.preventDefault();
//         this.setState({showModal: true}, () => {
//             document.addEventListener("click", this.closeMenu);
//         });
//     };
//     closeMenu = () => {
//         this.setState({showModal: false}, () => {
//             document.removeEventListener("click", this.closeMenu);
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <AddItem close={this.handleOpen} type_desc={this.props.type_desc} price={this.props.price} src={this.props.build} show={this.showModal} />
//                 <div className="partsCardContainer">
//                     <h2>
//                         {this.props.name}
//                     </h2>
//                     <p>
//                         {this.props.type_desc}
//                     </p>
//                     <img src={this.props.build} alt='parts'/>
//                     <div>
//                         ${this.props.price}
//                     </div>
//                     <span className="btnContainer">
//                         <button onClick={this.handleOpen}>add</button>
//                         <button>view</button>
//                     </span>
//                 </div>
//             </div>
//         );
//     }
// }