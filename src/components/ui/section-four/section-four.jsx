import React from 'react';
import styles from './section-four.module.scss';
import { Slider } from '../slider';

const SectionFour = ({ testimonials }) => {

  return <div id='testimonials-section' className={styles.sectionFour}>
    <div className={styles.container}><Slider testimonials={testimonials} /></div>
  </div>
}

export default SectionFour;