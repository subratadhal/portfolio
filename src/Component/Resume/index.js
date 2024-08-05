import React, { useEffect } from "react";
import ScrollTop from "../ScrollTop";
import { isMobile } from "react-device-detect";
import PaginationCommon from "../PaginationCommon";
import Heading from "../Heading";

function Resume(props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const linkData = {
    prevLink: "/about",
    prevTitle: "About",
    prevContent: "View resume and download resume from google drive",
    homeLink: "",
    nextLink: "/Contact",
    nextTitle: "Contact",
    nextContent: "See contact information for business",
  };

  return (
    <div className="">
      <Heading title="Resume" type="bw" />
      <section className="cms-pages">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="resume-body">
                {/* <img src="" /> */}
                <h1>Subrata Dhal</h1>
                <p>
                  I have 11 years of experience in visualization,
                  conceptualization, wireframes, project layout, and managing
                  the creative aspects of enterprise-level projects. I
                  specialize in UI/UX design methodologies and prototyping
                  tools, and I have designed applications for desktop, mobile,
                  and tablet platforms. I am skilled in UI development using
                  modern web technologies like React, Next.js, and Angular,
                  along with frameworks such as Materialize UI, Ant Design,
                  Reactstrap, and Bootstrap. I follow Scrum in agile development
                  and am familiar with WordPress development.
                </p>
                <h2>Resposibilities</h2>
                <ul>
                  <li>
                    Visualize user interfaces for readability, understanding,
                    and accessibility.
                  </li>
                  <li>
                    Conceptualize and develop creative assets from inception to
                    completion.
                  </li>
                  <li>
                    Translate business requirements into visually appealing,
                    user-friendly designs.
                  </li>
                  <li>
                    Stay updated on the latest visual design trends and
                    standards.
                  </li>
                  <li>Conduct user research and usability testing.</li>
                  <li>
                    Develop and propose strategic research and design
                    implementation plans.
                  </li>
                </ul>
                <h2>Technical Skills</h2>
                <h3>Ui/Ux Designer:</h3>
                <ul className="tools">
                  <li>
                    <span>User Interface (UI) Design:</span> Wireframing,
                    Prototyping, Visual design, Interaction design, Information
                    architecture.
                  </li>
                  <li>
                    <span>User Experience (UX) Design:</span> User research,
                    Personas, Usability testing, Journey mapping, User flows.
                  </li>
                  <li>
                    <span>Graphic Design Tools:</span> Figma, Canva, Adobe XD,
                    Sketch, Photoshop, Illustrator.
                  </li>
                  <li>
                    <span>Collaboration:</span> Working with cross-functional
                    teams, Communication and presentation skills.
                  </li>
                  <li>
                    <span>Web Design Principles:</span> Responsive design,
                    Accessibility considerations, Typography, Color theory.
                  </li>
                  <li>
                    <span>Prototyping Tools:</span> InVision, Marvel, Proto.io.
                  </li>
                </ul>

                <h3>Ui Developer:</h3>
                <ul className="tools">
                  <li>
                    <span>HTML/CSS:</span> Semantic HTML, CSS preprocessors
                    (Sass, Less), Tailwind CSS, Responsive design techniques.
                  </li>
                  <li>
                    <span>JavaScript:</span> ES6 and beyond, DOM manipulation,
                    AJAX and asynchronous programming.
                  </li>
                  <li>
                    <span>Front-End Frameworks:</span> React.js, Angular,
                    Wordpress.
                  </li>
                  <li>
                    <span>Version Control/Git:</span> Git commands, Branching
                    and merging.
                  </li>
                  <li>
                    <span>Testing and Debugging:</span> Unit testing (Jest,
                    Mocha), Debugging tools.
                  </li>
                  <li>
                    <span>API Integration:</span> Consuming RESTful APIs,
                    Understanding API documentation.
                  </li>
                  <li>
                    <span>Performance Optimization:</span> Page load
                    optimization, Code splitting.
                  </li>
                </ul>
                <h2>Work Experience (11 Years)</h2>
                <p>
                  <strong>Team Lead UI/UX (Present)</strong>
                </p>
                <p>
                  Spineor Web Services Pvt. Ltd.
                  <br />
                  Mohali, India
                </p>
                <p>
                  Lead UI/UX Designer and UI Developer specializing in IT
                  Services and IT Consulting. Optimize SEO strategies, increase
                  website traffic, and enhance user experiences. Translate
                  high-level requirements into seamless interaction flows and
                  tangible design elements.
                </p>
                <h2>Education</h2>
                <p>
                  Bachelor of Fine Arts (BFA) - 2011
                  <br />
                  Indira Kala Sangit Vishwavidyalaya, Khayragarh, Chhattisgarh.
                </p>
                <h2>Certificatees</h2>
                <ul className="certificate">
                  <li>
                    Generative AI Overview for Project Managers{" "}
                    <span>from Project Management Institute (May 2024)</span>
                  </li>
                  <li>
                    Fundamentals of Generative{" "}
                    <span>from Microsoft (May 2024)</span>
                  </li>
                  <li>
                    AI Visual Elements of User Interface Design{" "}
                    <span>from Coursera (Sept 2021)</span>
                  </li>
                  <li>
                    Typography: Hierarchy and Navigation{" "}
                    <span>from Linkedin learning (Nov 2020)</span>
                  </li>
                  <li>
                    Learning to Set Display Type{" "}
                    <span>from Linkedin learning (Nov 2020)</span>
                  </li>
                  <li>
                    Virtual Reality Foundations{" "}
                    <span>from Linkedin learning (Oct 2020)</span>
                  </li>
                  <li>
                    Learning Infographic Design{" "}
                    <span>from Linkedin learning (Oct 2020)</span>
                  </li>
                  <li>
                    Branding for Designers{" "}
                    <span>from Linkedin learning (Oct 2020)</span>
                  </li>
                  <li>
                    React Native Essential Training{" "}
                    <span>from Linkedin learning (Aug 2020)</span>
                  </li>
                  <li>
                    Strategic Thinking{" "}
                    <span>from Linkedin learning (Jul 2020)</span>
                  </li>
                  <li>
                    Transforming Your Organization{" "}
                    <span>from Linkedin learning (Jul 2020)</span>
                  </li>
                  <li>
                    Creating an Agile Culture{" "}
                    <span>from Linkedin learning (Jul 2020)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!isMobile ? <PaginationCommon linkData={linkData} /> : ""}
      <ScrollTop />
    </div>
  );
}

export default Resume;
