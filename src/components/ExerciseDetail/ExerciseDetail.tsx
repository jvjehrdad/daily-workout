import { useEffect, useRef } from 'react';
import type { Exercise } from '../../types/workout';
import styles from './ExerciseDetail.module.css';

interface ExerciseDetailProps {
  exercise: Exercise;
  onClose: () => void;
}

export function ExerciseDetail({ exercise, onClose }: ExerciseDetailProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.sheet} ref={sheetRef}>
        <div className={styles.drawerHeader}>
          <div className={styles.handle} />
        </div>

        <div className={styles.content}>
          {/* Video */}
          <div className={styles.videoWrap}>
            <video
              src={exercise.video_url}
              poster={exercise.image_url}
              controls
              playsInline
              preload="metadata"
              className={styles.video}
            />
          </div>

          {/* Title */}
          <div className={styles.titleBlock}>
            <h2 className={styles.name}>{exercise.name_fa}</h2>
            <span className={styles.nameEn}>{exercise.name_en}</span>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5" />
                </svg>
              </div>
              <span className={styles.statValue}>{exercise.sets} × {exercise.reps}</span>
              <span className={styles.statLabel}>ست × تکرار</span>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className={styles.statValue}>{exercise.rest_sec}s</span>
              <span className={styles.statLabel}>استراحت</span>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span className={styles.statValue}>{exercise.tempo}</span>
              <span className={styles.statLabel}>تمپو</span>
            </div>
          </div>

          {/* Muscles */}
          <div className={styles.section}>
            <div className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>عضلات درگیر</h3>
              <span className={styles.sectionBadge}>{exercise.muscles.length}</span>
            </div>
            <div className={styles.muscleGrid}>
              {exercise.muscles.map((muscle) => (
                <div key={muscle} className={styles.muscleItem}>
                  <span className={styles.muscleDot} />
                  {muscle}
                </div>
              ))}
            </div>
          </div>

          {/* Equipment & Meta */}
          <div className={styles.section}>
            <div className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>جزئیات</h3>
            </div>
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>تجهیزات</span>
                <span className={styles.metaValue}>{exercise.equipment}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>RPE</span>
                <span className={styles.metaValue}>{exercise.target_rpe}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>سطح</span>
                <span className={styles.metaValue}>{exercise.difficulty_fa}</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className={styles.section}>
            <div className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>مراحل اجرا</h3>
              <span className={styles.sectionBadge}>{exercise.instructions_fa.length}</span>
            </div>
            <div className={styles.steps}>
              {exercise.instructions_fa.map((step, i) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepMarker}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    {i < exercise.instructions_fa.length - 1 && <div className={styles.stepLine} />}
                  </div>
                  <p className={styles.stepText}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tip */}
          <div className={styles.tipBox}>
            <div className={styles.tipHeader}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>Coach Tip</span>
            </div>
            <p className={styles.tipText}>{exercise.tip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
