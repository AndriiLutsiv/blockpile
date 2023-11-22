import Head from 'next/head';

const getTitle = (title) => `${title} | Default Title`;

const Meta = ({ title, description, children }) => {
    return <>
        <Head>
            <title>{title}</title>
            {description ? 
                <>
                    <meta name='description' content={description} />
                    <meta name='og:title' content={getTitle(title)} />
                    <meta name='og:description' content={description} />
                </> :
                <meta name='robots' content='noindex, nofollow' />
            }
        </Head>
        {children}
    </>
}

export default Meta;