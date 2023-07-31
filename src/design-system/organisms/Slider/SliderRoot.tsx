'use client'
import React, { ReactNode, useState } from 'react'
import Slider from "react-slick";

import styles from './styles.module.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderRootProps {
  children: ReactNode
}


const SliderRoot = (props: SliderRootProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const testSettings = {
    backgroundColor: '#feb028',
    height: '5px'
  }

  let sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.sliderDots,
    arrows: false,
    beforeChange: (__: any , next: any) => {
      setCurrentSlide(next);
    },
    appendDots: (dots: any) => {
      return (
        <div>
          <ul className={styles.sliderDots}>
            {dots.map((item: any, index: number) => {
              return (
                <li key={index}>{item.props.children}</li>
              );
            })}
          </ul>
        </div>
      )
    },
    customPaging: (index: number) => {
      return (
        <button style={index === currentSlide ? testSettings : undefined}>
          {index + 1}
        </button>
      )
    }
  };


  return (
    <div className={styles.sliderWrapper}>
      <Slider {...sliderSettings}>
        { props.children }
      </Slider>
    </div>
  )
}

export default SliderRoot