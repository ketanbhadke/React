import React from 'react';


// this component does neeed state , it MAY neded props b ut does not need re-renderiung of the UI / for that matter any change .So can be safely converted 
// to stateless component !
export const Header = (props) => {
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};