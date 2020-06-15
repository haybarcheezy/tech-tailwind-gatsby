import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServicesTitlebar from "../components/servicestitlebar";
import ServicesDescription from "../components/servicesdescription";
import ServicesAlt from "../components/servicesalt"

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `consulting`, `react`, `tailwindcss`]}
        title="services"
      />
      <ServicesTitlebar />
      <ServicesDescription />
      <ServicesAlt />
    </Layout>
  );
}

export default ServicesPage;
