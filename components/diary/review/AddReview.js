import { useState } from 'react'

const AddReview = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a review')
            return
        }
        onAdd({ text, reminder })

        setText('')
        setReminder(false)
    }
        
    return (
        <form className='ui form' onSubmit={onSubmit} style={{padding: 16}}>
            <div className='field'>
                <label style={{textAlign: 'left'}}>오늘의 일기
                    <i className='edit icon'></i>
                </label>
                <textarea type='text'
                        placeholder='Add Review'
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='ui checkbox' style={{display: "flex", justifyContent: 'space-between', marginBottom: '10px'}}>
                <label>Set Reminder</label>
                <input type='checkbox' name='example'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <button type='submit'
                    className='fluid ui button'
                    style={{marginBottom: '10px'}}>
                작성완료
            </button>

            
        </form>
    )
}

export default AddReview
