import React, { useState } from 'react';

const AddCamera = () => {
    const [image, setImage] = useState(null);
    const handleImageUpload = (event:any) => {
        setImage(event.target.files[0]);
    };
    return (
    <>
    <input type="file" onChange={handleImageUpload} />
    {image && <img src={URL.createObjectURL(image)} alt="Selected Image" />}
    </>
    );
};

export default AddCamera;

