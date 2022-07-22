
import CourseTable from "../components/CourseTable";
import { useState,useEffect } from "react";
import { courseService } from "../services/courseService";
import cookie from "react-cookies";
import { JWT_TOKEN_COOKIE_NAME } from "../constants";
import CourseActionAlert from "../components/alerts/CourseActionAlert";
import { Alert } from "@mui/material";


export default function AllCourses() {
  const [courses, setCourses]= useState([]);
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('info');

  // componentDidmount
  useEffect(()=>{

    courseService.getAllCourses()
    .then((response)=>{
        setCourses(response.data);

    })
    .catch((error)=>{
      console.log(error);

    });
  },[]);

  const enrollCourse = (courseName) =>{
    const accessToken = cookie.load(JWT_TOKEN_COOKIE_NAME);
      courseService.enrollCourse(accessToken,courseName)
      .then((respense) =>{
        alert('success')
        setAlertMessage(`Successfully enroll course ${courseName}`);
        setAlertColor('success');
        setAlertOpen(true);
      })
      .catch((error) =>{
        alert('error')
        setAlertMessage(`Failed to enroll course ${courseName} - ${error.respense.data.detail}`);
        setAlertColor('error');
        setAlertOpen(true);
      })

  };

  return (
    <>
      <CourseTable courses={courses} action='Enroll' onActionButtonClick={enrollCourse}/>
      {/* <CourseActionAlert
          alertOpen={alertOpen}
          alertMessage={alertMessage}
          alertColor={alertColor}
          closeAlert={() => {setAlertOpen(false)}}
          /> */}
    </>
    );
}

