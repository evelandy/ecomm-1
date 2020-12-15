import React from 'react';

export default function Cart() {
    showCart = () => {
        fetch('http://127.0.0.1:5000/api/v1/cart')
        .then((res) => {
            let data = res.json();
            return data;
        })
        .then((data) => {
            console.log(data)
        })
    }
    return (
        <div>
            Cart
        </div>
    );
}
