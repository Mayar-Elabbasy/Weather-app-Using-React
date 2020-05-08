import React from 'react';

const Form = props =>{
    return(
     <div className="container">
        <form className="m-5 bg-warning p-1" onSubmit= {props.loadWeather}>
        <div>{props.error ? error() : null}</div>
            <div className="row">
                <div className="col-md-4 m-2">            
                    <input type="text"
                     className="form-control text-info"
                      name="city"
                      placeholder="City" 
                      autoComplete="on"/>
                </div> 
                <div className="col-md-4 m-2">
                    <input
                    type="text"
                    className="form-control text-info"
                    placeholder="Country"
                    name="country"
                    autoComplete="on"
                    />
                </div> 
                <div className="col-md-3 m-2">            
                    <button className="form-control btn btn-info">Get Weather</button>
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