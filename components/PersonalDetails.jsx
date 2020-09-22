import React from 'react';


class PersonalDetails extends React.Component {

        continue = (event) => {
            event.preventDefault();
            this.props.nextStep();
        }
   


    render(){
        const { values, handleChange,emailError,mobileError } = this.props;

        return(
            <form className="ui form">
                <br/>
                <h4 className="ui dividing header">Personal Details</h4>
                <div className="three wide field">
                <label>First Name</label>
                <input type="text" placeholder="First Name" onChange = {handleChange('firstName')} defaultValue = {values.firstName}/>
                </div>
                <div className="three wide field">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" onChange = {handleChange('lastName')} defaultValue = {values.lastName} />
                </div>
                <div className="three wide field">
                <label>DOB</label>
                <input type="date"placeholder="Date of Birth" onChange = {handleChange('dateOfBirth')} defaultValue = {values.dateOfBirth} />
                </div>
                <div className="three wide field">
                <label>Gender</label>
                <select onChange = {handleChange('gender')} defaultValue = {values.gender}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
                <div className="three wide field">
                <label>Mobile Number</label>
                <input type="number" placeholder="Mobile" onChange = {handleChange('mobileNumber')} defaultValue = {values.mobileNumber} />
                </div>
                <div>{mobileError}</div>
                <div className="three wide field">
                <label>Email ID</label>
                <input type="email" placeholder="Email ID" onChange = {handleChange('emailID')} defaultValue = {values.emailID} />
                </div>
                <div>{emailError}</div>
                <button className="ui blue button" onClick = {this.continue}>Continue</button>
             </form>
        )
}
}

export default PersonalDetails;