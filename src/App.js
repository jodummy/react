import React, { Component } from 'react';
import PhoneFrom from './component/PhoneFrom';
import PhoneInfoList from './component/PhoneInfoList';

class App extends Component {
  state = {
    information: []
  }

  id = 0;

  create = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  }


  hanRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return { id, ...data, };
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div>
        <PhoneFrom onCreate={this.create} />
        {/*JSON.stringify(this.state.information)} {배 열 출력문*/}
        <PhoneInfoList data={this.state.information} onRemove={this.hanRemove} onUpdate = {this.handleUpdate}/>

      </div>
    );
  }
}

export default App;
