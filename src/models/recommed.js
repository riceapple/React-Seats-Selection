import * as service from '@/services/banner';

export default {
  namespace: 'recommend',
  state: {
    list: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getBanner({ payload }, { put, call }) {
      const res = yield call(service.getBanners, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { list: data.list || [] },
        });
      }
    }
  }
}