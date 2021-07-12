import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function File() {
  const [cleanImages, setCleanImages] = useState([])
  var file = null;
  const uploadImage = async (e) => {
    file = e.target.files[0];
    if (file != null) {
      if (file.size > 900000) {
        alert("Image is big. Please choose image upto 900KB");
        document.getElementById("save_button").disabled = true;
      }
      else {
        CheckDimension(e.target);
      }
    }
  };
  function CheckDimension(myfile) {
    var fileUpload = myfile;

    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png|.gif|.jpeg)$");
    if (regex.test(fileUpload.value.toLowerCase())) {

      if (typeof (fileUpload.files) != "undefined") {

        var reader = new FileReader();
        reader.readAsDataURL(fileUpload.files[0]);
        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;

          image.onload = async function () {
            var height = this.height;
            var width = this.width;
            console.log(height + " " + width);
            if (height > 1920 || width > 1080) {
              alert("Height and Width must not exceed 1920px X 1080px.");
              document.getElementById("save_button").disabled = true;
            } else {
              const base64 = await convertBase64(file);
              window.bs64 = base64;
              document.getElementById("save_button").disabled = false;
            }
          };

        }
      } else {
        alert("This browser does not support HTML5.");
        document.getElementById("save_button").disabled = true;
      }
    } else {
      alert("Please select a valid Image file.");
      document.getElementById("save_button").disabled = true;
    }
  }

  useEffect(() => {
    getImage()
  }, [])

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const saveImage = () => {
    axios.post("http://localhost:3001/api/image", {
      imgName: window.bs64,
    }).then(function (response) {
      getImage();
    });
  };

  const getImage = () => {
    console.log('getImage');
    axios.get(`http://localhost:3001/api/showallimages`).then((result) => {
      let cleanArr = []
      for (var i = 0; i < result.data.length; i++) {
        cleanArr.push(result.data[i].pic);
        console.log(result.data[i].pic);
      };
      setCleanImages(cleanArr);
    });
  }
  return (
    <div className="App">
      <input
        type="file"
        onChange={
          (e) => {
            uploadImage(e);
          }
        } />
      <button onClick={saveImage} id="save_button">Save</button>
      <br /><br />
      <br />
      <br />
      {cleanImages.map(image =>
        <img src={image} id="img" />
      )}
    </div>
  );
}
export default File;
