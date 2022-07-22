import { createStyles } from '@mantine/core';

interface Props {
  list: React.ReactElement | null;
  detail: React.ReactElement | null;
  hasDetail?: boolean;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
  },

  hasDetail: {
    display: 'hidden',
    [theme.fn.largerThan('lg')]: {
      display: 'flex',
    },
  },

  noDetail: {
    minHeight: '100vh',
    width: '100%',
  },
}));

export default function ListDetailView({ list, detail, hasDetail = false }: Props) {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      {list && (
        <div id="list" className={hasDetail ? classes.hasDetail : classes.noDetail}>
          {list}
        </div>
      )}
      {detail}
    </div>
  );
}
