import { ReactNode, createContext } from "react";

export interface IQuestionsContext { }

const QuestionsContext = createContext({});

export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
    const storage: IQuestionsContext = {}

    return <QuestionsContext.Provider value={storage}>{children}</QuestionsContext.Provider>
}

export default QuestionsContext;