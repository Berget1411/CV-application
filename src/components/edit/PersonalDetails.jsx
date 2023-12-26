import personalIcon from "../../assets/personal-info.svg";
import arrowIcon from "../../assets/arrow-down.svg";

function PersonalDetails({
  personalInfo,
  setPersonalInfo,
  activeContent,
  setActiveContent,
}) {
  return (
    <div className="content-container">
      <div
        className="content-header"
        onClick={() =>
          activeContent !== "personal-details"
            ? setActiveContent("personal-details")
            : setActiveContent("")
        }
      >
        <div>
          <img src={personalIcon} alt="" className="header-icon" />
          <h2>Personal Details</h2>
        </div>
        <img
          src={arrowIcon}
          alt=""
          id="arrow-icon"
          className={
            activeContent === "personal-details" ? "arrow-up" : undefined
          }
        />
      </div>
      <div
        className={
          activeContent === "personal-details" ? "dropdown active" : "dropdown"
        }
      >
        <form>
          <label htmlFor="full-name">Full name</label>
          <input
            type="text"
            id="full-name"
            placeholder="First and last name"
            value={personalInfo.fullName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, fullName: e.target.value })
            }
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
          />
          <label htmlFor="phone-number">Phone number</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Enter phone number"
            value={personalInfo.phoneNumber}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
            }
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="City, Country"
            value={personalInfo.address}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, address: e.target.value })
            }
          />
          <label htmlFor="about">About</label>
          <textarea
            type="text"
            id="about"
            cols="10"
            rows="2"
            placeholder="Info about yourself"
            value={personalInfo.about}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, about: e.target.value })
            }
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
