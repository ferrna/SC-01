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
  console.dir(data)
  return data
}

export const handleDeleteArticle = async (id: string) => {
  const response = await fetch(`http://localhost:3001/articles/${id}`, {
    method: 'DELETE',
  })
  const data = await response.json()
  console.log(data)
  return data
}

export const handleFormSubmit = async (newArticle) => {
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
  fetch(`http://localhost:3001/articles/${data.id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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
    })
    .catch(function (response) {
      //handle error
      console.log(response)
    })
}

export const dateFormatforInput = (createdAt: Date) => {
  return (
    createdAt.getFullYear().toString().padStart(4, '0') +
    '-' +
    (createdAt.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    createdAt.getDate().toString().padStart(2, '0')
  )
}
