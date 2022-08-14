interface SpotifyArtist {
  followers: number;
  genres: string[];
  id: string;
  image: string;
  name: string;
  url: string;
}

interface SpotifyPodcast {
  id: string;
  image: string;
  name: string;
  publisher: string;
  total_episodes: number;
  url: string;
}

interface SpotifyTrack {
  artist: string;
  id: string;
  image: string;
  name: string;
  url: string;
}

interface SpotifyCurrentlyPlaying {
  isActive: boolean;
  playingItem?: {
    title: string;
    href: string;
  };
}

export type { SpotifyArtist, SpotifyCurrentlyPlaying, SpotifyPodcast, SpotifyTrack };
