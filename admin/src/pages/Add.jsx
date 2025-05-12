import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backenUrl } from '../App'
import { toast } from 'react-toastify'

const add = ({token}) => {

  const [image1 , setImage1 ] = useState(false)
  const [image2 , setImage2 ] = useState(false)
  const [image3 , setImage3 ] = useState(false)
  const [image4 , setImage4 ] = useState(false)

  const [name , setName] = useState("")
  const [description , setdescription] = useState("")
  const [price , setPrice] = useState("")
  const [category , setCategory] = useState("Men")
  const [subCategory , setSubCategory] = useState("Topwear")
  const [bestseller, setBestSeller] = useState(false);
  const [sizes , setSizes] = useState([])

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    console.log(bestseller)

    try {
      const formData = new FormData()
      formData.append("name" , name)
      formData.append("description" , description)
      formData.append("price" , price)
      formData.append("category" , category)
      formData.append("subCategory" , subCategory)
      formData.append("bestseller", bestseller ? "true" : "false");
      formData.append("sizes" , JSON.stringify(sizes))

      image1 && formData.append("image1" , image1)
      image2 && formData.append("image2" , image2)
      image3 && formData.append("image3" , image3)
      image4 && formData.append("image4" , image4)
      
      
      const response = await axios.post(backenUrl + "/api/product/add" , formData , {headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        setName("")
        setdescription("")
        setPrice("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3' action="">
      <p className='mb-2'>Upload Image</p>
      <div className='flex gap-2'>
        <label htmlFor="image1">
          <img className='w-20 cursor-pointer' src={ !image1 ? assets.upload_area: URL.createObjectURL(image1)} alt="" />
          <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
        </label>
        <label htmlFor="image2">
          <img className='w-20 cursor-pointer' src={ !image2 ? assets.upload_area: URL.createObjectURL(image2)} alt="" />
          <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
        </label>
        <label htmlFor="image3">
          <img className='w-20 cursor-pointer' src={ !image3 ? assets.upload_area: URL.createObjectURL(image3)} alt="" />
          <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
        </label>
        <label htmlFor="image4">
          <img className='w-20 cursor-pointer' src={ !image4 ? assets.upload_area: URL.createObjectURL(image4)} alt="" />
          <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
        </label>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea value={description} onChange={(e)=>setdescription(e.target.value)} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product SubCategory</p>
          <select value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottonwear">Bottonwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input value={price} onChange={(e)=>setPrice(e.target.value)} className='w-full px-3 py-2 sm:w-[120px]' type="number" />
        </div>
      </div>
      <div>
        <p className='mb-2'>Product Szie</p>
        <div className='flex gap-3'>
          <div onClick={()=>setSizes(pre => pre.includes("S") ? pre.filter((e)=> (e !== "S")) : [...pre, "S"])}>
            <p className={`${sizes.includes("S") ? "bg-black text-white" : " "} px-3 py-1 cursor-pointer `}>S</p>
          </div>
          <div onClick={()=>setSizes(pre => pre.includes("M") ? pre.filter((e)=> (e !== "M")) : [...pre, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-black text-white" : " "} px-3 py-1 cursor-pointer `}>M</p>
          </div>
          <div onClick={()=>setSizes(pre => pre.includes("L") ? pre.filter((e)=> (e !== "L")) : [...pre, "L"])}>
            <p className={`${sizes.includes("L") ? "bg-black text-white" : " "} px-3 py-1 cursor-pointer `}>L</p>
          </div>
          <div onClick={()=>setSizes(pre => pre.includes("XL") ? pre.filter((e)=> (e !== "XL")) : [...pre, "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-black text-white" : " "} px-3 py-1 cursor-pointer `}>XL</p>
          </div>
          <div onClick={()=>setSizes(pre => pre.includes("XXL") ? pre.filter((e)=> (e !== "XXL")) : [...pre, "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-black text-white" : " "} px-3 py-1 cursor-pointer `}>XXL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
       <input
  type="checkbox"
  id="bestseller"
  checked={bestseller}
  onChange={() => setBestSeller(prev => !prev)}
/>
<label htmlFor="bestseller">Best Seller</label>
      </div>
      <button className='w-28 py-3 mt-4 bg-black text-white  rounded-2xl cursor-pointer' type='submit'>ADD</button>
    </form>
  )
}

export default add
