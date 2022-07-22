import axios from "../axios";



export const courseService= {
    getAllCourses: function(){
        return axios.get('courses');
    },

    getEnrolledCourses: function(accessToken){
       
        return axios.get('user/courses',{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
    
            },
        });
    },

    enrollCourse: function(accessToken, courseName){

        return axios.post(`user/course/${courseName}/`,{},{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            },  
        });
    },
    
    withdrawCourse: function(accessToken,courseName){
    
        return axios.delete(`user/course/${courseName}/`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            },




        });
    },
};

