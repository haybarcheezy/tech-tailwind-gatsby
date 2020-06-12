import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutTitlebar from "../components/abouttitlebar";
import HomeContent from "../components/homecontent";
import Faqs from "../components/faqs";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <AboutTitlebar />
      <HomeContent />
      <Faqs />
    </Layout>
  );
}

export default AboutPage;
