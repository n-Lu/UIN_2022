import client from '../client'

const eventFields = `
title,
'actor': actor->fullname,
"slug": slug.current
`

const eventActor = `
fullname,
"slug": slug.current,
"movies": *[_type=='movie' && references(^._id)]{ 
    title,
  }
`

const filmInfo = `
fullname,
"slug": slug.current,
"movies": *[_type=='movie' && references(^._id)]{ 
    title,
  }
`
export async function henteInfoFilmer(name) {
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $name]{${filmInfo}}`,
    { name }
  )
  return data?.[0]
}

export async function getEvents() {
  const data = await client.fetch(`*[_type == "movie"]{${eventFields}}`)
  return data
}

export async function getMovies() {
  const data = await client.fetch(`*[_type == "actor"]{${eventActor}}`)
  return data
}
