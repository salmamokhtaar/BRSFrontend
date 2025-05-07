import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheckCircle, faExclamationCircle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNotification } from '../context/NotificationContext';

const Notification = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const { notifications, removeNotification } = useNotification();

    const toggleNotifications = () => {
        setShowNotifications((prev) => !prev);
    };

    // Function to get icon based on notification type
    const getNotificationIcon = (type) => {
        switch(type) {
            case 'success':
                return <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />;
            case 'error':
                return <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />;
            default:
                return <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500" />;
        }
    };

    return (
        <div className="relative">
            <button onClick={toggleNotifications} className="relative text-gray-600 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faBell} className="h-4 w-4" />
                {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-3 w-3 flex items-center justify-center">
                        {notifications.length}
                    </span>
                )}
            </button>
            {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 shadow-lg rounded overflow-hidden z-50 border border-gray-200 text-xs">
                    <div className="bg-gray-50 px-3 py-2 flex justify-between items-center border-b border-gray-200">
                        <h3 className="font-medium text-xs">Notifications</h3>
                        <button onClick={toggleNotifications} className="text-gray-500 hover:text-gray-700">
                            <FontAwesomeIcon icon={faTimes} className="text-xs" />
                        </button>
                    </div>
                    {notifications.length > 0 ? (
                        <ul className="max-h-60 overflow-y-auto">
                            {notifications.map((notification) => (
                                <li key={notification.id} className="p-2 border-b border-gray-100 hover:bg-gray-50 flex items-start">
                                    <div className="mr-2 mt-1">
                                        {getNotificationIcon(notification.type)}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs">{notification.message}</p>
                                        <p className="text-[10px] text-gray-500 mt-1">
                                            {new Date(notification.id).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeNotification(notification.id)}
                                        className="text-gray-400 hover:text-gray-600 ml-1"
                                    >
                                        <FontAwesomeIcon icon={faTimes} className="text-xs" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-3 text-center text-gray-500 text-xs">
                            No new notifications
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Notification;