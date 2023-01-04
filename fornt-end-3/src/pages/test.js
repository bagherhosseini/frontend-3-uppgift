import { useState } from "react";

export default function test() {
  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const arr = [];
      arr.push(files[i])
      let reader = new FileReader();
      reader.onloadend = function() {
        // Display the image on the page
        let img = document.createElement("img");
        img.src = reader.result;
        document.body.appendChild(img);
      }
      reader.readAsDataURL(file);

      console.log(arr);
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
