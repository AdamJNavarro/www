import { FiGithub, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';

const email = 'adamjnav@gmail.com';
const EMAIL_URL = `mailto:${email}`;
const GITHUB_URL = 'https://github.com/AdamJNavarro';
const TWITTER_URL = 'https://twitter.com/AdamJNavarro';
const INSTAGRAM_URL = 'https://www.instagram.com/adamjnavarro/';

const PLATFORM_ICON_STYLE =
  'text-3xl no-underline text-purple-500 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-400';

const PersonalGithubIcon = () => {
  return (
    <a className={`${PLATFORM_ICON_STYLE}`} href={GITHUB_URL}>
      <FiGithub />
    </a>
  );
};

const PersonalTwitterIcon = () => {
  return (
    <a className={`${PLATFORM_ICON_STYLE}`} href={TWITTER_URL}>
      <FiTwitter />
    </a>
  );
};

const PersonalInstagramIcon = () => {
  return (
    <a className={`${PLATFORM_ICON_STYLE}`} href={INSTAGRAM_URL}>
      <FiInstagram />
    </a>
  );
};

const PersonalEmailIcon = () => {
  return (
    <a
      className={`${PLATFORM_ICON_STYLE}`}
      href={EMAIL_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FiMail />
    </a>
  );
};

export {
  PersonalGithubIcon,
  PersonalTwitterIcon,
  PersonalInstagramIcon,
  PersonalEmailIcon,
};
