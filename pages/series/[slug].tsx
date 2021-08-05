import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { series } from "../../lib/context";
import homeImg from "../../public/home_white_24dp.svg";
import styles from "../../styles/slug.module.scss";

export default function Serie() {
  const { slug } = useRouter().query;
  const chooseSerie = series.filter((current) => current.slug === slug);

  return (
    <>
      {chooseSerie.map((serie) => {
        if (serie) {
          const { slug, name, about, wallpaper} = serie;
          return (
            <div
              key={slug}
              className={styles.container}
            >
              <div className="topArea">
                <Image
                  src={wallpaper}
                  alt="Wallpaper"
                  height={220}
                  width={650}
                  className={styles.wallpaperImg}
                />
                <h2 className={styles.subTitle}>{name}</h2>
              </div>
              <div className={styles.about}>
                <p className={styles.blue}>{about}</p>
              </div>
              <div className={styles.footerSerie}>
                <Link href="/">
                  <button className={styles.backHome}>
                    <Image src={homeImg} alt="Back to Home" />
                  </button>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
