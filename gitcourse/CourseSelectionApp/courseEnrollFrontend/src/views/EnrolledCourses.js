
import React from "react";
import CourseTable from "../components/CourseTable";
import { courseService } from "../services/courseService";
import cookie from 'react-cookies';
import {JWT_TOKEN_COOKIE_NAME} from "../constants";
import CourseActionAlert from "../components/alerts/CourseActionAlert";

class EnrolledCourses extends React.Component{
    state = {
        courses:[],
        alertOpen: false,
        alertMessage: '',
        alertColort: 'info',
    }
    componentDidMount(){
        const token = cookie.load(JWT_TOKEN_COOKIE_NAME);
        //call API and fetch courses data
        this.getEnrolledCourse();

    }
    withdrawCourse= (courseName) =>{
        const accessToken = cookie.load(JWT_TOKEN_COOKIE_NAME);
        courseService.withdrawCourse (accessToken,courseName)
        .then((respense) =>{
            this.getEnrolledCourse();
            this.setState({
                alertOpen: false,
                alertMessage: `Successfully withdraw course ${courseName}`,
                alertColort: 'success',     
            })
        })
        .catch((error) =>{
            this.setState({
                alertOpen: false,
                alertMessage: `Failed to withdraw course ${courseName}`,
                alertColort: 'error',     
            })
        })

    }

    getEnrolledCourse= () => {
        const token = cookie.load(JWT_TOKEN_COOKIE_NAME)

        courseService.getEnrolledCourses(token)
        .then((response)=>{
            //set
            this.setState({
                courses: response.data,
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return (
            <>
                <CourseTable courses={this.state.courses} action='withdraw' onActionButtonClick={this.withdrawCourse}/>
                {/* <CourseActionAlert
                    alertOpen={this.state.alertOpen}
                    alertMessage={this.state.alertMessage}
                    alertColor={this.state.alertColor}
                    closeAlert={()=>{this.setState({
                        alertIpen: false,
                    })}}
                /> */}
            </>
        );
    }
}

export default EnrolledCourses;