import React, { Component } from 'react';
class ComponentB extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {this.props.result}
                {this.props.result && (
                    <input type="submit" onClick={this.props.handleAlert}
                    style={{backgroundColor:'#0693cd', borderRadius:'5px',marginLeft:'110px',color:'#fff',padding:'4px',
                width:'60px'}} />
                )}
            </div>
         );
    }
}
 
export default ComponentB;