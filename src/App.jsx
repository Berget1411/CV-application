import { useState } from "react";
import exampleData from "./example-data";
import ResumeDisplay from "./components/ResumeDisplay";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);

  return (
    <div className="app">
      <div className="edit"></div>
      <ResumeDisplay personalInfo={personalInfo} sections={sections} />
    </div>
  );
}

export default App;
