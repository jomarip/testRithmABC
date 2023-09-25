import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListOfNFTs } from './components/list';
import { useConnect } from 'wagmi';
import { metamaskConnector } from '../global/utils/connector';

export const HomePage=()=> {
  const { t } = useTranslation();


  return (
    <>
    <ListOfNFTs />
    </>
  );
}
