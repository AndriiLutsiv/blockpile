import React from 'react';
import styles from './section-four.module.scss';
import { Slider } from '../slider';

const SectionFour = () => {

  return <div id='testimonials-section' className={styles.sectionFour}>
    <div className={styles.container}><Slider /></div>
  </div>
}

export default SectionFour;