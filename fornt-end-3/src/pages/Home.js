import{useState, useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import './style.scss';

export default function Home(){
  const [imageurl, setImageurl] = useState('')
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const Intprice = price;

  const handlechange = (event) =>{
    const file = event.target.files[0];
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'emjgys7r')
    Axios.post('https://api.cloudinary.com/v1_1/dddzde2ks/image/upload', formData).then(response =>{
      setImageurl(response.data.secure_url);
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const newProduct ={
      name : name,
      price : Intprice,
      imageUrl : imageurl
    }

    const res = await fetch('http://localhost:3001/products', {
      method:'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    console.log(res);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>Namn</label>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} required></input>
      <br></br>

      <label>Pris</label>
      <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} required></input>
      <br></br>

      <input type="file" name="file" onChange={handlechange}/>
      <br></br>

      <button>Submit</button>
    </form>
  );
}



