import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "lib/emotion";
import { ReactNode, useEffect, useState } from "react"
import useIsMobile from "./hooks/useIsMobile";
import { queryClient } from "./lib/queryClient";
import { loadJS } from "./lib/common";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
    children: ReactNode;
    emotionCache?: EmotionCache;
}
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export function AppProviders({
    children, 
    emotionCache = clientSideEmotionCache
}: Props){
    // This ensures that data is not shared
    // between different users and requests
    const [queryClientState] = useState(() => queryClient);
    const isMobile = useIsMobile();

    useEffect(()=> {
        if (process.env.NEXT_PUBLIC_ENABLE_ERUDA === 'true') {
            const src = `//cdn.jsdelivr.net/npm/eruda`;
            loadJS(src).then(() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if ((window as any).eruda && (window as any).eruda._isInit)
                return;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).eruda.init();
            });
        }
        return () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).eruda &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (window as any).eruda._isInit &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (window as any).eruda.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <QueryClientProvider client={queryClientState}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </CacheProvider>
    )
}