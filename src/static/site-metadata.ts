interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://hanlhe.github.io/running_page/',
  logo: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/28483117/28756695/4/large.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/hanlhe',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hanlin10',
    },
  ],
};

export default data;
