import { useEffect, useState } from "react"

// export const useIsMobile = () => {
//     const [mobile, setMobile] = useState<boolean>(false);

//     const getWidthScreen = () => window.screen.width < 500 ? setMobile(true) : setMobile(false)

//     useEffect(() => {
//         window.addEventListener('resize', getWidthScreen)
//         return () => window.removeEventListener('resize', getWidthScreen)
//     }, [])

//     return {
//         mobile
//     }
// }

const getMobileDetect = (userAgent: string) => {
    const isAndroid = (): boolean => Boolean(userAgent.match(/Android/i));
    const isIos = (): boolean => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isOpera = (): boolean => Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = (): boolean => Boolean(userAgent.match(/IEMobile/i));
    const isSSR = (): boolean => Boolean(userAgent.match(/SSR/i));

    const isMobile = (): boolean => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
    const isDesktop = (): boolean => Boolean(!isMobile() && !isSSR());
    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isSSR
    };
};
export const useIsMobile = () => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    return getMobileDetect(userAgent);
};