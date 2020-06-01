import  React from 'react';
import { Popup, Icon } from 'zarm';
import  styles from './index.less';

export default function ({ visible, onClose }) {
    return (
        <Popup
            visible={visible}
            direction="center"
            width="90%"
        >
            <div className={styles.popup}>
                <div className={styles.top}>
                  <div className={styles.noticeContent}>
                     <div >
                       <span >1.</span>盎司一起会员有金卡、白金卡、钻石卡3个等级，每个等级享受的折扣权益不同
                     </div>
                     <div >
                       <span >2.</span>会员折扣购买额度用完，可继续享受平台折扣价格，折扣以页面展示为准
                     </div>
                     <div >
                       <span >3.</span>视频类、音乐类商品会员价一般在5-9折不等，具体以页面展示为准，平台有权根据自身业务发展需要调整全部或部分会员权益
                     </div>
                     <div >
                       <span >4.</span>已经是会员的用户，有效期内继续购买/升级会员，有效期将累加延长
                     </div>
                     <div >
                       <span >5.</span>部分秒杀活动只有会员才能参加，会员独享权益将不断扩展
                     </div>
                     <div >
                       <span >6.</span>会员可享受一对一专属客服服务，微信搜索关注：盎司一起 公众号，在对话框输入文字即可联系在线客服
                     </div>
                     <div >
                       <span >7.</span>温馨提示：会员卡为特殊商品，一旦购买即时生效，概不退换
                     </div>
                  </div>
                </div>
                <div className={styles.bottom}>
                    <div  className={styles.icon} onClick={()=> onClose(false)}>我知道了</div>
                </div>
            </div>
        </Popup>
    )
}