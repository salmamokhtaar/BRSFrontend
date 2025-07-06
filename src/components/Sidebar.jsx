import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
    faBusinessTime,
    faHome,
    faCheck,
    faUserCog,
    faTimes,
    faChartLine,
    faBars,
    faTimesCircle,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Function to check if a link is active
    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to close sidebar when a link is clicked
    const closeSidebar = () => {
        setIsOpen(false);
    };

    // Close sidebar on route change
    useEffect(() => {
        closeSidebar();
    }, [location.pathname]);

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            {/* Hamburger Menu Icon (Visible only on mobile) */}
            <div className="md:hidden flex items-center z-40 fixed top-16 left-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-full bg-blue-600 text-white shadow-lg"
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faTimes : faBars}
                        className="text-lg"
                    />
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 w-[220px] bg-white shadow-2xl text-blue-600 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 z-30`}>
                {/* Navigation */}
                <div className="text-xs uppercase text-blue-700 font-semibold px-6 mt-6 mb-3">MAIN NAVIGATION</div>
                <nav className="flex flex-col h-full">
                    {/* Dashboard */}
                    <Link
                        to="/dashboard"
                        className={`flex items-center py-3 px-6 transition duration-200 border-l-4 hover:bg-blue-50 ${
                            isActive('/dashboard') && location.pathname === '/dashboard'
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-transparent text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={closeSidebar}
                    >
                        <FontAwesomeIcon icon={faHome} className="text-lg mr-3" />
                        <span className="text-sm">Dashboard</span>
                    </Link>

                    {/* All Businesses */}
                    <Link
                        to="/dashboard/view-businesses"
                        className={`flex items-center py-3 px-6 transition duration-200 border-l-4 hover:bg-blue-50 ${
                            isActive('/dashboard/view-businesses')
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-transparent text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={closeSidebar}
                    >
                        <FontAwesomeIcon icon={faBusinessTime} className="text-lg mr-3" />
                        <span className="text-sm">All Businesses</span>
                    </Link>

                    {/* Approved */}
                    <Link
                        to="/dashboard/approved-registrations"
                        className={`flex items-center py-3 px-6 transition duration-200 border-l-4 hover:bg-blue-50 ${
                            isActive('/dashboard/approved-registrations')
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-transparent text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={closeSidebar}
                    >
                        <FontAwesomeIcon icon={faCheck} className="text-lg mr-3" />
                        <span className="text-sm">Approved</span>
                    </Link>

                    {/* Rejected */}
                    <Link
                        to="/dashboard/rejected-registrations"
                        className={`flex items-center py-3 px-6 transition duration-200 border-l-4 hover:bg-blue-50 ${
                            isActive('/dashboard/rejected-registrations')
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-transparent text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={closeSidebar}
                    >
                        <FontAwesomeIcon icon={faTimesCircle} className="text-lg mr-3" />
                        <span className="text-sm">Rejected</span>
                    </Link>

                    <div className="text-xs uppercase text-blue-900 font-semibold px-6 mt-6 mb-3">ADMINISTRATION</div>

                    {/* Manage Users */}
                    <Link
                        to="/dashboard/manage-users"
                        className={`flex items-center py-3 px-6 transition duration-200 border-l-4 hover:bg-blue-50 ${
                            isActive('/dashboard/manage-users')
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-transparent text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={closeSidebar}
                    >
                        <FontAwesomeIcon icon={faUserCog} className="text-lg mr-3" />
                        <span className="text-sm">Manage Users</span>
                    </Link>

                    {/* Analytics & Reports */}
                    <Link
                        to="/dashboard/generate-reports"
                        className={`flex items-center py-3 px-6 transition duration-200 border-l-4 hover:bg-blue-50 ${
                            isActive('/dashboard/generate-reports')
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-transparent text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={closeSidebar}
                    >
                        <FontAwesomeIcon icon={faChartLine} className="text-lg mr-3" />
                        <span className="text-sm">Analytics & Reports</span>
                    </Link>

                    {/* Logout */}
                    <div className="mt-auto">
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full py-3 px-6 text-gray-600 hover:text-red-600 hover:bg-red-50 transition duration-200"
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg mr-3" />
                            <span className="text-sm">Logout</span>
                        </button>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;