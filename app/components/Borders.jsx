import Link from "next/link";

async function getBorders(countryBorders) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryBorders}
    `);

    const borders = await response.json();
    return borders;
}

export default async function Borders({ countryBorders }) {
    const borders = await getBorders(countryBorders);
    return (
        <div className="mt-24 flex space-x-3">
            <div className="flex-none mt-2">
                <p className="font-semibold">Border countries:</p>
            </div>
            <div className="flex flex-wrap">
                {borders.map((border) => (
                    <Link href={`/country/${border.name.common.toLowerCase()}`} className="drop-shadow-sm border rounded-md py-1.5 px-5 text-center bg-white mb-2 mr-2">
                        <p className="text-sm">
                            {border.name.common}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
