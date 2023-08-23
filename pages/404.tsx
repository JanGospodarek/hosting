import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">kod 404 - strona nie znaleziona!</h1>
      <Link href="/" className="btn btn-success mt-4">
        Strona główna
      </Link>
    </div>
  );
};
export default Custom404;
