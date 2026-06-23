import { Link, useLocation, useNavigate } from "react-router-dom"
import { customerSidebarData, type CustomerSidebarItem } from "./customerSidebarData"
import { forwardRef, useState } from "react"
import { useAuth } from "../../../../core/auth/AuthContext"
import { all_routes } from "../../../../core/data/routes/all_routes"

const CustomerSidebar = forwardRef<HTMLDivElement>((_, ref) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set())

  // Sidebar logout must clear the PocketBase session just like the header logout.
  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault()
    logout()
    navigate(all_routes.login)
  }

  // Handle mouse enter on sidebar
  const handleMouseEnter = () => {
    const body = document.body;
    if (body.classList.contains('mini-sidebar')) {
      body.classList.add('expand-menu');
    }
  };

  // Handle mouse leave from sidebar
  const handleMouseLeave = () => {
    const body = document.body;
    if (body.classList.contains('mini-sidebar')) {
      body.classList.remove('expand-menu');
    }
  };

  // Toggle submenu function
  const toggleSubmenu = (itemId: string, event: React.MouseEvent) => {
    event.preventDefault()
    setOpenSubmenus(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  };

  // Function to check if a route is active (supports exact and relative matching)
  const isRouteActive = (itemTo: string, currentPath: string): boolean => {
    if (itemTo === "javascript:void(0);" || itemTo === "#") return false
    
    // Exact match
    if (itemTo === currentPath) return true
    
    // Relative match - check if current path starts with the item path
    if (itemTo !== "/" && currentPath.startsWith(itemTo)) {
      // Ensure we're not matching partial segments
      const nextCharInCurrentPath = currentPath[itemTo.length]
      return nextCharInCurrentPath === undefined || nextCharInCurrentPath === "/"
    }
    
    return false
  }

  // Check if any related route is active
  const hasActiveRelatedRoute = (relatedRoutes: string[] | undefined, currentPath: string): boolean => {
    if (!relatedRoutes) return false
    return relatedRoutes.some(route => isRouteActive(route, currentPath))
  }

  // Check if any child route is active for submenu highlighting
  const hasActiveChild = (children: CustomerSidebarItem[] | undefined, currentPath: string): boolean => {
    if (!children) return false
    return children.some(child => isRouteActive(child.to, currentPath))
  }

  const renderMenuItem = (item: CustomerSidebarItem, isSubmenu = false) => {
    const isActive = isRouteActive(item.to, location.pathname)
    const hasActiveChildren = hasActiveChild(item.children, location.pathname)
    const hasActiveRelated = hasActiveRelatedRoute(item.relatedRoutes, location.pathname)
    const shouldHighlight = isActive || hasActiveChildren || hasActiveRelated
    const isSubmenuOpen = openSubmenus.has(item.id)

    if (item.children && item.children.length > 0) {
      return (
        <li key={item.id} className={`submenu `}>
          <Link 
            to={item.to} 
            className={isSubmenuOpen ? 'subdrop' : ''}
            onClick={(e) => toggleSubmenu(item.id, e)}
          >
            <span className="icon">
              <i className={item.icon} />
            </span>
            <span>{item.label}</span>
            <span className="menu-arrow" />
          </Link>
          <ul style={{ display: isSubmenuOpen ? 'block' : 'none' }}>
            {item.children.map(child => renderMenuItem(child, true))}
          </ul>
        </li>
      )
    }

    return (
      <li key={item.id} className={`${shouldHighlight ? 'active' : ''}`}>
        <Link 
          to={item.to}
          {...(item.id === 'logout' ? { onClick: handleLogout } : {})}
          {...(item.isModal && item.modalTarget ? {
            'data-bs-toggle': 'modal',
            'data-bs-target': item.modalTarget
          } : {})}
        >
          {!isSubmenu && (
            <span className="icon">
              <i className={item.icon} />
            </span>
          )}
          {isSubmenu && <i className={item.icon} />}
          {isSubmenu ? item.label : <span>{item.label}</span>}
          {item.badge && (
            <span className={`count ${item.badge.className}`}>
              {item.badge.text}
            </span>
          )}
        </Link>
      </li>
    )
  }

  return (
    <>
      {/* Sidebar */}
      <div 
        ref={ref}
        className="sidebar" 
        id="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              {customerSidebarData.map(item => renderMenuItem(item))}
            </ul>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
    </>
  )
})

CustomerSidebar.displayName = 'CustomerSidebar'

export default CustomerSidebar