import React, { useState } from "react";

function Form() {
  const [company, setCompany] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-45">
        <h2>Enter your details</h2>
        <form>
          <div className="mb-3">
            <label>
              <strong>What is your current company name?</strong>
              <input
                type="text"
                placeholder="Enter Company Name"
                autoComplete="off"
                name="company"
                className="form-control rounded-0"
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              <strong>Which Country are you currently working in:</strong>
              <input
                type="text"
                placeholder="Enter Country Name"
                autoComplete="off"
                name="country"
                className="form-control rounded-0"
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              <strong>Which City are you currently residing in:</strong>
              <input
                type="text"
                placeholder="Enter City Name"
                autoComplete="off"
                name="city"
                className="form-control rounded-0"
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>

          <div class="mb-3">
            <label>
              <strong>What is your salary:</strong>
              <span class="input-group-text">$</span>
              <input
                type="text"
                class="form-control rounded-0"
                placeholder="Amount (to the nearest euro)"
              />
            </label>
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
