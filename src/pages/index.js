import React, { Component } from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Olá</h1>
        <p>Este é um exemplo de uso de recursos do Firebase</p>
        <p>(para dummies)</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Layout>
      )
  }
}


