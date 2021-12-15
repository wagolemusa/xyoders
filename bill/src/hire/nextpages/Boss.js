import React, { Component} from 'react'

class Boss extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { values, handleChange} = this.props;
        return(
            <>
                <div className="Login__content">
                    <div className="sign-page_jobs">
                    <h1>Provide Your contact details</h1>
                    <br/>
                    <form>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">Your first name</label>
                            <input type="text" name="firstname" id="form5Example1" class="form-control" 

                                 onChange={handleChange('firstname')}
                                 defaultValue={values.firstname}     
                            />
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">
                        Your last name
                        </label>
                        <input  type="text" name="lastname" class="form-control" id="form4Example3" rows="4"
                           onChange={handleChange('lastname')}
                           defaultValue={values.lastname}
                        />
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">
                        Email
                        </label>
                            <input type="email" name="email" id="form5Example1" class="form-control" 
                                onChange={handleChange('email')}
                                defaultValue={values.email}  
                            />
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">
                        Phone Number
                        </label>
                            <input type="number" name="phone" id="form5Example1" class="form-control class2" 
                                  onChange={handleChange('phone')}
                                  defaultValue={values.phone}    
                            />
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">
                        What's the name of your company?
                        </label>
                            <input type="text" name="company_name" id="form5Example1" class="form-control" 
                                onChange={handleChange('company_name')} 
                                defaultValue={values.company_name}
                            />
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">What is the size of the company?</label>
                            <select class="select" name="company_size" onChange={handleChange('company_size')} defaultValue={values.company_size}>
                                <option>1 - 10 employess</option>
                                <option>11 - 100 employess</option>
                                <option>100 - 1000 employess</option>
                                <option>1000 - 100,0000 employess</option>
                                <option>10000 + employess</option>
                            </select>
                           
                        </div>
                       
                        <button type="submit" class="btn btn--orange" onClick={this.continue}>Next</button>
                        <button type="submit" class="btn btn--orange_signup" onClick={this.back}>Back</button>

                    </form>
                  
                       
                    </div>
                </div>
 
            </>
        )
    }
}

export default Boss;