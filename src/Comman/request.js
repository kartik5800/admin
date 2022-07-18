import { BASE_URL } from "../baseUrl";
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout:1000,
})

export const axiosrequest = (config) => {
    return axiosrequest.request(config)
}

export const getrequest = (path) => {
    return axiosrequest({
        url:path,
        method:'GET',
    })
}

export const postrequest = (path,data) => {
    return axiosrequest({
        url:path,
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
    })
}

export const deleteReuest = (path, id) => {
    return axiosrequest({
        url: path + id,
        method: 'DELETE',       
    })
}