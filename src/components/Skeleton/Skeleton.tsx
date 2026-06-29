import styles from './Skeleton.module.css';

export function SkeletonCard({ isHero = false }: { isHero?: boolean }) {
  return (
    <div className={`${styles.card} ${isHero ? styles.hero : ''}`}>
      <div className={`${styles.image} ${styles.shimmer}`} />
      <div className={styles.body}>
        <div className={`${styles.title} ${styles.shimmer}`} />
        <div className={styles.stats}>
          <div className={`${styles.stat} ${styles.shimmer}`} />
          <div className={`${styles.stat} ${styles.shimmer}`} />
          <div className={`${styles.stat} ${styles.shimmer}`} />
        </div>
        <div className={styles.tags}>
          <div className={`${styles.tag} ${styles.shimmer}`} />
          <div className={`${styles.tag} ${styles.shimmer}`} />
        </div>
      </div>
    </div>
  );
}
