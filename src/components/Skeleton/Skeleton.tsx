import styles from './Skeleton.module.css';

export function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={`${styles.image} ${styles.shimmer}`} />
      <div className={styles.body}>
        <div className={`${styles.title} ${styles.shimmer}`} />
        <div className={styles.row}>
          <div className={`${styles.tag} ${styles.shimmer}`} />
          <div className={`${styles.tag} ${styles.shimmer}`} />
        </div>
        <div className={styles.row}>
          <div className={`${styles.badge} ${styles.shimmer}`} />
          <div className={`${styles.badge} ${styles.shimmer}`} />
          <div className={`${styles.badge} ${styles.shimmer}`} />
        </div>
      </div>
    </div>
  );
}
