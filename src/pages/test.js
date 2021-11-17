import React from 'react';
import { graphql } from "gatsby"; // this is graphql using page query

// export const test = () => { // gatsby fails with named exports
const test = ({ data }) => {
    const author = data.site.info.author;
    return (
        <div>
            author: {author}
        </div>
    );
};

export const data = graphql`
{
    site {
      buildTime
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
// even if you use named exports, always add an extra default export to the file
export default test;