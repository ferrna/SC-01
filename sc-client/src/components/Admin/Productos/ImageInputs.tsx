import React, { FC, useRef } from 'react'
import './imageInputs.css'
import { PiFileImageFill } from 'react-icons/pi'

interface ImageInputsProps {
  formState: any
  setFormState: any
  idImgPreview_0: string
  secondInput?: boolean
}

const ImageInputs: FC<ImageInputsProps> = ({ formState, setFormState, idImgPreview_0, secondInput }) => {
  // idImgPreview_0: string of the n°0 input's image preview div element
  // (+= '' | '2')
  const inputImage = useRef(null)
  const inputImage2 = useRef(null)

  const onFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFormState({
      ...formState,
      [e.target.name]: e.target.files ? e.target.files[0] : '',
    })
    e.target.files && getImgDataFromInput(e.target.files[0], idImgPreview_0)
  }

  function getImgDataFromInput(targetsFile: any, idImgPreview_0: string) {
    const { file = null } = { file: targetsFile }
    if (file) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.addEventListener('load', function () {
        // convert image file to base64 string
        // todo: logic for a second image preview: (+ parameter for identifing the input element)
        let imagePreview = document.getElementById(idImgPreview_0 + '_disabled')
        if (imagePreview) {
          imagePreview.id = idImgPreview_0
          imagePreview.innerHTML = '<img src="' + this.result + '" />'
        } else {
          imagePreview = document.getElementById(idImgPreview_0)
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
        <button onClick={() => inputImage.current?.click()}>
          <div>
            <PiFileImageFill size={30} />
            <span className="fs-12">Subir imagen</span>
          </div>
        </button>
        <div id={formState.image?.length > 0 ? idImgPreview_0 : idImgPreview_0 + '_disabled'}>
          <img src={formState.image} alt="image-1" />
        </div>
      </div>
      {secondInput && secondInput === true && (
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
            onClick={() => inputImage2.current?.click()}
            disabled={formState.image?.length > 0 ? false : true}
            id={formState.image?.length > 0 ? idImgPreview_0 + '2' : idImgPreview_0 + '2_disabled'}
          >
            <div>
              <PiFileImageFill size={30} />
              <span className="fs-12">Subir imagen</span>
            </div>
          </button>
          <div
            id={
              formState.image2
                ? formState.image2.length > 0
                  ? idImgPreview_0 + '2'
                  : idImgPreview_0 + '2_disabled'
                : idImgPreview_0 + '2_disabled'
            }
          >
            {/* <img src={formState.image2} alt="image-2" /> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageInputs
