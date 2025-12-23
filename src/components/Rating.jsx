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

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  // console.log('Rating value:', rating, 'Type of rating:', typeof rating)

  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  // console.log(stars, 'Type of stars:', typeof stars)

  // const clicked = index => console.log('clicked', index)
  // const hovered = (direction, index) => console.log('Hovered!', direction, index)

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
      {rating > 0 && (
        <div className='feedback'>
          <p>{feedbackMessages[rating - 1]}</p>
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
