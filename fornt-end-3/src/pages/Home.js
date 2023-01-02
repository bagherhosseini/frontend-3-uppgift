import { useState } from "react";
import Axios from "axios";
import "./style.scss";

export default function Home() {
  const [imageurl, setImageurl] = useState("");
  const [name, setName] = useState("");
  const [categori, setCategori] = useState("");
  const [price, setPrice] = useState("");
  const Intprice = Number(price);

  const handlechange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "emjgys7r");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dddzde2ks/image/upload",
      formData
    ).then((response) => {
      setImageurl(response.data.secure_url);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: name,
      categori: categori,
      price: Intprice,
      imageUrl: imageurl,
    };

    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    console.log(res);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="add-product-form">
        <div className="add-product-content">
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <label for="name" class="form__label">
              Name
            </label>
          </div>

          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Kategori"
              name="Kategori"
              id="Kategori"
              value={categori}
              onChange={(e) => setCategori(e.target.value)}
              required
            ></input>
            <label for="Kategori" class="form__label">
              Kategori
            </label>
          </div>
          <div class="form__group field">
            <input
              type="number"
              class="form__field"
              placeholder="Pris"
              name="Pris"
              id="Pris"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            ></input>
            <label for="Pris" class="form__label">
              Pris
            </label>
          </div>

          <div className="upload-img">
            <input type="file" name="file" onChange={handlechange} />
          </div>

          <br></br>

          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </form>
  );
}
