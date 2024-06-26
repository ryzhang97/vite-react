import React from 'react';

class Page extends React.Component {
    state = {
        message: 'login',
    };

    //挂载前
    constructor(props) {
        super(props);
        console.log("挂载前")
    }

    //挂载后
    componentDidMount() {
        console.log("挂载后")
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
