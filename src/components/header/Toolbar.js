import React from 'react';
import CartMiniModal from '../cart/CartMiniModal';
import '../styles/navbar.css';

export default function Toolbar() {
    return (
        <div className="toolbarContainer">
            <span className="has-text-white-bis	toolbarName">
                PcBuilds.com
            </span>
            <span className="is-flex">
                <input className="input toolbarInput" type="text"></input>
                <button className="button is-link">Search</button>
            </span>
            <span className="toolbarAuthCart">
                <span>
                    sign in
                    <span className="dropdown is-hoverable">
                        <button className="button is-small toolbarDropdown" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </button>
                        <span className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <span className="dropdown-content signInCartDropdown">
                                <p>orders</p>
                                <p>Sign In</p>
                                <p>new? Sign up here</p>
                            </span>
                        </span>
                    </span>
                </span>
                <span>
                    cart
                    <span className="dropdown is-hoverable">
                        <button className="button is-small toolbarDropdown" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </button>
                        <span className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <span className="dropdown-content cartDropdown">
                                <CartMiniModal />
                                {/* <p>Modal</p>
                                <p>with shopping</p>
                                <p>cart</p> */}
                            </span>
                        </span>
                    </span>
                </span>
            </span>
        </div>
    );
}
