import { useState, useEffect, useCallback } from 'react';
import type { Exercise } from './types/workout';
import workoutData from './data/workout-day.json';
import { Header } from './components/Header/Header';
import { ExerciseCard } from './components/ExerciseCard/ExerciseCard';
import { ExerciseDetail } from './components/ExerciseDetail/ExerciseDetail';
import { SkeletonCard } from './components/Skeleton/Skeleton';
import './App.css';

const data = workoutData as import('./types/workout').WorkoutDay;
const STORAGE_KEY = 'workout-completed';

function getStoredCompleted(): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function App() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showSkeletons, setShowSkeletons] = useState(true);
  const [completedIds, setCompletedIds] = useState<number[]>(getStoredCompleted);

  const completedCount = completedIds.length;
  const totalCount = data.exercises.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const toggleComplete = useCallback((id: number) => {
    setCompletedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeletons(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const allDone = completedCount === totalCount && totalCount > 0;

  return (
    <div className="app">
      <Header
        dayTitle={data.day_title}
        focus={data.focus}
        coachTip={data.coach_tip}
        completedCount={completedCount}
        totalCount={totalCount}
        progress={progress}
        allDone={allDone}
      />
      <main className="container">
        <section className="exerciseSection">
          <div className="sectionLabel">Exercises</div>
          <div className="exerciseGrid">
            {showSkeletons
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} isHero={i === 0} />
                ))
              : data.exercises.map((exercise, i) => (
                  <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    index={i}
                    isCompleted={completedIds.includes(exercise.id)}
                    onToggleComplete={toggleComplete}
                    onClick={setSelectedExercise}
                  />
                ))}
          </div>
        </section>
      </main>

      {selectedExercise && (
        <ExerciseDetail
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}

export default App;
