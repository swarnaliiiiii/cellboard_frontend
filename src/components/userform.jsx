import { useState } from 'react';

// Mock store for demo purposes
const userFormStore = (selector) => {
  const mockStore = {
    addFieldtoSchema: (field) => {
      console.log('Adding field:', field);
    }
  };
  return selector(mockStore);
};

function UserForm() {
    const addform = userFormStore((state) => state.addFieldtoSchema);
    const [fieldType, setFieldType] = useState('text');
    const [fieldLabel, setFieldLabel] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [reason, setReason] = useState('');

    const handleonChange = (e) => {
        const { name, value } = e.target;
        if (name === 'fieldType') {
            setFieldType(value);
        } else if (name === 'fieldLabel') {
            setFieldLabel(value);
        } else if (name === 'fromDate') {
            setFromDate(value);
        } else if (name === 'toDate') {
            setToDate(value);
        } else if (name === 'reason') {
            setReason(value);
        }
    };

    const handleAddField = () => {
        if (fieldLabel.trim() === '') {
            alert('Field label cannot be empty');
            return;
        }
        addform({ type: fieldType, label: fieldLabel });
        setFieldLabel('');
    };

    const handleSubmit = () => {
        if (!fieldLabel || !fromDate || !toDate || !reason) {
            alert('Please fill in all fields');
            return;
        }
        console.log('Form submitted:', { fieldLabel, fromDate, toDate, reason });
        // Reset form
        setFieldLabel('');
        setFromDate('');
        setToDate('');
        setReason('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Leave Request Form</h1>
                        <p className="text-gray-600 font-medium">Submit your leave application</p>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Leave Type */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Leave Type
                                </label>
                                <input
                                    type="text"
                                    name="fieldLabel"
                                    value={fieldLabel}
                                    onChange={handleonChange}
                                    placeholder="e.g., Sick Leave, Vacation"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium placeholder-gray-400"
                                />
                            </div>

                            {/* Reason */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Reason
                                </label>
                                <input
                                    type="text"
                                    name="reason"
                                    value={reason}
                                    onChange={handleonChange}
                                    placeholder="Enter reason for leave"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* From Date */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    From Date
                                </label>
                                <input
                                    type="date"
                                    name="fromDate"
                                    value={fromDate}
                                    onChange={handleonChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium"
                                />
                            </div>

                            {/* To Date */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    To Date
                                </label>
                                <input
                                    type="date"
                                    name="toDate"
                                    value={toDate}
                                    onChange={handleonChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Submit Leave Request
                            </button>
                        </div>

                        {/* Add Field Button (if needed for dynamic functionality) */}
                        <div className="pt-2 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={handleAddField}
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                                Add Custom Field
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 font-medium">
                        Need help? Contact HR at <span className="text-blue-600 font-semibold">hr@company.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserForm;