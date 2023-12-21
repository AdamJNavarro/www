import { AlertBanner } from '~/components/common/Feedback';

const Disclaimer = `The definitions below are my own. Each word is linked to its Merriam-Webster page for a more
offical definition.`;

export default function WordsDisclaimer() {
  return (
    <AlertBanner title="Disclaimer" mode="default" variant="outline">
      {Disclaimer}
    </AlertBanner>
  );
}
