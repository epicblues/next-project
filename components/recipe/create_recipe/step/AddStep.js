import React, { useState, useRef } from "react";

const AddStep = ({ stepData, setStepData }) => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  // 이미지 파일 보관 state
  const inputRef = useRef();
  const imageRef = useRef();
  const handleSubmitStep = () => {
    if (stepData.length <= 15) {
      stepData = [
        ...stepData,
        {
          stepDesc: inputRef.current.value,
          stepImageData: imgPreview,
          stepImageFile: imageFile,
        },
      ];
      setStepData(stepData);
      setImgPreview(null);
    } else {
      alert("더 이상 추가하실 수 없습니다.");
    }
  };

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    setImageFile(selected);
    // 이미지 파일 state 변경
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <div
      className="ui rounded image"
      style={{ display: "flex", height: "auto" }}
    >
      <div className="container" style={{ width: "100%", margin: "auto" }}>
        {error && (
          <p className="errorMsg" style={{ color: "red" }}>
            File not supported
            <i className="frown outline icon"></i>
          </p>
        )}
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            className="imgPreview ui rounded image"
            style={{
              background: imgPreview
                ? `url("${imgPreview}") no-repeat center/cover`
                : "#9e9e9e",
              width: "200px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              marginBottom: 10,
            }}
          >
            {!imgPreview && (
              <>
                <label
                  htmlFor="fileUpload"
                  className="customFileUpload"
                  style={{ cursor: "pointer", marginBottom: 4 }}
                >
                  <i className="images outline huge icon"></i>
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  ref={imageRef}
                />
                <span>
                  사진 추가
                  <br />
                  jpg / jpeg / png
                </span>
              </>
            )}
          </div>
          <textarea
            ref={inputRef}
            type="text"
            name="stepDesc"
            placeholder="설명을 입력하세요"
            style={{
              display: "flex",
            }}
          />
          {imgPreview && (
            <button
              type='button'
              className="ui fluid button"
              onClick={() => setImgPreview(null)}
            >
              사진 삭제
            </button>
          )}
        </div>
        <button type="button" onClick={handleSubmitStep}>
          순서등록
        </button>
      </div>
    </div>
  );
};

export default AddStep;
