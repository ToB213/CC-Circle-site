import Image from "next/image";
import Link from "next/link";

import games from "@/data/pj.json";

export default function Cards() {
  const defaultImage = "/pj/crop/logo.png";

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
      {games.map((game, index) => (
        <div className="flex items-center justify-center" key={index}>
          <Link href={`${game.slug}`}>
            <Image
              src={game.crop || defaultImage}
              alt={game.title}
              width={600}
              height={600}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
