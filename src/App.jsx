import Rating from './components/Rating'
import { useState } from 'react'

const Counter = () => {
  // useState is a function that lets you add state to functional components. Set initial value to 0,
  // const [count, setCount] = useState(3)

  // you can pass in a function to do some other stuff before setting the initial value
  const [count, setCount] = useState(() => {
    console.log('Init count state...')
    return 0
  })

  const increment = () => {
    // setCount(count + 1)
    // if you are using the previos value this is better. pas a function into setCount
    // setCount(prevCount => {
    //   console.log('Previous count value:', prevCount)
    //   return prevCount + 1
    // })
  }

  return (
    <>
      <h2>Count: {count}</h2>
      {/* <button onClick={increment}>Increment</button> */}
      <button
        onClick={() =>
          setCount(prevCount => {
            console.log('Previous count value:', prevCount)
            return prevCount + 1
          })
        }
      >
        Increment
      </button>
    </>
  )
}

const App = () => {
  const name = 'Patrick'
  return (
    <div>
      {/* <h1>Hello {name}</h1>
      <h1>Hello {1 + 1}</h1> */}
      <Rating />
      <Counter />
    </div>
  )
}

export default App
