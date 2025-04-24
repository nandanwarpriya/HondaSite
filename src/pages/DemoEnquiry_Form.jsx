import React from "react";

const states = [
    {id:"",name:"Select State"},
    { id: "1", name: "Andaman and Nicobar" },
    { id: "2", name: "Andhra Pradesh" },
    { id: "3", name: "Arunachal Pradesh" },
    { id: "4", name: "Assam" },
    { id: "5", name: "Bihar" },
    { id: "6", name: "Chandigarh" },
    { id: "7", name: "Chattisgarh" },
    { id: "8", name: "Dadra and Nagar Haveli" },
    { id: "9", name: "Delhi" },
    { id: "10", name: "Goa" },
    { id: "11", name: "Gujarat" },
    { id: "12", name: "Haryana" },
    { id: "13", name: "Himachal Pradesh" },
    { id: "14", name: "Jammu and Kashmir" },
    { id: "15", name: "Jharkhand" },
    { id: "16", name: "Karnataka" },
    { id: "17", name: "Kerala" },
    { id: "18", name: "Madhya Pradesh" },
    { id: "19", name: "Maharashtra" },
    { id: "20", name: "Manipur" },
    { id: "36", name: "Meghalaya" },
    { id: "21", name: "Mizoram" },
    { id: "22", name: "Nagaland" },
    { id: "23", name: "Odisha" },
    { id: "24", name: "Pondicherry" },
    { id: "25", name: "Punjab" },
    { id: "26", name: "Rajasthan" },
    { id: "28", name: "Tamil Nadu" },
    { id: "29", name: "Telangana" },
    { id: "30", name: "Tripura" },
    { id: "31", name: "Uttar Pradesh" },
    { id: "32", name: "Uttarakhand" },
    { id: "34", name: "West Bengal" },
  ];
  

export default function Enquiry_Form({bikeName = "Vehicle"}){
  const [formData, setFormData] = useState({
    title:"Mr.",
    name: "",
    email:"",
    state:"",
    city:"",
    dealer:"",
    mobile:"",
    captcha:"",
    terms: true,
  });

  const handleChange = (e) => {
    const {name,value,type,checked } =e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:type === "checkbox" ? checked :value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.terms){
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("Enquiry submitted:",formData);
    alert(`Thank you for your enquiry about ${bikeName}. We'll contact you soon!`);

    //clear the form
    setFormData({
      title: "Mr.",
    name: "",
    email: "",
    state: "",
    city: "",
    dealer: "",
    mobile: "",
    captcha: "",
    terms: true,
    });
  };

  const handleReset =() => {
    setFormData({
      title: "Mr.",
    name: "",
    email: "",
    state: "",
    city: "",
    dealer: "",
    mobile: "",
    captcha: "",
    terms: true,
    });
  };

    return(
        <div>
        <form className="enquiryform1" onSubmit ={handleSubmit}>
            <div className="basicdiv formdiv1">
                <label className="labeling" htmlFor="name">Your Name <span className="redasterisk">*</span>
                </label>
                <select name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="leftmargin">
                    
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                </select>

                <input type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      required
                      size="25"/>
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="email_id"  className="labeling">Your Email ID</label>
                <input type="email" 
                      name="email_id" 
                      className="leftmargin"
                      value={formData.email}
                      onChange={handleChange}
                      size="31"/>
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="state" className="labeling">State<span className="redasterisk">*</span>
                </label>
                <select 
                  className="ddstate"
                  name="state" 
                  value={formData.state}
                  onChange={handleChange}
                  required
                >

                  {states.map(({id,name})=>(
                    <option key={id} value={id}>
                      {name}
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
                  value={formData.city}
                  onChange={handleChange}
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
                  value={formData.dealer}
                  onChange={handleChange}
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
                  value={formData.mobile}
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
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <img 
                          src="https://www.honda2wheelersindia.com/assets/images/refresh.gif" 
                          alt="captcha"
                        />
                    </a>
                </span>
            </div>

            <div className="basicdiv formdiv2">
                <label htmlFor="captchacode" className="labeling">Captcha Code<span className="redasterisk">*</span>
                </label>
                <input 
                  type="text"
                  name="captchacode"
                  className="lm-cc"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                />
            </div>

            <div className="basicdiv chk">
                <h6 className="agree-chk">
                    <input 
                      type="checkbox"
                      className="chk-bg"
                      checked={formData.terms}
                      onChange={handleChange}
                    />
                    I agree to the terms and conditions
                </h6>
            </div>

            <div className="basicdiv chk">
                <button type="submit" className="btn-submit lm-btn">Submit</button>
                <button 
                  type="button" 
                  className="btn-submit"
                  onClick={handleReset}>Reset</button>
            </div>
        </form>
        </div>
    );
}