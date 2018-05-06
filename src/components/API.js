import React, { Component } from "react";
import ReactDOM from 'react-dom';

export class API extends React.Component {

    constructor(props) {
        super(props);
        this.temp= [];
        this.state = {
            gender: [],
        }
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/?results=500')
        .then(results => {
            return results.json();
        }).then(data => {
            let y = data.results.map((y) => {
                return(y.gender);
             });
            
            // console.log("x "+ x);
            // arr = x;
            this.setState({gender:y});
            // console.log("kt "+ this.state.gender);
        })

        // this.setState({pictures: arr});
        // console.log("state", this.state.pictures);
    }

    render() {
        return (
            <ul>
                        {this.state.gender.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
        );
    }
}