// import React from 'react'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import "../styles/LatestNews.sass";

// export default function LatestNews() {
//     const products = [
//         {
//           id: 1,
//           image: "/images/products/product1.png",
//           category: "Accessories",
//           title: "The Richland Center Shooping News and weekly shooper",
//           price: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth."
//         },
//         {
//           id: 2,
//           image: "/images/products/product2.png",
//           category: "Beauty",
//           title: "Women Freshwash",
//           price: "$140.00"
//         },
//         {
//           id: 3,
//           image: "/images/products/product3.png",
//           category: "Decor",
//           title: "Room Flash Light",
//           price: "$160.00"
//         }
//       ];
//   return (
//     <Container>
//         <Row>
//             <div className='product-heading'>
//                 <p>Popular Item in the market</p>
//                 <h2>Latest<span> News</span></h2>
//             </div>
//             <div className='row'>
//           {products.map((productItem) => (
//             <div key={productItem.id} className='col-md-6 col-lg-4 col-xl-3'>
//               <div className='product-card'>
//                 <div className='product-card-img'>
//                   <img src={productItem.image} alt="productImage" />
//                 </div>
//                 <div className='card-text'>
//                   <p>{productItem.category}</p>
//                   <h4>{productItem.title}</h4>
//                   <p className='product-price'>{productItem.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         </Row>
//     </Container>
//   )
// }
