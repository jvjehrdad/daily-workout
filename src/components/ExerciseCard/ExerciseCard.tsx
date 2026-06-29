import { useState } from 'react';
import type { Exercise } from '../../types/workout';
import styles from './ExerciseCard.module.css';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
  onClick: (exercise: Exercise) => void;
}

export function ExerciseCard({ exercise, index, onClick }: ExerciseCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isHero = index === 0;

  return (
    <button
      className={`${styles.card} ${isHero ? styles.hero : ''}`}
      onClick={() => onClick(exercise)}
      type="button"
    >
      <div className={`${styles.imageWrap} ${isHero ? styles.heroImage : ''}`}>
        {!imageLoaded && !imageError && (
          <div className={styles.skeleton}>
            <div className={styles.skeletonPulse} />
          </div>
        )}
        {imageError && (
          <div className={styles.fallback}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
              <circle cx="12" cy="5" r="3" />
              <path d="M6.5 8h11l1 4-3 3-3-2-3 2-3-3z" />
            </svg>
          </div>
        )}
        <img
          src={exercise.image_url}
          alt={exercise.name_fa}
          loading="lazy"
          className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        <div className={styles.imageOverlay} />

        <div className={styles.numberBadge}>
          <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
        </div>

        <div className={styles.topMeta}>
          <span className={styles.difficulty}>{exercise.difficulty_fa}</span>
          <span className={styles.equipment}>{exercise.equipment}</span>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{exercise.name_fa}</h3>
          <div className={styles.arrow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{exercise.sets}</span>
            <span className={styles.statUnit}>ست</span>
          </div>
          <span className={styles.statSep}>×</span>
          <div className={styles.stat}>
            <span className={styles.statNum}>{exercise.reps}</span>
            <span className={styles.statUnit}>تکرار</span>
          </div>
          <span className={styles.statDot} />
          <div className={styles.stat}>
            <span className={styles.statNum}>{exercise.rest_sec}<small>s</small></span>
            <span className={styles.statUnit}>استراحت</span>
          </div>
          <span className={styles.statDot} />
          <div className={styles.stat}>
            <span className={styles.statNum}>{exercise.tempo}</span>
            <span className={styles.statUnit}>تمپو</span>
          </div>
        </div>

        <div className={styles.muscles}>
          {exercise.muscles.map((muscle) => (
            <span key={muscle} className={styles.muscle}>
              {muscle}
            </span>
          ))}
        </div>

        <p className={styles.tip}>{exercise.tip}</p>
      </div>
    </button>
  );
}
