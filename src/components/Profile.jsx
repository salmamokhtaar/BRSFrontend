// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext'; // Import AuthContext

// function Profile() {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="flex items-center space-x-4">
//       <img
//         src={user?.profileImage || 'https://via.placeholder.com/150'}
//         alt="Profile"
//         className="w-10 h-10 rounded-full"
//       />
//       <div>
//         <p className="font-bold">{user?.username}</p>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>
//     </div>
//   );
// }

// export default Profile;



import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Profile() {
  const { user } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // In a real implementation, you would call a logout function from AuthContext
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <div className="w-6 h-6 rounded-full bg-black border border-blue-300 overflow-hidden flex items-center justify-center">
          {user?.profileImage ? (
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <FontAwesomeIcon icon={faUser} className="text-[#2a3eb1] text-xs" />
          )}
        </div>
        <div className="hidden md:block text-left">
          <p className="text-xs font-medium leading-tight">{user?.username || 'Admin User'}</p>
          <p className="text-[10px] text-blue-600 leading-tight">Admin</p>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="text-xs hidden md:block" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50 overflow-hidden text-xs">
          <div className="p-2 border-b border-gray-200 bg-gray-50">
            <p className="font-medium text-gray-800 text-xs">{user?.username || 'Admin User'}</p>
            <p className="text-[10px] text-gray-500">{user?.email || 'admin@example.com'}</p>
          </div>
          <div className="py-1">
            <Link
              to="/dashboard/profile"
              className="flex items-center px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
              onClick={() => setShowDropdown(false)}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-500 text-xs" />
              My Profile
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
              onClick={() => setShowDropdown(false)}
            >
              <FontAwesomeIcon icon={faCog} className="mr-2 text-gray-500 text-xs" />
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-xs" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;