export const paths = {
    inicio: (lang: string) => `/${lang}`,
    queEs: (lang: string) => `/${lang}/que-es`, 

    notFound: '/404',
    forbidden: '/403',
    serverError: '/500',
} as const;