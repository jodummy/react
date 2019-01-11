import React, { Component } from 'react';

class PhoneFrom extends Component {
    state = {
        name: '',
        phone: '',
    }


    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value //함수가 가진 변수를 수정하는 방식
      
        });
    }

    submit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
    }



    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    name="name"
                    placeholder="이름"
                    onChange={this.change}
                    value={this.state.name} />
                <input
                    name="phone"
                    placeholder="전호번호"
                    onChange={this.change}
                    value={this.state.phone} />
                <button type="submit">버튼 </button>
            </form>
        );
    }
}

export default PhoneFrom;