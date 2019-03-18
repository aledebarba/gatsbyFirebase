import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileForm from "../components/profileForm"

const Profile = () => (
  <Layout>
      <SEO title="Seus dados cadastrados" />
     <h1>Seus dados cadastrados</h1>
     <ProfileForm />
  </Layout>
)

export default Profile