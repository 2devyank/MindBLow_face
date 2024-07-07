import React from 'react';

const Preview = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-indigo-600 h-32 sm:h-48"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24">
          <img 
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-white mx-auto shadow-lg"
            src="https://placekitten.com/200/200" 
            alt="Dr. Jane Doe"
          />
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Dr. Jane Doe</h1>
            <p className="text-xl text-gray-600">Clinical Psychologist</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Specialties</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Anxiety Disorders</li>
                <li>Depression</li>
                <li>Trauma and PTSD</li>
                <li>Relationship Issues</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-600">Email: jane.doe@example.com</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Address: 123 Therapy St, Mindful City, MC 12345</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">About Me</h2>
            <p className="text-gray-600">
              Dr. Jane Doe is a licensed clinical psychologist with over 10 years of experience. 
              She believes in a holistic approach to mental health, combining evidence-based 
              therapies with mindfulness techniques. Dr. Doe is committed to creating a safe, 
              supportive environment for all her clients.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;