import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
    const {allFile: {nodes}} = useStaticQuery(query);
    return (
        <div>
            <Wrapper>
                {nodes.map((image, index) => (
                    <article key={index}>
                        <GatsbyImage image={getImage(image)} alt={`image${index}`} as="div" />
                        <p>{image.name}</p>
                    </article>
                ))}
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
article {
    margin-right: 1rem;
}
div {
    border-radius: 10px;
}
`

export default Gallery;