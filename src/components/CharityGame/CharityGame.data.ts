import { CurrencyDollar, DeviceGamepad, Gift } from 'tabler-icons-react';
import { Stat } from '../common/Stats';

const charityGameStats: Stat[] = [
  {
    icon: CurrencyDollar,
    label: 'Total Donations',
    value: 100,
  },
  {
    icon: Gift,
    label: 'Charities Donated To',
    value: 20,
  },
  {
    icon: DeviceGamepad,
    label: 'Games Played',
    value: 35,
  },
];

const charities = [
  {
    label: 'Ignite the Spirit MKE',
    href: 'http://www.ignitethespiritmke.org/',
  },
];

export { charities, charityGameStats };
