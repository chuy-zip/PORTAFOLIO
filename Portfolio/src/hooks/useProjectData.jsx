import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import useNavigate from '@hooks/useNavigate';
import blogImg from '@assets/pa.jpg'

const DataProjectContext = createContext({ data: {}, useApi: () => { } });

const ProjectDataProvider = ({ children }) => {
    const data = {
        'ProjectsSection/Blog': {
            img: blogImg,
            title: 'Video game blog',
            description: 'An example description 1'
        },
        'ProjectsSection/Copython': {
            img: blogImg,
            title: 'Learn with Copython',
            description: 'An example description 2'
        },
        'ProjectsSection/Physics': {
            img: blogImg,
            title: 'Physics Electron Simulation',
            description: 'An example description 3'
        },
        'ProjectsSection/SABOR': {
            img: blogImg,
            title: 'SABOR',
            description: 'An example description 4'
        },
        'ProjectsSection/SABTE': {
            img: blogImg,
            title: 'SABTE',
            description: 'An example description 5'
        },
    };

    const [ProjectData, setProjectData] = useState({});
    const { page } = useNavigate();

    useEffect(() => {
        if (data[page]) {
            setProjectData(data[page]);
            console.log("Hello from data", page);
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
