import routes from '~/app/config/routes';
import SpotifyContent from './spotify';

export const { metadata } = routes.music;

export default async function MusicPage() {
  return (
    <div className="bg-transparent">
      <SpotifyContent />
    </div>
  );

  // return (
  //   <Page.Container>
  //     <Page.Content>
  //       <Page.Header>
  //         <Page.Title>Music</Page.Title>
  //         <Page.Description>
  //           A glimpse into my taste in music. Data provided by{' '}
  //           <Anchor component={Link} href={SocialUrls.spotify} target="_blank">
  //             Spotify
  //           </Anchor>
  //           .
  //         </Page.Description>
  //       </Page.Header>
  //       <SpotifyContent />
  //     </Page.Content>
  //   </Page.Container>
  // );
}
