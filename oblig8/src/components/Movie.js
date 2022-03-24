export default function Movie({ title, actor }) {
  return (
    <>
      <h1 className="font-extrabold">{actor}</h1>
      <h2>{title}</h2>
    </>
  )
}
