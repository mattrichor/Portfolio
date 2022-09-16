import React, { useState } from 'react'
import folder from '../public/icons/folder.svg'

const SideBar = () => {
  const [isExpanded, setExpendState] = useState(false)
  const menuItems = [
    {
      text: 'Home',
      icon: 'public/icons/grid.svg'
    },
    {
      text: 'Projects',
      icon: folder
    },
    {
      text: 'Contact',
      icon: 'icons/message.svg'
    },
    {
      text: 'Resume',
      icon: 'icons/shopping-cart.svg'
    },
    {
      text: 'About Me',
      icon: 'icons/shopping-cart.svg'
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
            {menuItems.map(({ text, icon }) => (
              <a
                className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
                href="#"
              >
                <img className="menu-item-icon" src={icon} alt="" srcset="" />
                {isExpanded && <p>{text}</p>}
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
