import React from 'react'
import css from './Footer.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'

const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>

            <motion.div
                variants={footerVariants}
                className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className='primaryText'>
                        Let's make something <br /> amazing together.
                    </span>

                    <span className='primaryText'>
                        Start by <a href="mailto:maximilliankodi@gmail.com" target='_blank' >saying hi</a>
                    </span>
                </div>
                <div className={css.right}>

                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>maximilliankodi@gmail.com</p>
                    </div>

                    <div className={css.menu}>
                        <li><a href="#experties">Skills</a></li>
                        <li><a href="#work">Experience</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="https://github.com/maxi114" target='_blank'>Github</a></li>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Footer