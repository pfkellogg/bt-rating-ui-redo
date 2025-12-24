import { useState } from 'react'
// useState is a function
// console.log(useState, typeof useState)
import Star from './Star'
import Modal from './Modal'
import Button from './Button'

const Rating = ({
  heading = 'Rate Your Experience',
  color = 'gold',
  feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']
}) => {
  // console.log(props)
  // const { heading } = props
  // Add state to Rating component
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  // console.log('Rating value:', rating, 'Type of rating:', typeof rating)

  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  // console.log(stars, 'Type of stars:', typeof stars)

  // const clicked = index => console.log('clicked', index)
  // const hovered = (direction, index) => console.log('Hovered!', direction, index)
  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true)
    }
  }

  const closeModal = () => {
    setSubmitted(false)
    setRating(0)
    setHover(0)
  }

  return (
    <div className='rating-container'>
      <h2>{heading}</h2>
      {/* <p>Hover: {hover}</p>
      <p>Rating: {rating}</p> */}
      <div className='stars'>
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>

      {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}
      {/* <button
        className='submit-btn'
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button> */}
      <Button
        className='submit-btn'
        disabled={rating === 0}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Modal
        isOpen={submitted}
        onClose={closeModal}
        rating={rating}
      />
    </div>
  )
}

// const styles = {
//   container: {
//     textAlign: 'left',
//     fontFamily: 'Arial',
//     padding: '20px'
//   },
//   heading: { color: 'red' }
// }

export default Rating
