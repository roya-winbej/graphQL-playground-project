import gql from 'graphql-tag';

export default  gql`
  mutation AddLikeToLyric($id: ID) {
    likeLyric(id: $id ) {
      id,
      likes
    }
  }
`;