import React from 'react'
import { Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetails } from '../../actions/actions_index.js'

export default (props) => {
  const userList = (profile) => {
    props.changeState({
      userSelected: profile
    })
  }
}
class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <div className='home'>
              <h3>Please select institution</h3>
            </div>
            <div className='home'>
              <ButtonToolbar>
                <DropdownButton bsSize='large' title='Select institution' id='dropdown-size-large'>
                  <MenuItem eventKey='1' onClick={() => user(props.profile) }>Birmingham City University</MenuItem>
                  <MenuItem eventKey='2' onClick={() => user(props.profile) }>Blackburn College</MenuItem>
                  <MenuItem eventKey='3' onClick={() => user(props.profile) }>Buckinghamshire</MenuItem>
                  <MenuItem eventKey='4' onClick={() => user(props.profile) }>Cambridge University</MenuItem>
                  <MenuItem eventKey='5' onClick={() => user(props.profile) }>Canterbury Christ Church University</MenuItem>
                  <MenuItem eventKey='6' onClick={() => user(props.profile) }>City University</MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps, { getUserDetails })(Home)
