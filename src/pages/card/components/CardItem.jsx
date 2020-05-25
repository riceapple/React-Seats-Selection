/**
 * CardItem
 * state: used: '已使用',
    notime: '已过期',
    pay: '充值中' ,
    willnotime:'即将过期',
    fail: '充值失败',
    willused: '待生效',
    normal: ''
   btnTitle   按钮文字
   btnClick   按钮click
 */
import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './CardItem.less';

const itemState = {
    used: '已使用',
    notime: '已过期',
    pay: '充值中' ,
    willnotime:'即将过期',
    fail: '充值失败',
    willused: '待生效',
    normal: ''
}

const cardItem = (props) => {
    // const border = props.border
    // const state = props.state
    // const btnTitle = props.btnTitle
    // const btnClick = props.btnClick
    debugger
    const {border, state, btnTitle, btnClick} = props
    const {title, retitle, time } =  props.data
    return (
        <div className={`${styles.cardItem} ${styles[state]} ${border ? styles.border : ''}`}
            alt={itemState[state]}
        >
            {btnTitle ? (
                <div className={styles.box2col}>
                    <div onClick={(e) => btnClick(e)}>
                        <div>{title}</div>
                        <div>{retitle}</div>
                        <div>有效期至:{time}</div>
                    </div>
                    <div>
                        <div className={styles.yelloBtn} onClick={(e) => btnClick(e)}>{btnTitle}</div>
                    </div>
                </div>
            ) : (
                <div className={styles.box}  onClick={(e) => btnClick(e)}>
                    <div>{title}</div>
                    <div>{retitle}</div>
                    <div>有效期至:{time}</div>
                </div>
            ) }
            
        </div>
    )
}
export default React.memo(cardItem)