import React, { Component, useState } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {

    return (
      <div className='resume-color'>
        <div className='resume-pdf-viewer'>
          <Document
            file="/resume_april_1_2020.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={1} width={600} />
          </Document>
        </div>
      </div>
    );
  }
}



// class Resume extends Component {
//     render() {
//         return(
//           <p>Open a PDF file
//             <iframe src="../resume_april_1_2020.pdf">

//             </iframe>
//           </p>
//         )
//     }
// }

            // <div>
            //     <Grid className="resume-grid">
            //     <Cell col={4} className="resume-left-col">
            //         <h2>Rafael Fueyo-Gomez</h2> 
            //         <h4>Software Engineer</h4>
            //         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            //         <p>Backend/Fullstack Engineer. Graduated Caltech in 2019 with a BS in CS. 
            //             Internships at Tinder, JPL, and Caltech. Worked at the startup WanderJaunt. 
            //             Looking for the next opportunity to create products and learn along the way!</p>
            //         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            //         <h5>Address</h5>
            //         <p>1 Hacker Way Menlo Park, 94025</p>
            //         <h5>Phone</h5>
            //         <p>(123) 456-7890</p>
            //         <h5>Email</h5>
            //         <p>someone@example.com</p>
            //         <h5>Web</h5>
            //         <p>mywebsite.com</p>
            //         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            //     </Cell>
            //     <Cell className="resume-right-col" col={11}>
            //         <h2>Education</h2>


            //         <Education
            //         startYear={2002}
            //         endYear={2006}
            //         schoolName="My University"
            //         schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            //         />

            //         <Education
            //             startYear={2007}
            //             endYear={2009}
            //             schoolName="My 2nd University"
            //             schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            //             />
            //             <hr style={{borderTop: '3px solid #e22947'}} />

            //         <h2>Experience</h2>

            //         <Experience
            //         startYear={2009}
            //         endYear={2012}
            //         jobName="First Job"
            //         jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            //         />

            //         <Experience
            //             startYear={2012}
            //             endYear={2016}
            //             jobName="Second Job"
            //             jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            //             />
            //         <hr style={{borderTop: '3px solid #e22947'}} />
            //         <h2>Skills</h2>
            //         <Skills
            //             skill="javascript"
            //             progress={100}
            //             />
            //             <Skills
            //             skill="HTML/CSS"
            //             progress={80}
            //             />
            //             <Skills
            //                 skill="NodeJS"
            //                 progress={50}
            //                 />
            //                 <Skills
            //                 skill="React"
            //                 progress={25}
            //                 />


            //     </Cell>
            //     </Grid>
            // </div>
//         )
//     }
// }

export default Resume;