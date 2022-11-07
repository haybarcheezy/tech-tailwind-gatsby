import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
import Newsletter from "../components/newsletter";
import ServicesAlt from "../components/servicesalt";
import Contact from "../components/contact";
import Quote from "../components/quote";
import LogoCloud from "../components/logocloud"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Westchase Associates`, `Westchase Consulting`, `Technology Consulting`, `Houston Texas Consultants`]}
        title="Home"
      />
      <Hero />
      <LogoCloud />
      <ServicesAlt />
      <Quote />
      <Newsletter />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
