import { Fragment} from 'react'

import Link from 'next/link'

import Head from 'next/head'
import Container from '../components/ui/Container'

const Home = () => {
  
  
  return (
    <Fragment>
      <Head>
        <title>osu! Searcher Ultimate - Home</title>
        <link rel="icon" href="https://osu.ppy.sh/assets/images/osu-logo-white.59d385da.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  
      <Container>
        <div style={{color: 'white'}}>
          <h1>BE NICE AND HELP ME DEVELOP A LANDING PAGE</h1>
          <p>Contribute by going to <a href="https://github.com/Keiji-Mizumura/next-osu-searcher-ultimate">Github</a> or by sending me HTML and CSS files :D</p>
          <p>I used <a href="https://reactjs.org/">REACT</a> and <a href="https://nextjs.org/">Next.js</a> for this project.</p>
          <p>Just learn the basics of react and you are good to help :D</p>
          <br/><br/><br/><br/><br/>
          <Link href={'/player'}>
          <a>
            SEARCH NOW! (TEMPORARY LINK)
          </a>
          </Link>
        </div>
      </Container>

    </Fragment>
  )
}

export default Home
