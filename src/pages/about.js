import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutTitlebar from "../components/abouttitlebar";
import HomeContent from "../components/homecontent";
import Faqs from "../components/faqs";
import ServicesAlt from "../components/servicesalt"

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <AboutTitlebar />
      <Faqs />
      <HomeContent />
      <ServicesAlt />
    </Layout>
  );
}

export default AboutPage;
