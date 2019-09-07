import React from "react";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    toSecond=e => {
        console.log(this.props);
        window.location.href="#/second?id=1";
    };

    render() {
        return (
            <div>
                <button style={{
                    backgroundColor :'red',
                    border:'none',
                    color : "white",
                }} onClick={this.toSecond}>跳转</button>
            </div>
        )
    }
}
export default Home;