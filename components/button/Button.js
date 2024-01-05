
const Button = ({ handleOrderClick, table, title }) => (

  <button
    type="button"
    onClick={()=>handleOrderClick(title)}
    className='btn btn-outline sd:my-2 xz:my-1 btn-sm'
    >
    Заказать
  </button>
);

export default Button;
