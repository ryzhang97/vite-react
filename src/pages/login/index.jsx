import React from 'react';
import {Input, Button} from 'antd';

const Page = () => {
    return (
        <div>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button type="primary" block>login</Button>
        </div>
    );
};

export default Page;
