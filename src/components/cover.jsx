import React, { Component } from 'react';
import './cover.css';

class Cover extends Component {
    state = {  }
    render() { 
        return (  
            <div className="min-vh-100 min-vw-100" id="main_cover">
                <div className="d-flex justify-content-center">
                    <div className="ft-5" id="cover-title">Pip's Factory</div>
                </div>
            </div>
        );
    }
}
 
export default Cover;
