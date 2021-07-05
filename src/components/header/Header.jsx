import React from 'react';
import './header.css';
import { Dehaze, Tune, LocalMall } from '@material-ui/icons';
import { useCart } from "../../CartContext/Cart";
import { Link } from "react-router-dom";

function Header() {

    const items = useCart();
    const totalQuantiy = items.reduce((total, b) => total + (b.quantity), 0);

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="topbarIconContainer">
                        <Dehaze />
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Tune />
                    </div>
                    <div className="topbarIconContainer">
                        <LocalMall />
                        <Link className="topIconBadge" to='/mycart'>{totalQuantiy}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
