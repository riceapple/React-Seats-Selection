import React, { useState, useCallback } from 'react';
import { connect } from 'dva';
// import styles from './style/index.less';
import { district, provinceLite } from 'antd-mobile-demo-data';

import { Picker, List } from 'antd-mobile'

const picker = (props) => {
    // const [num, setNum] = useState([])

    // const getSiteHandler = useCallback((e) => {
    //     setNum(e.slice())
    //     // result = e.slice()
    // }, [])

    // const data = site(20);
    // // const data = site
    debugger
    console.log(JSON.stringify(district));
    return (
        <div >
            <Picker extra="请选择(可选)"
                data={district}
                title="Areas"
                // {...getFieldProps('district', {
                //     initialValue: ['340000', '341500', '341502'],
                // })}
                onOk={e => console.log('ok', e)}
                onDismiss={e => console.log('dismiss', e)}
            >
                <List.Item arrow="horizontal">Multiple & cascader</List.Item>
            </Picker>
        </div>
    )
}

// export default connect(state => ({
//     card: state.card,
//     user: state.user
// }))(Movie);
export default picker