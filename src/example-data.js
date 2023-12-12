import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Karl Jacobsson",
    email: "karl.jacobsson@gmail.com",
    phoneNumber: "+46 3235 5121 5721",
    address: "Stockholm, Sweden",
    about:
      "ddsasdsad d asdasdsadasd asdsadsadasdasd asdasdsadsadasd asdasdasdas dasdasdasdasd asdasdasdadsada asdasda dsada asd asdasdsad asd asdasdasda sad",
  },
  sections: {
    educations: [
      {
        degree: "Bachelors in Economics",
        schoolName: "Stockholm University",
        location: "Stockholm, Sweden",
        startDate: "08/2022",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in Math",
        schoolName: "Hidden University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],
    experiences: [
      {
        companyName: "Umbrella Inc.",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Black Mesa Labs",
        positionTitle: "UX Research Assistant",
        location: "Berlin, Germany",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
