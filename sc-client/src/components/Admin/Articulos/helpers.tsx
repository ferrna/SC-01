import { ConfirmAlert } from '../../ui/Alerts'

export const fetchAllArticles = async () => {
  const response = await fetch(`http://localhost:3001/articles`)
  const data = await response.json()
  data &&
    data.forEach((article) => {
      article.createdAt = new Date(article.createdAt)
    })
  return data
}

export const fetchArticle = async (id: string) => {
  const response = await fetch(`http://localhost:3001/articles/${id}`)
  const data = await response.json()
  return data
}

export const handleDeleteArticle = async (id: string) => {
  ConfirmAlert({
    text: 'esta por eliminar este articulo, ¿Desea continuar?',
    onConfirm: async () => {
      const response = await fetch(`http://localhost:3001/articles/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      console.log(data)
      window.location.reload()
      return data
    },
  })
}

export const handleFormSubmit = async (newArticle, id: string | null) => {
  console.dir(newArticle)
  const data = { ...newArticle }
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
  const url = id ? `http://localhost:3001/articles/${id}` : `http://localhost:3001/articles`
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
