import { useState, useEffect } from 'react';
import type { Exercise } from './types/workout';
import workoutData from './data/workout-day.json';
import { Header } from './components/Header/Header';
import { ExerciseCard } from './components/ExerciseCard/ExerciseCard';
import { ExerciseDetail } from './components/ExerciseDetail/ExerciseDetail';
import { SkeletonCard } from './components/Skeleton/Skeleton';
import './App.css';

const data = workoutData as import('./types/workout').WorkoutDay;

function App() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showSkeletons, setShowSkeletons] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeletons(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Header
        dayTitle={data.day_title}
        focus={data.focus}
        coachTip={data.coach_tip}
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
