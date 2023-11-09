import axios from 'axios'
import Swal from 'sweetalert2'

export const fetchRequest = async (action: string, data, navigate?) => {
  const headers = new Headers()
  headers['Access-Control-Allow-Origin'] = '*'
  headers['Accept'] = 'application/json'
  headers['Content-type'] = 'application/json'
  const options = {
    ...headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ ...data }),
  }
  switch (action) {
    case 'register':
      return axios('auth/register', options)
        .then((response) => {
          if (response.statusText === 'OK') {
            Swal.fire({
              title: 'Registro con éxito',
              icon: 'success',
              html: `<b>El usuario se ha creado con éxito.</b>`,
              showCloseButton: true,
              focusConfirm: false,
              confirmButtonText: `<i class="fa fa-thumbs-up"></i> Aceptar`,
              confirmButtonAriaLabel: 'Pulgar arriba, aceptar',
            })
            window.location.reload()
          }
        })
        .catch((error) => {
          Swal.fire({
            title: error.message,
            icon: 'error',
          })
          console.log(error.message)
        })
    case 'logIn':
      return axios('auth/login', options)
        .then((response) => {
          if (response.statusText === 'OK') {
            navigate('/')
          }
        })
        .catch((error) => {
          Swal.fire({
            title: error.message,
            icon: 'error',
          })
          console.log(error.message)
        })
    default:
      break
  }
}
