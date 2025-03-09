import React, { useEffect, useState } from "react";

function Loading() {
const limit = 3;
    const [loading, setLoading] = useState("");
    
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading.length < limit) {
          return prevLoading + ".";
        }
        return prevLoading = "";
      });
    }, 700);
    return () => clearInterval(interval);
  }, []);
    
  return (
      <div style={{ display: "flex", justifyContent: "center"}}>
      <p style={{ fontSize: "70px" }}>{loading}</p>
    </div>
  );
}

export default Loading;
