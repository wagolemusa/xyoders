import React, { Component } from 'react'
import Jobs from './nextpages/Jobs';
import Boss from './nextpages/Boss';
import Review from './nextpages/Review';

class RenderSteps extends Component{
    state = {
        step: 1,
        resoan: "",
        desc: "",
        url: "",
        money_spend: "",
        period: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company_name: "",
        company_size: ""
    };

    // Proceed to next step
    nextStep = () =>{
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }
    // Go Back to prev step
    prevStep = () =>{
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value });
    }

    render(){
        const { step } = this.state
        const { resoan, desc, url, money_spend, period, firstname, lastname, email, phone, company_name,
              company_size } = this.state

        const values = { resoan, desc, url, money_spend, period, firstname, lastname, email, phone, company_name,
                company_size }

        switch(step){
            case 1:
                return(
                    <Jobs
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <Boss 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <Review
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
                return(
                   <h1>
                       Thanks so much
                   </h1>
                )

        }
    }

}
export default RenderSteps;