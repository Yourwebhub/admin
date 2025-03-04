import React from 'react'

const SimpleCard = ({ imageSrc, title, description }) => {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg border text transition-shadow duration-300">
    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
      <img
        src={imageSrc || "/placeholder.svg?height=300&width=400"}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
    <div className="p-2 sm:p-2">
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-bllue">{title}</h3>
      <p className="text-sm sm:text-base ">{description}</p>
    </div>
  </div>
  )
}

export default SimpleCard
