import { Alert, AlertProps } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import classes from './Common.module.css';

type AlertBannerMode = 'default' | 'error' | 'success';

type AlertBannerProps = AlertProps & {
  mode: AlertBannerMode;
};

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
  return (
    <Alert
      icon={<IconAlertCircle size={24} />}
      title={title}
      color={getAlertColor(mode)}
      className={classes.alert}
      {...rest}
    >
      {children}
    </Alert>
  );
}
