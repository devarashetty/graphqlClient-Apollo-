import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Link } from 'react-router';

function Profile({ loading, users }) {
    var data =JSON.stringify(users);
    return (
      <span>
        {data}
      </span>
    );
}

Profile.propTypes = {
  loading: React.PropTypes.bool,
  currentUser: React.PropTypes.shape({
    login: React.PropTypes.string.isRequired,
  }),
};

const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    users {
      username
      profile{
        lastName
      }
    }
  }
`;

export default graphql(PROFILE_QUERY, {
  options: {
    fetchPolicy: 'cache-and-network',
  },
  props: ({ data: { loading, users } }) => ({
    loading, users,
  }),
})(Profile);
