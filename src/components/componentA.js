import React, { Component } from 'react';
class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <div style={{}}>
                <textarea id="tarea" rows={10} cols={44}>
                </textarea><br/>
                <input type="submit" onClick={() => this.props.handleSubmit()}
                style={{backgroundColor:'#0693cd', borderRadius:'5px',color:'#fff',padding:'4px',
                width:'100px'}} />
            </div>
          );
    }
}

export default ComponentA;