export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.253 : isMobile ? 0.32 : isTablet ? 0.47 : 0.6,
      deskPosition: isSmall ? [0.4,-1.6,1] : isMobile ? [0.5, -1.6, 1] : [0.8, -1.6, 1],
      reactLogoPosition: isSmall ? [-2, 0.5, -8] : isMobile ? [-3.8, 2, -8] : isTablet ? [-4, 1, 2] : [-6, 1, 2],
      pythonLogoPosition: isSmall ? [1.15, 2, 1] : isMobile ? [3, 2, 0] : isTablet ? [5, 3, 1] : [5.5, 2, 4],
      phoneScale: isSmall ? 3.0 : isMobile ? 3.4 : isTablet ? 3.4 : 3.4,
      compScale: isMobile ? 1.57 : isTablet ? 1.75 : 1.95,
      compPosition: isMobile ? [0,-1,0] : [0,-1.5,0],
    };
  };