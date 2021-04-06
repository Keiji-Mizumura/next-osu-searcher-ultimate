import { Fragment} from 'react'

import Link from 'next/link'

import Head from 'next/head'

const Home = () => {
  
  
  return (
    <Fragment>
      <Head>
        <title>osu! Searcher Ultimate - Home</title>
        <link rel="icon" href="https://osu.ppy.sh/assets/images/osu-logo-white.59d385da.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <input type='text' />
  
      <Link href={'/player'}>
        <a>
          SEARCH NOW!
        </a>
      </Link>

    </Fragment>
  )
}

export default Home
