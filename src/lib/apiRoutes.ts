const apiRoutes = {
    cms: {
        post: {
            list: '/api/posts?populate=*',
            postBySlug: (slug: string) => `/api/posts/${slug}?populate=*`
        }
    }
};

export default apiRoutes;