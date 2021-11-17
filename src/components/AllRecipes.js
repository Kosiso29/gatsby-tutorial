import React from 'react';
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";
import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    // const { info: { nodes: { id, title, cookTime, prepTime, content: { tags }, image: { } } } } = useStaticQuery(query);
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipe.nodes;
    // console.log(data.allContentfulRecipe.nodes[0].id);
    return (
        <div className="recipes-container">
            <h4>This is AllRecipes</h4>
            {/* <p>ID: {data.allContentfulRecipe.nodes[0].id}</p>
            <p>Title: {data.allContentfulRecipe.nodes[0].title}</p>
            <p>Cook Time: {data.allContentfulRecipe.nodes[0].cookTime}</p>
            <p>Prep Time: {data.allContentfulRecipe.nodes[0].prepTime}</p>
            <GatsbyImage image={data.allContentfulRecipe.nodes[0].image.gatsbyImageData} /> */}
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </div>
    );
};

export default AllRecipes;