import React, {useEffect} from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import {Input, Button} from 'antd';
import useData from '@/hooks/useData'


const Page = () => {
    const {data, dataUpdate} = useData({openid: ""});
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    let openid = searchParams.get('openid');
    useEffect(() => {
        console.log(openid)
        dataUpdate({openid})
        return () => {
            console.log('Component is unmounting');
        };
    }, []);

    function onLogin() {
        console.log("openid:", openid)
        navigate('/home');
    }

    return (
        <div>
            <Input placeholder="username" value={data.openid}/>
            <Input placeholder="password"/>
            <Button type="primary" block onClick={onLogin}>login</Button>
        </div>
    );
};

export default Page;
