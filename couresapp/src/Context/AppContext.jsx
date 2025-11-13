import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [courseTypes, setCourseTypes] = useState(() => {
    const saved = localStorage.getItem("courseTypes");
    return saved ? JSON.parse(saved) : ["Individual", "Group", "Special"];
  });

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved ? JSON.parse(saved) : ["Hindi", "English", "Urdu"];
  });

  const [offerings, setOfferings] = useState(() => {
    const saved = localStorage.getItem("offerings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("courseTypes", JSON.stringify(courseTypes));
  }, [courseTypes]);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem("offerings", JSON.stringify(offerings));
  }, [offerings]);

  return (
    <AppContext.Provider
      value={{
        courseTypes,
        setCourseTypes,
        courses,
        setCourses,
        offerings,
        setOfferings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
