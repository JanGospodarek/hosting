import Image from "next/image";
const CoffeeSinglePartner = (props: { alt: string; image: any }) => {
  return (
    <button className="hover:scale-110 duration-150">
      <Image
        src={props.image}
        width={80}
        alt={props.alt}
        className="rounded-lg"
      />
    </button>
  );
};
export default CoffeeSinglePartner;
