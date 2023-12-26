import { useState } from "react";
import exampleData from "./example-data";
import ResumeDisplay from "./components/ResumeDisplay";
import Edit from "./components/edit/Edit";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [customizes, setCustomizes] = useState({
    layout: "top",
    color: "#0891b2",
    font: "",
  });

  return (
    <div className="app">
      <Edit
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        sections={sections}
        setSections={setSections}
      />
      <ResumeDisplay
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        sections={sections}
        setSections={setSections}
      />
    </div>
  );
}

export default App;
