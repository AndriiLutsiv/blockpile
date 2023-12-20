import styles from './home.module.scss';
import { Layout } from '@/components/layout';
import { SectionOne } from '@/components/ui/section-one';
import { SectionTwo } from '@/components/ui/section-two';
import { SectionThree } from '@/components/ui/section-three';
import { SectionFour } from '@/components/ui/section-four';
import { SectionFive } from '@/components/ui/section-five';

const Home = ({ testimonials, randomPosts, contactSection, contactSectionText, contactSectionButtonText, blogs }) => {
    return <Layout title='blockpile' description='Some description for seo'>
        <div className={styles.home}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour testimonials={testimonials} />
            <SectionFive
                randomPosts={randomPosts}
                contactSection={contactSection}
                contactSectionText={contactSectionText}
                contactSectionButtonText={contactSectionButtonText}
                blogs={blogs}
            />
        </div>
    </Layout>
}

export default Home;