import axios from "axios"
const foreCast = require('../WeatherApp/WeatherStack');
const GeoCode = require('../WeatherApp/GeoCoding');

class API {
    //for signup 
    static singUp (firstName, lastName, userName, email, password, country, province, city, ZipCode, onSuccess, onFail) {

        axios.post(`http://localhost:9000/Users`, {
            firstName : firstName,
            lastName ,
            userName,
            email ,
            password,
            country, 
            province, 
            city, 
            ZipCode
        })
        .then((res)=>{
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            onSuccess(res)
        })
        .catch((e) => { 
            onFail(e) 
        })
    }

    //for checking if you are logged in 
    static isLoggedIn(onSuccess) {
        return axios.get('http://localhost:9000/Users/me', {
            headers: {Authorization: localStorage.getItem("token") },
        }).then((res)=> {
            onSuccess(res)
            return true
        }).catch(()=> {
            return false;
        })

    }

    //for login
    static login(email, password, onSuccess, onFail) {
        return axios.post('http://localhost:9000/Users/login', {
            email,
            password
            }).then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user)); 
                onSuccess(res)
            }).catch((e) => {
                onFail(e)
            })
    }

    //For one machine logout 
    static Logout() {  
        return axios.post('http://localhost:9000/Users/logout',{
            headers: {Authorization: localStorage.getItem("token") },
        })
    }

    //For all machine logout 
    // static LogoutAll() {

    // }

    /***************************    Notes  ************************************************/
    //Create Note 
    static CreateNote(title, content,onSuccess) {
        return axios
            .post('http://localhost:9000/Notes', {
                title,
                content
            }, {
                headers: {Authorization: localStorage.getItem("token") },
            }).then((res) => {
                onSuccess(res.data)
            }).catch((e) => {
                console.log(e)
            })
    }
    //Get Note 
    static GetNote() {
        return axios
            .get('http://localhost:9000/Notes',{
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
    //Change Note 
    static UpdateNote(id, title, content) {  
        return axios
            .patch(`http://localhost:9000/Notes/${id}`,{
                title,
                content
            },{
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
    //Delete Note 
    static DeleteNote(id) { 
        return axios
            .delete(`http://localhost:9000/Notes/${id}`, 
            {
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
    
    /***************************    Events  ************************************************/
    //Create Events 
    static CreateEvents(title, description, url, start, end, onSuccess) { 
        return axios
            .post('http://localhost:9000/Calendar', {
                title,
                description,
                url,
                start,
                end
            }, {
                headers: {Authorization: localStorage.getItem("token") },
            }).then((res) => {
                onSuccess(res.data)
            }).catch((e) => {
                console.log(e)
            })
    }
    //Get Events 
    static GetEvents() {
        return axios
            .get('http://localhost:9000/Calendar',{
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
    //Change Events 
    static UpdateEvents(id, title, description, Url, start, end, startTime, endTime, daysOfWeek, display) {  
        return axios
            .patch(`http://localhost:9000/Calendar/${id}`,{
                title, 
                description, 
                Url, 
                start, 
                end, 
                startTime, 
                endTime, 
                daysOfWeek, 
                display
            },{
                headers: {Authorization: localStorage.getItem("token") },
            }).then(()=>{
                console.log("changing event")
            }).catch((e) => {
                console.log(e)
            })
    }
    //Delete Events 
    static DeleteEvents(id) {
        return axios
            .delete(`http://localhost:9000/Calendar/${id}`,{
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
}
export default API