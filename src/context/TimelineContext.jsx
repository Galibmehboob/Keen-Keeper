"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);


    useEffect(() => {
        const stored = localStorage.getItem("timeline");
        if (stored) {
            setTimeline(JSON.parse(stored));
        }
    }, [setTimeline]);


    useEffect(() => {
        localStorage.setItem("timeline", JSON.stringify(timeline));
    }, [timeline]);

    const addToTimeline = (item) => {
        setTimeline((prev) => [item, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ timeline, addToTimeline }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);