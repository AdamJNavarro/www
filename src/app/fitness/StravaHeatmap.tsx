import { getStravaActivities } from '../data/strava';

const allDates: any[] = [];
const numOfDays = 30;
const currentDate = new Date();
const oldestDate = new Date(new Date().setDate(currentDate.getDate() - numOfDays));
const afterUnix = new Date(oldestDate).getTime() / 1000;

const currentDateLabel = new Date(currentDate).toLocaleString('en-us', {
  month: 'short',
  day: 'numeric',
});

const oldestDateLabel = new Date(oldestDate).toLocaleString('en-us', {
  month: 'short',
  day: 'numeric',
});

for (let i = 0; i < numOfDays; i++) {
  const priorDate = new Date(new Date().setDate(currentDate.getDate() - i));
  allDates.push(priorDate);
}

function datesAreSameDay(a: string, b: string): boolean {
  const dateOne = new Date(a);
  const dateTwo = new Date(b);
  return (
    dateOne.getFullYear() === dateTwo.getFullYear() &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getDate() === dateTwo.getDate()
  );
}

const cardioSportTypes = [
  'Walk',
  'Elliptical',
  'StairStepper',
  'Run',
  'Ride',
  'Hike',
  'Rowing',
  'Swim',
];

const baseHeatmapTileClass =
  'rounded-xs place-content-center aspect-square text-center';

const heatmapGridClass = 'grid grid-cols-6 max-w-full gap-1 dark:gap-2.5';

function getTileColor(activities: any[]): string {
  if (activities.length > 1) {
    // handle multiple activities
    const sportTypes = activities.map((obj) => obj.sport);
    const uniqSportTypes = sportTypes.filter(
      (item, index) => sportTypes.indexOf(item) === index
    );
    let hasWeightTraining = false;
    let hasMobility = false;
    let hasCardio = false;
    if (uniqSportTypes.includes('WeightTraining')) hasWeightTraining = true;
    if (uniqSportTypes.includes('Yoga')) hasMobility = true;
    if (uniqSportTypes.some((x) => cardioSportTypes.includes(x))) hasCardio = true;
    if (hasWeightTraining && hasMobility && hasCardio)
      return 'bg-linear-to-br from-violet-700 via-sky-700 to-pink-700';
    if (hasWeightTraining && hasMobility)
      return 'bg-linear-to-br from-50% to-50% from-violet-700 to-sky-700';
    if (hasWeightTraining && hasCardio)
      return 'bg-linear-to-br from-50% to-50% from-violet-700 to-pink-700';
    if (hasMobility && hasCardio)
      return 'bg-linear-to-br from-50% to-50% from-sky-700 to-pink-700';
    return 'bg-pink-700';
  }
  const { sport } = activities[0];
  if (sport === 'WeightTraining') return 'bg-violet-700';
  if (sport === 'Yoga') return 'bg-sky-700';
  return 'bg-pink-700';
}

const reverseOrderDates = allDates.sort((a, b) => {
  if (new Date(a) > new Date(b)) {
    return 1;
  }
  return -1;
});

export default async function Tiles() {
  const { data, error } = await getStravaActivities({
    params: `after=${afterUnix}&per_page=60`,
  });

  if (error) return null;

  return (
    <div className={heatmapGridClass}>
      {reverseOrderDates.map((item) => {
        const matchingActivities = data.filter((obj) =>
          datesAreSameDay(item, obj.date)
        );

        const hasActivities = matchingActivities.length > 0;

        if (hasActivities) {
          //const hasMultipleActivities = matchingActivities.length > 1;
          return (
            <div
              key={item}
              className={`${baseHeatmapTileClass} ${getTileColor(matchingActivities)}`}
            />
          );
        }

        return (
          <div
            key={item}
            className={`${baseHeatmapTileClass} bg-slate-300/60 dark:bg-slate-900/95`}
          />
        );
      })}
    </div>
  );
}

export function Loading() {
  return (
    <div className={heatmapGridClass}>
      {allDates.map((item) => {
        return (
          <div
            key={item}
            className={`${baseHeatmapTileClass} animate-pulse bg-slate-300/60 dark:bg-slate-800/50`}
          />
        );
      })}
    </div>
  );
}

function Container({ children }: { children: any }) {
  return (
    <div className="w-80 mx-auto">
      <div className="text-surface-primary text-lg text-center font-medium">
        Activity Heatmap
      </div>
      <div className="text-sm text-center text-surface-tertiary mb-8">
        (Last 30 Days)
      </div>
      <div className="text-surface-secondary text-sm font-medium mb-1.5">
        {oldestDateLabel}
      </div>
      {children}
      <div className="text-surface-secondary text-sm font-medium text-end mt-1.5">
        {currentDateLabel}
      </div>
      <div className="flex justify-around text-surface-secondary text-sm mt-8">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-violet-700 mr-1.5" />
          <div>Weights</div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-pink-700 mr-1.5" />
          <div>Cardio</div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-sky-700 mr-1.5" />
          <div>Mobility</div>
        </div>
      </div>
    </div>
  );
}

const StravaHeatmap = {
  Container,
  Loading,
  Tiles,
};

export { StravaHeatmap };
