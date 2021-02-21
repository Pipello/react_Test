import React, { Component } from 'react';
import './cover.css';
import './global.css';

class Cover extends Component {
    state = { 
    }
    render() { 
        return (  
            <div className="min-vh-100 min-vw-100" id="main_cover">
                <div className="d-flex f-column justify-content-center top-1">
                    <div className="ft-5" id="cover-title">Pip's Factory</div>
                    <div className="d-flex justify-content-center">
                        <input class="form-control1 m-1 mw-50" id="search-bar" type="search" placeholder="Search..." aria-label="Search"></input>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Cover;
