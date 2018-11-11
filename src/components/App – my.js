import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ReadWrite from './ReadWrite';




// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.setState ={
//       count: 0
//     };
//   }
 
//   handleSubmit(e) {
//     this.setState.count = this.setState.count + 1;
//     // alert('мій текст: ' + this.input.value + this.setState.count);
//     console.log('---', this.input.value, this.setState.count)
//     e.preventDefault();
//   }
  
//   render() {
    
//     return (
//       <div className="Container">
      
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={(input) => this.input = input} />
//         </label>
//         <button onClick ={this.handleSubmit} type="submit" value="Submit">Надіслати</button>
//       </form>
//       <div>
//       {this.setState.count}
//       {this.setState.value}
//       </div>
      
//       </div>
//     );
//   }
// }
// export default App;

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      shareholders: [{ task: '', name:''  }],
      TaskMin: '',
      count: 0,
    };

  }
  
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
    
  }
  
  handleShareholderNameChange = (idx) => (event) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: event.target.value };
    });
    
    this.setState({ shareholders: newShareholders });
  }
  
  handleSubmit = (event) => {
    const { name, shareholders } = this.state;
    event.preventDefault(); 
    
    alert(`Завдання: ${name} , складові ${shareholders.length} , ${this.state.shareholders.name}`);
    console.log("----", name , shareholders.length, shareholders.name)
    
  }
  
  handleAddShareholder = () => {
    this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
  }
  
  handleRemoveShareholder = (idx) => () => {
      this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
  
  
  }


  render() {    
    return (
      <div className="Container">
      <form className="jumbotron" onSubmit={this.handleSubmit}>
        <h4>Назва завдання</h4>
        <input required
          type="text"
          name="MaxTask"
          tabIndex="1"
          placeholder="Купити продукти, зремонтувати телевізор і т.д."
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      
        <h4>Складові завдання</h4>
      
        {this.state.shareholders.map((shareholder, idx) => (
          <div>
          <div className="shareholder">
            <input
              type="text"
              name="MinTask"
              tabIndex="2"
              placeholder={`Завдання #${idx + 1}`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            
          </div>
          <button type="button" tabIndex="20" onClick={this.handleAddShareholder} className="small">Додати завдання</button>
          <button type="button" tabIndex="30" onClick={this.handleRemoveShareholder(idx)} className="small">Видалити завдання</button>
          </div>
        ))}
        
        <button tabIndex="50" onClick={this.handleCLick}>Внести</button>
        
      </form>
          <ReadWrite />

      </div>//це закриваючий один елемент для виводу
    )
    
  }
}

export default App