import exampleData from "../../example-data";
import trashIcon from "../../assets/trash.svg";
function TemplateLoader({ setPersonalInfo, setSections }) {
  const clearResume = () => {
    setPersonalInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      about: "",
    });

    setSections({
      educations: [],
      experiences: [],
    });
  };

  const loadExample = () => {
    setPersonalInfo(exampleData.personalInfo);
    setSections(exampleData.sections);
  };
  return (
    <div className="template-loader">
      <button onClick={clearResume} className="clear-resume">
        <img src={trashIcon} alt="" />
        Clear Resume
      </button>
      <button onClick={loadExample} className="load-example">
        Load Example
      </button>
    </div>
  );
}

export default TemplateLoader;
