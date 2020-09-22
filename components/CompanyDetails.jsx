import React from 'react';


class CompanyDetails extends React.Component {

    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    previous = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }
    


    render(){
        const { values, handleChange } = this.props;
        return(
            <form className="ui form">
            <br/>
            <h4 className="ui dividing header">Company Details</h4>
            <div className="three wide field">
            <label>Company Name</label>
            <input type="text" placeholder="Company Name" onChange = {handleChange('companyName')} defaultValue = {values.companyName}/>
            </div>
            <div className="three wide field">
            <label>Designation </label>
            <input type="text" placeholder="Designation" onChange = {handleChange('designation')} defaultValue = {values.designation} />
            </div>
            <div className="three wide field">
            <label>Years of Experience</label>
            <input type="Number" placeholder="Experience" onChange = {handleChange('experience')} defaultValue = {values.experience} />
            </div>
            <div className="three wide field">
            <label>Annual Income</label>
            <div class="ui right labeled input">
                <label class="ui label">&#8377;</label>
                <input type="number"  placeholder="Income" onChange = {handleChange('income')} defaultValue = {values.income} />
                <div class="ui basic label">.00</div>
            </div>
            </div>
            <button className="ui blue button" onClick = {this.previous}>Back</button>
            <button className="ui blue button" onClick = {this.continue}>Continue</button>
         </form>
        )
    }
}


export default CompanyDetails;