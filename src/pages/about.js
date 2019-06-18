import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <p>
          I am currently working
          <a className="link" href="http://naver.com" target="_blank">
            Naver
          </a>
        </p>
        <p>
          <Link to="/contact">Contact Me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
