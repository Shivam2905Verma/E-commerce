import axios from "axios";
import React, { useEffect, useState } from "react";
import { backenUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backenUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.message);
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeProduct = async (id)=>{
    console.log("run")
   try{

     const response = await axios.post(backenUrl + "/api/product/remove", {id} , {headers:{token}})
     console.log(response)
     if(response.data.success){
       toast.success(response.data.message)
       fetchList()
      }else{
        toast.error(response.data.message)
      }
    }catch(err){
      console.log(err)
      toast.error(err)
    }
 
  }

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/*---------List Table Title----------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-3 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/*---------Product List----------- */}
        {
          list.map((items, index)=> 
             (<div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" key={index} >
              <img className="w-12" src={items.image[0]} />
              <p>{items.name}</p>
              <p>{items.category}</p>
              <p>{currency}{items.price}</p>
              <p onClick={()=>removeProduct(items._id)} className="text-right md:text-center cursor-pointer text-lg">x</p>
            </div>)
          )
        }
      </div>
    </>
  );
};

export default List;
