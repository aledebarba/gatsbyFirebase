import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BasePageName = () => (
  <Layout>
    <SEO title="BasePageName" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello</h1>
    <p>This is a basic page template</p>
    <p>This page name is BasePageName.</p>
  </Layout>
)

export default BasePageName
