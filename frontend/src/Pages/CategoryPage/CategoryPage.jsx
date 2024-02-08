import "./CategoryPage.css"
import { useState } from 'react';
import Catagory from '../../Components/CategoryPageComponents/Category/Category'
import Products from '../../Components/CategoryPageComponents/Products/Products'

const CategoryPage = () => {

  const [filteredData, setFilteredData] = useState({
    city: [],
    range: [],
    rating: [],
  });

  const handleCatagoryData = (data) => {
    setFilteredData(data);
  };

  return (
    <div className='CategoryPage'>
      <h1 className='result'>Search Results</h1>
      <div className='sections'>
        <div>
          <Catagory catagoryData={handleCatagoryData}/>
        </div>
        <div>
          <Products productsFilter={filteredData}/>
        </div>
      </div>
    </div>
  )
}


export default CategoryPage

