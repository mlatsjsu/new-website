import React from 'react'

const LinkToButton = ({url, text}) => {
  return (
    <div>
      <a href={url}
        target="_blank" 
        className="bg-gradient-to-r from-[#ec6c04] via-[#f69904] to-[#fcc304] hover:from-[#ec6c04] hover:to-[#ec6c04] text-white font-bold py-4 px-6 rounded-full">
        {text}
      </a>
    </div>
  )
}

export default LinkToButton