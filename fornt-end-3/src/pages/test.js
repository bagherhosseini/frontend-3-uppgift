import { useState } from "react";

export default function test() {
  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      console.log(file)
    }
  }

  return (
    <div><input
    type="file"
    accept="image/*"
    multiple
    onChange={(e) => handleFiles(e.target.files)}
  /></div>
  );
}
