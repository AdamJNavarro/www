import { useRef } from 'react';
import { Page } from '../common';
import TitleBar from '../Navigation/TitleBar';
import SpotifyContent from './Spotify';

export default function Music() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar title="Music" titleRef={titleRef} magicTitle scrollRef={scrollRef} />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Music</Page.Title>
          <Page.Description>A glimpse into my taste in music.</Page.Description>
        </Page.Header>
        <SpotifyContent />
      </Page.Content>
    </Page.Container>
  );
}
