import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bikeData from '../data/database.json';
import './EnquiryForm.css';
import { Link } from 'react-router-dom';


const EnquiryForm = ({ bikeId: propBikeId, onBack }) => {
  const { bikeId: routeBikeId } = useParams();
  const bikeId = propBikeId || routeBikeId;

  useEffect(() => {
    console.log('Bike ID:', bikeId);
  }, [bikeId]);

  const bike = bikeData.bikes.find((b) => b.id === bikeId);

  if (!bike) {
    return <div>Bike not found!</div>;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    window.alert("Your form has been submitted successfully...");
    if (onBack) onBack(); // Go back to HeroSlider after submit
  };

  return (
    <div className="main-div-form" style={{
        backgroundColor:bike.formBgColor,
        }}>
            <div style={{
                display:'inline-block',
                backgroundColor:'rgb(13, 70, 81)',
                padding: '5px',
                border:'none',
                textDecoration: 'none',
                marginLeft:'0px',
                marginTop:'0px',
                marginBottom:'5px',
                marginRight:'0px',
                writingMode:'horizontal-tb',
            }}>
            <Link  className="menubar3 mr-l">About Me  |</Link>
        <Link className="menubar3" >Features   |</Link>
        <Link className="menubar3">Specification  |</Link>
        <Link className="menubar3">Colors  |</Link>
        <Link className="menubar3">Enquiry</Link>
        <Link className="menubar3">
            <img src={bike.headerLogo} alt={bike.id} width={bike.width}/>
        </Link>
    </div>
    <h3 align="left" className='h3css'>Enquiry</h3>
    <h3 className='h3css'>Home/Enquiry</h3>
{/*Form */}
    <div
      className='en-div-form'
      style={{
        // display:'flex',
        // border:'2px solid',
        backgroundColor: bike.formBgColor,
        //backgroundSize:'cover',
        //backgroundPosition:'center',
        //padding: '2rem',
      }}>
    
    {/* <div
      style={{width:'50%', gap:'2rem', display:'flex',border:'2px solid'}}>
           Left column with full image */}
            <div className="en-div2-form">
              <div className="en-bgimg"> {/*style={{ display:'flex',justifyContent:'center',alignItems:'center'}}> */}
                <img className="mr-img"
                    src={bike.formBgImg} 
                    alt="Bike" 
                    height='500px'
                    width='500px'/>
                    {/* style={{
                    //     marginLeft:'100px',
                    //     width:'150%',
                    //     height:'auto',
                    //     objectFit:'contain',
                    //     borderRadius:'10px',
                    //     boxShadow:'0 4px 10px rgba(0,0,0,0.3)',}} */}
                    </div>
                </div>
                <br/>
    {/* <div style={{flex:1,border:'2px solid'}}>
    <h2>Enquiry for {bike.name}</h2> */}
      {/* <form onSubmit={submitHandler}>
        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Mobile Number" required />
        <select required>
          <option value="">Select State</option>
          {bikeData.states.map((state, i) => (
            <option key={i} value={state}>{state}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form> */}
      <form className="enquiryform1" onSubmit ={submitHandler}>
            <div className="basicdiv formdiv1">
                <label className="labeling" htmlFor="name">Your Name <span className="redasterisk">*</span>
                </label>
                <select name="title"
                        className="leftmargin">
                    
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                </select>

                <input type="text" 
                      name="name" 
                      required
                      size="25"/>
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="email_id"  className="labeling">Your Email ID</label>
                <input type="email" 
                      name="email_id" 
                      className="leftmargin"
                      size="31"/>
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="state" className="labeling">State<span className="redasterisk">*</span>
                </label>
                <select 
                  className="ddstate" 
                  required
                >

                    {bikeData.states.map((state, i)=>(
                    <option key={i} value={state}>{state}
                    </option>
                  ))}
                </select>
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="city"  className="labeling">City<span className="redasterisk">*</span>
                </label>
                <input 
                  type="text" 
                  name="city"
                  className="lm-city"
                  required
                />
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="dealer" className="labeling">Dealer<span className="redasterisk">*</span>
                </label>
                <input 
                  type="text"
                  name="dealer"
                  className="lm-dealer"
                  required
                />
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="mobile" className="labeling">Mobile<span className="redasterisk">*</span>
                </label>
                <input 
                  type="tel"
                  name="mobile"
                  className="lm-dealer"
                  pattern="[]0-9]{10}"
                  required
                />
                <input type="submit" value="Get OTP" disabled/>
            </div>

            <div className="basicdiv formdiv2 captchadiv">
                <label 
                  htmlFor="captcha"
                  className="labeling lm-captcha">Captcha</label>
                <img 
                  id="captchaImage"
                  alt=""
                  src="/Enquiry/CaptchaImage"
                  className="captcha-image"
                />
                <span>
                    <Link onClick={(e) => e.preventDefault()}>
                        <img 
                          src="https://www.honda2wheelersindia.com/assets/images/refresh.gif" 
                          alt="captcha"
                        />
                    </Link>
                </span>
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="captchacode" className="labeling">Captcha Code<span className="redasterisk">*</span>
                </label>
                <input 
                  type="text"
                  name="captchacode"
                  className="lm-cc"
                  required
                />
            </div>

            <div className="basicdiv chk">
                <h6 className="agree-chk">
                    <input 
                      type="checkbox"
                      className="chk-bg"
                      checked
                    />
                    I agree to the terms and conditions
                </h6>
            </div>

            <div className="basicdiv chk">
                <button type="submit" className="btn-submit lm-btn">Submit</button>
                <button type="button" className="btn-submit lm-btn">Reset</button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default EnquiryForm;
