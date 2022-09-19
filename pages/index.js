import Head from 'next/head'
import Typewrite from '../components/Typewrite'
import Projects from '../components/Projects'
import ProjectCard from '../components/ProjectCard'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import ContactMe from './ContactMe'
import SideBar from '../components/SideBar'
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="container">
      <div>
        <Head>
          <title>M Geyer Software Dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="page">
          <header className="header">
            <SideBar />
          </header>
          <main className="content">
            <a id="home">
              <h4 className="pre-title"> Howdy! I'm</h4>
              <h1 className="title">Matthew Geyer</h1>
              <div className="typewriter">
                <Typewrite />
              </div>
              <div className="gif-container">
                <img className="gif" src="/Coding-at-desk.gif" />
              </div>
            </a>
            <a id="projects">
              <h3 className="portfolio-title">Projects:</h3>
            </a>
            <AwesomeSlider>
              {Projects.map((project) => (
                <div className="project-card-div" fillParent={true}>
                  <ProjectCard
                    key={project.index}
                    images={project.images}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    url={project.url}
                  />
                </div>
              ))}
            </AwesomeSlider>
            <a id="about">
              <AboutMe />
            </a>
            <a id="resume">
              <Resume className="resume-section" />
            </a>

            <a id="contact">
              <ContactMe />
            </a>
            <div className="skills-wrap">
              <Skills />
            </div>
          </main>
        </div>

        <footer>
          <div className="foot-logo">
            {' '}
            <a href="https://github.com/mattrichor">
              <img src="/icons/skills/linkedin.png"></img>
            </a>
            <a href="https://www.linkedin.com/in/matthew-geyer/">
              <img src="/icons/skills/github.png"></img>
            </a>
          </div>
          Portfolio by Matthew Geyer 💙<br></br>Powered By Next.js
        </footer>
        <style jsx>{`
          .container {
            min-height: 100vh;
            background-color: #f6f3f9;
            justify-content: center;
            align-items: center;
            display: flex;
            justify-content: space-between;
          }

          .gif {
            max-width: 80%;
          }
          .gif-container {
            display: flex;
            justify-content: center;
            margin-top: -15%;
          }
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description,
          .pre-title,
          .typewriter {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #4974a5;
            border-color: #4974a5;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          h1 {
            margin: 0;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </div>
  )
}
