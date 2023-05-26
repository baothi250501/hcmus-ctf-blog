/**
 * https://javascript.plainenglish.io/the-right-way-to-detect-mobile-breakpoints-in-nextjs-301ccb1976bd
 */
import React, {createContext} from 'react';
import useWindowSize from './useWindowSize';

export const IsSsrMobileContext = createContext(false);

const useIsMobile = () => {
    const isSsrMobile = React.useContext(IsSsrMobileContext);
    const {width: windowWidth} = useWindowSize();
    const isBrowserMobile = !!windowWidth && windowWidth < 992;

    return isSsrMobile || isBrowserMobile;
};

export default useIsMobile;