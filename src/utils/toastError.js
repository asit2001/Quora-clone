import { toast } from "react-toastify"

export const showErrorToast = (reason,position="top-right")=>{
    toast.error(reason,{
        position: position,
        autoClose: 3000,
        theme: "light",
    })
}