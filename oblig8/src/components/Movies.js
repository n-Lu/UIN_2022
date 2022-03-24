import React, { useEffect, useState } from 'react'
import { getEvents } from '../lib/services/movieService'
import Movie from './Movie'

export default function Movies() {
  const [film, setFilm] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getEventData = async () => {
      setLoading(true)
      const data = await getEvents()
      setLoading(false)
      setFilm(data)
      console.log(data)
    }
    getEventData()
  }, [])

  if (loading) {
    return <p>Henter data...</p>
  }
  return (
    <div>
      {film.map((data) => (
        <Movie key={data.slug} title={data.title} actor={data.actor} />

        // <div>
        //   {/* <h1 className="font-extrabold">{data.actor} </h1>
        //   <p>{data.title}</p> */}
        // </div>
      ))}
    </div>
  )
}
