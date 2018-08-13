import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Grid, Image, Icon, Header, Card, Button } from 'semantic-ui-react';

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
        <div style={{paddingBottom: '50px'}}>
        <Grid centered padded columns={4}>
          <Grid.Column style={{textAlign: 'center'}}>
           <Icon name='chess queen' size='big' /><br/>租车
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
           <Icon name='chess bishop' size='big' /><br/>二手车
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
           <Icon name='chess king' size='big' /><br/>新车
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
           <Icon name='chess knight' size='big' /><br/>修车
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
           <Icon name='chess pawn' size='big' /><br/>车险
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
           <Icon name='chess rook' size='big' /><br/>一键救援
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
           <Icon name='shopping basket' size='big' /><br/>开店
          </Grid.Column>
         
        </Grid>
        </div>
        <div>
          <Header style={{textAlign: 'left'}} size='medium'>热门车型</Header>
          <Grid centered doubling padded columns={4}>
          <Grid.Column style={{textAlign: 'center'}}>
            <Card>
              <Image src='https://image.guazistatic.com/gz01171115/17/07/1fab5316dfd667e31e937259d484c992.png@base@tag=imgScale' />
              <Card.Content>
                <Card.Header>车辆卡片</Card.Header>
                <Card.Meta>
                  <span className='date'>发布时间</span>
                </Card.Meta>
                <Card.Description>车简介</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 推荐
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
            <Card>
              <Image src='https://image.guazistatic.com/gz01171115/17/07/1fab5316dfd667e31e937259d484c992.png@base@tag=imgScale' />
              <Card.Content>
                <Card.Header>车辆卡片</Card.Header>
                <Card.Meta>
                  <span className='date'>发布时间</span>
                </Card.Meta>
                <Card.Description>车简介</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 推荐
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
            <Card>
              <Image src='https://image.guazistatic.com/gz01171115/17/07/1fab5316dfd667e31e937259d484c992.png@base@tag=imgScale' />
              <Card.Content>
                <Card.Header>车辆卡片</Card.Header>
                <Card.Meta>
                  <span className='date'>发布时间</span>
                </Card.Meta>
                <Card.Description>车简介</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 推荐
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
            <Card>
              <Image src='https://image.guazistatic.com/gz01171115/17/07/1fab5316dfd667e31e937259d484c992.png@base@tag=imgScale' />
              <Card.Content>
                <Card.Header>车辆卡片</Card.Header>
                <Card.Meta>
                  <span className='date'>发布时间</span>
                </Card.Meta>
                <Card.Description>车简介</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 推荐
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
            <Card>
              <Image src='https://image.guazistatic.com/gz01171115/17/07/1fab5316dfd667e31e937259d484c992.png@base@tag=imgScale' />
              <Card.Content>
                <Card.Header>车辆卡片</Card.Header>
                <Card.Meta>
                  <span className='date'>发布时间</span>
                </Card.Meta>
                <Card.Description>车简介</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 推荐
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'center'}}>
            <Card>
              <Image src='https://image.guazistatic.com/gz01171026/17/04/21cef1447ea70afb7204cd4d274ef07a.png@base@tag=imgScale' />
              <Card.Content>
                <Card.Header>车辆卡片</Card.Header>
                <Card.Meta>
                  <span className='date'>发布时间</span>
                </Card.Meta>
                <Card.Description>车简介</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 推荐
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          </Grid>
          
          
          <Button fluid>更多</Button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
       
        
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
