import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNotification } from '../context/NotificationContext';

function CreateBusiness({ onCreate, onClose }) {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        contactEmail: '',
        contactPhone: '',
        contactAddress: '',
        businessAddress: '',
        businessType: '',
        registrationNumber: '',
        licenses: '',
        documents: [],
        date: '',
    });

    const { addNotification } = useNotification();

    const businessTypes = [
        "Sole Proprietorship",
        "Partnership",
        "LLC",
        "Corporation",
        "Non-Profit"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, documents: e.target.files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (key === 'documents') {
                Array.from(formData[key]).forEach(file => {
                    formDataToSend.append('documents', file);
                });
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const res = await axios.post('http://localhost:3000/api/register-business', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success(res.data.message);
            onCreate(res.data.business);
            addNotification('New business registered successfully!');
            setFormData({
                businessName: '',
                ownerName: '',
                contactEmail: '',
                contactPhone: '',
                contactAddress: '',
                businessAddress: '',
                businessType: '',
                registrationNumber: '',
                licenses: '',
                documents: [],
                date: '',
            });
            onClose();
            window.location.reload(); // Refresh the page
        } catch (err) {
            toast.error(err.response?.data?.error || 'Something went wrong');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Create New Business</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-gray-700 mb-1">Business Name:</label>
                        <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Owner Name:</label>
                        <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Contact Email:</label>
                        <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Contact Phone:</label>
                        <input type="text" name="contactPhone" value={formData.contactPhone} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Contact Address:</label>
                        <input type="text" name="contactAddress" value={formData.contactAddress} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Business Address:</label>
                        <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Business Type:</label>
                        <select name="businessType" value={formData.businessType} onChange={handleChange} className="border rounded p-2 w-full" required>
                            <option value="">Select Business Type</option>
                            {businessTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Registration Number:</label>
                        <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Licenses:</label>
                        <input type="text" name="licenses" value={formData.licenses} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Documents:</label>
                        <input type="file" name="documents" onChange={handleFileChange} className="border rounded p-2 w-full" multiple required />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Date:</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} className="border rounded p-2 w-full" required />
                    </div>
                </form>
                <div className="flex justify-end">
                    <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button type="submit" onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default CreateBusiness;
