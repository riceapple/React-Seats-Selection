import React, { useReducer } from 'react';
import { paymentAmount } from '@/utils/ants';

import SpecItem from '../SpecItem';
import './index.less';

export default function SpecGroup(props) {
  // const data = [{
  //   name: 'VIP月卡',
  //   cornerMark: '5-10元',
  //   price: 15,
  //   membershipPrice: 12,
  // }, {
  //   name: 'VIP季卡',
  //   // cornerMark: '8-10元可提现红包',
  //   cornerMark: '8-10元红包',
  //   price: 45,
  //   membershipPrice: 36.55,
  // }, {
  //   name: 'VIP季卡',
  //   cornerMark: null,
  //   price: 45,
  //   membershipPrice: 36.55,
  // }];
  const data = props.dataSource || [];
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    active: 0,
  })
  // console.log('[29] index.jsx: ', props);
  return (
    <div className="spec-group">
      {data.map((item, idx) => {
        const payPrice = paymentAmount(item, props.isVIP, props.isOpenVIP);
        // console.log('[33] index.jsx: ', payPrice);
        return (
          <SpecItem
            key={idx}
            index={idx}
            column={props.column}
            active={state.active === idx}
            onChange={e => setState({ active: e })}
            name={item.name}
            payPrice={payPrice.price}
            price={item.price}
            subText={item.bottomCornerMark}
          />
        )
      })}
    </div>
  );
}