// import React from 'react';
// import PropTypes from 'prop-types';

// const ButtonWithIcon = ({ icon, children, onClick, position = 'left', size = 'normal', design = 'primary' }) => {
//   const sizes = {
//     xsmall: 'px-2 py-1 text-xs',
//     small: 'px-3 py-2 text-sm',
//     normal: 'px-4 py-2 text-base',
//     large: 'px-5 py-3 text-lg'
//   };

//   const designs = {
//     primary: 'bg-blue-500 text-white',
//     secondary: 'bg-gray-500 text-white',
//     danger: 'bg-red-500 text-white'
//   };

//   const iconPositionClass = position === 'left' ? 'flex-row' : 'flex-row-reverse';

//   return (
//     <button
//       onClick={onClick}
//       className={`inline-flex items-center ${sizes[size]} ${designs[design]} ${iconPositionClass} rounded-md`}
//     >
//       <img src={icon} alt="" className={`m-1 h-8`}/>
//       {children}
//     </button>
//   );
// };

// ButtonWithIcon.propTypes = {
//   icon: PropTypes.node,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
//   position: PropTypes.oneOf(['left', 'right']),
//   size: PropTypes.oneOf(['xsmall', 'small', 'normal', 'large']),
//   design: PropTypes.oneOf(['primary', 'secondary', 'danger']),
// };

// export default ButtonWithIcon;


import React from 'react';
import PropTypes from 'prop-types';
import iconMap from './iconMap'; // Import the icon map

const ButtonWithIcon = ({ iconName, children, onClick, position = 'left', size = 'normal', design = 'primary' }) => {
  const sizes = {
    xsmall: 'px-2 py-1 text-xs',
    small: 'px-3 py-2 text-sm',
    normal: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg'
  };

  const designs = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-red-500 text-white'
  };

  const iconPositionClass = position === 'left' ? 'flex-row' : 'flex-row-reverse';
  const icon = iconMap[iconName]; // Get the icon from the icon map

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center ${sizes[size]} ${designs[design]} ${iconPositionClass} rounded-md`}
    >
      {icon && <img src={icon} alt="" className={`m-1 h-8`} />}
      {children}
    </button>
  );
};

ButtonWithIcon.propTypes = {
  iconName: PropTypes.string.isRequired, // Change icon to iconName
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(['xsmall', 'small', 'normal', 'large']),
  design: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

export default ButtonWithIcon;
