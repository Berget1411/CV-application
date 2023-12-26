import "../styles/resumeDisplay.scss";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import addressIcon from "../assets/address.svg";
import downloadIcon from "../assets/download.svg";
import { usePDF } from "react-to-pdf";

function Personal({ personalInfo }) {
  return (
    <div className="personal-info">
      <div className="header">
        <h1>{personalInfo.fullName}</h1>
        <ul className="contact">
          <li>
            {personalInfo.email && <img src={emailIcon} alt="" />}
            {personalInfo.email}
          </li>
          <li>
            {personalInfo.phoneNumber && <img src={phoneIcon} alt="" />}
            {personalInfo.phoneNumber}
          </li>
          <li>
            {personalInfo.address && <img src={addressIcon} alt="" />}
            {personalInfo.address}
          </li>
        </ul>
      </div>
      <div className="about">{personalInfo.about}</div>
    </div>
  );
}

function Educations({ sections }) {
  const educations = sections.educations.map((education) => (
    <li key={education.id}>
      <div>
        <p className="location">{education.location}</p>
        <p className="date">
          {education.startDate} - {education.endDate}
        </p>
      </div>
      <div>
        <p className="school-name">{education.schoolName}</p>
        <p className="degree">{education.degree}</p>
      </div>
    </li>
  ));
  return (
    <div className="educations">
      {educations.length > 0 && <h2>Educations</h2>}
      <ul>{educations}</ul>
    </div>
  );
}

function Experiences({ sections }) {
  const experiences = sections.experiences.map((experience) => (
    <li key={experience.id}>
      <div>
        <p className="location">{experience.location}</p>
        <p className="date">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
      <div>
        <p className="company-name">{experience.companyName}</p>
        <p className="position-title">{experience.positionTitle}</p>
        <p className="work-description">{experience.description}</p>
      </div>
    </li>
  ));
  return (
    <div className="experiences">
      {experiences.length > 0 && <h2>Experiences</h2>}
      <ul>{experiences}</ul>
    </div>
  );
}

function ResumeDisplay({ personalInfo, sections }) {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div className="resume-display">
      <div ref={targetRef}>
        <Personal personalInfo={personalInfo} />
        <Educations sections={sections} />
        <Experiences sections={sections} />
      </div>
      <div className="download-container">
        <button className="download" onClick={() => toPDF()}>
          <img src={downloadIcon} alt="" />
          Download
        </button>
      </div>
    </div>
  );
}

export default ResumeDisplay;
