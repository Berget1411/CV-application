import experiencesIcon from "../../assets/experiences.svg";
import arrowIcon from "../../assets/arrow-down.svg";
import trashIcon from "../../assets/trash.svg";
import { useState } from "react";
import uniqid from "uniqid";

function Experiences({
  sections,
  setSections,
  activeContent,
  setActiveContent,
}) {
  const [edit, setEdit] = useState(undefined);
  if (activeContent !== "experiences" && edit !== undefined) setEdit(undefined);

  const emptyExperience = {
    companyName: "",
    positionTitle: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
    isCollapsed: true,
    isHidden: false,
    id: uniqid(),
  };
  const currExperience =
    sections.experiences.find((e) => e.id === edit) || emptyExperience;

  const addExperienceButton = (
    <div className="add-content">
      <button onClick={() => setEdit("add")}>Experiences</button>
    </div>
  );

  const submitForm = (e) => {
    e.preventDefault();

    if (edit === "add") {
      const experienceObj = {
        companyName: e.target[0].value,
        positionTitle: e.target[1].value,
        location: e.target[4].value,
        description: e.target[5].value,
        startDate: e.target[2].value,
        endDate: e.target[3].value,
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      };
      setSections((prev) => {
        return {
          ...prev,
          experiences: prev.experiences.concat(experienceObj),
        };
      });
    } else {
      const experienceObj = {
        ...currExperience,
        companyName: e.target[0].value,
        positionTitle: e.target[1].value,
        location: e.target[4].value,
        description: e.target[5].value,
        startDate: e.target[2].value,
        endDate: e.target[3].value,
      };
      setSections((prev) => {
        return {
          ...prev,
          experiences: [
            ...prev.experiences.map((experience) => {
              if (experience.id === edit) experience = experienceObj;
              return experience;
            }),
          ],
        };
      });
    }
    setEdit(undefined);
  };

  const deleteExperience = (e) => {
    const newSections = sections;
    newSections.experiences = newSections.experiences.filter(
      (experience) => experience.id !== edit
    );
    setSections(newSections);
    setEdit(undefined);
  };

  const form = (
    <form onSubmit={submitForm}>
      <label htmlFor="school">Company Name</label>
      <input
        type="text"
        id="school"
        defaultValue={edit !== "add" ? currExperience.companyName : ""}
        placeholder="Enter Company Name"
      />
      <label htmlFor="degree">Position Title</label>
      <input
        type="text"
        id="degree"
        defaultValue={edit !== "add" ? currExperience.positionTitle : ""}
        placeholder="Enter Position Title"
      />
      <div className="dates">
        <div>
          {" "}
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="start-date"
            defaultValue={edit !== "add" ? currExperience.startDate : ""}
            placeholder="Enter Start Date"
          />
        </div>
        <div>
          <label htmlFor="end-date">End Date</label>
          <input
            type="text"
            id="end-date"
            defaultValue={edit !== "add" ? currExperience.endDate : ""}
            placeholder="Enter End Date"
          />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        defaultValue={edit !== "add" ? currExperience.location : ""}
        placeholder="Enter Location"
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        cols="10"
        rows="2"
        defaultValue={edit !== "add" ? currExperience.description : ""}
        placeholder="Enter Description"
      ></textarea>

      <div className="buttons">
        <button
          className="delete-button"
          onClick={(e) =>
            edit === "add" ? setEdit(undefined) : deleteExperience(e)
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

  const addedExperiences = sections.experiences.map((experience) => {
    return (
      <div className="educations" key={experience.id}>
        <h3 onClick={() => setEdit(experience.id)}>{experience.companyName}</h3>
      </div>
    );
  });
  return (
    <div className="content-container" id="educations-container">
      <div
        className="content-header"
        onClick={() =>
          activeContent !== "experiences"
            ? setActiveContent("experiences")
            : setActiveContent("")
        }
      >
        <div>
          <img src={experiencesIcon} alt="" className="header-icon" />
          <h2>Experience</h2>
        </div>
        <img
          src={arrowIcon}
          alt=""
          id="arrow-icon"
          className={activeContent === "experiences" ? "arrow-up" : undefined}
        />
      </div>
      <div
        className={
          activeContent === "experiences" ? "dropdown active" : "dropdown"
        }
      >
        {edit !== undefined && form}

        {edit === undefined && [addedExperiences, addExperienceButton]}
      </div>
    </div>
  );
}

export default Experiences;
