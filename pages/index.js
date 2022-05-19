import Head from 'next/head'
import { Contact } from '../components/Contact';
import { Header } from '../components/Header'
import { Hero } from '../components/Hero';
import { Services } from '../components/Services'
import { Work } from '../components/Work';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jopt05 | Web Developer</title>
        <meta name="description" content="Jopt05 portfolio" />
        <link rel="icon" href="/images/imgs/loader.svg" />
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
