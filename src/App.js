import React from 'react';
import './App.css';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result:'',
      parsedText:''
     }
  }
  handleTextArea = () =>{
    var texts = document.getElementById('tarea').value
    var parsed = JSON.parse(texts)
    this.setState({parsedText:parsed})
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
        this.setState({result:result})
  }

  handleAlert = (e) =>{
    e.preventDefault();
    const texts = []
    this.state.parsedText.map((ele, index) =>{
        const text= document.getElementById(`${ele.type}-${index}`).value
        texts.push(text)
        document.getElementById(`${ele.type}-${index}`).value = ''
    })
    alert(texts)
    }

  render() { 
    return (
      <div className="App" style={{display:'flex', justifyContent:'space-evenly'}}> 
      <ComponentA handleSubmit={this.handleTextArea}/>
      <ComponentB result={this.state.result} handleAlert={this.handleAlert}/>
    </div>
      );
  }
}
 
export default App;

