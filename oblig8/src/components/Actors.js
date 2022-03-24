import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getEvents, getMovies } from '../lib/services/movieService'
import Actor from './Actor'

export default function Actors() {
  const [actor, setActor] = useState([])

  console.log(actor)

  useEffect(() => {
    const getEventData = async () => {
      const data = await getMovies()
      setActor(data)
    }
    getEventData()
  }, [])

  return (
    <div>
      {actor.map((data) => (
        <>
          <Actor key={data.slug} actor={data.fullname} />

          <h3>
            <Link to={`/actors/${data.slug}`}>Les mer om das actor</Link>
          </h3>
        </>
      ))}
    </div>
  )
}
