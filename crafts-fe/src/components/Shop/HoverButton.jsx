import React, { useState } from 'react'

export default function HoverButton({ defaultText, hoveredText }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <button onMouseOver={() => {setIsHovered(true)}} onMouseOut={() => {setIsHovered(false)}} className="delete-btn">
        {isHovered ? defaultText : hoveredText}
      </button>
    </>
  )
}
