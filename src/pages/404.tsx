import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { BgSection } from "../components/sections";
import { Layout } from "../components/layout";
import { HelmetWrapper } from "../components/helmet-wrapper";

const PageMeta = () => (
  <HelmetWrapper
    title="Raini.dev | 404"
    description="Sorry, the page you are trying to access is not there."
    url="https://raini.dev/404"
  />
);

const NotFound = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing-spot.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <PageMeta />
      <BgSection
        Tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
        padding="12rem 5rem"
      >
        <h1>Sorry, the page you are trying to access is not there.</h1>
      </BgSection>
    </Layout>
  );
};

export default NotFound;