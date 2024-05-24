import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import useNavigate from '@hooks/useNavigate';

import blogImg from '@assets/blog.jpg'
import copythonImg from '@assets/copython.png'
import SABORImg from '@assets/sabor.jpg'
import SABTEImg from '@assets/sabte.jpg'
import PhysicsImg from '@assets/physics.jpg'

const DataProjectContext = createContext({ data: {}, useApi: () => { } });

const ProjectDataProvider = ({ children }) => {
    const data = {
        'ProjectsSection/Blog': {
            img: blogImg,
            title: 'Video Game Blog',
            extension: 'Blog',
            description: 'This is a blog about video game recommendations. It uses Vite with React and JavaScript for the front-end. For the back-end, I implemented a Docker Compose configuration for both the database (MySQL) and a custom API with Express. It also uses important security practices such as the use of tokens to validate user permissions for making requests to the API.',
            technologies: ["React","JavaScript", "Vite", "MySQL", "Docker"]
        },
        'ProjectsSection/Copython': {
            img: copythonImg,
            title: 'Learn with Copython',
            extension: 'Copython',
            description: 'This project was made with the purpose of helping people who are starting their programming journey. With the help of short introductory courses on fundamental topics like data types, simple data structures, conditional statements, and an AI-powered chat, the main goal is to provide a friendly introduction to coding. This app was made with Android Studio, Jetpack Compose, Firebase, and the Palm API (the previous AI API from Google).',
            technologies: ["Android, Google AI, Android Studio, jetpack compose, firebase, kotlin"]
        },
        'ProjectsSection/Physics': {
            img: PhysicsImg,
            title: 'Physics Electron Simulation',
            extension: 'Physics',
            description: 'This project was made as part of an evaluation for the course "Physics III". It is a simulation of the drag speed of electrons through a wire with specific characteristics such as width, diameter, material, and voltage. Other calculations like resistance, current, and power are also made. There is even an extra mode for showing a "random walk," a more realistic demonstration of how an electron would move.',
            technologies: ["Python", "CustomTkinter"]
        },
        'ProjectsSection/SABOR': {
            img: SABORImg,
            title: 'SABOR',
            extension: 'SABOR',
            description: "This software was designed for a restaurant, including its most essential functionalities. It was made with Vite, React, and JavaScript for the front-end, and Docker Compose with Express and PostgreSQL for the back-end. The system has many different options and serves different purposes such as creating orders, having both a bar and kitchen screen for products that are pending to be served, generating bills, etc.",
            technologies: ["React","JavaScript", "Vite", "postgreSQL", "Docker"]
        },
        'ProjectsSection/SABTE': {
            img: SABTEImg,
            title: 'SABTE',
            extension: 'SABTE',
            description: "SABTE is short for 'Sistema Accesible de Búsqueda de Trabajadores Específicos' in Spanish, which mostly translates to: Accessible Search System for Specific Workers. The main focus of the project is to help people find trustworthy workers for jobs that don't necessarily require an academic title. People tend to seek help and advice from friends, parents, and other relatives to find people for jobs like plumbing, carpentry, painting, etc., but this tends to be tedious and time-consuming. So, we are working to help people find honest workers in a more efficient way.",
            technologies: ["Ionic","postgreSQL", "TypeScript", "Neo4J"]
        },
    };

    const [ProjectData, setProjectData] = useState({});
    const { page } = useNavigate();

    useEffect(() => {
        if (data[page]) {
            setProjectData(data[page]);
        } else {
            setProjectData({});
        }
    }, [page]);

    return (
        <DataProjectContext.Provider value={{ ProjectData }}>
            {children}
        </DataProjectContext.Provider>
    );
};

ProjectDataProvider.propTypes = {
    children: PropTypes.node 
};

const useProjectData = () => {
    return useContext(DataProjectContext);
};

export default useProjectData;
export { DataProjectContext, ProjectDataProvider };
