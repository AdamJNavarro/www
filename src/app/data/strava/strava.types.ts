type StravaSport = 'Ride' | 'Run' | 'Walk' | 'WeightTraining';

interface StravaActivity {
  id: number;
  distance: number;
  movingDuration: number;
  totalDuration: number;
  sport: StravaSport;
  date: string;
}

export type { StravaSport, StravaActivity };
