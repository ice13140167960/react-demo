import React from "react";

class Second extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props.history);
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Second;