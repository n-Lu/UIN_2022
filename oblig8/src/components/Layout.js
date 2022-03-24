import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className=" h-screen w-full bg-slate-300">
      <Outlet />
    </main>
  )
}
