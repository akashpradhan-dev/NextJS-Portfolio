import Head from 'next/head';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    const { theme } = useSelector(state => state.theme);
    return (
        <>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
                    integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
                    crossorigin='anonymous'
                    referrerpolicy='no-referrer'
                />
            </Head>

            <div className={`${'main-content'} ${theme}`}>
                <main>{children}</main>
                <ToastContainer />
            </div>
        </>
    )
}