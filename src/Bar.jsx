import React from 'react'
import './Bar.css'

function Bar() {

    function AddNew(){
        let newDiv = document.createElement('div');
        newDiv.classList.add('div-box');
        let container = document.querySelector('.addition_container')
        container.appendChild(newDiv);
    }
    function delay(seconds){
        new Promise((resolve, reject) =>{
            if(typeof seconds !== 'number'){
                reject(new Error("seconds must be a number"))
            }
            setTimeout(()=>resolve, seconds*1000)
        })
    }


    return (
        <>
        <div className='progress'>
            Progress
        </div>
        <hr />
        <div className='addition_container'>
            <button onClick={AddNew} className='btn-add'>  Add Progress Bar </button>
        </div>
        <hr />
         
        </>
    )
}

export default Bar
