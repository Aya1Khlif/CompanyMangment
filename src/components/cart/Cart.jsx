import './cart.css';

const Cart = ({ text, index, activeIndex, handleClick, desc, img }) => {
  const isActive = activeIndex === index;

  return (
    <div 
      onClick={() => handleClick(index)}
      className={`cart-container w-[140px] max-w-xs 
        p-4 m-2 text-center flex items-center justify-center h-[540px] shadow-lg rounded-md
         transition-all duration-500 ease-in-out relative ${
        isActive ? 'w-[300px]' : ''
      }`}
      style={{
        backgroundImage: isActive
          ? `url(${img})` 
          : `linear-gradient(190deg, rgba(191, 2, 0, 0.9) 0%,rgba(50, 5, 86, 0.9) 100%), url(${img})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: isActive ? 1 : 0.5,  
        transition: 'opacity 0.5s ease'
      }}
    >
      {!isActive && (
        <div className="cart cart-content rotate-90">
          {text}
        </div>
      )}

      {isActive && (
        <div className="cart-info mt-4">
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
