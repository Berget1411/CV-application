import educationIcon from "../../assets/education.svg";
import arrowIcon from "../../assets/arrow-down.svg";
import trashIcon from "../../assets/trash.svg";
import { useState } from "react";
import uniqid from "uniqid";

function Educations({
  sections,
  setSections,
  activeContent,
  setActiveContent,
}) {
  const [edit, setEdit] = useState(undefined);
  if (activeContent !== "educations" && edit !== undefined) setEdit(undefined);

  const emptyEducation = {
    degree: "",
    schoolName: "",
    location: "",
    startDate: "",
    endDate: "",
    isCollapsed: false,
    isHidden: false,
    id: uniqid(),
  };
  const currEducation =
    sections.educations.find((e) => e.id === edit) || emptyEducation;

  const addEducationButton = (
    <div className="add-content">
      <button onClick={() => setEdit("add")}>Education</button>
    </div>
  );

  const submitForm = (e) => {
    e.preventDefault();

    if (edit === "add") {
      const educationObj = {
        degree: e.target[1].value,
        schoolName: e.target[0].value,
        location: e.target[4].value,
        startDate: e.target[2].value,
        endDate: e.target[3].value,
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      };
      setSections((prev) => {
        return {
          ...prev,
          educations: prev.educations.concat(educationObj),
        };
      });
    } else {
      const educationObj = {
        ...currEducation,
        degree: e.target[1].value,
        schoolName: e.target[0].value,
        location: e.target[4].value,
        startDate: e.target[2].value,
        endDate: e.target[3].value,
      };
      setSections((prev) => {
        return {
          ...prev,
          educations: [
            ...prev.educations.map((education) => {
              if (education.id === edit) education = educationObj;
              return education;
            }),
          ],
        };
      });
    }
    setEdit(undefined);
  };

  const deleteEducation = (e) => {
    setSections((prev) => {
      return {
        ...prev,
        educations: prev.educations.filter(
          (education) => education.id !== edit
        ),
      };
    });
    setEdit(undefined);
  };

  const form = (
    <form onSubmit={submitForm}>
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        defaultValue={edit !== "add" ? currEducation.schoolName : ""}
        placeholder="Enter school / university"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        defaultValue={edit !== "add" ? currEducation.degree : ""}
        placeholder="Enter Degree / Field Of Study"
      />
      <div className="dates">
        <div>
          {" "}
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="start-date"
            defaultValue={edit !== "add" ? currEducation.startDate : ""}
            placeholder="Enter Start Date"
          />
        </div>
        <div>
          <label htmlFor="end-date">End Date</label>
          <input
            type="text"
            id="end-date"
            defaultValue={edit !== "add" ? currEducation.endDate : ""}
            placeholder="Enter End Date"
          />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        defaultValue={edit !== "add" ? currEducation.location : ""}
        placeholder="Enter Location"
      />

      <div className="buttons">
        <button
          className="delete-button"
          onClick={(e) =>
            edit === "add" ? setEdit(undefined) : deleteEducation(e)
          }
        >
          <img src={trashIcon} alt="" />
          Delete
        </button>
        <div className="right-buttons">
          <button className="cancel-button" onClick={() => setEdit(undefined)}>
            Cancel
          </button>
          <button className="save-button" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );

  const addedEducations = sections.educations.map((education) => {
    return (
      <div className="educations" key={education.id}>
        <h3 onClick={() => setEdit(education.id)}>{education.schoolName}</h3>
      </div>
    );
  });
  return (
    <div className="content-container" id="educations-container">
      <div
        className="content-header"
        onClick={() =>
          activeContent !== "educations"
            ? setActiveContent("educations")
            : setActiveContent("")
        }
      >
        <div>
          <img src={educationIcon} alt="" className="header-icon" />
          <h2>Education</h2>
        </div>
        <img
          src={arrowIcon}
          alt=""
          id="arrow-icon"
          className={activeContent === "educations" ? "arrow-up" : undefined}
        />
      </div>
      <div
        className={
          activeContent === "educations" ? "dropdown active" : "dropdown"
        }
      >
        {edit !== undefined && form}

        {edit === undefined && [addedEducations, addEducationButton]}
      </div>
    </div>
  );
}

export default Educations;
