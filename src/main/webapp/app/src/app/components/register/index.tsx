import * as React from 'react';
import { connect } from 'react-redux';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import { handleRegister } from './register.reducer';
import { RouteComponentProps } from 'react-router';

export interface IHomeProps extends RouteComponentProps<void> {

}

export interface IHomeStateProps {

}

export interface IHomeDispatchProps {
  handleRegister: typeof handleRegister;
}

type THomeProps = IHomeProps & IHomeStateProps & IHomeDispatchProps;

class Register extends React.PureComponent<THomeProps, {}> {

  handleValidSubmit = (event, values) => {
    this.props.handleRegister(values.username, values.password);
    event.preventDefault();
  };

  render() {
    return (
      <div >
        <AvForm onValidSubmit={this.handleValidSubmit}>
          <AvField name="username" label="Username" required />
          <AvField name="password" label="Password" />
          <Button color="primary">Submit</Button>
        </AvForm>
      </div>
    );
  }
}

function mapStateToProps() {
  return {

  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    handleRegister: (username: string, password: string) => dispatch(handleRegister(username, password))
  };
}

export default connect<IHomeStateProps, IHomeDispatchProps, IHomeProps>(mapStateToProps, mapDispatchToProps)(Register);