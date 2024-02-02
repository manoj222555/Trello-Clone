import React, { useState } from 'react';
import { addList, addCard } from '../store/listSlice';
import { useDispatch } from 'react-redux';

const AddNew = ({type,parentId}) => {
    const [InputVal, setInputVal] = useState("");
    const [IsFormVisible, setIsFormVisible] = useState(false);
// console.log("type",type)

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        if(type){
           dispatch(addCard({id:Math.random(),title:InputVal,parentId:parentId}))
        }else{
       
        dispatch(addList({id:Math.random(),title:InputVal}))
    }
        setInputVal("")
    };
    const updateInput = (e) => {
       
         setInputVal(e.target.value)
    }
    const openForm = () =>{
        setIsFormVisible(true)
    }
    const hideForm = () =>{
        setIsFormVisible(false)
    }
    return (
        <div>
            <button onClick={openForm}>+ Add New </button>
             {IsFormVisible && <form onSubmit={submitHandler} className='mt-3'>
                <input value={InputVal} onChange={updateInput} />
                <div className='mt-3'>
                <button onClick={hideForm} className='mr-3'>Cancel</button>
                <button onClick={submitHandler} className=' px-3 py-2 bg-blue-500'>Save</button>
                </div>
            </form>}
        </div>
    )
}

export default AddNew