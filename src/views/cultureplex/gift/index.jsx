import React from 'react';

const Gift = ({ img_url, title }) => {
  return (
    <div>
      <img src={img_url} alt={title} className='border rounded-2xl w-50 h-40 object-fill hover:-translate-y-3 transition-transform transform duration-300' />
    </div>
  );
};

export default Gift;