// 定义一个hooks更新数据
import {useState} from "react";

function useData(initialValue = {}) {
    const [data, setData] = useState(initialValue);
    const dataUpdate = newData => {
        setData(newData);
    }
    return {data, dataUpdate};
}
export default useData
