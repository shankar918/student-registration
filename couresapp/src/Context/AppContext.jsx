// src/Context/AppContext.jsx

import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {   // ← Named export (Important)
  const [courseTypes, setCourseTypes] = useState(["Individual", "Group", "Special"]);
  const [courses, setCourses] = useState(["English", "Hindi", "Urdu"]);
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState({});

  return (
    <AppContext.Provider
      value={{
        courseTypes, setCourseTypes,
        courses, setCourses,
        offerings, setOfferings,
        registrations, setRegistrations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
