import React, { Component } from 'react';
import './task.css'
class TaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:'',
            result: '' ,
          }
    }
    
    handleTextArea = (e) =>{
        this.setState({content:e.target.value})
    }
    handleTextSubmit = (e) =>{
        e.preventDefault();
        this.domMan()
    }

    handleAlert = (e) =>{
        e.preventDefault();
        const texts = []
        var parsed = JSON.parse(this.state.content)
        parsed.map ((ele, index) =>{
            const text= document.getElementById(`${ele.type}-${index}`).value
            texts.push(text)
            document.getElementById(`${ele.type}-${index}`).value = ''
        })
        alert(texts)
        }

    domMan  = () =>{
        var display = document.querySelector('.input-form')
        display.style.display = 'block'
    //    var text =  document.getElementById('tarea').value
    //    console.log(text);
        var parsed = JSON.parse(this.state.content)
        const result = (
            parsed.map((ele, i) => {
                return (
                    <div key={i} className="auto-generated" style={{marginBottom:'10px'}}>
                        <label style={{fontSize:'larger'}} id="label">{ele.label}</label>
                        &nbsp;<input type={ele.type} id={`${ele.type}-${i}`}/>
                    </div>
                );
            })
        )
        this.setState({
            result: result
        })        
    }
    render() { 
        return (
            <div>
            <div className="row">
            <div className="column">
            <textarea id="tarea" rows="10" cols="50"
            value={this.state.content} onChange={this.handleTextArea}
            >
                 </textarea> <br/>
            <input type="submit" onClick={this.handleTextSubmit} className="submit"/>
            </div>
            <div className="column">
            <form className="input-form">
                {this.state.result !== '' && (
                    <>
                    <div>
                        {this.state.result}
                    </div><br/>
                    <input type="submit" className="submit" onClick={this.handleAlert}/>
                    </>
                )}
            </form>
            </div>
                </div>
            </div>
         );
    }
}
 
export default TaskComponent;
// [{"label":"name", "type":"text"},{"label":"age", "type":"text"}]