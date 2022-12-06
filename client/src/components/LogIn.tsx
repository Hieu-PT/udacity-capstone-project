import * as React from 'react'
import Auth from '../auth/Auth'
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

interface LogInProps {
  auth: Auth
}

interface LogInState {}

export class LogIn extends React.PureComponent<LogInProps, LogInState> {
  onLogin = () => {
    this.props.auth.login()
  }

  render() {
    return (
      <div>
        <Container>
          <Header
            as='h1' color='violet'
            content='Udacity Cloud Developer Company'
            inverted
            style={{
              marginTop: '1em',
              fontSize: '2em',
              fontWeight: 'normal',
              marginBottom: 0,
            }}
          />
          <Header
            as='h2' color='grey'
            content='Please login to continue'
            inverted
            style={{
              marginTop: '1.3em',
              fontSize: '1.2em',
              fontWeight: 'normal',
            }}
          />
          <Button primary size='huge' onClick={this.onLogin} >
            Log in
            <Icon name='arrow right' />
          </Button>
        </Container>
      </div>
    )
  }
}
