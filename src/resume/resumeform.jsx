import React, { useState } from 'react';
import ReactToPrint from "react-to-print";
import componentref from "./resume.jsx";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    summary: '',
    education: '',
    projects: [],
    certifications: [],
    skills: [],
    linkedin: '',
    leetcode: '',
    geeksforgeeks: '',
    hackerrank: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddField = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ''],
    }));
  };

  const handleFieldChange = (index, field, value) => {
    const updatedData = { ...formData };
    updatedData[field][index] = value;
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or display in UI
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto  relative top-14 h-full bg-white rounded-lg shadow-lg p-8">
      {/* Other input fields */}
      <label htmlFor="projects" className="block mb-2">
        Projects:
        {formData.projects.map((project, index) => (
          <input
            key={index}
            type="text"
            name="projects"
            value={project}
            onChange={(e) => handleFieldChange(index, 'projects', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          onClick={() => handleAddField('projects')}
        >
          Add Field
        </button>
      </label>

      <label htmlFor="certifications" className="block mb-2">
        Certifications:
        {formData.certifications.map((certification, index) => (
          <input
            key={index}
            type="text"
            name="certifications"
            value={certification}
            onChange={(e) => handleFieldChange(index, 'certifications', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          onClick={() => handleAddField('certifications')}
        >
          Add Field
        </button>
      </label>

      <label htmlFor="skills" className="block mb-2">
        Skills:
        {formData.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            name="skills"
            value={skill}
            onChange={(e) => handleFieldChange(index, 'skills', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          onClick={() => handleAddField('skills')}
        >
          Add Field
        </button>
      </label>

      <ReactToPrint
        trigger={() => {
          return (
            <button
              onClick={console.log("not work")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Download
            </button>
          );
        }}
        content={() => componentref.current}
      />
    </form>
  );
};

export default ResumeForm;