import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
  state = {
    data: [{
      id: 1,
      name: 'Sasha',
      description: 'Police',
      priority: 4
    },
      {
        id: 2,
        name: 'Petr',
        description: 'Fireman',
        priority: 1
      },
      {
        id: 3,
        name: 'Vera',
        description: 'Doctor',
        priority: 3
      },
      {
        id: 4,
        name: 'Olga',
        description: 'Farm',
        priority:2
      }
    ],
    sortResult: true
  };

  handleSortName = () =>{
    let newData = this.state.data.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    this.setState({
      sortResult: !this.state.sortResult,
      data: newData
    })
  };
  handleSortPriority=()=>{
    let newData = this.state.data.sort((a, b) => {
      if (this.state.sortResult) {
        return a.priority - b.priority;
      }
    });
    this.setState({
      sortResult: !this.state.sortResult,
      data: newData
    })
  };

  render(){
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
          <div className="section_btn">
            <div>
              <button className="btn_primary" onClick={this.handleSortName}> Sort by name</button>
            </div>
            <div>
              <button className="btn_primary" onClick={this.handleSortPriority}> Sort by Priority</button>
            </div>
          </div>
          <ul>
            {this.state.data.map(function(item, i){
              return <li key={i}>{"id: " + item.id} {"name: " + item.name} {item.description} {item.priority}</li>
            })}
          </ul>
        </div>
    );
  }
}

export default App;
