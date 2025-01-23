
export type resume = {
    basics: {
        name: string,
        label: string,
        image: string,
        email: string,
        phone: string,
        portfolio_url: string,
        linkedin_url: string,
        github_url: string,
        res_summary: string,
        home_summary: string[],
        summary: string,
        location: {
            city: string,
            countryCode: string,
            region: string,
            postalCode: string
        },
        profiles: {
            network: string,
            username: string,
            url: string
        }[]
    }
};
