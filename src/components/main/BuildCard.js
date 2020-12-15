import React, {useState} from 'react';
import AddItem from '../modal/AddItem';
import '../styles/builds.css';

export default function BuildCard(props) {
    // const view_cart = () => {
    //     fetch('http://127.0.0.1:5000/api/v1/cart')
    //     .then((res) => {
    //         let data = res.json();
    //         return data;
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    // } 
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setShowModal(!showModal)
    }
    return (
        <div>
            <AddItem close={handleClose} name={props.name} itemId={props.id} type_desc={props.type_desc} price={props.price} src={props.build} show={showModal} />
            <div className="buildCardContainer">
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.type_desc}
                </p>
                <img src={props.build} alt='build'/>
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
