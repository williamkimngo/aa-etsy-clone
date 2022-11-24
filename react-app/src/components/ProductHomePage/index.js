import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchAllProducts } from '../../store/product';
import './HomePage.css'

const ProductHome = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const objProducts = useSelector(state => state.products.allProducts)
    const productsArr = Object.values(objProducts)

    const lemonProducts = productsArr.filter(product => product.category === "Lemon")
    const orangeProducts = productsArr.filter(product => product.category === "Orange")
    const limeProducts = productsArr.filter(product => product.category === "Lime")
    const grapeFruitProducts = productsArr.filter(product => product.category === "Grapefruit")


    useEffect(() => {
        dispatch(fetchAllProducts(objProducts))
    }, [dispatch])

    // if(!objProducts) {
    //     return null
    // }
    // if (!lemonProducts.length || !orangeProducts.length || !limeProducts.length) {
    //     return null
    // }
    return (
        <div className='entire-home-container'>
            <div>
                {sessionUser ?
                    <div className='home-welcome'>Welcome Back, <NavLink className="home-name" to={`/products/${sessionUser.id}`}>{sessionUser.firstName}</NavLink><div>!</div> </div>
                    : <div className='home-welcome-nouser'> Welcome to Zesty!</div>
                }
                <div className='home-category-circles'>
                    <div className='welcome-background'>
                    </div>
                    <div className='category-cricles'>
                        <NavLink className="img-link" to={`/products/${lemonProducts[0]?.id}`}>
                            <div className='img-circle'>
                                <img src={lemonProducts[0]?.previewImage} className='individual-img' alt='individual'></img>
                            </div>
                            <div className='category-name'>Lemon</div>
                        </NavLink>

                    </div>
                    <div className='category-cricles'>
                        <NavLink className="img-link" to={`/products/${orangeProducts[0]?.id}`}>
                            <div className='img-circle'>
                                <img src={orangeProducts[0]?.previewImage} className='individual-img' alt='individual'></img>
                            </div>
                            <div className='category-name'>Orange</div>
                        </NavLink>

                    </div>
                    <div className='category-cricles'>
                        <NavLink className="img-link" to={`/products/${limeProducts[0]?.id}`}>
                            <div className='img-circle'>
                                <img src={limeProducts[0]?.previewImage} className='individual-img' alt='individual'></img>
                            </div>
                            <div className='category-name'>Lime</div>
                        </NavLink>
                    </div>
                    <div className='category-cricles'>
                        <NavLink className="img-link" to={`/products/${limeProducts[0]?.id}`}>
                            <div className='img-circle'>
                                <img src={grapeFruitProducts[0]?.previewImage} className='individual-img' alt='individual'></img>
                            </div>
                            <div className='category-name'>Grapefruit</div>
                        </NavLink>
                    </div>
                </div>
                <div className='display-product-main'>
                    {productsArr?.map((product, i) => {
                        return (
                            <div className={`display-product-outer img${i}`}>
                                <NavLink to={`/products/${product.id}`}>
                                    <div className='display-img-outer'>
                                        <img src={product.previewImage} className={`display-product-img img${i}`} alt={product.id} />
                                    </div>
                                    <div className='display-product-price'>${parseFloat(product.price).toFixed(2)}</div>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}



export default ProductHome;