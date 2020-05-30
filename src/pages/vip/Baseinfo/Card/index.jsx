import React, { Fragment } from 'react';
import styles from './index.module.less';

export default ({ info }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-inner']}>
        <div className={styles['name']}>蜜蜂会员白金卡</div>
        <div className={styles['desc']}>全场商品会员价5折起</div>
        {info.todo ? (
          <div className={styles['expireTime']}>{info.todo}到期</div>
        ) : (
          <Fragment>
            <div className={styles['price']}>
              <div className={styles['price-current']}>
                <span className={styles['price-current-value']}>9.9</span>
                <span className={styles['price-current-unit']}>元/年</span>
              </div>
              <span className={styles['price-original']}>原价99元/年</span>
            </div>
            <div className={styles['join']} onClick={() => {}}>
              立即开通
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};