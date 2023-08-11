import React from 'react';
import { Country, State } from 'country-state-city';
import Select from 'react-select';

export default function Customerinfo({
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    address, setAddress,
    country, setCountry,
    countryCode, setCountryCode,
    state, setState,
    stateCode, setStateCode,
    city, setCity
}) {

    const countries = Country.getAllCountries();
    const states = State.getStatesOfCountry(countryCode);

    function handleCountryChange(selectedOption) {
        setCountry(selectedOption);
        setCountryCode(selectedOption.value);
    }

    function handleStateChange(selectedOption) {
        setState(selectedOption.value);
        setStateCode(selectedOption.value);
    }

    return (
        <>
            <div className="customer-info-container">
                <h2>Customer Info</h2>
                <div className="input-container">
                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            id="firstName"
                            type="text" 
                            placeholder="First Name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
        
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            id="lastName"
                            type="text" 
                            placeholder="Last Name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
        
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input 
                            id="address"
                            type="text" 
                            placeholder="Address"
                            value={email}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                </div>

                <div className="location-container">
                    <div className="input-group">
                        <label htmlFor="country">Country</label>
                        <Select
                            options={countries.map((country) => ({
                            value: country.isoCode,
                            label: country.name,
                            }))}
                            className="options"
                            onChange={handleCountryChange}
                            value={country}
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    width: 200,
                                    height: 0,
                                    minHeight: 43,
                                })
                            }}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">State</label>
                        <Select
                            options = {states.map((state) => ({
                            value: state.isoCode,
                            label: state.name
                            }))}
                            className="options"
                            onChange={handleStateChange}
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    width: 200,
                                    height: 0,
                                    minHeight: 43,
                                })
                            }}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">City</label>
                        <input 
                            id="city"
                            type="email" 
                            placeholder="City" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                </div>
            </div>
        </>
      );
    }
