import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
import Newsletter from "../components/newsletter";
import ServicesAlt from "../components/servicesalt";
import Contact from "../components/contact";
import Quote from "../components/quote";
import Blog from "../components/blog";

function IndexPage() {
  
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      <Newsletter />
      <ServicesAlt />
      <Quote />
      <Blog />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
