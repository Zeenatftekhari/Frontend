import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
  const navigate = useNavigate(); 
  // State for mobile number and verification flags
  const [mobileNumber, setMobileNumber] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isDetailsVerified, setIsDetailsVerified] = useState(false);
  
  // State for credentials
  const [credentials, setCredentials] = useState({
    name: '',
    address: '',
    ChairmanName: '',
    Chairmanemail: '',
    Wings: '',
    Pincode: '',
    MobileNumber: '',
  });

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    setMobileNumber(value);

    if (value.length === 12) {
      setIsVerified(true);
      setIsDetailsVerified(true);
    } else {
      setIsVerified(false);
      setIsDetailsVerified(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert('Enter Valid Credentials');
    }

   
    if (isDetailsVerified) {
      // Use Navigate to navigate to the Login page
      navigate('/Login');
    }
  };
  

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const buttonStyle = {
    width: '343px',
    height: '54px',
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.005px',
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10px'
  };

  const inputLayoutStyle = {
    width: '315px',
    height: '40px',
    flexShrink: 0,
  };

  const smallInputLayoutStyle = {
    width: '315px',
    height: '40px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle = {
    borderRadius: '40px',
    border: '1px solid #C47ECC',
    background: '#FFF',
    fontFamily: 'Inter',
    width: '100%',
    height: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize: '16px',
    lineHeight: '24px',
    marginLeft:'15px'
  };

  const inputWithMarginStyle = {
    ...inputStyle,
    marginTop: '20px',
  };

  const agreementLabelStyle = {
    color: '#6A6A6A',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '26px',
    marginLeft : '10px'
  };

  const infoLabelStyle = {
    color: '#6A6A6A',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    marginLeft : '25px'
  };

  const titleStyle = {
    width: '230px',
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '26px',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '5px',
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    marginTop: '60px',

  };

  const rectangleStyle = {
    width: '475px',
    height: '91.2px',
    flexShrink: 0,
    background: '#C47ECC',
    position: 'absolute',
    zIndex: -1,
    top: '0',
    left: '50%',
    transform: 'translatex(-50%)',
  };

  const circleStyle = {
    width: '100px',
    height: '100px',
    flexShrink: 0,
    position: 'absolute',
    zIndex: -1,
    top: '40px', // Adjust this value to position the circle
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: '#8C5CE3',
    marginBottom:'9px'
  };
  const overlappingCircleStyle = {
    width: '35px',
    height: '35px',
    flexShrink: 0,
    position: 'absolute',
    zIndex: -1,
    top: '110px', // Adjust these values for margins
    left: '205px',
    right: '124px',
    bottom: '667px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: '#D6B4FF',
  };

  const circleSvg1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path d="M9.9875 14.325C11.1958 14.325 12.2083 13.9167 13.025 13.1C13.8417 12.2833 14.25 11.2708 14.25 10.0625C14.25 8.85417 13.8417 7.84583 13.025 7.0375C12.2083 6.22917 11.1958 5.825 9.9875 5.825C8.77917 5.825 7.77083 6.22917 6.9625 7.0375C6.15417 7.84583 5.75 8.85417 5.75 10.0625C5.75 11.2708 6.15417 12.2833 6.9625 13.1C7.77083 13.9167 8.77917 14.325 9.9875 14.325ZM9.9875 12.825C9.19583 12.825 8.54167 12.5625 8.025 12.0375C7.50833 11.5125 7.25 10.8542 7.25 10.0625C7.25 9.27083 7.50833 8.61667 8.025 8.1C8.54167 7.58333 9.19583 7.325 9.9875 7.325C10.7792 7.325 11.4375 7.58333 11.9625 8.1C12.4875 8.61667 12.75 9.27083 12.75 10.0625C12.75 10.8542 12.4875 11.5125 11.9625 12.0375C11.4375 12.5625 10.7792 12.825 9.9875 12.825ZM1.5 18C1.1 18 0.75 17.85 0.45 17.55C0.15 17.25 0 16.9 0 16.5V3.675C0 3.29167 0.15 2.94583 0.45 2.6375C0.75 2.32917 1.1 2.175 1.5 2.175H5.175L7 0H13L14.825 2.175H18.5C18.8833 2.175 19.2292 2.32917 19.5375 2.6375C19.8458 2.94583 20 3.29167 20 3.675V16.5C20 16.9 19.8458 17.25 19.5375 17.55C19.2292 17.85 18.8833 18 18.5 18H1.5ZM1.5 16.5H18.5V3.675H14.125L12.3 1.5H7.7L5.875 3.675H1.5V16.5Z" fill="white" />
    </svg>
  )
  const circleSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
      <path d="M29.8498 48.6844C28.5687 48.6844 27.4922 48.2421 26.6203 47.3576C25.7484 46.473 25.3125 45.3902 25.3125 44.1091C25.3125 42.828 25.7548 41.7516 26.6393 40.8797C27.5239 40.0078 28.6067 39.5719 29.8877 39.5719C31.1688 39.5719 32.2453 40.0141 33.1172 40.8987C33.9891 41.7833 34.425 42.8661 34.425 44.1471C34.425 45.4282 33.9827 46.5047 33.0982 47.3766C32.2136 48.2484 31.1308 48.6844 29.8498 48.6844ZM51.1966 48.6844C49.9156 48.6844 48.8391 48.2421 47.9672 47.3576C47.0953 46.473 46.6594 45.3902 46.6594 44.1091C46.6594 42.828 47.1016 41.7516 47.9862 40.8797C48.8708 40.0078 49.9536 39.5719 51.2346 39.5719C52.5157 39.5719 53.5922 40.0141 54.4641 40.8987C55.3359 41.7833 55.7719 42.8661 55.7719 44.1471C55.7719 45.4282 55.3296 46.5047 54.4451 47.3766C53.5605 48.2484 52.4777 48.6844 51.1966 48.6844ZM40.5 69.1875C48.5086 69.1875 55.292 66.4046 60.8502 60.8388C66.4084 55.273 69.1875 48.4803 69.1875 40.4608C69.1875 39.0244 69.075 37.6031 68.85 36.1969C68.625 34.7906 68.3438 33.4969 68.0063 32.3156C66.8813 32.5969 65.6645 32.7938 64.356 32.9062C63.0476 33.0187 61.6768 33.075 60.2438 33.075C54.781 33.075 49.6185 31.95 44.7561 29.7C39.8937 27.45 35.7469 24.2437 32.3156 20.0813C30.4031 24.6375 27.6609 28.6172 24.0891 32.0203C20.5172 35.4234 16.425 38.0531 11.8125 39.9094V40.5C11.8125 48.5086 14.5916 55.292 20.1498 60.8502C25.708 66.4084 32.4914 69.1875 40.5 69.1875ZM40.5 74.25C35.8312 74.25 31.4438 73.3641 27.3375 71.5922C23.2312 69.8203 19.6594 67.4156 16.6219 64.3781C13.5844 61.3406 11.1797 57.7688 9.40781 53.6625C7.63594 49.5563 6.75 45.1688 6.75 40.5C6.75 35.8312 7.63594 31.4438 9.40781 27.3375C11.1797 23.2312 13.5844 19.6594 16.6219 16.6219C19.6594 13.5844 23.2312 11.1797 27.3375 9.40781C31.4438 7.63594 35.8312 6.75 40.5 6.75C45.1688 6.75 49.5563 7.63594 53.6625 9.40781C57.7688 11.1797 61.3406 13.5844 64.3781 16.6219C67.4156 19.6594 69.8203 23.2312 71.5922 27.3375C73.3641 31.4438 74.25 35.8312 74.25 40.5C74.25 45.1688 73.3641 49.5563 71.5922 53.6625C69.8203 57.7688 67.4156 61.3406 64.3781 64.3781C61.3406 67.4156 57.7688 69.8203 53.6625 71.5922C49.5563 73.3641 45.1688 74.25 40.5 74.25ZM32.7375 12.9094C37.6875 18.7031 42.2578 22.6687 46.4484 24.8062C50.6391 26.9438 55.2375 28.0125 60.2438 28.0125C61.5938 28.0125 62.6625 27.9844 63.45 27.9281C64.2375 27.8719 65.1094 27.7031 66.0656 27.4219C63.5344 22.8656 60.0891 19.125 55.7297 16.2C51.3703 13.275 46.2938 11.8125 40.5 11.8125C38.9813 11.8125 37.5469 11.925 36.1969 12.15C34.8469 12.375 33.6938 12.6281 32.7375 12.9094ZM12.5719 33.9188C15.2719 32.9062 18.3516 30.6141 21.8109 27.0422C25.2703 23.4703 27.7313 19.1531 29.1938 14.0906C24.3 16.2844 20.6016 19.0828 18.0984 22.4859C15.5953 25.8891 13.7531 29.7 12.5719 33.9188Z" fill="#D6B4FF" />
    </svg>
  );

  const topRectangleStyle = {
    width: '375px',
    height: '732px',
    flexShrink: 0,
    borderRadius: '10px 10px 0px 0px',
    background: '#FFF',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    position: 'absolute',
    zIndex: -2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
   const checkbox = {
    marginLeft: '1px'
   }
 

  return (
    <div style={formContainerStyle}>
      <div style={rectangleStyle}></div>
      <div style={circleStyle}>{circleSvg}</div>
      <div style={overlappingCircleStyle}>{circleSvg1}
      </div>
      <div style={topRectangleStyle}></div>
      <div style={titleStyle}>Create Your Account Here</div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3" style={inputLayoutStyle}>
          <input type="text" className="form-control" name="name" placeholder="Name" value= {credentials.name} onChange={onChange}style={inputStyle} />
        </div>
        <div className="mb-3" style={inputLayoutStyle}>
          <input type="text" className="form-control" name="address" placeholder="Address (Incl. Society Name, Flat Number)" value= {credentials.address} onChange={onChange} style={inputStyle} />
        </div>
        <div className="mb-3" style={inputLayoutStyle}>
          <input type="text" className="form-control" name="ChairmanName" placeholder="Society Chairman Name" value={credentials.ChairmanName} onChange={onChange} style={inputStyle} />
        </div>
        <div className="mb-3" style={inputLayoutStyle}>
          <input type="email" className="form-control" name="Chairmanemail" placeholder="Society Chairman's Email Address"  value= {credentials.Chairmanemail} onChange={onChange} style={inputStyle} />
          <span
            className="form-label"
            style={{
              color: '#F00',
              fontFamily: 'Inter',
              fontSize: '8px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '26px',
              marginLeft: '25px'
            }}
          >
            An address Verification mail will send to this email Id for approval
          </span>
        </div>
        <div className="mb-3" style={smallInputLayoutStyle}>
          <input
            type="text"
            className="form-control"
            name="Wings"
            placeholder="Wings"
            value= {credentials.Wings}
            onChange={onChange}
            style={inputWithMarginStyle}
          />
          <input
            type="text"
            className="form-control"
            name="Pincode"
            placeholder="Pincode"
            value= {credentials.Pincode}
            onChange={onChange}
            style={inputWithMarginStyle}
          />
        </div>
        <div className="mb-3" style={inputLayoutStyle}>
          <input
            type="text"
            className="form-control"
            name="MobileNumber"
             value= {credentials.MobileNumber}
             onChange={(event) => {
              handleMobileNumberChange(event);
              onChange(event)}}
            placeholder="Mobile Number"
            style={inputStyle}
          />
          <span style={infoLabelStyle}>(Enter your WhatsApp number for updates)</span>
        </div>
        <div className="mb-3">
          <div className="d-flex">
            <span
              className="text"
              style={{
                color: '#8C5CE3',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '26px',
                marginLeft:'26px'
              
              }}
            >
              {mobileNumber.length === 12 ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    style={{
                      width: '12px',
                      height: '9px',
                      flexShrink: 0,
                      fill: '#C47ECC',
                      marginLeft: '0px',
                    }}
                  >
                    <path d="M4.31998 9L12 1.64681L10.28 0L7.29998 2.85319L4.31998 5.70638L1.71998 3.21702L-1.98364e-05 4.86383L4.31998 9Z" fill="#C47ECC" />
                  </svg>
                  Verified{' '}
                </>
              ) : (
                'Verify'
              )}
            </span>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"  style={checkbox}/>
          <strong className="form-check-label" htmlFor="exampleCheck1" style={agreementLabelStyle}>
            Agree to our Terms and Conditions
          </strong>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isVerified}
          style={buttonStyle}
          onClick={handleFormSubmit} 
        >
          <span style={{ marginRight: '5px' }}>Proceed</span> <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
}