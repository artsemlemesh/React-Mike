import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2">
          <img
            src="/path/to/photo1.jpg"
            alt="Photo 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="/path/to/photo2.jpg"
            alt="Photo 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="/path/to/photo3.jpg"
            alt="Photo 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <img
            src="/path/to/photo4.jpg"
            alt="Photo 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="/path/to/photo5.jpg"
            alt="Photo 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="/path/to/photo6.jpg"
            alt="Photo 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
