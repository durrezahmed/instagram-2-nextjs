import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './../components/Header';
import Feed from './../components/Feed';

const Home: NextPage = () => {
  return (
    <div className='h-screen overflow-y-scroll bg-gray-50 scrollbar-hide'>
      <Head>
        <title>Instagram 2.0 | Durrez Ahmed</title>
        <link rel='icon' href='/insta-logo.png' />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
};

export default Home;
