import axios from 'axios'
// import { API_NEWS } from './../config/config.env'
const API_NEWS = axios.create({
    // baseURL: 'https://fast-taiga-08932.herokuapp.com/api',
    baseURL:'http://localhost:8000/api',
    url: '/controller-name/action-function-name',
    headers: { 'Cache-Control': 'no-cache' },
})
export default class NewsService {

    getNews(body) {
        if (body) {
            // return API_NEWS.get("/news/" + body)
            return API_NEWS.get('/news'+body)
        }
        else {
            return API_NEWS.get('/news')
        }


    }
    getNewsBySearchText(body) {

        return API_NEWS.get('/news'+body)
    }
    getNewsId(body) {
   
        return API_NEWS.get('/news/'+body)
    }
    getGallary(id) {
        if (id) {
            return API_NEWS.get("/gallery/" + id)
        }
        else {
            return API_NEWS.get("/gallery")
        }

    }

    getfile() {
        return API_NEWS.get("/file")
    }

    getcoopdetail() {
        return API_NEWS.get("/coopdetail")
    }

    getcompany(id) {
        if (id) {
            return API_NEWS.get("/company"+id)
        }
        else {
            return API_NEWS.get("/company")
           
        }
       
    }
    getbanner() {
        return API_NEWS.get("/banner")
    }

    getschedulee() {
        return API_NEWS.get("/schedule/edu")
    }

    getschedulec() {
        return API_NEWS.get("/schedule/coop")
    }



}
