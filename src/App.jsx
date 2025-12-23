import Rating from './components/Rating'

const App = () => {
  const name = 'Patrick'
  return (
    <div>
      <Rating
        heading='How do you feel about React?'
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Love it'
        ]}
      />
    </div>
  )
}

export default App
