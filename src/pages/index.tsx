// pages/index.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Tvl from '../components/Tvl';
import Prizes from '../components/Prizes';
import UserBalancesAndChance from '../components/UserInfo';
import Rewards from '../components/Rewards';
import PrizesWon from '../components/PrizesWon';
import Chance from '../components/Chance'
import Image from 'next/image';
import { MyConnect} from '../components/ConnectButton';
import BigWinners from '../components/BigWinners';
import MainPage from '../components/MainPage';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Prize Pool Contract</title>
        <meta content="Prize Pool Contract Information" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="flex flex-col items-center justify-center h-full pt-20 md:pt-5">
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 z-10">
          <div>
            <Image
              src="/images/logo.svg"
              height={70}
              width={70}
              alt="Win Win"
            />
          </div>
          <div>
            <MyConnect connectText="CONNECT" />
          </div>
        </div>
      
        <MainPage />
        <Tvl />
        {/*
        <PrizesWon />
        <Chance /> */}
        <BigWinners />
      </main>
    </div>
  );
};

export default Home;
