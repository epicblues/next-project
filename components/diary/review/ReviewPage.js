// import React from 'react'
import { useState } from 'react';

// components
import ReviewHeader from "./ReviewHeader";
import Reviews from "./Reviews";
import AddReview from './AddReview';

// CSS
import 'semantic-ui-css/semantic.min.css';

const ReviewPage = () => {
  const [showAddReview, setShowAddReview] = useState(false)
  const [reviews, setReviews] = useState ([
    {
      id: 1,
      text: "오늘은 너무 많이 먹었다. 반성하자",
      reminder: true
    },
    {
      id: 2,
      text: "하루 섭취 칼로리를 잘 지켰다. 개뿌듯^___^",
      reminder: true
    }
  ])
  // Update Review

  // Add Review
  const addReview = (review) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newReview = { id, ...review }
    setReviews([...reviews, newReview])
  }

  // Delete Review
  const deleteReview = async (id) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setReviews(reviews.map((review) =>
      review.id === id ? {...review, reminder:
      !review.reminder } : review
      )
    )
  }

  return (
    <div className="ui content"
        style={{border: 'solid 2px lightgray',
                borderRadius: '5px'
        }}
    >
      <ReviewHeader onAdd={() => setShowAddReview(!showAddReview)}
              showAdd={showAddReview} />
      {showAddReview && <AddReview onAdd={addReview} />}
      {reviews.length > 0 ?
        (<Reviews reviews={reviews}
                onDelete={deleteReview}
                onToggle={toggleReminder} />) : ('No Reviews To Show')}
    </div>
  )
}

export default ReviewPage;
