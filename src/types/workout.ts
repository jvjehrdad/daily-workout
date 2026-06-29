export interface Exercise {
  id: number;
  name_fa: string;
  name_en: string;
  image_url: string;
  video_url: string;
  sets: number;
  reps: number;
  rest_sec: number;
  target_rpe: number;
  tempo: string;
  equipment: string;
  difficulty_fa: string;
  muscles: string[];
  tip: string;
  instructions_fa: string[];
}

export interface WorkoutDay {
  day_title: string;
  focus: string;
  coach_tip: string;
  exercises: Exercise[];
}
