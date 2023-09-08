import React from 'react'

const LinkToButton = ({url, text, color}) => {
  return (
    <div>
      <a href={url}
        target="_blank" 
        className={`bg-gradient-to-r ${color} hover:shadow-2xl transition duration-200 ease-out text-white font-bold py-4 px-6 rounded-full shadow-lg`}>
        {text}
      </a>
    </div>
  )
}

export default LinkToButton