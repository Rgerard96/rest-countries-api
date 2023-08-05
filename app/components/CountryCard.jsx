import Image from "next/image";
import Link from "next/link";

export default function CountryCard({ country: { name, capital, region, population, flags }, index }) {
  return (
    <Link href={`/country/${name.common.toLowerCase()}`} key={index} className='grid grid-rows-2 drop-shadow-lg bg-white rounded-md overflow-hidden'>
      <div className="w-full h-full relative">
        <Image
          src={flags.svg}
          alt={`${name.common} image`}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="space-y-1 px-5 pb-12 pt-8">
        <h2 className="mb-4 text-xl font-bold">{name.common}</h2>
        <p><span className="font-semibold">Population:</span>  {population.toLocaleString()}</p>
        <p><span className="font-semibold">Region:</span> {region}</p>
        <p><span className="font-semibold">Capital:</span> {capital}</p>
      </div>
    </Link>
  );
}
