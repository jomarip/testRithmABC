import { BoundedNfts } from './containers/boundedNFTS';
import { HomePage } from './containers/home';
import { IRoute } from './interfaces';
export enum AppPages {
  Home = '/',
  BoundedNfts = '/bounded-nfts',
}
export const routes: Array<IRoute> = [
  {
    key: 'home',
    title: 'Home',
    path: AppPages.Home,
    enabled: true,
    component: HomePage,
  },
  {
    key: 'bounded-nfts',
    title: 'Bounded NFTs',
    path: `${AppPages.BoundedNfts}/:id`,
    enabled: true,
    component: BoundedNfts,
  },
];
