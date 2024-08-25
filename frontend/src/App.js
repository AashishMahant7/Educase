import React from 'react';
import AddSchoolForm from './components/AddSchoolForm';
import SchoolList from './components/SchoolList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">School Management System</h1>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        <AddSchoolForm />
        <SchoolList />
      </div>
    </div>
  );
};

export default App;
