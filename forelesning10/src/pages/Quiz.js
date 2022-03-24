import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createGame, getQuizBySlug } from '../lib/services/quiz'
import Question from '../components/Question'
import Answer from '../components/Answer'

export default function Quizzes() {
  const [current, setCurrent] = useState(0)
  const [content, setContent] = useState(null)
  const [answers, setAnswers] = useState([])
  const currentQuestion = content?.questions?.[current]
  const checkedAnswer = answers?.[current]
  const isFail = !checkedAnswer?.correct
  const { slug } = useParams()

  useEffect(() => {
    const getQuiz = async () => {
      const data = await getQuizBySlug(slug)
      setContent(data)
    }
    getQuiz()
  }, [slug])

  const updateAnswer = (answer) => {
    //setAnswers((prev) => [...prev,answer])
    setAnswers([
      ...answers.slice(0, current),
      answer,
      ...answers.slice(current + 1),
    ])
  }

  const progress = async () => {
    if (current + 1 > content?.questions?.length - 1) {
      const result = await createGame({
        email: 'ngoc_luan@live.no',
        quizId: content?._id,
      })
      console.log(result)
    } else {
      setCurrent((prev) => prev + 1)
    }
  }

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold text-white">Quiz</h1>
      {JSON.stringify(answers)}
      <section key={currentQuestion?._key}>
        <Question title={currentQuestion?.title} />
        {currentQuestion?.answeres?.map((answer) => (
          <Answer
            key={answer._key}
            answer={answer}
            updateAnswer={updateAnswer}
            checkedAnswer={checkedAnswer}
            isFail={isFail}
          />
        ))}
        <button
          className="rounded bg-orange-400 px-4 py-2 text-white"
          type="button"
          onClick={progress}
        >
          Neste
        </button>
      </section>
    </div>
  )
}
