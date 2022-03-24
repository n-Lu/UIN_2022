import sanityClient from '@sanity/client'

const options = {
  projectId: 'l20br7mw',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.REACT_APP_SANITY_TOKEN,
}

const client = sanityClient({
  ...options,
  useCdn: false,
})

export default client
