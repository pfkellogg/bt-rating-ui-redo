const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  console.log(stars)

  const clicked = index => console.log('clicked', index)
  const hovered = (direction, index) => console.log('Hovered!', direction, index)

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {/* {[1, 2, 3, 4, 5].map((star, index) => ( */}
        {stars.map((star, index) => (
          // this fires off immediately because of the parentheses
          // <span onClick={clicked(index)} key={star} className="star">

          // this works because of the arrow function
          <span onClick={() => clicked(index)} onMouseEnter={() => hovered('enter', index)} onMouseLeave={() => hovered('leave', index)} key={star} className="star">
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
