import React from 'react';

const Category = ({category}) => {
    return (
        <div>
          <h2>{category?.name}</h2>
        </div>
    );
};

export default Category;