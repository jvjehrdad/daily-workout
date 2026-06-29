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
        <div className={styles.handle} />
        <button className={styles.closeBtn} onClick={onClose} type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.content}>
          <div className={styles.videoWrapper}>
            <video
              src={exercise.video_url}
              poster={exercise.image_url}
              controls
              playsInline
              preload="metadata"
              className={styles.video}
            />
          </div>

          <div className={styles.header}>
            <h2 className={styles.name}>{exercise.name_fa}</h2>
            <span className={styles.nameEn}>{exercise.name_en}</span>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>🏋️</span>
              <div>
                <span className={styles.statVal}>{exercise.sets} × {exercise.reps}</span>
                <span className={styles.statDesc}>ست × تکرار</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>⏱</span>
              <div>
                <span className={styles.statVal}>{exercise.rest_sec} ثانیه</span>
                <span className={styles.statDesc}>استراحت</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>⚡</span>
              <div>
                <span className={styles.statVal}>{exercise.tempo}</span>
                <span className={styles.statDesc}>تمپو</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" />
              </svg>
              عضلات درگیر
            </h3>
            <div className={styles.muscleList}>
              {exercise.muscles.map((muscle) => (
                <span key={muscle} className={styles.muscleItem}>
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
              تجهیزات: {exercise.equipment}
            </h3>
            <div className={styles.metaRow}>
              <span className={styles.metaTag}>RPE {exercise.target_rpe}</span>
              <span className={styles.metaTag}>{exercise.difficulty_fa}</span>
              <span className={styles.metaTag}>تمپو {exercise.tempo}</span>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              مراحل اجرا
            </h3>
            <ol className={styles.instructions}>
              {exercise.instructions_fa.map((step, i) => (
                <li key={i} className={styles.step}>
                  <span className={styles.stepNumber}>{i + 1}</span>
                  <p className={styles.stepText}>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.tipCard}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <p>{exercise.tip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
