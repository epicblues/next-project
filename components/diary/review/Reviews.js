import Review from "./Review";

const Reviews = ({ reviews, onDelete, onToggle }) => {
    return (
        <>
          {reviews.map((review, index) => (
            <Review key={review.id} review={review}
            onDelete={onDelete} onToggle={onToggle} />
          ))} 
        </>
    )
}

export default Reviews
