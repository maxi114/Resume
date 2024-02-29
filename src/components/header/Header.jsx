import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion.js'
import useHeaderShadow from "../../hooks/useHeaderShadow.jsx"
import useOutsideAlerter from "../../hooks/useOutsideAlerter.jsx"
const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    }
  )

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}>

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Max</div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li><a href="#experties">Skills</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="https://github.com/maxi114" target='_blank'>Github</a></li>
        </ul>

        {/* only for medium and small screens*/}
        <div className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header