import { useState } from 'react'
// useState is a function
// console.log(useState, typeof useState)

const Rating = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  console.log('Rating value:', rating, 'Type of rating:', typeof rating)

  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  console.log(stars, 'Type of stars:', typeof stars)

  const clicked = index => console.log('clicked', index)
  const hovered = (direction, index) => console.log('Hovered!', direction, index)

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <p>Hover: {hover}</p>
      <p>Rating: {rating}</p>
      <div className="stars">
        {stars.map((star, index) => (
          // this fires off immediately because of the parentheses
          // <span onClick={clicked(index)} key={star} className="star">

          // this works because of the arrow function
          <span onClick={() => setRating(star)} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)} key={star} className="star">
            {'\u2605'}
          </span>
        ))}
      </div>
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
