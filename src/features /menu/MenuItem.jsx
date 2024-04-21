import { formatCurrency } from "../../utilties /helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (

      <li className="flex bg-white items-center my-10">
      <img  className="mr-5 w-[90px] h-[90px]" src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
   
  );
}

export default MenuItem;
