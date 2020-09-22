import React from 'react';
import PersonalDetails from './PersonalDetails';
import CompanyDetails from './CompanyDetails';
import AddressDetails from './AddressDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class CreditCardDetails extends React.Component {

    state = {
        step : 1,
        firstName : '',
        lastName:'',
        dateOfBirth : '',
        gender : '',
        mobileNumber: null,
        emailID: '',
        companyName: '',
        designation : '',
        income: null,
        experience: null,
        line1:'',
        line2:'',
        pincode:'',
        city:'',
        emailError:'',
        mobileError:''
    }

    validate = () => {

        let regx = /[7-9]\d{9}/;
        let regx1 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
        
        if(!regx1.test(this.state.emailID)) {
            this.setstate({emailError: 'Invalid Email ID'})
        }

        if(!regx.test(this.state.mobileNumber)){
            this.setState({mobileError:'Invalid Mobile Number'})
        }

    }
    nextStep = () => {
        const { step } = this.state;
        //this.validate();
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = (input) => {
       return (event) => {this.setState({[input]:event.target.value})}
    }



    render(){
        const { step } = this.state;
        const { firstName, lastName, dateOfBirth,gender,mobileNumber,emailID,companyName,designation,experience,income ,line1,line2,pincode,city } = this.state;
        const values = {  firstName, lastName, dateOfBirth,gender,mobileNumber,emailID, companyName,designation,experience,income,line1,line2,pincode,city };

        switch(step){
            case 1:
                return(
                    <PersonalDetails
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    emailError = {this.state.emailError}
                    mobileError = {this.state.mobileError}
                    values = {values}
                    />
                )
            case 2:
                return(
                    <CompanyDetails
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    />
                )
            case 3:
                return(
                    <AddressDetails
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    />
                )  
            case 4:
                return(
                    <Confirmation
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    />
                ) 
                case 5:
                return(
                    <Success />
                )      
            default:
      }
}
}

export default CreditCardDetails;