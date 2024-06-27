import React from 'react';
import withNavigate from '@/containers/withNavigate';
import {post} from '@/tools/api'

class Page extends React.Component {
    state = {
        message: 'home', custom: '', test: '',
    }

    //挂载前
    constructor(props) {
        super(props);
        console.log("挂载前")
        console.log(props)

    }

    async getData() {
        let custom = post('/custom')
        let test = post('/test')
        custom = await custom
        test = await test
        return {custom: custom, test}
    }

    //挂载后
    componentDidMount() {
        console.log("挂载后")
        this.getData().then(res => {
            console.log(res)
            this.state.custom = res.custom.data
            this.state.test = res.test.data
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
    handleClick = () => {
        this.props.navigate('/login');
    }

    //组件即将移除
    componentWillUnmount() {
        console.log('组件即将移除');
    }


    render() {
        return <div>
            <div>{this.state.message}</div>
            <div>{this.state.test}</div>
            <div>{this.state.custom}</div>
            <button onClick={this.handleClick}>login</button>
        </div>
    }

}

export default withNavigate(Page)
