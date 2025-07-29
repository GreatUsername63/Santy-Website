import {
    Route,
    Router,
    Routes,
    useLocation
} from 'react-router-dom'
import Index from '../Pages/index.jsx'
import Projects from '../Pages/projects.jsx'
import Education from '../Pages/education.jsx';

import { AnimatePresence } from 'motion/react';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/Santy-Website/" element={<Index />} />
                <Route path="/Santy-Website/projects" element={<Projects />} />
                <Route path="/Santy-Website/education" element={<Education />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes