import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./imageviewer.css"

export function ImageViewer(props){


  useEffect(()=>{
    if(props.isShowing){
        const handleKey = (e) => {
            //escape closes the modal
            if(e.keyCode === 27){
                toggleShow(e);
            }
            //arrow left goes previous picture
            if(e.keyCode === 37){
              dispatch({type:'previous'})
            }
            //arrow right goes next picture
            if(e.keyCode === 39){
              dispatch({type:'next'})
            }
        }
        
        window.addEventListener('keydown', handleKey)
        return () => {window.removeEventListener('keydown', handleKey)}
    }
})

    
  function reducer(state, action) {
    switch (action.type) {
      case 'next':
        if(state.index === props.img.length -1){
          return {index: state.index, animation:''};
        } else {
          return {index: state.index + 1 , animation: 'slideFromRight .5s forwards'};
        }
      case 'previous':
        if(state.index === 0){
          return {index: 0, animation: ''}
        } else {
          return {index: state.index - 1 , animation: 'slideFromLeft .5s forwards'};
        }
      case 'reset':
        return {index: 0, animation: ''}
      default:
        throw new Error();
    }
  }

    const [state,  dispatch] = useReducer(reducer, {index: 0, animation:''});

    function toggleShow(e){
        props.toggleShow(e);
        dispatch({type: 'reset'})
        
    }


    if(props.isShowing){

        return ReactDOM.createPortal(
        <>
        
          <div onClick={toggleShow} className="viewer-background">
            <div className="viewer-wrapper">
              <div className="modal" onClick={(e)=>e.stopPropagation()}>
                <span className="close-btn" onClick={toggleShow}>&times;</span>
                
                {props.img.map(function(image, index){
                  return(
                    <img key={image} alt={image} src={image} className={index === state.index ? 'current-image' : 'hidden-image'} style={{animation: state.animation}}/>
                  )
                })}


                {props.img.length > 1 && (
                  <>
                    {state.index !== props.img.length -1 && (
                      <button 
                        className="next-btn" 
                        onClick={()=>dispatch({type: 'next'})} 
                        
                        tabIndex="0"
                      >
                          <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    )}
                    {state.index !== 0 &&(
                       <button 
                        className="previous-btn" 
                        onClick={()=>dispatch({type: 'previous'})} 
                        tabIndex="0"
                      >
                         <FontAwesomeIcon icon={faChevronLeft} /> 
                     </button>
                    )}
                   
 
                  </>
                   
                )}
               

              </div>
            </div>
          </div>
        </>,
        document.body
        )
    } 
    return null;
}