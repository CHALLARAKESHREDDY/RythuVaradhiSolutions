
import React, { useEffect } from 'react';

import './NotFound.css'

function NotFound(){
    useEffect(() => {
        // Set the title when the component mounts
        document.title = 'Page  not-found';
    
        // Optionally, you can also reset the title when the component unmounts
        
      }, [])

    return(
        <div className="Not-Found">
           <img src="https://i.postimg.cc/P5JgrKt1/6325254.jpg" alt="Not-Found" className="Notfound-Image" />
           
        </div>
    )
}

export default NotFound