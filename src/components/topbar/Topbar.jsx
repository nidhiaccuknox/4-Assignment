import React from 'react';
import './topbar.css';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from "react-router-dom";
// import { useLocation } from 'react-router';

function Topbar() {

    // const location = useLocation()
    // const path = location.pathname.split('/')[2];
    // console.log(path);

    const history = useHistory();
    const handleHistory = () => {
       history.goBack();
    }

    return (
        <div className="topbars">
            <div className="topbarWrappers">
                <div className="topLefts">
                    <span className="topbarIconContainers">
                        <ArrowBack className="logoArrow" onClick={handleHistory}/>
                    </span>
                </div>
                <div className="topCenters">
                    <h1>My Cart</h1>
                </div>
            </div>
        </div>
    )
}

export default Topbar
