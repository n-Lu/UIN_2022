import { useState } from 'react'

export default function Post({ id, title, body }) {
  const [show, setShow] = useState(false)
  const [post, setPost] = useState('')

  const getPost = async () => {
    setShow(!show)
    if (post) return
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const data = await response.json()
    setPost(data.body)
  }
<<<<<<< HEAD

  // const showMore = () => {
  //   setShow(!show)
  // }

=======
  // const showMore = () => {
  //   setShow(!show)
  // }
>>>>>>> db6f002486db7dba35aae050636f36abf3144b37
  return (
    <article>
      <h3>{title}</h3>
      {show ? <p>{post}</p> : null}
      <button onClick={getPost}>Se mer</button>
    </article>
  )
}
