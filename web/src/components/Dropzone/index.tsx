import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import styled from 'styled-components';

export type DropzoneProps = {
  onFileUploaded: (file: File) => void;
}

export type DropzoneContainerProps = {
  isDragActive: boolean
}

const DropzoneContainer = styled.div<DropzoneContainerProps>`
  height: 300px;
  width: 100%;
  background: ${({theme}) => theme.colors.itemBackground};
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;

  img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed ${({theme}) => theme.colors.buttonColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.text}
  }

  p svg {
    color: ${({theme}) => theme.colors.buttonColor};
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  border-color: ${({isDragActive, theme}) => isDragActive && theme.colors.secondaryButtonColor};
`

const Dropzone = ({ onFileUploaded }: DropzoneProps) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)

    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)
  }, [onFileUploaded])
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <DropzoneContainer 
      {...getRootProps({isDragActive})}
    >
      <input {...getInputProps()} accept="image/*"/>

      {
        selectedFileUrl
          ? <img src={selectedFileUrl} alt="point thumbnail" />
          : (
              <p>
                <FiUpload/>
                Imagem do estabelecimento
              </p>
            )
      }
    </DropzoneContainer>
  )
}

export default Dropzone