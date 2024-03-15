import routes from '~/app/config/routes';

import LetterboxdFavorites from './letterboxd/LetterboxdFavorites';
import { Page, Section } from '~/components/Layouts/Page';
import LetterboxdList from './letterboxd/LetterboxdList';
import { watched } from './letterboxd/letterboxd.data';

export const { metadata } = routes.movies;

const favorites = [
  {
    posterPath: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    url: 'https://boxd.it/2b5O',
  },
  {
    posterPath: '/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
    name: 'The Lord of the Rings: The Two Towers',
    year: '2002',
    url: 'https://boxd.it/2b5E',
  },
  {
    posterPath: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    name: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    url: 'https://boxd.it/2b5u',
  },
  {
    posterPath: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    name: 'The Shawshank Redemption',
    year: '1994',
    url: 'https://boxd.it/2aHi',
  },
];

export default async function MoviesPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Movies</Page.Title>
      </Page.Header>

      <Section.Header>
        <Section.Title>All-Time Favorites</Section.Title>
      </Section.Header>
      <div className="mb-24">
        <LetterboxdList data={favorites} />
      </div>

      <p className="prose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis
        bibendum. Quis blandit turpis cursus in hac. Ac odio tempor orci dapibus.
        Ornare lectus sit amet est. Sed vulputate odio ut enim blandit. Elementum
        nibh tellus molestie nunc non blandit massa enim nec. Natoque penatibus et
        magnis dis parturient montes nascetur.
      </p>

      <Section.Header>
        <Section.Title>Recently Watched</Section.Title>
      </Section.Header>
      <div className="mb-24">
        <LetterboxdList data={watched} />
      </div>
      <p className="prose">
        Natoque penatibus et magnis dis parturient montes nascetur. Enim praesent
        elementum facilisis leo vel fringilla est ullamcorper. Rhoncus urna neque
        viverra justo nec ultrices dui sapien eget. Felis donec et odio pellentesque
        diam volutpat commodo sed. Ornare aenean euismod elementum nisi quis eleifend
        quam adipiscing. Faucibus interdum posuere lorem ipsum.
      </p>
    </div>
  );
}
