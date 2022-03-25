import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
dataset:"production",
useCdn: true,
apiVersion: "2021-11-16",
token: process.env.REACT_APP_SANITY_TOKEN,
})

const buider = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
