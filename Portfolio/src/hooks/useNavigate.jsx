import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const NavigationContext = createContext({ page: '/', navigate: () => {} });

const NavigationProvider = ({ children }) => {
    const [page, setPage] = useState(window.location.hash.substring(1) || '/');

    useEffect(() => {
        const handleHashChange = () => {
            setPage(window.location.hash.substring(1) || '/');
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const navigate = (url) => {
        window.location.hash = url;
    };

    return (
        <NavigationContext.Provider value={{ page, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
};

NavigationProvider.propTypes = {
    children: PropTypes.node.isRequired
};

const useNavigate = () => {
    return useContext(NavigationContext);
};

export default useNavigate;
export { NavigationProvider };
