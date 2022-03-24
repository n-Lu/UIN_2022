import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

import { getQuizzes } from './lib/services/quiz'
import Quizzes from './pages/Quizzes'
import Quiz from './pages/Quiz'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const getSanityData = () => {
    getQuizzes()
  }
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Quizzes />} />
        <Route path="quiz">
          <Route index element={<Quizzes />} />
          <Route path=":slug" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  )
}
