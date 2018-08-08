import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Button, Segment } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

export class Layout extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-layout">
      <Button.Group attached='top'>
        <Button>地区:北京</Button>
        <Button>车联经理联盟</Button>
        <Button>分享</Button>
      </Button.Group>
        <div>
        {this.props.children}
        <div style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}>
        <Button.Group>
        <Button>租车</Button>
        <Button>二手车</Button>
        <Button>新车</Button>
        </Button.Group>
        <Button.Group>
        <Button>修车</Button>
        <Button>车险</Button>
        <Button>一键救援</Button>
        <Button>开店</Button>
        </Button.Group>
        </div>
        <div>
          <span>热门车型</span>
          <div>
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
          </div>
          <div>
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
          </div>
          </div>
        </div>
        <div style={{
          position: "fixed",
          width: "100% !important",
          bottom: "0px"
        }}>
        <Button.Group attached='top'>
          <Button>首页</Button>
          <Button>我的客户</Button>
          <Button>客服中心</Button>
          <Button>个人中心</Button>
        </Button.Group>
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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
