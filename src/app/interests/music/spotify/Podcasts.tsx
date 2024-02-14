import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';

export default function FavoritePodcasts({ data }) {
  return (
    <SpotifyGrid loading={!data} error={undefined} placeholderCount={4}>
      {/* @ts-ignore */}
      {data.map((podcast) => {
        const { id, image, name, url, publisher } = podcast;
        return (
          <SpotifyItem
            key={id}
            image={image}
            label={name}
            subLabel={publisher}
            url={url}
          />
        );
      })}
    </SpotifyGrid>
  );
}
