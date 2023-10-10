import React, { FC, useRef } from 'react'
import './imageInputs.css'
import { PiFileImageFill } from 'react-icons/pi'

interface ImageInputsProps {
  formState: any
  setFormState: any
  secondInput?: boolean
  imagePreviewDivIDPrefix: string // string for genering an unique div id in case theres more
  // than one 'ImageInputs' component in a single view.
  // E.g. 'productosForm' => ID = 'productosForm-image-preview-div-'
}

const ImageInputs: FC<ImageInputsProps> = ({
  formState,
  setFormState,
  secondInput,
  imagePreviewDivIDPrefix,
}) => {
  const previewDivIDBase = imagePreviewDivIDPrefix + '-image-preview-div-'

  const inputImage = useRef<HTMLInputElement | null>(null)
  const inputImage2 = useRef<HTMLInputElement | null>(null)

  const onFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFormState({
      ...formState,
      [e.target.name]: e.target.files ? e.target.files[0] : '',
    })
    e.target.files && getImgDataFromInput(e.target.files[0], e.target.name)
  }

  function getImgDataFromInput(targetsFile: any, targetName: string) {
    const index = targetName === 'image' ? 1 : 2
    const elementId = index === 1 ? previewDivIDBase + '1' : previewDivIDBase + '2'
    const { file = null } = { file: targetsFile }
    if (file) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.addEventListener('load', function () {
        // convert image file to base64 string
        let imagePreview = document.getElementById(elementId + '_none')
        if (imagePreview) {
          imagePreview.id = elementId
          imagePreview.innerHTML = '<img src="' + this.result + '" />'
        } else {
          imagePreview = document.getElementById(elementId)
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
        <button onClick={() => inputImage.current?.click()}>
          <div>
            <PiFileImageFill size={30} />
            <span className="fs-12">Subir imagen</span>
          </div>
        </button>
        <div id={formState.image?.length > 0 ? previewDivIDBase + '1' : previewDivIDBase + '1_none'}>
          <img src={formState.image} alt="preview" />
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
            onClick={() => inputImage2.current?.click()}
            disabled={formState.image?.length > 0 ? false : true}
            id={formState.image?.length > 0 ? previewDivIDBase + '2' : previewDivIDBase + '2_none'}
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
                  ? previewDivIDBase + '2'
                  : previewDivIDBase + '2_none'
                : previewDivIDBase + '2_none'
            }
          >
            {formState.image2 && <img src={formState.image2} alt="preview" />}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageInputs
