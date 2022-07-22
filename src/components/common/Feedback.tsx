import { Alert, AlertProps, createStyles } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

type AlertBannerMode = 'default' | 'error' | 'success';

type AlertBannerProps = AlertProps & {
  mode: AlertBannerMode;
};

const useStyles = createStyles((theme) => ({
  alert: {
    display: 'flex',
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    [theme.fn.largerThan('xs')]: {
      width: '50%',
    },
  },
}));

function getAlertColor(mode: AlertBannerMode) {
  if (mode === 'error') return 'red';
  if (mode === 'success') return 'green';
  return 'gray';
}

export function AlertBanner({
  title,
  mode = 'default',
  children,
  ...rest
}: AlertBannerProps) {
  const { classes } = useStyles();

  return (
    <Alert
      icon={<AlertCircle size={24} />}
      title={title}
      color={getAlertColor(mode)}
      className={classes.alert}
      {...rest}
    >
      {children}
    </Alert>
  );
}
