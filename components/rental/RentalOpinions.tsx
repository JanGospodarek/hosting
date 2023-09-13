import { Opinions } from "../../interfaces/types";

const opinions: Opinions = [
  {
    name: "Marcin Kowalski",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos eligendi maiores alias aperiam, veniam ipsa blanditiis nesciunt commodi, odit officia, eum cupiditate atque! Repellendus veniam similique quis porro ex!",
  },
  {
    name: "Anna Załęska",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos eligendi maiores alias aperiam, veniam ipsa blanditiis nesciunt commodi, odit officia, eum cupiditate atque! Repellendus veniam similique quis porro ex!",
  },
  {
    name: "Patryk Świerczek",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos eligendi maiores alias aperiam, veniam ipsa blanditiis nesciunt commodi, odit officia, eum cupiditate atque! Repellendus veniam similique quis porro ex!",
  },
  {
    name: "Weronika Bieda",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos eligendi maiores alias aperiam, veniam ipsa blanditiis nesciunt commodi, odit officia, eum cupiditate atque! Repellendus veniam similique quis porro ex!",
  },
];
const RentalOpinions = () => {
  return (
    <div className="w-full h-full relative">
      <h1 className="text-3xl italic font-bold uppercase mx-auto text-white text-center my-8">
        Co o nas mówią
      </h1>
      <div>
        <div className="carousel carousel-center  p-4 space-x-4 rounded-box w-full">
          {opinions.map((el) => (
            <div className="carousel-item">
              <div className=" w-[400px] p-6  mx-4 border-2 border-gray-600 rounded-xl">
                <p className="">{el.opinion}</p>
                <p className="text-gray-500 text-xl text-right mt-3">
                  {el.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RentalOpinions;
