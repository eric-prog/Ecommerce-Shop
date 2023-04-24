import { RootState } from "../store"
import { useState, useRef, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { setFirstName, setLastName, setEmail, setBillingStatus, setProfileImg } from "../slices/accountSlice"
import { useDispatch } from "react-redux"
import Webcam from 'react-webcam'


export default function Account() {
  const dispatch = useDispatch()
  const { firstName, lastName, email, billingStatus, profileImg } = useSelector((store: RootState) => store.account)

  const webcamRef = useRef<any>();

  const [willCapture, setWillCapture] = useState(false)

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setProfileImg(imageSrc))
    setWillCapture(false)
  }

  useEffect(() => {

  }, [willCapture])

  const determineCapture = () => {
    if (willCapture == false) {
      setWillCapture(true)
    } else {
      capture()
      setWillCapture(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
        <p className="text-4xl">Account</p>
        <div className="flex flex-row w-full mt-10 justify-center items-center">
            <div className="flex flex-col flex-1 justify-center items-center">
              {willCapture ?
              <>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="w-[60vh] h-[60vh] rounded-full object-cover border-8 border-green-400/50"
                />
                <button className="mt-8 bg-green-200 text-green-700 py-2 px-7 text-lg rounded-lg" onClick={() => determineCapture()}>Take Photo</button>
              </>  
              :
              <>
                {profileImg != "" ? 
                  <img className="w-[60vh] h-[60vh] rounded-full object-cover border-8 border-green-400/50" src={profileImg} alt="" /> 
                  :  
                  <div className="w-[60vh] h-[60vh] rounded-full bg-green-400"></div>
                }
                <button className="mt-8 bg-green-200 text-green-700 py-2 px-7 text-lg rounded-lg" onClick={() => determineCapture()}>Update Picture</button>
              </>
              }
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="flex flex-row items-center justify-center my-3">
                <label className="w-1/6 mr-6 text-lg justify-self-start">First Name:</label>
                <input
                  className="justify-self-end text-lg bg-gray-200 p-4 rounded-lg focus:outline-none w-[40vh]" 
                  type="text" 
                  onChange={(e) => dispatch(setFirstName(e.target.value))}
                  value={firstName}
                />
              </div>
              <div className="flex flex-row items-center justify-center my-3">
                <label className="w-1/6 mr-6 text-lg justify-self-start">Last Name:</label>
                <input
                  className="justify-self-end text-lg bg-gray-200 p-4 rounded-lg focus:outline-none w-[40vh]" 
                  type="text" 
                  onChange={(e) => dispatch(setLastName(e.target.value))}
                  value={lastName}
                />
              </div>
              <div className="flex flex-row items-center justify-center my-3">
                <label className="w-1/6 mr-6 text-lg justify-self-start">Email:</label>
                <input
                  className="justify-self-end text-lg bg-gray-200 p-4 rounded-lg focus:outline-none w-[40vh]" 
                  type="text" 
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  value={email}
                />
              </div>
              <div className="flex flex-row items-center justify-center my-3">
                <label className="w-1/6 mr-6 text-lg justify-self-start">Billing Status:</label>
                <input
                  className="text-lg bg-gray-200 p-4 rounded-lg focus:outline-none w-[40vh]" 
                  type="text" 
                  onChange={(e) => dispatch(setBillingStatus(e.target.value))}
                  value={billingStatus}
                />
              </div>
            </div>
        </div>
    </div>
  )
}
