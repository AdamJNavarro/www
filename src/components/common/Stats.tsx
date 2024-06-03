type StatsData = { label: string; value: number }[];

export default function Stats({ data }: { data: StatsData }) {
  return (
    <div className="grid grid-flow-col auto-cols-fr gap-x-4 tablet:gap-x-8">
      {data.map((item) => (
        <div
          key={item.label}
          className="rounded-md p-4 flex flex-col bg-surface border-surface text-center shadow-md dark:shadow-none"
        >
          <div className="text-sky-800 dark:text-sky-200 font-bold text-md tablet:text-lg">
            {item.value.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-surface-secondary">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
