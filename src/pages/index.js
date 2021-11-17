import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { ExampleButton } from "../examples/button";
import { StaticImage } from "gatsby-plugin-image";
// import FetchData from "../examples/fetchData";
import AllRecipes from "../components/AllRecipes";

export default function Home() {
  return <Layout>
    
    <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    {/* <h1>Hello World</h1>
    <ExampleButton>Click me</ExampleButton>
    <Link to="/about">about  </Link>
    <Link to="/contact">contact  </Link>
    <Link to="/company">company  </Link>
    <Link to="/testing">testing  </Link> */}
    <a href="/about">Regular Link</a>{/*This will cause a page refresh unlike the gatsby Link*/}
  </Layout>
}
