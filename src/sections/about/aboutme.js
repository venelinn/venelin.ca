import React from "react"


const Aboutme = () => (
  <div className="grid grid--about">
    <div className="about__intro">
      <p>My name is Venelin Nikolov. I'm Frond-end and UX/UI developer from Montreal, Canada.</p>
      <p>I'm developing the front end look & feel of the web sites. Also I'm web-standards advocate and an outstanding grip on the inner workings of the W3C guidelines, not to mention my unnatural obsession with Website performance and optimization, Modular CSS, HTML/5 and the list continues. I'm the glue between design and usability and I'm always ready for new challenges including new ideas and innovations.</p>
      <h4><strong>Technologies and Philosophy</strong></h4>
      <p>My expertise and interest lies in front-end technologies, including HTML/5, CSS/3, JavaScript (as well as frameworks like VueJs, GatsbyJs, jQuery, and Angular).</p>
      <p>My philosophy on learning to use web technologies is always the same: experiment, fail, fix, fail again, fix again. You should spend time with your debugger, experimenting away with whichever technology you need to learn. Always keep an open mind, use tools you wouldn't usually use, and never give up.</p>

      <h4><strong>Spare Time</strong></h4>
      <p>When not buried in my text editor, I enjoy watching movies on Netflix, playing ping-pong and spending time with my family. I spend much of my weekends watching Formula 1, cheering on the Ferrari and laughing at the misfortunes of McLaren and Red Bull. If you want to hear my real opinion on things, throw a beer bottle at me.</p>
      <p><strong>I not only develop websites but I also design them!</strong></p>
    </div>
  </div>
)
export default Aboutme


// class Aboutme extends React.Component {
//   render({data}) {
//     const ab = data.contentfulRichText
//     return (
//       <>
//         {ab.html}
//       </>
//     )
//   }
// }

// export default Aboutme

// Aboutme.PropTypes = {
//   data: PropTypes.object
// }

// export const query = graphql`
//   query AboutQuery {
//     contentfulRichText {
//       html
//     }
//   }
// `