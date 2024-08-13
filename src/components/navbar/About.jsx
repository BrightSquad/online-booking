
import React from 'react';
import Layout from './Layout'; // Import Layout

function About() {
  return (
    <Layout>
      <div className="container mx-[2%] px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-left">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="md:w-1/2 md:pr-8">
            <img src="/story-02.jpg" alt="Our Team" className="rounded-lg shadow-lg w-full mb-4 md:mb-0" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Welcome to SouthStreams! We are dedicated to providing the best service for our customers. Our mission is to create value and make a difference.
            </p>
            <p className="text-lg mb-4">
              Our team is composed of skilled professionals who are passionate about what they do. We believe in innovation, integrity, and excellence.
            </p>
            <p className="text-lg mb-4">
              Thank you for choosing us. We look forward to serving you and making your experience unforgettable.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to deliver exceptional service and innovative solutions to our customers, driving value and making a positive impact in the community.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700">
                We envision a world where technology and innovation empower individuals and businesses to achieve their highest potential.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Excellence</li>
                <li>Customer Focus</li>
                <li>Community Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;




