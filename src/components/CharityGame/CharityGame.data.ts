import {
  IconCurrencyDollar,
  IconDeviceGamepad,
  IconGift,
} from '@tabler/icons-react';
import { Stat } from '../common/Stats';

const charityGameStats: Stat[] = [
  {
    icon: IconCurrencyDollar,
    label: 'Total Donations (USD)',
    value: 335,
  },
  {
    icon: IconGift,
    label: 'Charities Impacted',
    value: 20,
  },
  {
    icon: IconDeviceGamepad,
    label: 'Games Played', // Games Won: 23,
    value: 41,
  },
];

const charities = [
  {
    label: 'Ignite the Spirit MKE',
    href: 'http://www.ignitethespiritmke.org/',
  },
  {
    label: 'AC Fairhill',
    href: 'http://www.acfairhill.com/',
  },
  {
    label: 'Wisconsin Humane Society',
    href: 'https://www.wihumane.org/',
  },
  {
    label: 'Native American Rights Fund',
    href: 'https://www.narf.org/',
  },
  {
    label: 'Maternity Worldwide',
    href: 'https://www.maternityworldwide.org/',
  },
  {
    label: 'Wisconsin Adopt A Golden Retriever',
    href: 'https://www.waagr.org/',
  },
  {
    label: 'British Columbia Society for the Prevention of Cruelty to Animals',
    href: 'https://spca.bc.ca/',
  },
  {
    label: 'Pancreatic Cancer Action Network',
    href: 'https://www.pancan.org/',
  },
  {
    label: 'Artworks For MKE',
    href: 'https://www.artworksformilwaukee.org/',
  },
  {
    label: "The Women's Center Waukesha",
    href: 'https://twcwaukesha.org/',
  },
  {
    label: 'Habitat For Humanity',
    href: 'https://www.habitat.org/',
  },
  {
    label: 'Jrue & Lauren Holiday Fund',
    href: 'https://www.jlhfund.org/',
  },
  {
    label: 'Pat Connaughton Foundation',
    href: 'https://www.patconnaughtonfoundation.org/',
  },
  {
    label: 'True Skool',
    href: 'https://www.trueskool.org/',
  },
  {
    label: 'American Cancer Society',
    href: 'https://www.cancer.org/',
  },
  {
    label: 'Boys & Girls Club of Greater Milwaukee',
    href: 'https://www.bgcmilwaukee.org/',
  },
  {
    label: 'Lawndale Christian Health Center',
    href: 'https://lawndale.org/',
  },
  {
    label: 'Running Rebels',
    href: 'https://runningrebels.org/',
  },
  {
    label: 'Cholangiocarcinoma Foundation',
    href: 'https://cholangiocarcinoma.org/',
  },
  {
    label: 'PAWS for Ukraine',
    href: '/',
  },
];

export { charities, charityGameStats };
