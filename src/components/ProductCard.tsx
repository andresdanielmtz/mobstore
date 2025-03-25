import { Link } from 'react-router-dom';
import { RatingStars } from './RatingStars';
import {Product} from "../types/products.ts";


type ProductCardProps = {
        product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
        return (
            <div className="product-card">
                    <Link to={`/product/${product.id}`} className="product-image-link">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                                onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Product+Image';
                                }}
                            />
                    </Link>

                    <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-title">
                                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                            </h3>

                            <div className="product-rating">
                                    <RatingStars rating={product.rating} />
                                    <span>({product.rating.toFixed(1)})</span>
                            </div>

                            <div className="product-footer">
                                    <span className="product-price">${product.price.toFixed(2)}</span>
                                    <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                    </div>
            </div>
        );
};