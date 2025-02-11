import React from "react";
import { Card, Carousel } from "react-bootstrap";

function Product() {
    const products = [
        { src: "/asset/img/product1.jpg", description: "Product 1 - தயாரிப்பு 1" },
        { src: "/asset/img/product2.jpg", description: "Product 2 - தயாரிப்பு 2" },
        { src: "/asset/img/product3.jpg", description: "Product 3 - தயாரிப்பு 3" },
        { src: "/asset/img/product4.jpg", description: "Description for Product 4" },
        { src: "/asset/img/product5.jpg", description: "Description for Product 5" },
        { src: "/asset/img/product6.jpg", description: "Description for Product 6" },
        { src: "/asset/img/product7.jpg", description: "Description for Product 7" },
        { src: "/asset/img/product8.jpg", description: "Description for Product 8" },
        { src: "/asset/img/product9.jpg", description: "Description for Product 9" },
        { src: "/asset/img/product10.jpg", description: "Description for Product 10" },
        { src: "/asset/img/product11.jpg", description: "Description for Product 11" },
        { src: "/asset/img/product12.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product13.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product14.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product15.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product16.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product17.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product18.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product19.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product20.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product21.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product22.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product23.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product24.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product25.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product26.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product27.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product28.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product29.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product30.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product31.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product32.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product33.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product34.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product35.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product36.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product37.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product38.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product39.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product40.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product41.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product42.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product43.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product44.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product45.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product46.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product47.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product48.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product49.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product50.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product51.jpg", description: "Description for Product 12" },
        { src: "/asset/img/product52.jpg", description: "Description for Product 12" },
    ];

    return (
        <>
            
            {/* Product Section Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Section Title */}
                        <div className="col-lg-12 text-center mb-4">
                            <h5 className=" text-uppercase" style={{  color: "rgba(39, 84, 142, 0.9)"}}>Our Products</h5>
                            <h1 className="display-6">Explore Our Exclusive Products</h1>
                        </div>

                        {/* Carousel for Product Cards */}
                        <Carousel className="product-carousel" interval={2000} pause="hover" controls={false}>
                            {products.map((product, index) => (
                                <Carousel.Item key={index} className="text-center">
                                    <Card className="product-card border-0 shadow-sm rounded mx-auto">
                                        <Card.Img
                                            variant="top"
                                            src={product.src}
                                            alt={product.description}
                                            className="product-image"
                                        />
                                        <Card.Body>
                                            <Card.Title className="text-dark fw-bold mb-2">
                                                {product.description}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* Product Section End */}

            {/* Custom Styles */}
            <style jsx>{`
                .product-carousel {
                    max-width: 80%; /* Adjust width for responsiveness */
                    margin: 0 auto;
                }

                .product-card {
                    width: 100%;
                    max-width: 400px;
                    margin: auto;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .product-image {
                    height: 300px; /* Adjust height to fit the card */
                    object-fit: cover;
                    transition: opacity 0.3s ease;
                }

                .product-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                }

                .product-card:hover .product-image {
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .product-carousel {
                        max-width: 100%; /* Full width on smaller screens */
                    }

                    .product-image {
                        height: 250px; /* Reduce image height for smaller screens */
                    }
                }

                @media (min-width: 1200px) {
                    .product-image {
                        height: 350px; /* Increase image height for larger screens */
                    }
                }
            `}</style>
        </>
    );
}

export default Product;
