import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import palette from '../../stylus/settings/palette.json'
import styles from './styles'
import Icon from '../Icon'

const nameToColor = (name = "") => {
  const colors = [
    palette["azure"],
    palette["melon"],
    palette["blazeOrange"],
    palette["pomegranate"],
    palette["mango"],
    palette["pumpkinOrange"],
    palette["darkPeriwinkle"],
    palette["purpley"],
    palette["lightishPurple"],
    palette["weirdGreen"],
    palette["puertoRico"],
    palette["emerald"]
  ];
  return colors[
    Array.from(name.toUpperCase())
      .map(letter => letter.charCodeAt(0))
      .reduce((sum, number) => sum + number, 0) % colors.length
  ];
};


export const Avatar = ({ firstname, lastname, image, size, className }) => {
  const colored = {
    backgroundColor: `${nameToColor(firstname)}`,
    color: "white"
  };
  return (
    <div
      className={classNames(
        styles['c-avatar'], {
          [styles[`c-avatar--${size}`]]: size
        },
        className
      )}
      {...{style: firstname ? colored : undefined}}
    >
      {image &&
        <img
          src={image}
          className={styles["c-avatar-image"]}
          alt=''
        />
      }
      {!image && firstname && lastname &&
        <span className={styles["c-avatar-initials"]}>
          {[
            (firstname[0] || "").toUpperCase(),
            (lastname[0] || "").toUpperCase()
          ].join("")}
        </span>
      }
      {!image && !firstname && !lastname &&
        <Icon icon='people' />
      }
    </div>
  )
}

Avatar.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  className: PropTypes.string
}

Avatar.defaultProps = {
  firstname: '',
  lastname: '',
  image: '',
  size: 'medium',
  className: ''
}

export default Avatar
