import gql from 'graphql-tag';

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title ) {
      id,
      title
    }
  }
`;

export default mutation;