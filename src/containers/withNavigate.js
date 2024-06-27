import React from 'react';
import {useNavigate} from 'react-router-dom';

// 创建一个包含 useNavigate 的函数组件
function withNavigate(WrappedComponent) {
    return function (props) {
        const navigate = useNavigate();

        // 创建一个新的 props 对象，包含 navigate 函数
        const newProps = {
            ...props,
            navigate
        };

        // 将新的 props 传递给 WrappedComponent
        return <WrappedComponent {...newProps} />;
    };
}

export default withNavigate
