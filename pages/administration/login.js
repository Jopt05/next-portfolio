import Head from 'next/head'
import { Header } from '../../components/login/header';
import { Form } from '../../components/login/form';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Jopt05 | Login</title>
        <meta name="description" content="Login point" />
        <link rel="icon" href="/images/imgs/item1.png" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </Head>

      <>
        <Header />
        <Form />
      </>
    </div>
  )
}
