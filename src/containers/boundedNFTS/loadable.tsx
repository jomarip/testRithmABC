/**
 *
 * Asynchronously loads the component for HomaPage
 *
 */
import { LoadingIndicator } from '@/components/loadingIndicator';
import React from 'react';
import { lazyLoad } from 'utils/loadable';

export const BoundedNfts = lazyLoad(
  () => import('./index'),
  (module) => module.BoundedNfts,
  { fallback: <LoadingIndicator fullPageHeight /> }
);
