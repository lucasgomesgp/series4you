import Image from "next/image";
import Link from "next/link";
import styles from "../styles/series.module.scss";

interface CurrentSerieProps {
  slug: string;
  image: string;
  name: string;
}

export default function CurrentSerie({ slug, image, name }: CurrentSerieProps) {
  return (
    <>
      <Link href={`/series/${slug}`}>
        <div className={styles.serie}>
          <h3>{name}</h3>
          <Image src={image} height={250} width={200}  className={styles.imgSerie} />
        </div>
      </Link>
    </>
  );
}
