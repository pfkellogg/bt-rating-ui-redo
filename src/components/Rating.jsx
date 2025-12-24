import { useState } from 'react'
// useState is a function
// console.log(useState, typeof useState)
import Star from './Star'

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
      <button
        className='submit-btn'
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>
      {submitted && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>Thank You</h2>
            <p>
              Your rated us {rating} star{rating > 1 ? 's' : ''}
            </p>
            <button
              className='close-btn'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
