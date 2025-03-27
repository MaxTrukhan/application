import React from "react";
import { Link } from "react-router-dom";

function CustumerHelp() {
  return (
    <div>
      <ol>
        <li>
          Go to <Link to={"/projects"}>/http://localhost:8003/projects</Link>
        </li>
        <li>Open Edit one more time and don't reload while page open</li>
        <li>
          If you still don't have edit page call to custumer service{" "}
          <a href="">#phone___number</a>{" "}
        </li>
      </ol>
    </div>
  );
}

export default CustumerHelp;
