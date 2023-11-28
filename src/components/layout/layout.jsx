import Meta from '../seo/meta';
import { Footer } from '../ui/footer';
import { Header } from '../ui/header';

const Layout = ({ children, title, description, yoastSEO }) => {

    return <Meta title={title} description={description} yoastSEO={yoastSEO}>
        <Header />
        {/* <main>{children}</main> */}
        <Footer />
    </Meta>
}

export default Layout;