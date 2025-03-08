import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailProvider = createContext({});

function ContextDetail({ children }) {
  const param = useParams();
  const { projectId } = param;

  const [projectDetail, setProjectDetail] = useState({});
  const [errGet, setErrorGet] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `http://localhost:8003/projects/${projectId}`
        ).then((res) => res.json());
        setProjectDetail(response);
      } catch (error) {
        setErrorGet(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
    
  return (
    <div>
      <DetailProvider.Provider
        value={{ projectDetail, errGet, isLoading, projectId }}
      >
        {children}
      </DetailProvider.Provider>
    </div>
  );
}

export default ContextDetail;
