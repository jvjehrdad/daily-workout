import { useState } from 'react';
import type { Exercise } from '../../types/workout';
import styles from './ExerciseCard.module.css';

interface ExerciseCardProps {
  exercise: Exercise;
  onClick: (exercise: Exercise) => void;
}

export function ExerciseCard({ exercise, onClick }: ExerciseCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <button
      className={styles.card}
      onClick={() => onClick(exercise)}
      type="button"
    >
      <div className={styles.imageWrapper}>
        {!imageLoaded && !imageError && (
          <div className={`${styles.skeletonImage} ${styles.shimmer}`} />
        )}
        {imageError && (
          <div className={styles.fallback}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="3" />
              <path d="M6.5 8h11l1 4-3 3-3-2-3 2-3-3z" />
              <path d="M5 19v2h14v-2" />
            </svg>
            <span>{exercise.name_en}</span>
          </div>
        )}
        <img
          src={exercise.image_url}
          alt={exercise.name_fa}
          loading="lazy"
          className={`${styles.image} ${imageLoaded ? styles.imageLoaded : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        <div className={styles.difficultyBadge}>
          {exercise.difficulty_fa}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{exercise.name_fa}</h3>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{exercise.sets} × {exercise.reps}</span>
            <span className={styles.statLabel}>ست × تکرار</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>{exercise.rest_sec}s</span>
            <span className={styles.statLabel}>استراحت</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>RPE {exercise.target_rpe}</span>
            <span className={styles.statLabel}>شدت</span>
          </div>
        </div>

        <div className={styles.muscles}>
          {exercise.muscles.map((muscle) => (
            <span key={muscle} className={styles.muscleTag}>
              {muscle}
            </span>
          ))}
        </div>

        <div className={styles.tip}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>{exercise.tip}</span>
        </div>
      </div>
    </button>
  );
}
