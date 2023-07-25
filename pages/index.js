import Head from 'next/head'
import { Contact } from '../components/home/Contact';
import { Header } from '../components/home/Header'
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services'
import { Work } from '../components/home/Work';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jopt05 | Web Developer</title>
        <meta name="description" content="Jopt05 portfolio" />
        <link rel="icon" href="/images/imgs/item1.png" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </Head>

      <>
        <Header />
        <Hero />
        <Services />
        <Work />
        <Contact />
      </>
    </div>
  )
}
