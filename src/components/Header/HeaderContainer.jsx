import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import { getAuthMe } from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
  componentDidMount() {
	  this.props.getAuthMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

let getUrl = withRouter(HeaderContainer);

export default connect(mapStateToProps, { getAuthMe })(getUrl);
