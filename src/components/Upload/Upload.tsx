import React, { useRef, MutableRefObject, useState } from 'react';

// styles
import './Upload.scss';

interface IOwnProps {
  background: boolean;
  setFile: any;
  setName: any;
}

const Upload: React.FC<IOwnProps> = ({
  background,
  setFile,
  setName,
}): JSX.Element => {
  const handleInputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [fileName, setFileName] = useState<string>('Text File');
  const [studentName, setStudentName] = useState<string>('');

  const handleUpload = () => {
    handleInputRef.current.click();
  };

  const handleNameChange = (event: any) => {
    setStudentName(event.target.value.trim());
    setName(event.target.value.trim());
  };

  const handleInputChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    setFileName(fileUploaded.name);
    setFile(fileUploaded);
  };

  return (
    <div className={`upload ${background ? 'upload--background' : ''}`}>
      <span>
        {background ? '1' : '2'}
        <sup>{background ? 'st' : 'nd'}</sup> Student's Name
      </span>
      <input type="name" value={studentName} onChange={handleNameChange} />
      <div>{fileName}</div>
      <button onClick={handleUpload}>Upload</button>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={handleInputRef}
        onChange={handleInputChange}
        accept="text/plain"
      />
    </div>
  );
};

export default Upload;
