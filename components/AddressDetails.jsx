import React from 'react';


class AddressDetails extends React.Component {

    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    previous = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }
    


    render(){
        const {values,handleChange} = this.props;
        return(
            <form className="ui form">
            <br/>
            <h4 className="ui dividing header">Address</h4>
            <div className="three wide field">
            <label>Communication Address</label>
            <input type="text" placeholder="Address Line 1" onChange = {handleChange('line1')} defaultValue = {values.line1}/>
            </div>
            <div className="three wide field">
            <label></label>
            <input type="text" placeholder="Address Line 2" onChange = {handleChange('line2')} defaultValue = {values.line2} />
            </div>
            <div className="three wide field">
            <label>Pincode</label>
            <input type="Number" placeholder="pincode" onChange = {handleChange('pincode')} defaultValue = {values.pincode} />
            </div>
            <div className="three wide field">
            <label>City</label>
            <input type="text"  placeholder="city" onChange = {handleChange('city')} defaultValue = {values.city} />
            </div>
            <button className="ui blue button" onClick = {this.previous}>Back</button>
            <button className="ui blue button" onClick = {this.continue}>continue</button>
         </form>
        )
    }
}


export default AddressDetails;