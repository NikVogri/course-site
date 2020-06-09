import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { setAvatarImage } from "../redux/actions/actionCreator";

const ImageUploadForm = ({ setAvatarImage, userId }) => {
  const [image, setImage] = useState(null);
  const [notification, setNotification] = useState("");

  const imageHandler = e => {
    console.log("here");
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setNotification("No image provided");
    }
  };

  const uploadHandler = async e => {
    e.preventDefault();
    if (!image) {
      setNotification("No image provided");
    } else {
      await setAvatarImage(image, userId);
      setNotification("Image updated successfully");
    }
  };

  console.log(notification);
  return (
    <form>
      <input type="file" onChange={imageHandler} />
      <button onClick={uploadHandler}>Upload</button>
    </form>
  );
};

const mapStateToProps = state => ({
  userId: state.user.userId,
});

const mapDispatchToProps = {
  setAvatarImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadForm);
