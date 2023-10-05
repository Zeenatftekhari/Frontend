import React, { useState ,useRef } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';


const Otp = () => {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const containerWidth = 361;
  const containerHeight = 812;

  const buttonStyle = {
    width: `${containerWidth - 18}px`,
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
    marginTop: `${containerHeight * 0.246}px`,
  };

  const titleStyle = {
    width: '230px',
    color: '#C47ECC',
    fontFamily: 'Inter',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '20px',
    textAlign: 'center',
    margin: '4px',
    marginTop: `${containerHeight * 0.206}px`,
  };

  const subtitleStyle = {
    color: '#8C5CE3',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '26px',
    marginTop: `${containerHeight * 0.0049}px`,
  };

  const descriptionStyle = {
    color: '#6A6A6A',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    marginTop: '0px',
    textAlign: 'center',
  };

  const descriptionStyle2 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '26px',
    marginTop: '94px',
    textAlign: 'center',
  };
  

  const descriptionStyle1 = {
    color: '#8C5CE3',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '26px',
    border: 'none',
    background:'none',
    marginTop: '11px',
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
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
    transform: 'translateX(-50%)',
  };

  const circleStyle = {
    width: '100px',
    height: '100px',
    flexShrink: 0,
    position: 'absolute',
    zIndex: -1,
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: '#8C5CE3',
  };

  const circleSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
      <path d="M29.8498 48.6844C28.5687 48.6844 27.4922 48.2421 26.6203 47.3576C25.7484 46.473 25.3125 45.3902 25.3125 44.1091C25.3125 42.828 25.7548 41.7516 26.6393 40.8797C27.5239 40.0078 28.6067 39.5719 29.8877 39.5719C31.1688 39.5719 32.2453 40.0141 33.1172 40.8987C33.9891 41.7833 34.425 42.8661 34.425 44.1471C34.425 45.4282 33.9827 46.5047 33.0982 47.3766C32.2136 48.2484 31.1308 48.6844 29.8498 48.6844ZM51.1966 48.6844C49.9156 48.6844 48.8391 48.2421 47.9672 47.3576C47.0953 46.473 46.6594 45.3902 46.6594 44.1091C46.6594 42.828 47.1016 41.7516 47.9862 40.8797C48.8708 40.0078 49.9536 39.5719 51.2346 39.5719C52.5157 39.5719 53.5922 40.0141 54.4641 40.8987C55.3359 41.7833 55.7719 42.8661 55.7719 44.1471C55.7719 45.4282 55.3296 46.5047 54.4451 47.3766C53.5605 48.2484 52.4777 48.6844 51.1966 48.6844ZM40.5 69.1875C48.5086 69.1875 55.292 66.4046 60.8502 60.8388C66.4084 55.273 69.1875 48.4803 69.1875 40.4608C69.1875 39.0244 69.075 37.6031 68.85 36.1969C68.625 34.7906 68.3438 33.4969 68.0063 32.3156C66.8813 32.5969 65.6645 32.7938 64.356 32.9062C63.0476 33.0187 61.6768 33.075 60.2438 33.075C54.781 33.075 49.6185 31.95 44.7561 29.7C39.8937 27.45 35.7469 24.2437 32.3156 20.0813C30.4031 24.6375 27.6609 28.6172 24.0891 32.0203C20.5172 35.4234 16.425 38.0531 11.8125 39.9094V40.5C11.8125 48.5086 14.5916 55.292 20.1498 60.8502C25.708 66.4084 32.4914 69.1875 40.5 69.1875ZM40.5 74.25C35.8312 74.25 31.4438 73.3641 27.3375 71.5922C23.2312 69.8203 19.6594 67.4156 16.6219 64.3781C13.5844 61.3406 11.1797 57.7688 9.40781 53.6625C7.63594 49.5563 6.75 45.1688 6.75 40.5C6.75 35.8312 7.63594 31.4438 9.40781 27.3375C11.1797 23.2312 13.5844 19.6594 16.6219 16.6219C19.6594 13.5844 23.2312 11.1797 27.3375 9.40781C31.4438 7.63594 35.8312 6.75 40.5 6.75C45.1688 6.75 49.5563 7.63594 53.6625 9.40781C57.7688 11.1797 61.3406 13.5844 64.3781 16.6219C67.4156 19.6594 69.8203 23.2312 71.5922 27.3375C73.3641 31.4438 74.25 35.8312 74.25 40.5C74.25 45.1688 73.3641 49.5563 71.5922 53.6625C69.8203 57.7688 67.4156 61.3406 64.3781 64.3781C61.3406 67.4156 57.7688 69.8203 53.6625 71.5922C49.5563 73.3641 45.1688 74.25 40.5 74.25ZM32.7375 12.9094C37.6875 18.7031 42.2578 22.6687 46.4484 24.8062C50.6391 26.9438 55.2375 28.0125 60.2438 28.0125C61.5938 28.0125 62.6625 27.9844 63.45 27.9281C64.2375 27.8719 65.1094 27.7031 66.0656 27.4219C63.5344 22.8656 60.0891 19.125 55.7297 16.2C51.3703 13.275 46.2938 11.8125 40.5 11.8125C38.9813 11.8125 37.5469 11.925 36.1969 12.15C34.8469 12.375 33.6938 12.6281 32.7375 12.9094ZM12.5719 33.9188C15.2719 32.9062 18.3516 30.6141 21.8109 27.0422C25.2703 23.4703 27.7313 19.1531 29.1938 14.0906C24.3 16.2844 20.6016 19.0828 18.0984 22.4859C15.5953 25.8891 13.7531 29.7 12.5719 33.9188Z" fill="#D6B4FF"/>
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

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    
    const otp = otpValues.join('');
    
    if (window.confirmationResult) {
      window.confirmationResult.confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          alert('OTP Verified');
          navigate('/home');
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          alert('Invalid OTP. Please try again.');
        });
    } else {
      alert('Error verifying OTP. Please try again.');
    }
  };
  

  const OtpInput = ({ index }) => {
    const handleChange = (e) => {
      const value = e.target.value;
      if (value.match(/^\d*$/)) {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);
        if (value !== '' && index < 3) {
          inputRefs[index + 1].current.focus();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Backspace' && otpValues[index] === '') {
        if (index > 0) {
          inputRefs[index - 1].current.focus();
        }
      }
    };

    return (
      <input
        ref={inputRefs[index]}
        type="text"
        value={otpValues[index]}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={1}
        style={{
          width: '50px',
          height: '50px',
          flexShrink: 0,
          borderRadius: '9.5px',
          border: '1px solid #C47ECC',
          textAlign: 'center',
          fontSize: '24px',
          margin: '0 5px',
        }}
      />
    );
  };

  const ResendButton = () => {
    const handleResendClick = () => {
      alert('OTP Resent');
    };

    return (
      <button type="button" style={descriptionStyle1} onClick={handleResendClick}>
        RESEND
      </button>
    );
  };

  return (
    <div style={formContainerStyle}>
      <div style={rectangleStyle}></div>
      <div style={circleStyle}>{circleSvg}</div>
      <div style={topRectangleStyle}></div>
      <div style={titleStyle}>Hello</div>
      <div style={subtitleStyle}>User Name</div>
      <div style={descriptionStyle2}>OTP Verification</div>
      <div style={descriptionStyle}>Enter the OTP Sent to Registered Phone number & Email ID</div>
      <form onSubmit={handleOtpSubmit}>
       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '11px', marginTop: '27px' }}>
          <OtpInput index={0} />
          <OtpInput index={1} />
          <OtpInput index={2} />
          <OtpInput index={3} />
        </div>
        <div style={descriptionStyle}>
          Didn’t Receive the OTP? <ResendButton />
        </div>
        <button type="submit" className="btn btn-primary" style={buttonStyle}>
          <span style={{ marginRight: '5px' }}>Verify & Continue</span> <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

export default Otp;