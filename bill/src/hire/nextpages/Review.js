import React, { Component} from 'react'

class Review extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    handleSubmit = (e) => {

        e.preventDefault()
        console.log(this.props);
        fetch ('http://localhost:5000/api/jobs',{
            method: 'POST',
            body: JSON.stringify(this.props.values),
            headers: {
                'Content-Type' : 'application/json',
                "Accept":"application/json",
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            document.getElementById("error").innerHTML = data["message"]
        })
        .catch(error => console.log('error:', error));
    }

    render(){
 
        const{ values : { resoan, desc, url, money_spend, period, firstname, lastname, email, phone, company_name,
            company_size }} = this.props

        return(
            <>
           <div class="container">
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="accordion" class="checkout">
                                <div class="panel checkout-step">
                                    <div> 
                                    <h4 class="checkout-step-title"> 
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" > Summary Details</a></h4>
                                    </div>

                                    <ul class="list-group">
                                    <li class="list-group-item">{ resoan}</li>
                                        <li class="list-group-item">{desc }</li>
                                        <li class="list-group-item">{url}</li>
                                        <li class="list-group-item">{money_spend}</li>
                                        <li class="list-group-item">{period}</li>
                                        <li class="list-group-item">{firstname}</li>
                                        <li class="list-group-item">{lastname}</li>
                                        <li class="list-group-item">{email}</li>
                                        <li class="list-group-item">{phone}</li>
                                        <li class="list-group-item">{company_name}</li>
                                        <li class="list-group-item">{company_size}</li>
                                    </ul>
                                    </div>
                            </div>
                            <button type="submit" class="btn btn--orange">Save</button>
                            <button type="submit" class="btn btn--orange_signup" onClick={this.back}>Back</button>
                           
                        </div>
                    </div>
                </form>
                
            </div>

            </>
        )
    }
}

export default Review;