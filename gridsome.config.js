require('dotenv').config();

module.exports = {
  siteName: 'Gridsome Shop',
  plugins: [
    'gridsome-plugin-tailwindcss',
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: process.env.SANITY_DATASET,
        overlayDrafts: false,
        watchMode: false
      }
    }
  ]
};
