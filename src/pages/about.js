import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutTitlebar from "../components/abouttitlebar";
import AboutContent from "../components/aboutcontent";
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
      <AboutContent />
      <ServicesAlt />
    </Layout>
  );
}

export default AboutPage;
