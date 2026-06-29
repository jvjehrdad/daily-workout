import styles from './Header.module.css';

interface HeaderProps {
  dayTitle: string;
  focus: string;
  coachTip: string;
  completedCount: number;
  totalCount: number;
  progress: number;
  allDone: boolean;
}

export function Header({ dayTitle, focus, coachTip, completedCount, totalCount, progress, allDone }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.bgOrb} />
      <div className={styles.bgOrb2} />

      <div className={styles.inner}>
        <div className={styles.topBar}>
          <div className={styles.brandMark}>
            <div className={styles.brandIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6.5 6.5L17.5 17.5" />
                <path d="M17.5 6.5L6.5 17.5" />
                <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <span className={styles.brandName}>Workout</span>
          </div>
          <div className={`${styles.dayPill} ${allDone ? styles.dayPillDone : ''}`}>
            {allDone ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <span className={styles.dayDot} />
            )}
            {allDone ? 'تمام شد' : 'Today'}
          </div>
        </div>

        <div className={styles.hero}>
          <h1 className={styles.title}>{dayTitle}</h1>
          <div className={styles.focusLine}>
            <span className={styles.focusText}>{focus}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>پیشرفت تمرین</span>
            <span className={styles.progressCount}>
              <span className={styles.progressDone}>{completedCount}</span>
              <span className={styles.progressSep}>/</span>
              <span className={styles.progressTotal}>{totalCount}</span>
            </span>
          </div>
          <div className={styles.progressTrack}>
            <div
              className={`${styles.progressFill} ${allDone ? styles.progressFillDone : ''}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className={styles.coachNote}>
          <div className={styles.coachAvatar}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className={styles.coachContent}>
            <span className={styles.coachLabel}>Coach tip</span>
            <p className={styles.coachText}>{coachTip}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
