import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo, GetTodo } from "../api/api.js";
import { useEffect } from "react";
import "./table.css";

const Table = () => {
  
    let dispatch = useDispatch();
    const { data, isLoading } = useSelector((state) => state.counter);
    useEffect(() => {
      dispatch(GetTodo());
    }, []);
    console.log(isLoading);
  
    if (isLoading) {
      return (
        <div className=" absolute right-0 top-0 w-[100%] bg-[black] h-[100svh]  loader"></div>
      );
    }

    return (
        <div>

            <div className='w-[60%] m-auto mt-[20px] mb-[20px] flex justify-evenly items-center'>
                <input type="text" placeholder='Search...' className='outline-none w-[200px] pl-[5px] h-[30px] border border-[lightgray] rounded ' name="" id="" />
                <button className='w-[150px] h-[30px] bg-[#004cff] text-[white] font-[700] rounded'>+Add New User</button>
            </div>
             
        <div className='w-[65%] m-auto flex flex-wrap gap-[20px]'>
            {
                data.map((element) => {
                    return (
                        <div key={element.id} className='shadow-lg shadow-slate-500 w-[300px] h-[auto] pt-[20px] pb-[20px] border-[1px] border-[solid] border-[#dfdfdf] rounded flex flex-col gap-[10px] items-center justify-center'>
                            <img className='w-[80px] h-[80px] rounded-[50%]' src={element.image} alt="" />
                            <div className='flex flex-col gap-[5px] items-center'>
                            <h1>{element.name}</h1>
                            <h1>{element.phone}</h1>
                            </div>
                            <div className='flex gap-[50px] items-center'>
                                <button onClick={() => dispatch(DeleteTodo(element.id))} className='w-[80px] rounded h-[30px] bg-[red] text-[white] font-[700]'>Delete</button>
                                <button  className='w-[80px] rounded h-[30px] bg-[green] text-[white] font-[700]'>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        </div>
  )
}

export default Table
