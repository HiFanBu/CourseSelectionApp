import axios from "axios";

export default axios.create({
    baseURL: 'http://course-enroll-lb-1585418893.us-east-1.elb.amazonaws.com:8000',
    
});
