import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map( // data 안에 있는 것을 info 안에 전달
            info => (<PhoneInfo onRemove={onRemove} info={info} key={info.id} onUpdate={onUpdate} />) //key값은 고유값을 정해서 업테이트 최적화
            //key값을 잘 정리
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;