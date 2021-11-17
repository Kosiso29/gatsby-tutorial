import React from "react";
import { useStaticQuery, graphql } from "gatsby"; // this is graphql using StaticQuery hook
// we can change the 'siteMetadata' to an alias of 'info'
// in order to add the query keyword for writing multiple queries, we might need to run gatsby clean
const getData = graphql`
query {
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

const FetchData = () => {
    const {site: {info: {title, person: {name}}}} = useStaticQuery(getData);
    return (
        <div>
            <h1>hello from fetch data</h1>
            <h2>Name: {name}</h2>
            <h2>Site Title is: {title}</h2>
        </div>
    )
}

export default FetchData;

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         buildTime
//         siteMetadata {
//           author
//           description
//           simpleData
//           title
//           complexData {
//             age
//             name
//           }
//           person {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//     return <div>
//         <h2>{data.site.siteMetadata.person.name}</h2>
//         <div>{data.site.siteMetadata.complexData.map((item, index) => {
//             return (
//                 <p key={index}>
//                     {item.name}:{item.age}
//                 </p>
//             )
//         })}</div>
//     </div>
// }

// export default ComponentName;
