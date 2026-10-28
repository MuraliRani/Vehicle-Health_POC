import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [showR3F, setShowR3F] = useState(true);
  const [showThree, setShowThree] = useState(true);
  const [showGoogle, setShowGoogle] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        Vehicle Health
      </div>

      {/* React Three Fiber */}

      <div
        className="menu-group"
        onClick={() => setShowR3F(!showR3F)}
      >
        {showR3F ? '▼' : '▶'} React Three Fiber
      </div>

      {showR3F && (
        <div className="submenu">
          <NavLink
            to="/vehicle-health/model1"
            className={({ isActive }) =>
              isActive
                ? 'submenu-item active'
                : 'submenu-item'
            }
          >
            Model 1
          </NavLink>

          <NavLink
            to="/vehicle-health/model2"
            className={({ isActive }) =>
              isActive
                ? 'submenu-item active'
                : 'submenu-item'
            }
          >
            Model 2
          </NavLink>
        </div>
      )}

      {/* Three.js */}

      <div
        className="menu-group"
        onClick={() => setShowThree(!showThree)}
      >
        {showThree ? '▼' : '▶'} Three.js
      </div>

      {showThree && (
        <div className="submenu">
          <NavLink
            to="/vehicle-health-1/model1"
            className={({ isActive }) =>
              isActive
                ? 'submenu-item active'
                : 'submenu-item'
            }
          >
            Model 1
          </NavLink>

          <NavLink
            to="/vehicle-health-1/model2"
            className={({ isActive }) =>
              isActive
                ? 'submenu-item active'
                : 'submenu-item'
            }
          >
            Model 2
          </NavLink>
        </div>
      )}

      {/* Google Viewer */}

      <div
        className="menu-group"
        onClick={() => setShowGoogle(!showGoogle)}
      >
        {showGoogle ? '▼' : '▶'} Google Viewer
      </div>

      {showGoogle && (
        <div className="submenu">
          <NavLink
            to="/vehicle-health-3/model1"
            className={({ isActive }) =>
              isActive
                ? 'submenu-item active'
                : 'submenu-item'
            }
          >
            Model 1
          </NavLink>

          <NavLink
            to="/vehicle-health-3/model2"
            className={({ isActive }) =>
              isActive
                ? 'submenu-item active'
                : 'submenu-item'
            }
          >
            Model 2
          </NavLink>
        </div>
      )}

      {/* Image Sequence */}

      <NavLink
        to="/vehicle-health-2"
        className={({ isActive }) =>
          isActive ? 'menu-item active' : 'menu-item'
        }
      >
        Image Sequence
      </NavLink>
    </div>
  );
}

export default Sidebar;