import { useState } from "react";
import exampleData from "./example-data";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
}

export default App;
