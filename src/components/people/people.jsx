import React from 'react'
import css from './People.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'

const people = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="people"></a>
            <motion.div
                variants={footerVariants}
                className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">People talk about us</span>
                    <p style={{ marginTop: "2rem" }}>
                        I got a job that was in accordance wisth the salary and field of work
                    </p>

                    <p>The process of submitting an application was quite cosy</p>
                </div>

                {/* carousal */}

                <div className={`yPaddings ${css.comments}`}>
                    <Slider
                        {...sliderSettings}
                        className={css.slider}
                    >

                        {
                            comments.map((comment, i) => {
                                return (
                                    <div className={`flexCenter ${css.comment}`}>
                                        <img src={comment.img} alt="" />
                                        <p>{comment.comment}</p>
                                        <div className={css.line}></div>

                                        <dv className={css.bio}>
                                            <span>{comment.name}</span>
                                            <span>{comment.post}</span>
                                        </dv>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </motion.div>

        </motion.section>
    )
}

export default people