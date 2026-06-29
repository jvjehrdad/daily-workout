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
          <div className={`${styles.dayPill} ${allDone ? styles.dayPillDone : ''}`}>
            {allDone ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <span className={styles.dayDot} />
            )}
            {allDone ? 'تمام شد' : 'امروز'}
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
          <div className={styles.coachAccent} />
          <div className={styles.coachInner}>
            <div className={styles.coachIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className={styles.coachContent}>
              <span className={styles.coachLabel}>Coach Tip</span>
              <p className={styles.coachText}>{coachTip}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
