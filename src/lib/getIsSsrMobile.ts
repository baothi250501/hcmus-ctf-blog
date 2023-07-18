import type { GetServerSidePropsContext } from "next";
import { getSelectorsByUserAgent } from 'react-device-detect';

const getIsSsrMobile = (context: GetServerSidePropsContext) => {
    const {isMobile} = getSelectorsByUserAgent(context.req.headers['user-agent'] as string);
    return isMobile;
}

export default getIsSsrMobile;