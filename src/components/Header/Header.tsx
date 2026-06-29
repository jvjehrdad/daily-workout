import styles from './Header.module.css';

interface HeaderProps {
  dayTitle: string;
  focus: string;
  coachTip: string;
}

export function Header({ dayTitle, focus, coachTip }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.accentBar} />
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{dayTitle}</h1>
          <span className={styles.focus}>{focus}</span>
        </div>
        <div className={styles.coachCard}>
          <div className={styles.coachIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <p className={styles.coachTip}>{coachTip}</p>
        </div>
      </div>
    </header>
  );
}
