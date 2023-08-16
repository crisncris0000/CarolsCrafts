import React from 'react';
import { Country, State } from 'country-state-city';
import Select from 'react-select';
import { useSelector } from 'react-redux';

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

    const user = useSelector((state) => state.user.value);

    return (
        <>
            <div className="customer-info-container">
                <h2>Customer Info</h2>
                <div className="input-container">
                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                        {user.isGuest ? <input 
                            id="firstName"
                            type="text" 
                            placeholder="First Name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        /> 
                        
                        : 
                        
                        <input 
                            id="firstName"
                            type="text" 
                            placeholder={user.firstName}
                            value={user.firstName}
                            disabled
                        />
                        } 
                    </div>
        
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        {user.isGuest ? <input 
                            id="lastName"
                            type="text" 
                            placeholder="Last Name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                            
                        :
                        
                        <input 
                            id="lastName"
                            type="text" 
                            placeholder={user.lastName}
                            value={user.lastName}
                            disabled
                        />

                        }
                    </div>
        
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        {user.isGuest ? <input 
                            id="email"
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    
                        :

                        <input 
                            id="email"
                            type="email" 
                            placeholder={user.email}
                            value={user.email}
                            disabled
                        />
                        }
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input 
                            id="address"
                            type="text" 
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
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
                            required
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
                            type="text" 
                            placeholder="City" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>

                </div>
            </div>
        </>
      );
    }
