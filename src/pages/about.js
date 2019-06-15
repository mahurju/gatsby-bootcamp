import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
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
