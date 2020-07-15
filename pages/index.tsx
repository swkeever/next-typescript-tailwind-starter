import Head from 'next/head';
import Layout from 'components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        Main
      </Layout>
    </>
  );
}
