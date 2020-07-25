const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: process.env.SANITYID,
  dataset: process.env.SANITYDATASET,
  useCdn: process.env.SANITYCDN
})