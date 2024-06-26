import React from 'react';
import {post} from '../../tools/net'

class Page extends React.Component {
    state = {
        message: 'home',
    };

    //挂载前
    constructor(props) {
        super(props);
        console.log("挂载前")
    }

    //挂载后
    componentDidMount() {
        console.log("挂载后")
        post('/custom').then(res => {
            console.log(res.data.message)
            this.state.message = res.data.message
            this.setState(this.state)
        })
    }

    // 是否继续渲染组件
    shouldComponentUpdate(nextProps, nextState) {
        console.log("是否继续渲染组件")
        return true
    }

    // 组件重新渲染后
    componentDidUpdate(prevProps, prevState) {
        console.log("组件重新渲染后")
    }

    //组件即将移除
    componentWillUnmount() {
        console.log('组件即将移除');
    }


    render() {
        return <div>{this.state.message}</div>
    }

}

export default Page
