import React from 'react';
import { connect } from 'react-redux';

import { fetchNewTime } from '../../redux/actionCreators';
import Timeline from '../../components/Timeline/Timeline' ;

const Home = (props) => {
  return (
    <div className="home">
      <Timeline />
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
      <button onClick={props.updateTime}>
        Update time
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime.currentTime
  }
}

const mapDispatchToProps = dispatch => ({
  updateTime: (opts={}) => dispatch(fetchNewTime(opts))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
