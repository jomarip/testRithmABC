import { runSaga } from '@/store/configureStore';
import { globalSaga } from './global/saga';
import { homeSaga } from './home/saga';

export const runSagas = () => {
  runSaga(globalSaga);
  runSaga(homeSaga);
};
