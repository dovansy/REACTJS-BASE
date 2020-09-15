import { toast } from 'react-toastify'

export const notifySuccess = (mes) =>
  toast.success(mes, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    // transition: Zoom,
  })

export const notifyFail = (mes) =>
  toast.warning(mes, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    // transition: Zoom,
  })
