import Card from "../Card";

const FeaturedProduct = () => {
    const picData = [
        {
            id: 1, 
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" ,
            img2:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" ,
            title: "Long Sleeve Graphic T-shirt", 
            isNew:true, 
            oldPrice: 19,
            price: 12
        },]
    //     // {
    //     //     id: 2,
    //     //     img: "https://images.pexels.com/photos/1230945/pexels-photo-1230945.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     //     img2: "https://images.pexels.com/photos/1019155/pexels-photo-1019155.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     //     title: "Casual Denim Jeans",
    //     //     isNew: false,
    //     //     oldPrice: 29,
    //     //     price: 22
    //     // },
    //     // {
    //     //     id: 3,
    //     //     img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     //     img2: "https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     //     title: "Sporty Sneakers",
    //     //     isNew: true,
    //     //     oldPrice: 45,
    //     //     price: 35
    //     // },
    //     // {
    //     //     id: 4,
    //     //     img: "https://images.pexels.com/photos/4567123/pexels-photo-4567123.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     //     img2: "https://images.pexels.com/photos/3585586/pexels-photo-3585586.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     //     title: "Cozy Hooded Sweatshirt",
    //     //     isNew: true,
    //     //     oldPrice: 39,
    //     //     price: 29
    //     // }
    // ]


    return (
        <div className="featuredProduct">
            product
            <div className="top">
                <h1>Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptates quasi quo aperiam nemo minus natus quidem rerum saepe omnis maiores, commodi beatae eligendi neque ipsam iusto suscipit ipsa reiciendis?</p>
            </div>
            <div className="pic">
                {picData.map((product,index) => (
                    <Card key={product.index} item={product}/>
                ))}
            </div>
            {/* <img src={picData[0].img} /> */}
        </div>
    )
}

export default FeaturedProduct;