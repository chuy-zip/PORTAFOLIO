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
            title: 'Video game blog',
            extension: 'Blog',
            description: 'This is A blog about videogame recomendations. It uses, vite'+ 
                         'with react and Javascript as front-end. For back-end I implemented' +
                         'a docker compose configuration for both the database (MySQL) and a custom API' +
                         'with Express. It also uses important security practices such as the use of' + 
                         'tokens to validate user permisions for realizing requests to the API'
        },
        'ProjectsSection/Copython': {
            img: copythonImg,
            title: 'Learn with Copython',
            extension: 'Copython',
            description: 'This project was made with the purpose of helping people who are starting their'+
                         'programming journey. With the help of short introductory courses to fundamental'+
                         'topics like data types, simple data structures, conditinoal statements and an'+
                         'IA powered chat; the main goal is to make a friendly introduction to coding.' +
                         'This app was made with android studio, jetpack compose, firebase and Palm API'+
                         '(The previous AI API from google)'
                         
        },
        'ProjectsSection/Physics': {
            img: PhysicsImg,
            title: 'Physics Electron Simulation',
            extension: 'Physics',
            description: 'This project was made as part of an evaluation for the course "Physics III".' + 
                         'It is a simulation for the drag speed of electrons through a wire with' +
                         'specific characteristics such as width, diameter, material and voltage.' +
                         'Other calculations like resistance, current and Power are also made' +
                         'There is even an extra mode for showing a "random walk", a more realistic'+
                         'demonstration of how an electron would move.'
        },
        'ProjectsSection/SABOR': {
            img: SABORImg,
            title: 'SABOR',
            extension: 'SABOR',
            description: "This software was designed for a restaurant, including it's most essential functionalities. It was made with vite, react" +
                         "and javascript for front-end, and docker compose with express and postgreSQL for backend." +
                         "The system has many different options and serves differente purposes such as creating orders," +
                         "having both a bar and kitchen screen for products that are pending to be served, generating bills, etc."
        },
        'ProjectsSection/SABTE': {
            img: SABTEImg,
            title: 'SABTE',
            extension: 'SABTE',
            description: "Sabte is short for 'Sistema Accesible de Busqueda de Trabajadores especificos' in spanish." +
                         "Which mostly translates to: Accesible search system for Specific Workers. The main focus" +
                         "of the project is to help people find trustworthy workers for jobs that don't necessarily" +
                         "need an academic title. People tend to seek help and advice from friends, parents and other relatives" +
                         "to find people for jobs like plumbery, carpentry, painting, etc but this tends to get tedious and time consuming"+
                         "so we are working to help people find honest workers in amore efficiente way."
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
