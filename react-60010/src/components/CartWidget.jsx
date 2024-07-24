import cart from '../assets/cart.png';

export const CartWidget = () => {
    return (
    <>
    <img src={cart} alt="cart" height={40} /> 
    <span>5</span>
    </>
    );
}