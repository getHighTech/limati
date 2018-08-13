import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Icon, Grid, Button  } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export class Layout extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-layout">
      <Grid centered padded columns={3}
         style={{marginBottom: "10px", textAlign: "center", position: "fixed", width: "100%", top: 0, background: "#dec4c4ad", zIndex: 99999}}>
          <Grid.Column style={{textAlign: 'center'}}>
          <Icon name='arrow left' size='large' />
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
          车联经理联盟
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
          <Icon name='search' size='large' />
          </Grid.Column>
        </Grid>
        <div style={{position: "relative", top: "47px"}}>
        {this.props.children}
        </div>
        <Grid centered padded columns={4}
         style={{textAlign: "center", position: "fixed", width: "100%", bottom: 0}}>
          <Grid.Column style={{textAlign: 'center'}}>
          <Link to="/">
           <Icon name='home' size='big' /><br/>首页
           </Link>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
          <Link to="/teams">
           <Icon name='users' size='big' /><br/>我的客户
          </Link>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
          <Link to="/service">
           <Icon name='servicestack' size='big' /><br/>客服中心
           </Link>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
          <Link to="/my">
           <Icon name='user' size='big' /><br/>我的
           </Link>
          </Grid.Column>
        </Grid>
       
       
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
