import React,{useRef,useCallback} from 'react'
import { useHistory } from 'react-router-dom';
import Webcam from 'react-webcam'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch} from "react-redux";
import { setCameraImage } from './features/cameraSlice';
import "./WebcamCapture.css"


const videoConstraints={
    width:250,
    height:400,
    faceingMode:"user",
};


function WebcamCapture() {
    const webcamRef =useRef(null);
    const dispatch=useDispatch();
    const history =useHistory();

    const capture=useCallback(
        () => {
          const imageSrc=webcamRef.current.getScreenshot();
         dispatch(setCameraImage(imageSrc));
         history.push('./preview')
        },[webcamRef]);

    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon
                className="webcamCapture__button"
                onClick={capture}
                fontSize="large"
            />
            {/* <img src={image} alt="" /> */}
        </div>
    )
}

export default WebcamCapture
