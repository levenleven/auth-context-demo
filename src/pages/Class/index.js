import { Component } from 'react';

import { AuthContext } from '../../authContext';

export const ClassComponent = () => (
  <>
    <h2>Class components demo</h2>
    <div>
      <ConsumerDemo />
    </div>
    <div>
      <ContextTypeDemo />
    </div>
  </>
);

class ConsumerDemo extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {({ authenticated }) =>
          authenticated ? 'Authenticated' : 'Not authenticated'
        }
      </AuthContext.Consumer>
    );
  }
}

class ContextTypeDemo extends Component {
  static contextType = AuthContext;
  render() {
    const { authenticated } = this.context;
    return authenticated ? 'Has editing rights' : 'Readonly';
  }
}
