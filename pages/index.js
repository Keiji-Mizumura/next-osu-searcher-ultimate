import { Fragment} from 'react'

import Link from 'next/link'

import Head from 'next/head'
import Container from '../components/ui/Containers/Container'
import Footer from '../components/layout/Footer/Footer'
import Hero from '../components/layout/Hero/Hero'

const Home = () => {
  
  
  return (
    <Fragment>
      <Head>
        <title>osu! Searcher Ultimate - Home</title>
        <link rel="icon" href="https://osu.ppy.sh/assets/images/osu-logo-white.59d385da.svg" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />

      <Container>
        <div style={{color: 'white'}}>
          <Link href={'/player'}>
            <a style={{fontSize: "1.5em", fontWeight: 700, color: "var(--osu-pinkest)", display: "block", textAlign: "center"}}>
              SEARCH NOW! (TEMPORARY LINK)
            </a>
          </Link>
          <br/><br/>
          <h1 style={{textAlign: "center"}}>BE A GOOD DEVELOPER AND CONTRIBUTE TO THIS REPOSITORY</h1> <br />
          <p style={{textAlign: "center"}}>Contribute by going to <a href="https://github.com/Keiji-Mizumura/next-osu-searcher-ultimate">Github</a> or by sending me HTML and CSS files :D</p>
          <p style={{textAlign: "center"}}>Created using <a href="https://reactjs.org/">REACT</a> and <a href="https://nextjs.org/">Next.js</a>.</p>
          <p style={{textAlign: "center"}}>Read the DOCS and learn the basics to get started.</p>
          <br/>
          <p style={{textAlign: "center"}}>THIS PAGE IS STILL TEMPORARY!</p>

          <p style={{textAlign: "center"}}>TEST ADD</p>
          
        </div>
      </Container>

      <Footer />

    </Fragment>
  )
}

export default Home
