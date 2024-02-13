// app/context/SyllabusContext.tsx
import React, { createContext, useReducer, useContext, useEffect, ReactNode } from "react";

type Syllabus = {
  id: number;
  name: string;
};

type State = {
  syllabuses: Syllabus[];
  loading: boolean;
};

type Action = { type: "SET_SYLLABUSES"; payload: Syllabus[] } | { type: "SET_LOADING"; payload: boolean };

const initialState: State = {
  syllabuses: [],
  loading: true
};

const SyllabusContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

const syllabusReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SYLLABUSES":
      return { ...state, syllabuses: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

interface SyllabusProviderProps {
  children: ReactNode;
}

export const SyllabusProvider: React.FC<SyllabusProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(syllabusReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const response = await fetch("/api/syllabuses");
        const data: Syllabus[] = await response.json();
        dispatch({ type: "SET_SYLLABUSES", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchData();
  }, []);

  return <SyllabusContext.Provider value={{ state, dispatch }}>{children}</SyllabusContext.Provider>;
};

export const useSyllabusContext = () => {
  const context = useContext(SyllabusContext);
  if (!context) {
    throw new Error("useSyllabusContext must be used within a SyllabusProvider");
  }
  return context;
};
