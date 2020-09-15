import React, { Component } from 'react'
import { connect } from 'react-redux'
import '@styles/Header.css'
import '@styles/UserScreen.css'
import Loading from '@components/Loading'
import Cookie from 'js-cookie'
// import reactotron from 'reactotron-react-js'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  refreshPage() {
    window.location.reload(false)
  }

  setShowModal = (bool) => {
    this.setState({
      showModal: bool,
    })
  }

  logout() {
    Cookie.remove('SESSION_ID')
    window.location.href = '/login'
  }

  render() {
    return (
      <>
        {<Loading />}
        <nav className="main-header navbar navbar-expand navbar-light me-header">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link cursor" data-widget="pushmenu" href="name">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown" onClick={() => this.setState({ showModalNoti: true })}>
              <a className="nav-link" href="name">
                <i className="fas fa-bell " style={{ fontSize: '20px' }} />
              </a>
            </li>
            {/* Dropdown Admin Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="name">
                <p className="me-txt-menu">Xin chào admin !</p>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" style={{ width: '110%' }}>
                <a className="dropdown-item cursor menu-hover" href="name">
                  <div className="dropdown-admin-item ">
                    <p className="me-txt-admin-drop">Cập nhật thông tin</p>
                  </div>
                </a>
                <a className="dropdown-item cursor menu-hover" href="name" onClick={() => this.setShowModal(true)}>
                  <div className="dropdown-admin-item">
                    <p className="me-txt-admin-drop">Đổi mật khẩu</p>
                  </div>
                </a>
                <a className="dropdown-item cursor menu-hover" href="name" onClick={this.logout}>
                  <div className="dropdown-admin-item">
                    <p className="me-txt-admin-drop">Đăng xuất</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
