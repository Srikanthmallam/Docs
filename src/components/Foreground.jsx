import React, { useRef, useState } from 'react'
import Cards from './cards'
function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize: ".6mb",
            close :true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor : "green"
            }
            
        },{
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize: ".6mb",
            close :false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor : "green"
            }
            
        },{
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize: ".6mb",
            close :true,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor : "blue"
            }
            
        },{
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize: ".6mb",
            close :false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor : "green"
            }
            
        },{
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize: ".6mb",
            close :true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor : "green"
            }
            
        },{
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize: ".6mb",
            close :true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor : "green"
            }
            
        },{
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize: ".6mb",
            close :false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor : "blue"
            }
            
        },
    ];

  return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Cards data={item} reference={ref}/>
        ))}
        </div>
  )
}

export default Foreground
