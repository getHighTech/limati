import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Grid, Image, Icon } from 'semantic-ui-react';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-default-page">
        <header className="app-header">
          
          <h1 className="app-title">车联经理联盟</h1>
          <br/>
          <br/>
          <br/>

        </header>
        <Grid centered columns={4}>
          <Grid.Column centered>
            <Icon name='audio description' size='big' />
            <p>汽车</p>
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
