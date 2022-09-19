import React, { useState } from 'react'

const SideBar = () => {
  const [isExpanded, setExpendState] = useState(false)
  const menuItems = [
    {
      text: 'Home',
      icon: '/icons/iconHome2.png',
      url: '#home'
    },
    {
      text: 'Projects',
      icon: '/icons/iconFolder.png',
      url: '#projects'
    },
    {
      text: 'About Me',
      icon: 'icons/iconInfo.ico',
      url: '#about'
    },
    {
      text: 'Resume',
      icon: '/icons/iconResume.ico',
      url: '#resume'
    },
    {
      text: 'Contact',
      icon: '/icons/iconEmail3.ico',
      url: '#contact'
    }
  ]
  return (
    <div className="sidebar">
      <div
        className={
          isExpanded
            ? 'side-nav-container'
            : 'side-nav-container side-nav-container-NX'
        }
      >
        <div className="nav-upper">
          <div
            className={
              isExpanded ? 'nav-heading' : 'nav-heading-in nav-heading'
            }
          >
            {isExpanded && <div className="nav-brand"></div>}
            <button
              className={
                isExpanded
                  ? 'hamburger hamburger-in'
                  : 'hamburger hamburger-out'
              }
              onClick={() => setExpendState(!isExpanded)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="nav-menu">
            {menuItems.map((item) => (
              <a
                className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
                href={item.url}
              >
                {isExpanded ? (
                  <p className="menu-item-text">{item.text}</p>
                ) : (
                  <img className="menu-item-icon" src={item.icon} />
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="nav-footer">
          {isExpanded && (
            <div className="nav-details">
              <div className="nav-footer-info">
                <p className="nav-footer-user-name"></p>
                <p className="nav-footer-user-position"></p>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  )
}

export default SideBar
