import { globalActions } from './slice';
import { takeLatest } from 'redux-saga/effects';

function* requestWalletConnection() {
  try {
    // @ts-ignore
    const res = yield window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log({ res });
  } catch (error) {
    console.log(error);
  }
}

export function* globalSaga() {
  yield takeLatest(
    globalActions.requestWalletConnection,
    requestWalletConnection
  );
}
