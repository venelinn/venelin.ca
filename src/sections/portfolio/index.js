import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import Section from "../../components/Section";
//import ImageGrid from "../../components/ImageGrid";

import "./portfolio.scss"

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        allPortfolioJson {
          edges {
            node {
              name
              url
              types
            }
          }
        }
      }
    `}
    render={ data => (
      <Section
        className="portfolio"
        title="Portfolio"
        description="Check Out Some of My Works"
        >
      <div>
        {/* {data.allPortfolioJson.edges.map( node => (
         <div>{node.name}</div>
        ))} */}
        <ul className="about__info-list">asdasdas</ul>
      </div>
      </Section>
    )}
  />
)

console.log(Portfolio);

export default Portfolio

// const IndexPortfolio = ({ data, props }) => (
//   <Section
//     className="portfolio"
//     title="Portfolio"
// 		description="Check Out Some of My Works"
//     >

//     <div className="portfolio-content">
//       {data.props.allPortfolioJson.edges.map( node => (
//         <div>{node.name}</div>
//       ))}
//     </div>
//   </Section>
// );

// export default PortfolioIndex

// class IndexPortfolio extends React.Component {
//   render() {
//     //console.log(this.data);
//     return (
//       <Section
//         className="portfolio"
//         title="Portfolio"
//         description="Check Out Some of My Works"
//         >

//           {/* {sections.map(({ node: section }) => (
//             <div key={section.id} name={section.name}>
//               <div key={section.id} />
//             </div>
//           ))} */}
//       </Section>
//     )
//   }
// }


