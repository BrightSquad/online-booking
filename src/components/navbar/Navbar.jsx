import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mobnav from "./Mobnav";
import { BsList } from "react-icons/bs";
import axios from "axios";
import Footer from './Footer'; // Import Footer


function Navbar() {
  const [showMobile, setShowMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("return"); // Default option
  const [selectedButton, setSelectedButton] = useState("book");

  // Set the current date as default for departure and return dates
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDepartureDate(today);
    setReturnDate(today);
  }, []);

  const mobileMenuToggle = () => setShowMobile((prev) => !prev);
  const toggleHovered = () => {
    setIsHovered(!isHovered);
  };

  const handleFromChange = async (e) => {
    setFrom(e.target.value);
    if (e.target.value.length > 2) {
      const response = await axios.get(
        `http://api.aviationstack.com/v1/airports?access_key=YOUR_API_KEY&search=${e.target.value}`
      );
      setFromSuggestions(response.data.data);
    } else {
      setFromSuggestions([]);
    }
  };

  const handleToChange = async (e) => {
    setTo(e.target.value);
    if (e.target.value.length > 2) {
      const response = await axios.get(
        `http://api.aviationstack.com/v1/airports?access_key=YOUR_API_KEY&search=${e.target.value}`
      );
      setToSuggestions(response.data.data);
    } else {
      setToSuggestions([]);
    }
  };

  const selectFromSuggestion = (suggestion) => {
    setFrom(suggestion.airport_name);
    setFromSuggestions([]);
  };

  const selectToSuggestion = (suggestion) => {
    setTo(suggestion.airport_name);
    setToSuggestions([]);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <nav className="flex place-content-between bg-[#330099] lg:px-16 md:px-12 xl:px-20 2xl:px-40 px-6 h-[100px] navbar items-center">
        <div>
          <Link to={"/"} className="no-underline">
            <img src="/ssm 2.png" alt="Logo" className="w-32 h-auto" />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-[64px] items-center">
          <div onMouseEnter={toggleHovered} onMouseLeave={toggleHovered} className="relative">
            <Link to={"#about"} className="no-underline font-semibold text-white">
              About Us
            </Link>
            {isHovered && <hr className="border-white" />}
          </div>
          <div onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>
          <div onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>
  <Link to={"/book"} className="no-underline font-semibold text-white">
    Book
  </Link>
  {isHovered && <hr className="border-white" />}
</div>

            {isHovered && <hr className="border-white" />}
          </div>
          <div className="flex space-x-8 items-center">
            <Link to={"/signup"} className="w-[120px] h-[44px] flex items-center justify-center bg-white text-[#330099] rounded-[10px] font-semibold">
              Sign up
            </Link>
            <Link to={"/login"} className="w-[120px] h-[44px] border flex items-center justify-center border-white text-white rounded-[10px] font-semibold">
              Login
            </Link>
          </div>
        </div>
        <BsList
          onClick={mobileMenuToggle}
          className="lg:hidden rounded-[8px] w-[40px] h-[40px] text-[24px] text-white bg cursor-pointer"
        />
        {showMobile && <Mobnav mobileMenuToggle={mobileMenuToggle} />}
      </nav>

      <header className="relative">
        <img src="/Lady.png.jpg" alt="Lady" className="w-full h-[400px] object-cover" />
      </header>

      <div className="flex justify-center items-center bg-gray-100 py-10">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-left space-x-4 mb-6">
            <button
              className={`btn ${selectedButton === 'book' ? 'bg-[#330099] text-white' : ' text-gray-700'}`}
              onClick={() => handleButtonClick('book')}
            >
              Book a flight
            </button>
            <button
              className={`btn ${selectedButton === 'stopover' ? 'bg-[#330099] text-white' : ' text-gray-700'}`}
              onClick={() => handleButtonClick('stopover')}
            >
              Stopover
            </button>
            <button
              className={`btn ${selectedButton === 'manage' ? 'bg-[#330099] text-white' : ' text-gray-700'}`}
              onClick={() => handleButtonClick('manage')}
            >
              Manage / Check in
            </button>
            <button
              className={`btn ${selectedButton === 'status' ? 'bg-[#330099] text-white' : ' text-gray-700'}`}
              onClick={() => handleButtonClick('status')}
            >
              Flight status
            </button>
          </div>
          <div className="flex flex-wrap justify-between mb-4">
            <div className="flex items-center mb-2">
              <input
                type='radio'
                className="form-radio h-5 w-5 text-blue-500 mr-2"
                checked={selectedOption === "return"}
                onChange={() => handleOptionChange("return")}
              />
              <button
                onClick={() => handleOptionChange("return")}
                className={`btn ${selectedOption === "return" ? "text-grey" : "text-gray-700"}`}
              >
                <span>Return</span>
              </button>
            </div>

            <div className="flex items-center mb-2">
              <input
                type='radio'
                className="form-radio h-5 w-5 text-blue-500 mr-2"
                checked={selectedOption === "oneway"}
                onChange={() => handleOptionChange("oneway")}
              />
              <button
                onClick={() => handleOptionChange("oneway")}
                className={`btn ${selectedOption === "oneway" ? "text-grey" : "text-gray-700"}`}
              >
                <span>One way</span>
              </button>
            </div>

            <div className="flex items-center mb-2">
              <input
                type='radio'
                className="form-radio h-5 w-5 text-blue-500 mr-2"
                checked={selectedOption === "multicity"}
                onChange={() => handleOptionChange("multicity")}
              />
              <button
                onClick={() => handleOptionChange("multicity")}
                className={`btn ${selectedOption === "multicity" ? "text-grey" : "text-gray-700"}`}
              >
                <span>Multi-city</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 mb-4">
              <div className="flex-1 pr-4">
                <input
                  type="text"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="From"
                  value={from}
                  onChange={handleFromChange}
                />
                {fromSuggestions.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto z-10">
                    {fromSuggestions.map((suggestion) => (
                      <li
                        key={suggestion.airport_name}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => selectFromSuggestion(suggestion)}
                      >
                        {suggestion.airport_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex-1 pl-4">
                <input
                  type="text"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="To"
                  value={to}
                  onChange={handleToChange}
                />
                {toSuggestions.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto z-10">
                    {toSuggestions.map((suggestion) => (
                      <li
                        key={suggestion.airport_name}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => selectToSuggestion(suggestion)}
                      >
                        {suggestion.airport_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <input
                  type="date"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
              {selectedOption !== "oneway" && (
                <div className="flex-1">
                  <input
                    type="date"
                    className="input w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <input
                type="number"
                className="input w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Passengers"
              />
              <input
                type="text"
                className="input w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Class"
              />
            </div>
            <div className="flex mb-4">
           
            </div>
            <div className="flex justify-end mb-4">
  <button className="bg-[#330099] text-white py-3 px-6 rounded-md text-lg font-semibold">
    Search flight
  </button>
</div>

          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-left leading-tight">
            Start Planning Your Next Trip
          </h2>
          <div className="flex space-x-4 overflow-x-auto">
            <div className="card rounded-[20px] shadow-lg">
              <img
                src="/man.jpg"
                alt="Destination 1"
                className="rounded-t-[15px] h-[210px] w-full object-cover"
              />
              <div className="card-content p-4 text-center">
                <Link to={"#find"} className="no-underline font-semibold text-gray-700">
                  Elevate your Experience
                </Link>
              </div>
            </div>
            <div className="card rounded-[20px] shadow-lg">
              <img
                src="/family.jpg"
                alt="Destination 2"
                className="rounded-t-[15px] h-[210px] w-full object-cover"
              />
              <div className="card-content p-4 text-center">
                <Link to={"#find"} className="no-underline font-semibold text-gray-700">
                  An Unforgettable Experience in Nigeria
                </Link>
              </div>
            </div>
            <div className="card rounded-[20px] shadow-lg">
              <img
                src="/hero2.jpg"
                alt="Destination 3"
                className="rounded-t-[15px] h-[210px] w-full object-cover"
              />
              <div className="card-content p-4 text-center">
                <Link to={"#find"} className="no-underline font-semibold text-gray-700">
                  Elevate Your Experience
                </Link>
              </div>
            </div>
            <div className="card rounded-[20px] shadow-lg">
              <img
                src="/mal.jpg"
                alt="Destination 4"
                className="rounded-t-[15px] h-[210px] w-full object-cover"
              />
              <div className="card-content p-4 text-center">
                <Link to={"#find"} className="no-underline font-semibold text-gray-700">
                  Your Best Holiday Awaits You Here
                </Link>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </section>
     
    </div>
  );
}

export default Navbar;



                  








             








