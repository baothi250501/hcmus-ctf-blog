import React from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState<{
        width?: number;
        height?: number;
    }>({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        function handleResize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Don't forget to remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;