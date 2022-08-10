
import { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import './notFoundError.css'



export function NotFoundError(){

  const [posX, setPosX] = useState(null);


  const page = useMemo(()=>{return Math.round(Math.random())}, [])
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);


  function handleMove(e){
    const x = e.clientX - width/2;
    setPosX(x);
  }
  

  return(
    <div className='not-found-error' onMouseMove={handleMove} ref={ref}>
        <NavLink className="go-back-to-safety" to="/about">Retourner sur le site</NavLink>
        {page===0&& (
            <div 
                className='square-background' 
                style={{
                transform: `translateX(${Math.floor(posX*0.02)}px)`
                }}
            >
                <div 
                className="square-foreground" 
                style={{transform: `translateX(${Math.floor(posX*0.05)}px)`}}
                >
                     404
                </div>
            </div>
        )}

        {page===1&&(
            <div className='bouncing-error'>404</div>
        )}

      
    </div>
  )
}