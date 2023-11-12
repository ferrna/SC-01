import axios from 'axios'
import Swal from 'sweetalert2'

export const fetchRequest = async (action: string, data) => {
  const headers = new Headers()
  headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
  headers['Accept'] = 'application/json'
  headers['Content-type'] = 'application/json'
  console.dir(data)
  const options = {
    ...headers,
    method: 'POST',
    withCredentials: true,
    data,
  }
  switch (action) {
    case 'register':
      return await axios('users', options)
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
      return await axios('auth/login', options)
        .then((response) => {
          if (response.statusText === 'OK') {
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
    default:
      break
  }
}

export const passwordValidator = (value: string) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if (value.length < 6) {
    return { error: true, content: 'La contraseña debe tener al menos 6 caracteres.' }
  }
  if (!regex.test(value)) {
    return { error: true, content: 'La contraseña debe tener al menos una letra y un número.' }
  }
  return { error: false, content: '' }
}
