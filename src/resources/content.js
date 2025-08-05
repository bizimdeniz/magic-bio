// Profile data - all fields are optional
const content = {
  name: "Harun Geckaldi", // optional
  avatar: "/images/avatar.jpg", // optional
  cover: "/images/cover.jpg", // optional
  bio: "Streamer + Designer + Creative", // optional
  links: [ // optional array
// title, description and image are generated based on the link (if available) and not provided explicitly
   {
     title: "DenizCo", // optional
     description: "Fully customizable design system for Next.js and Figma.", // optional
     url: "https://www.denizco.de/", // required if link object exists
     favicon: false,
     cover: "https://www.denizco.de/_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=3840&q=75"
    },
    {
      title: "Metadata Solutions", // optional
      description: "A great company for all your digital needs", // optional
      url: "https://metadatasolutions.co.uk", // required if link object exists
      favicon: false,
      cover: "https://www.denizco.de/_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=3840&q=75"
    },
    {
      title: "MaJesty PUBG Mobile", // optional
     url: "https://majesty.dopler.io/", // required if link object exists
      favicon: false
    },
  ],
};

export { content };