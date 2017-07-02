import gql from 'graphql-tag';

const fetchSong = gql`
  query FetchSong($id: ID!) {
    song(id: $id) {
      id,
      title
    }
  }
`;

export default fetchSong;