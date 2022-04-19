import { gql } from '@apollo/client';

const GET_SHIPS = gql`
  query GetShips {
    ships(limit: 10) {
      active
      id
      name
      url
      type
      status
      image
      roles
    }
  }
`;

export default GET_SHIPS;
