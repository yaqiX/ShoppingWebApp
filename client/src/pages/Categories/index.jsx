import { useParams } from "react-router-dom";
import CategoryList from "../../Components/CategoryList";
import { useState } from "react";
import "./index.scss"

const Categories = () => {
// http://localhost:5173/categories/1
    const categoryID = 1
    // const categoryID = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState("asc");

    return(
        <div className="categories">
            <div className="topBanner">
                <h1>category Page</h1>
            </div>
            <div className="productsContainer">
            <div className="side">
                <div className="filter">
                    <h2>CATEGORY</h2>
                    <div className="categoryInput">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor='1'>Shirt</label>
                    </div>
                    <div className="categoryInput">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor='2'>Sweater</label>
                    </div>
                    <div className="categoryInput">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor='3'>Dress</label>
                    </div>
                    <div className="categoryInput">
                        <input type="checkbox" id="4" value={4} />
                        <label htmlFor='4'>Lounge</label>
                    </div>
                    <div className="categoryInput">
                        <input type="checkbox" id="5" value={5} />
                        <label htmlFor='5'>Accesories</label>
                    </div>
                </div>
                <div className="filter">
                    <h2>Filter by Price Range</h2>
                    <div className="categoryInput">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filter">
                    <h2>SORT BY</h2>
                    <div className="categoryInput">
                        <input type="radio" id="priceASC" name="price" onChange={(e)=>setSort("asc")}/>
                        <label htmlFor="priceASC"> Low to High </label>
                    </div>
                </div>
                <div className="categoryInput">
                        <input type="radio" id="priceDES" name="price" onChange={(e)=>setSort("desc")}/>
                        <label htmlFor="priceDES"> High to Low </label>
                    </div>
            </div>
            <div className="products">
                <CategoryList categoryID={categoryID}/>
            </div>
            </div>

        </div>
    )
}

export default Categories;