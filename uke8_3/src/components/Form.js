import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const navigate = useNavigate()
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }
<<<<<<< HEAD
  const addComment = (event) => {
    event.preventDefault()
    setLoading(true)

=======

  const addComment = (event) => {
    event.preventDefault()
    setLoading(true)
>>>>>>> db6f002486db7dba35aae050636f36abf3144b37
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
      navigate('/produkter')
    }, 2000)
<<<<<<< HEAD

    console.log(comment)
=======
    // console.log(comment)
>>>>>>> db6f002486db7dba35aae050636f36abf3144b37
  }

  return (
    <form method="POST" onSubmit={addComment}>
      <h2>Legg igjen en kommentar</h2>
      <label htmlFor="comment">
        Kommentar
        <textarea
          id="comment"
          name="comment"
          cols={15}
          rows={5}
          onChange={handleCommentChange}
          value={comment}
        />
      </label>
<<<<<<< HEAD
      <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
=======
      <button type="submit">{loading ? 'Sender ...' : 'Send'}</button>
>>>>>>> db6f002486db7dba35aae050636f36abf3144b37
      {success ? <p>Kommentar sendt</p> : null}
    </form>
  )
}
