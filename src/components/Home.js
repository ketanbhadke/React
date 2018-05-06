import React from 'react';

export class Home extends React.Component {

    constructor(props){
        super();
        // this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLink
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        },3000);
    }

    onChangeLinkName(){
        this.props.changeLink(this.state.homeLink);
    }
    
    onMakeMeOlder(){
        // this.age += 3;
        // console.log(this.age);
        this.setState ({
            age : this.state.age + 3
        })
    }

    onChangeLinkEvent(event) {
        this.setState({
            homeLink : event.target.value
        })
    }

    render() {
        // let content = "";
        // if(true) {
        //     content = <p>Hello K10</p>;
        // }
        console.log(this.props);
        return (
            <div>
                <p>In a new Component!</p>
                {/* <p>Your name is : {this.props.name}, age is {this.props.age}</p> */}
                {/* <p>Your name is : {this.props.name}, age is {this.age}</p> */}
                <p>Your name is : {this.props.name}, age is {this.state.age}</p>
                <p>User Object : Name {this.props.user.name}</p>
                <p>Ststus : {this.state.status}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                {/* {content}
                {2+3==5 ? "Ok":"Not ok"} */}
                {this.props.children}

                {/* <button onClick={this.onMakeMeOlder.bind(this)}  className="btn btn-primary">Make me Older</button> */}
                {/* or use below one ... both are same */}
                <button onClick={() => (this.onMakeMeOlder())}  className="btn btn-primary">Make me Older</button>
                <hr/>
                <button onClick={this.props.greet}  className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => (this.onChangeLinkEvent(event))}/>
                <button onClick={this.onChangeLinkName.bind(this)} className="btn btn-primary">CallParentFuncForChangeLink</button>
                                
            </div>
        );
    }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object
// };