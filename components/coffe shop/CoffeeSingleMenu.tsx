import { Dishes } from "../../interfaces/types";

const CoffeeSingleMenu = (props: { title: string; dishes: Dishes }) => {
  return (
    <div className="  text-white  w-full px-8 sm:px-44 py-44 h-full">
      <p className="text-5xl m-4">{props.title}</p>

      <ul className="sm:ml-24 text-2xl  flex flex-col gap-2 overflow-scroll">
        {props.dishes.map((el) => (
          <li className="w-full flex justify-between border-b-2 border-dotted">
            <span className="my-2">{el.name}</span>
            <span className="font-bold">{el.price} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CoffeeSingleMenu;
