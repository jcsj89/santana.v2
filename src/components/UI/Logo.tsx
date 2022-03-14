import Image from "next/image";

export default function Logo() {
  const source = '/logo.png';

  return <Image src={source} alt='Santana Quimica' className="" width={235} height={54} />
  
  // <img src="./logo.png" alt="Santana" width={100} height={100} />;
}
