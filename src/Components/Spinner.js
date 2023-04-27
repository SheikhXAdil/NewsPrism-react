import React from 'react'
import loading from './loading.gif'
import loadingDark from './loadingdark.gif'

const Spinner = (props)=> {
    return (
      <div className='text-center'>
        <img className='my-3' style={{ width:"50px", height:"50px" }} src={props.mode === 'dark' ? loadingDark : loading} alt="loading" />
      </div>
    )
  }

  export default Spinner
