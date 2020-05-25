/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import SwitchAccount from '@/components/SwitchAccount';

export default function DirectPage(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n}), {
    isOpenVIP: false,
    specIndex: 0,
    specInfo: {},
    account: '',
    accountType: null,
  });

  useEffect(() => {
    props.onChange && props.onChange(state)
  }, [state])

  const handleSpec = (specData) => {
    setState({ ...specData })
  }
  const handleAccount = (e) => {
    setState({
      account: e.account,
      accountType: e.accountType,
    })
  }

  // console.log('[29] index.jsx: ', props.productSpecItems);

  return (
    <div>
      {/* tabKey-{props.tabKey} */}
      <SwitchAccount
        onChange={handleAccount}
        accountTypeList={props.accountTypeList}
      />
      <SpecAndVIP
        dataSource={props.productSpecItems}
        isVIP={props.isVIP}
        onOpenVIP={props.onOpenVIP}
        onChange={handleSpec}
      />
    </div>
  );
}