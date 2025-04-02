import React from 'react';

/**
 * Mobile menu button component that appears only on small screens
 * to toggle the sidebar visibility
 */
const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="mobile-menu-toggle d-md-none"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
    </button>
  );
};

export default MobileMenuButton;