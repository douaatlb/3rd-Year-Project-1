import React, { Component } from 'react'
import "./SignUp.css";

import Header from '../partiels/Header';
import Footer from '../partiels/Footer';
export class SignUp extends Component {
    render() {
        return (
           <div className="App">
               <Header/>
 <div className="container">
              <div className="d-flex justify-content-center h-100">
        <div className="card">
            <div className="card-header">
                <h3>Sign Up</h3>
            </div>
            <div className="card-body">
               
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="First name"/>
                        
                    </div>
                     </div>
                     
                        <div className="col-xs-12 col-sm-6 col-md-6">
                    
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="field"/>
                        
                    </div>
                    </div>
                    
                        <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Specialty"/>
                    </div>
                    </div>
                    </div>
                    

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        
                        <input type="text" className="form-control" placeholder="Email"/>
                        
                        
                    </div>



                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                  
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="password"/>
                        
                    </div>
                    </div>
                    
                        <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="Re-type password"/>
                    </div>
                    </div>
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Adress"/>
                        
                    </div>

                    <label> <h3>Birth Date</h3> </label>                    <div className="row">
                        <div className="col-xs-4 col-md-4">
                            <select name="month" className = "form-control input-lg">
<option value="01">Jan</option>
<option value="02">Feb</option>
<option value="03">Mar</option>
<option value="04">Apr</option>
<option value="05">May</option>
<option value="06">Jun</option>
<option value="07">Jul</option>
<option value="08">Aug</option>
<option value="09">Sep</option>
<option value="10">Oct</option>
<option value="11">Nov</option>
<option value="12">Dec</option>
</select>                        </div>
                        <div className="col-xs-4 col-md-4">
                            <select name="day" className = "form-control input-lg">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select>                        </div>
                        <div className="col-xs-4 col-md-4">
                            <select name="year" className = "form-control input-lg">
<option value="1935">1935</option>
<option value="1936">1936</option>
<option value="1937">1937</option>
<option value="1938">1938</option>
<option value="1939">1939</option>
<option value="1940">1940</option>
<option value="1941">1941</option>
<option value="1942">1942</option>
<option value="1943">1943</option>
<option value="1944">1944</option>
<option value="1945">1945</option>
<option value="1946">1946</option>
<option value="1947">1947</option>
<option value="1948">1948</option>
<option value="1949">1949</option>
<option value="1950">1950</option>
<option value="1951">1951</option>
<option value="1952">1952</option>
<option value="1953">1953</option>
<option value="1954">1954</option>
<option value="1955">1955</option>
<option value="1956">1956</option>
<option value="1957">1957</option>
<option value="1958">1958</option>
<option value="1959">1959</option>
<option value="1960">1960</option>
<option value="1961">1961</option>
<option value="1962">1962</option>
<option value="1963">1963</option>
<option value="1964">1964</option>
<option value="1965">1965</option>
<option value="1966">1966</option>
<option value="1967">1967</option>
<option value="1968">1968</option>
<option value="1969">1969</option>
<option value="1970">1970</option>
<option value="1971">1971</option>
<option value="1972">1972</option>
<option value="1973">1973</option>
<option value="1974">1974</option>
<option value="1975">1975</option>
<option value="1976">1976</option>
<option value="1977">1977</option>
<option value="1978">1978</option>
<option value="1979">1979</option>
<option value="1980">1980</option>
<option value="1981">1981</option>
<option value="1982">1982</option>
<option value="1983">1983</option>
<option value="1984">1984</option>
<option value="1985">1985</option>
<option value="1986">1986</option>
<option value="1987">1987</option>
<option value="1988">1988</option>
<option value="1989">1989</option>
<option value="1990">1990</option>
<option value="1991">1991</option>
<option value="1992">1992</option>
<option value="1993">1993</option>
<option value="1994">1994</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="1998">1998</option>
<option value="1999">1999</option>
<option value="2000">2000</option>
<option value="2001">2001</option>
<option value="2002">2002</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2005">2005</option>
<option value="2006">2006</option>
<option value="2007">2007</option>
<option value="2008">2008</option>
<option value="2009">2009</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
</select>                        
</div>
     </div> 
   <br></br> <br></br> <br></br> <br></br>    
                    <div className="form-group">
                        <input type="submit" value="SIGN UP" className="btn float-right login_btn"/>
                    </div>
            
               
               
                
            </div>
            
            <div className="card-footer">
                <div className="d-flex justify-content-center links">
                    Share your experience with us !
                </div>
                
            </div>
        </div>
    </div>
</div>
<Footer/> 
</div>
        )
    }
}

export default SignUp
