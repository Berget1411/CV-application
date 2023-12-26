import contentIcon from "../../assets/content.svg";
import customizeIcon from "../../assets/customize.svg";

function EditMode({ editType, setEditType }) {
  return (
    <div className="edit-mode">
      <button
        onClick={() => setEditType("content")}
        className={editType === "content" ? "active-button" : undefined}
      >
        {" "}
        <img src={contentIcon} alt="" />
        Content
      </button>
      <button
        onClick={() => setEditType("customize")}
        className={editType === "customize" ? "active-button" : undefined}
      >
        <img src={customizeIcon} alt="" />
        Customize
      </button>
    </div>
  );
}

export default EditMode;
