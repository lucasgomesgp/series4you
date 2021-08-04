import Image from "next/image";
import Link from "next/link";
import styles from "../styles/series.module.scss";

interface CurrentSerieProps {
  slug: string;
  image: string;
}

export default function CurrentSerie({ image, slug }: CurrentSerieProps) {
  return (
    <>
      <Link href={`/series/${slug}`}>
        <div className={styles.serie}>
          <Image src={image} height={250} width={200}  className={styles.imgSerie} />
        </div>
      </Link>
    </>
  );
}
