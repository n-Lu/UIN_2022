import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { henteInfoFilmer } from '../lib/services/movieService'

export default function Name() {
  const [actor, setActor] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const hentFilmene = async () => {
      const data = await henteInfoFilmer(name)
      setActor(data)
    }
    hentFilmene()
  }, [name])
  console.log(JSON.stringify(actor))
  return (
    // <div>
    //   {movie?.map((data) => (
    //   {JSON.stringify(data)}
    //   ))}
    //   </div>
    <>
      <h1>{actor.fullname}</h1>
      {actor?.movies?.map((m) => (
        <p>{m.title}</p>
      ))}
    </>
  )
}
