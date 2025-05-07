import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BusinessChart from './BusinessChart';
import AnotherChart from './AnotherChart';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faBuilding,
    faTimesCircle,
    faUsers,
    faArrowUp,
    faArrowDown,
    faCalendarAlt,
    faChartLine,
    faFileAlt
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const location = useLocation();
    const hideCardsPaths = ['/dashboard/view-businesses', '/dashboard/approved-registrations', '/dashboard/rejected-registrations', '/dashboard/generate-reports', '/dashboard/manage-users', '/dashboard/profile'];

    const [approvedBusinesses, setApprovedBusinesses] = useState(1);
    const [registeredBusinesses, setRegisteredBusinesses] = useState(5);
    const [rejectedApplications, setRejectedApplications] = useState(2);
    const [registeredUsers, setRegisteredUsers] = useState(2);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const approvedResponse = await axios.get('http://localhost:3000/api/businesses/approved');
                if (approvedResponse.data.length > 0) {
                    setApprovedBusinesses(approvedResponse.data.length);
                }

                const registeredResponse = await axios.get('http://localhost:3000/api/businesses/total');
                if (registeredResponse.data.total > 0) {
                    setRegisteredBusinesses(registeredResponse.data.total);
                }

                const rejectedResponse = await axios.get('http://localhost:3000/api/businesses/rejected');
                if (rejectedResponse.data.length > 0) {
                    setRejectedApplications(rejectedResponse.data.length);
                }

                const usersResponse = await axios.get('http://localhost:3000/api/users');
                if (usersResponse.data.length > 0) {
                    setRegisteredUsers(usersResponse.data.length);
                }
            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Get current date for dashboard
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    // Card data for easier rendering
    const dashboardCards = [
        {
            title: 'Approved Businesses',
            value: approvedBusinesses,
            change: '+5%',
            trend: 'up',
            description: 'Businesses that have successfully completed the registration process.',
            icon: faCheckCircle,
            color: 'bg-green-500',
            textColor: 'text-green-500'
        },
        {
            title: 'Total Registrations',
            value: registeredBusinesses,
            change: '+1%',
            trend: 'up',
            description: 'Total number of businesses registered in the system.',
            icon: faBuilding,
            color: 'bg-blue-500',
            textColor: 'text-blue-500'
        },
        {
            title: 'Rejected Applications',
            value: rejectedApplications,
            change: '+7%',
            trend: 'up',
            description: 'Applications not approved due to various reasons.',
            icon: faTimesCircle,
            color: 'bg-red-500',
            textColor: 'text-red-500'
        },
        {
            title: 'Registered Users',
            value: registeredUsers,
            change: '+3%',
            trend: 'up',
            description: 'Users with access to the system.',
            icon: faUsers,
            color: 'bg-purple-500',
            textColor: 'text-purple-500'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <TopBar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                    {/* Main content area */}
                    <div className="mx-auto">
                        {/* Dashboard header */}
                        {!hideCardsPaths.includes(location.pathname) && (
                            <div className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200">
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-800">Dashboard Overview</h1>
                                    <p className="text-gray-500 flex items-center text-xs mt-1">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                        {currentDate}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs flex items-center shadow-sm">
                                        <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                                        Generate Report
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Conditionally render cards */}
                        {!hideCardsPaths.includes(location.pathname) && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                                {dashboardCards.map((card, index) => (
                                    <div key={index} className="bg-white rounded shadow border border-gray-200">
                                        <div className="p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className={`${card.color} text-white p-2 rounded-md`}>
                                                    <FontAwesomeIcon icon={card.icon} className="text-sm" />
                                                </div>
                                                <div className={`flex items-center ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                                    <FontAwesomeIcon
                                                        icon={card.trend === 'up' ? faArrowUp : faArrowDown}
                                                        className="mr-1 text-[10px]"
                                                    />
                                                    <span className="text-xs font-medium">{card.change}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-gray-500 text-xs font-medium mb-1">{card.title}</h2>
                                                <div className="flex items-end">
                                                    <p className="text-2xl font-bold text-gray-800">
                                                        {isLoading ? '...' : card.value}
                                                    </p>
                                                </div>
                                                <p className="text-gray-500 text-[10px] mt-1">{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Conditionally render charts */}
                        {location.pathname === '/dashboard' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 mb-4">
                                <div className="bg-white rounded shadow border border-gray-200 p-4">
                                    <h3 className="text-sm font-semibold text-gray-800 mb-2">Business Distribution Over Time</h3>
                                    <div className="h-64">
                                        <AnotherChart />
                                    </div>
                                    <div className="text-[10px] text-gray-500 text-center mt-2">
                                        Monthly registration trends by business type
                                    </div>
                                </div>
                                <div className="bg-white rounded shadow border border-gray-200 p-4">
                                    <h3 className="text-sm font-semibold text-gray-800 mb-2">Business Type Distribution</h3>
                                    <div className="h-64">
                                        <BusinessChart />
                                    </div>
                                    <div className="text-[10px] text-gray-500 text-center mt-2">
                                        Distribution of registered businesses by type
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Recent activity section */}
                        {location.pathname === '/dashboard' && (
                            <div className="bg-white rounded shadow border border-gray-200 mx-4 mb-4">
                                <div className="border-b border-gray-200 px-4 py-3">
                                    <h3 className="text-sm font-semibold text-gray-800">Recent Activity</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {/* Sample data - in a real app, this would be dynamic */}
                                            <tr>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">Acme Corporation</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">John Doe</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">Corporation</td>
                                                <td className="px-4 py-2 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-[10px] leading-5 font-semibold rounded-full bg-green-100 text-green-800">Approved</span>
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">May 5, 2024</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">Tech Solutions LLC</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">Jane Smith</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">Limited Liability Company (LLC)</td>
                                                <td className="px-4 py-2 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-[10px] leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Waiting</span>
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">May 4, 2024</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">Global Traders</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">Robert Johnson</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">Partnership</td>
                                                <td className="px-4 py-2 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-[10px] leading-5 font-semibold rounded-full bg-red-100 text-red-800">Rejected</span>
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">May 3, 2024</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Outlet for nested routes */}
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;