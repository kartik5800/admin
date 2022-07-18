import { getrequest , postrequest ,deleteReuest} from "../request"


export const getdoctordata =(data)  => {
    return getrequest("doctor")
}

export const postdoctordata =(data)  => {
    return postrequest("doctor",data)
}


export const deletedoctordata = (id) => {
    return deleteReuest('medicines/', id)
}