import { BoundedNfts } from './containers/boundedNFTS';
import { HomePage } from './containers/home';
import { IRoute } from './interfaces';
export enum AppPages {
  Home = '/',
}
export const routes: Array<IRoute> = [
  {
    key: 'home-route',
    title: 'Home',
    path: AppPages.Home,
    enabled: true,
    component: HomePage,
  },
  {
    key: 'bounded-nfts',
    title: 'Bounded NFTs',
    path: '/bounded-nfts/:address',
    enabled: true,
    component: BoundedNfts,
  },
];
