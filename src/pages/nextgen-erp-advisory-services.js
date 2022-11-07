import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ErpImg from "../images/erp.jpg";
import WorkersImg from "../images/engineers.jpg";
import ServicesAlt from "../components/servicesalt";

function NextGen() {
  return (
    <Layout>
      <SEO
        keywords={[
          `westchase associates`,
          `consulting`,
          `nextgen erp advisory services`,
          `nextgen erp`,
        ]}
        title="NextGen ERP Advisory Services"
      />
      <section
        className="body-font text-gray-700 border-t border-gray-200"
        style={{
          backgroundImage: `url(${WorkersImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-5 py-24 mx-auto mt-6">
          <h1 className="md:leading-9 text-5xl font-extrabold leading-tight text-gray-100">
            NextGen ERP Advisory Services{" "}
          </h1>{" "}
          <div className="w-20 h-2 my-4 bg-blue-400" />
          <h3 className="text-left text-gray-200">
            Simplify managing and large cloud - based applications with
            effecient delivery.{" "}
          </h3>{" "}
        </div>{" "}
      </section>{" "}
      <section className="body-font text-gray-700 border-t border-gray-200">
        <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-300">
          <div className="sm:order-last md:order-last lg:w-1/2 lg:mb-0 order-first w-full mb-10 overflow-hidden rounded-lg">
            <img
              alt="feature"
              className="object-cover object-center w-full h-full"
              src={ErpImg}
            />{" "}
          </div>{" "}
          <div className="lg:py-6 lg:w-1/2 lg:pr-12 flex flex-col flex-wrap -mb-10">
            <div className="flex flex-col flex-wrap w-full mb-2 text-left">
              <h4 className="md: text-md font-bold text-blue-400">
              Simplify managing and large cloud - based applications with
            effecient delivery.{" "}
              </h4>{" "}
              <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
                NextGen ERP Advisory Services{" "}
              </h2>{" "}
            </div>{" "}
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                One of the most important and critical facets for any
                organization is improving its efficiency in order to improve its
                productivity and overall effectiveness.One of the most critical
                yet often overlooked aspects in this regard is managing of large
                cloud - based applications that are connected to internal
                systems.Managing these applications can be a challenge for
                businesses, as such applications are often complex and have wide
                functionalities with multiple features.{" "}
              </p>{" "}
            </div>{" "}
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                No one ever said your cloud transformation would be
                easy.Organizations of all sizes and complexity are implementing
                new applications across their cloud environments.All of them
                want to reap the rewards of reducing costs, increasing agility,
                and improving user experience.But there is a lot to juggle when
                managing complex applications in a multi - cloud environment.{" "}
              </p>{" "}
            </div>{" "}
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                Now, we all know that adopting cloud technology is critical to
                the growth of most businesses.But there is also a way to keep
                multiple cloud applications running in your enterprise to make
                it more efficient.{" "}
              </p>{" "}
            </div>{" "}
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                This paper explores the essential elements and delivery best
                practices for implementing complex, mission - critical
                applications in cloud infrastructures.It looks at how
                application delivery via cloud computing platforms can help IT
                organizations reduce costs and risks while improving quality of
                service for their end users.{" "}
              </p>
            </div>
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                Cloud computing has made delivering software and services both
                faster and more convenient.With the ability to deliver to
                anywhere, any time, organizations are able to offer personalized
                experiences to hundreds of thousands or even millions of
                customers.However, this flexibility is not just for
                consumers.The increased elasticity inherent in cloud computing
                is causing IT departments to rethink their approach to
                delivering enterprise applications.{" "}
              </p>
            </div>
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                Our NextGen ERP Advisory Services helps organizations implement
                or expand upon business software and cloud - based
                applications.In order to gain the full benefits of an investment
                in business software and cloud solutions, it is critical to be
                able to manage and operate the technology efficiently.It’ s not
                enough to simply install the system and turn on the lights;
                processes need to be readily implemented on - the - fly and
                automated during operation on a day - to - day basis.{" "}
              </p>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </section>{" "}
      <ServicesAlt />
    </Layout>
  );
}

export default NextGen;
