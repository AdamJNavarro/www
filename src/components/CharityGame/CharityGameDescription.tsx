import { Section } from '../common';
import Typography from '../common/Typography';

export default function CharityGameDescription() {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>What is it?</Section.Title>
      </Section.Header>
      <Section.Content>
        <Typography>
          <p>
            I will select a piece of music from a visual medium (typically movies, tv
            or video games) and perform a section of it on either guitar or piano.
            The video is posted as an Instagram story and the first person to
            identify where the music is from gets to select a charity that I will
            donate to. The amount donated is usually $10 but can sometimes be higher
            -- such as when others want to match the donation. The name of the piece
            of music is not required, just where it is from.
          </p>
        </Typography>
      </Section.Content>
    </Section.Container>
  );
}
