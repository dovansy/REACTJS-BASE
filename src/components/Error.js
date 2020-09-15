import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { ROUTER, STRING } from '@constants/Constant'
import '@styles/Error.css'

export default class Error extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: this.props.isOpen,
    }
  }

  render() {
    return (
      <Modal
        show={this.state.isOpen}
        onHide={() =>
          this.setState({
            isOpen: !this.state.isOpen,
          })
        }
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header className="error-header btn-danger">
          <i className="fa fa-exclamation-circle error-icon" aria-hidden="true" />
        </Modal.Header>
        <Modal.Body className="custom-body">
          <h3>Ooops!</h3>
          <p>Có lỗi xảy ra, vui lòng thử lại</p>
          {/* <Link to={ROUTER.OVERVIEW}> */}
          <button className="btn btn-danger" onClick={() => window.location.reload()}>
            Tải lại
          </button>
          {/* </Link> */}
        </Modal.Body>
      </Modal>
    )
  }
}
