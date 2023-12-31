import { ConfirmAlert } from '../../ui/Alerts'
import { redirect } from 'react-router-dom'

export const fetchAllProducts = async () => {
  const response = await fetch(`http://localhost:3001/products`)
  const data = await response.json()
  data &&
    data.forEach((product) => {
      product.createdAt = new Date(product.createdAt)
    })
  return data
}

export const fetchProduct = async (id: string) => {
  const response = await fetch(`http://localhost:3001/products/${id}`)
  const data = await response.json()
  return data
}

export const handleDeleteProduct = async (id: string) => {
  ConfirmAlert({
    text: 'esta por eliminar este producto, ¿Desea continuar?',
    onConfirm: async () => {
      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      console.log(data)
      window.location.reload()
      return data
    },
  })
}

export const handleFormSubmit = async (newProduct, id: string | null) => {
  console.dir(newProduct)
  const data = { ...newProduct }
  const formData = new FormData()
  for (let key in data) {
    formData.append(key, data[key])
  }
  /* 
    const formData = formElement.current || new HTMLFormElement()
    for (let key in data) {
      formData.append(key, data[key])
    }
    const data = new URLSearchParams()
    data.append('image', newArticle.image)
    for (const pair of formData) {
      if (pair[0] !== 'image') {
        data.append(pair[0], pair[1])
      }
    } */
  const method = id ? 'PUT' : 'POST'
  const url = id ? `http://localhost:3001/products/${id}` : `http://localhost:3001/products`
  fetch(`${url}`, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    body: formData,
    /* headers: {
        'content-type': 'multipart/form-data',
      }, */
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
  })
    .then(function (response) {
      //handle success
      console.log(response)
      return response
    })
    .catch(function (response) {
      //handle error
      console.log(response)
      return response
    })
}
