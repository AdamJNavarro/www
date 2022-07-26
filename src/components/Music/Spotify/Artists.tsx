import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { useSpotifyArtistsFetch } from './Spotify.utils';

function nFormatter(num: number, digits: number) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  // eslint-disable-next-line no-plusplus
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

export default function FavoriteArtists({ access_token }: any) {
  const {
    loading,
    error,
    data = [],
  } = useSpotifyArtistsFetch({
    opts: {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  });

  return (
    <SpotifyGrid loading={loading} error={error} placeholderCount={10}>
      {data.map((artist) => {
        const { followers, id, image, name, url } = artist;

        return (
          <SpotifyItem
            key={id}
            image={image}
            label={name}
            subLabel={`${nFormatter(followers, 0)} followers`}
            url={url}
          />
        );
      })}
    </SpotifyGrid>
  );
}
