import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Educations from "./Educations";
import Experiences from "./Experiences";
import "../../styles/content.scss";

function Content(props) {
  const [activeContent, setActiveContent] = useState("personal-details");

  return (
    <div className="content">
      <PersonalDetails
        {...props}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <Educations
        {...props}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <Experiences
        {...props}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </div>
  );
}

export default Content;
