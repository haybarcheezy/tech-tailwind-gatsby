import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ResourcesTitlebar from "../components/resourcestitlebar";
import ServicesDescription from "../components/servicesdescription";
import ServicesAlt from "../components/servicesalt"

function ResourcesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `consulting`, `react`, `tailwindcss`]}
        title="resources"
      />
      <ResourcesTitlebar />
      <ServicesDescription />
      <ServicesAlt />
    </Layout>
  );
}

export default ResourcesPage;
