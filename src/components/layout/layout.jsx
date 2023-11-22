import Meta from '../seo/meta';
import { Footer } from '../ui/footer';
import { Header } from '../ui/header';


const Layout = ({ children, title, description }) => {

    return <Meta title={title} description={description}>
        <Header />
        <main>{children}</main>
        <Footer />
    </Meta>
}

export default Layout;