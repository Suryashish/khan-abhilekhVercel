import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'text-black font-bold'
            : 'text-gray-600 hover:text-black';
    };

    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white p-5 shadow-lg z-50 transition-transform duration-300 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <button
                onClick={toggleSidebar}
                className="absolute top-5 right-5 text-2xl"
            >
                <IoMdClose />
            </button>
            <ul className="space-y-4 pt-20">
                <li>
                    <Link to="/home" className={getLinkClass('/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shift" className={getLinkClass('/shift-log-entries')}>
                        Shift Log Entries
                    </Link>
                </li>
                <li>
                    <Link to="/hazard-detection" className={getLinkClass('/hazard-detection')}>
                        Hazard Detection and Mapping
                    </Link>
                </li>
                <li>
                    <Link to="/compliance-tracking" className={getLinkClass('/compliance-tracking')}>
                        Compliance Tracking
                    </Link>
                </li>
                <li>
                    <Link to="/alerts" className={getLinkClass('/automated-alerts')}>
                        Automated Alerts
                    </Link>
                </li>
                <li>
                    <Link to="/predictive-maintenance" className={getLinkClass('/predictive-maintenance')}>
                        Predictive Maintenance
                    </Link>
                </li>
                <li>
                    <Link to="/risk-analyzer" className={getLinkClass('/risk-analyzer')}>
                        Risk Analyzer
                    </Link>
                </li>
                <li>
                    <Link to="/offline-mode" className={getLinkClass('/offline-mode')}>
                        Offline Mode
                    </Link>
                </li>
                {/* Other sidebar items */}
            </ul>
        </div>
    );
};

export default Sidebar;
