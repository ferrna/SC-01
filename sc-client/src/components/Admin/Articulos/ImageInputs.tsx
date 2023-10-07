import React, { FC, useRef } from 'react'
import './imageInputs.css'
import { PiFileImageFill } from 'react-icons/pi'

interface ImageInputsProps {
  newArticle: any
  setNewArticle: any
}

const ImageInputs: FC<ImageInputsProps> = ({ newArticle, setNewArticle }) => {
  const inputImage = useRef(null)
  const inputImage2 = useRef(null)

  const onFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.files ? e.target.files[0] : '',
    })
    e.target.files && getImgDataFromInput(e.target.files[0])
  }

  function getImgDataFromInput(targetsFile?: any) {
    const { file = null } = { file: targetsFile }
    if (file) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.addEventListener('load', function () {
        // convert image file to base64 string
        let imagePreview = document.getElementById('articleFormImagePreview1_disabled')
        if (imagePreview) {
          imagePreview.id = 'articleFormImagePreview1'
          imagePreview.innerHTML = '<img src="' + this.result + '" />'
        } else {
          imagePreview = document.getElementById('articleFormImagePreview1')
          if (imagePreview) imagePreview.innerHTML = '<img src="' + this.result + '" />'
        }
      })
    }
  }

  return (
    <div className="imageInputs">
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          name="image"
          accept="image/*"
          ref={inputImage}
          onChange={(e) => onFileInput(e)}
        />
        {/* @ts-ignore */}
        <button onClick={() => inputImage.current.click()}>
          <div>
            <PiFileImageFill size={30} />
            <span className="fs-12">Subir imagen</span>
          </div>
        </button>
        <div
          id={newArticle.image?.length > 0 ? 'articleFormImagePreview1' : 'articleFormImagePreview1_disabled'}
        >
          <img src={newArticle.image} alt="image-1" />
        </div>
      </div>
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          name="image2"
          accept="image/*"
          ref={inputImage2}
          onChange={(e) => onFileInput(e)}
        />
        <button
          // @ts-ignore
          onClick={() => inputImage2.current.click()}
          disabled={newArticle.image?.length > 0 ? false : true}
          id={newArticle.image?.length > 0 ? 'imageInputs-input2' : 'imageInputs-input2_disabled'}
        >
          <div>
            <PiFileImageFill size={30} />
            <span className="fs-12">Subir imagen</span>
          </div>
        </button>
        <div
          id={
            newArticle.image2
              ? newArticle.image2.length > 0
                ? 'articleFormImagePreview2'
                : 'articleFormImagePreview2_disabled'
              : 'articleFormImagePreview2_disabled'
          }
        ></div>
      </div>
    </div>
  )
}

export default ImageInputs
