import React, { Component} from 'react'

class Jobs extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    render(){
        const { values, handleChange} = this.props;
        return(
            <>
                <div className="Login__content">
                    <div className="sign-page_jobs">
                    <h1>Tell us about your Project</h1>
                    <br/>
                    <form>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">What do you need? (Example: I need a website)</label>
                            <input type="text"  name="resoan" id="form5Example1" class="form-control" 
                             
                             onChange={handleChange('resoan')}
                                 defaultValue={values.resoan}
                            />
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">
                        Give a brief description about the project here.
                        </label>
                        <textarea  type="text"  name="desc" class="form-control" id="form4Example3" rows="4"
                            onChange={handleChange('desc')}
                            defaultValue={values.desc}
                         ></textarea>
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">
                        Do you have a link/URL to an already existing project or something similar?<br/>
                        (Enter only one URL. Example http://www.google.com or leave it blank) 
                        </label>
                            <input type="text" name="url" id="form5Example1" class="form-control" 
                                onChange={handleChange('url')}
                                defaultValue={values.url}
                            />
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">How much would you be willing to spend?</label>
                            <select class="select" name="money_spend" 
                            onChange={handleChange('money_spend')}
                            defaultValue={values.money_spend}
                            >
                            <option>KES 20,000 - 50,000</option>
                            <option>KES 50,000 - 100,000</option>
                            <option>KES 100,000 - 500,000</option>
                            <option>KES 500, 000 - 1,000,000</option>
                            <option>I Don't Know</option>
                            </select>
                           
                        </div>
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example2">
                        How soon do you need this done? (Example: 6 weeks, 4 months)
                        </label>
                            <input type="text" name="period" class="form-control" 
                              onChange={handleChange('period')}
                              defaultValue={values.period}     
                            />
                          
                        </div>
                        <button type="submit" class="btn btn--orange"  onClick={this.continue}>Next</button>
                    </form>
                  
                       
                    </div>
                </div>

            </>
        )
    }
}

export default Jobs;