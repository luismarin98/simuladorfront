import { ReactNode, createContext } from "react";

export interface IQuizContext { }

const QuixContext = createContext({});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const storage: IQuizContext = {}

    return <QuixContext.Provider value={storage}>{children}</QuixContext.Provider>
}

export default QuixContext;