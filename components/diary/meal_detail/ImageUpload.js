import React from 'react'
import { useState } from "react";

const ImageUpload = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const[error, setError] = useState(false);

    const handleImageChange =(e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES =["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            }
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    }

    return (
        <div className='ui rounded image'style={{display: 'flex', height: 'auto'}}>
            <div className='container' style={{width: '100%', margin: 'auto'}}>
                {error && 
                    <p className='errorMsg' style={{color: 'red'}}>
                        File not supported
                        <i className='frown outline icon'></i>
                    </p>
                }
                <div className='imgPreview ui rounded image'
                    style={{
                        background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : '#9e9e9e',
                        width: '100%',
                        height: '40vh',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: 'white',
                        marginBottom: 10,
                    }}
                >
                    {!imgPreview && (
                      <>
                        <label htmlFor='fileUpload' className='customFileUpload'
                                style={{cursor:'pointer', marginBottom: 4}}>
                            <i className='images outline huge icon'></i>
                        </label>
                        <input type='file' id='fileUpload'
                                style={{display: 'none'}}
                                onChange={handleImageChange} />
                        <span>사진 추가<br />jpg / jpeg / png</span>
                      </>
                    )}
                </div>
                {imgPreview && (
                    <button className='ui fluid button' onClick={() => setImgPreview(null)}>사진 삭제</button>
                )}
            </div>
        </div>
    )
}

export default ImageUpload
