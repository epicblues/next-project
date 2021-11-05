import 'semantic-ui-css/semantic.min.css';

const Review = ({ review, onDelete, onToggle }) => {
    return (
        <div className={`review ${review.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(review.id)}
            style={{display: "flex", justifyContent: 'space-between',
                    backgroundColor:'#eef',
                    padding:'20px', margin: 16}}>
            <p>
                {review.text}{''}
            </p>            
            <button className="ui button"
                    onClick={() => onDelete(review.id)}>
                삭제
            </button>
        </div>
    )
}

export default Review
