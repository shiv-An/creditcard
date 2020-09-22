import React from 'react';


class Confirmation extends React.Component {


    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    previous = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

  render(){
      const {values} = this.props;
    return (
        <div>
        <div class="ui very relaxed horizontal list">
            <h1>Confirm Details</h1>
            <br/>
             <div className="item">
                <div class="header">Full Name</div>
               {`${values.firstName} ${values.lastName}`}
            </div>
        <div className="item">
            <div className="header">DOB</div>
            {values.dateOfBirth}
        </div>
        <div className="item">
            <div className="header">Gender</div>
            {values.gender}
        </div>
        <div className="item">
            <div className="header">Mobile</div>
            {values.mobileNumber}
        </div>
        <div className="item">
            <div className="header">Email ID</div>
            {values.emailID}
        </div>
        <div className="item">
            <div className="header">Company Name</div>
            {values.companyName}
        </div>
        <div className="item">
            <div className="header">Designation</div>
            {values.designation}
        </div>
        <br/>
        <div className="item">
            <div className="header">Years of Experience</div>
            {values.experience}
        </div>
        <div className="item">
            <div className="header">Annual Income</div>
            {values.income}
        </div>
        <div className="item">
            <div className="header">Address</div>
            {`${values.line1},${values.line2},${values.city}.${values.pincode}`}
        </div>
        </div> 
        <br/>
        <br/>
        <button className="ui blue button" onClick = {this.previous}>Back</button>
        <button className="ui blue button" onClick = {this.continue}>Confirm</button>
        </div>
    )
  }
}

export default Confirmation;