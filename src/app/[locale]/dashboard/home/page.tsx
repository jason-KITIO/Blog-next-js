"use client"

import { useState } from 'react';
import Sidebar from '../components/slideBar';
import Settings from '../pages/Settings';
import Home from '../pages/home';
import ListPost from '../pages/listPost';
import Newsletter from '../pages/newsletter';
import Logout from '../pages/Logout';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <div className="flex bg-bgLogin">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="flex-grow">
                {activeSection === 'home' && <Home />}
                {activeSection === 'Posts' && <ListPost />}
                {activeSection === 'newsletter' && <Newsletter />}
                {activeSection === 'settings' && <Settings />}
                {activeSection === 'Logout' && <Logout />}
            </div>
        </div>
    );
};

export default Dashboard;
