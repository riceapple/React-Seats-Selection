import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style/active.less';
import top from './img/top.png'
import month from './img/month.png'
import foot from './img/foot.png'
import author from './img/author.png'
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import { isWX } from '@/utils/tools';
import CardPopup from './components/CardPopup'
import {address, store} from './address'
import Item from './components/item'

const Active = () => {
    const [visible, setVisible] = useState(false)
    const openClick = (e) => {
        debugger
    }
    const viewStoreList = (e) => {
        debugger
        setVisible(!visible)
    }
    return (
        <div className = {styles.Active}>
            <img src={top} />
            <img src={month} />
            {
                isWX ? (<img src={card1} />) : (
                    <div>
                        <img src={author} />
                        <div className={styles.storelist} onClick={viewStoreList}>查看门店列表</div>
                        <CardPopup 
                            visible = {visible}
                            CloseClick = {viewStoreList}
                            title = {'泰康拜博门店列表'}
                        >
                            <Item address={address} store={store}/>
                        </CardPopup>
                    </div>
                )
            }
            {
                isWX ? null : (<img src={card2} />)
            }
            <div className = {styles.info}>
                <div className = {styles.title}>活动规则</div>
                <div className = {styles.txt}>
                    每个月1号可以开始使用，当月不用视为过期作废
                    下单后3个商品将发放至订单详情内领取
                    每个月月卡可以直充到不同的账户内
                    上述会员，月月领，月月换每个月最多更换一次
                    视频卡会员是非TV端会员，百度网盘是超级会员
                    加，大礼包内的每个商品的领取截止日（半年）
                </div>
            </div>
            <div onClick={openClick}>
                <img src={foot} />
            </div>
        </div>
    )
}
export default Active