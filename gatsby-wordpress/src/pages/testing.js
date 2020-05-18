import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Testing extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
            <SEO title="testing" />
            <h4>Posts</h4>
            {this.props.data.allWordpressPost.edges.map(({ node }) => (
                node.categories[0].name === 'swe' ?
                <div>
                <p>{node.id}</p>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
                : <div>uwu</div>
            ))}
            </Layout>
        );
    }
}


export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          id
          categories {
            name
          }
        }
      }
    }
  }`

  export default Testing;

