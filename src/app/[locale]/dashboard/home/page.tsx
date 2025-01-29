"use client"

import { useState } from 'react';
import Sidebar from '../_components/slideBar';
import Settings from '../pages/Settings';
import Home from '../pages/home';
import ListPost from '../pages/listPost';
import Newsletter from '../pages/newsletter';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <div className="flex bg-bgLogin">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="flex-grow pt-[12px] w-10/12">
                {activeSection === 'home' && <Home />}
                {activeSection === 'Posts' && <ListPost />}
                {activeSection === 'newsletter' && <Newsletter />}
                {activeSection === 'settings' && <Settings />}
            </div>
        </div>
    );
};

export default Dashboard;
