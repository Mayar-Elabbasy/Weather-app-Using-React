import React from 'react';

const Form = props =>{
    return(
     <div className="container">
        <form className="mt-5" onSubmit= {props.loadWeather}>
        <div>{props.error ? error() : null}</div>
            <div className="row">
                <div className="col-md-4">            
                    <input type="text"
                     className="form-control m-3"
                      name="city"
                      placeholder="City" 
                      autoComplete="on"/>
                </div> 
                <div className="col-md-4">
                    <input
                    type="text"
                    className="form-control m-3"
                    placeholder="Country"
                    name="country"
                    autoComplete="on"
                    />
                </div> 
                <div className="col-md-3 m-3">            
                    <button className="form-control btn btn-warning">Get Weather</button>
                </div>  
            </div>
        </form>
     </div>
    );
};

const error = props => {
    return(
        <div className="alert alert-danger mx-5">
            You have to fill the city field and the country field!!
        </div>
    );
};

export default Form;