import { useState } from "react";
import "../../styles/edit.scss";

import Content from "./Content";
import Customize from "./Customize";
import TemplateLoader from "./TemplateLoader";
import EditMode from "./EditMode";

function Edit(props) {
  const [editType, setEditType] = useState("content");

  return (
    <div className="edit">
      <EditMode editType={editType} setEditType={setEditType} />
      <TemplateLoader {...props} />
      {editType === "content" ? (
        <Content {...props} />
      ) : (
        <Customize {...props} />
      )}
    </div>
  );
}

export default Edit;
