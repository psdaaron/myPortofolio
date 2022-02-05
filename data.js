/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Aaron",
  email: "aaron_work@gmx.de",
  about:
    "Hey! I'm <b>Aaron</b>, a selft taught <b>Graphic Designer</b> and currently based in <b>Germany</b>.",

  // intro
  accomplishments: {
    name: "Accomplishments",
    value: [
      "Learned Photoshop and Blender",
      "Worked for Esport Organizations based in Germany and Austria",
      "I had a great day :)",
    ],
  },
  socialLink: {
    name: "Social Media",
    value: [
      { name: "Twitter", link: "https://twitter.com/RoxxCreates" },
      { name: "Instagram", link: "/" },
    ],
  },
  currentProfession: {
    name: "Current Status",
	  value: [
		  "Doing freelance work",
		  "Working on some projects"
		  "Available for new projects"
	  ],
  },

  // Footer
  contactDetails: {
    name: "Reach out to me here",
    value: [
      {
        name: "Gmx",
        value: "aaron_work@gmx.de",
      },
      {
        name: "Discord",
        value: "DopeAss#9669",
      },
    ],
  },
  currentStatus: {
    name: "What am I upto right now",
    value: [
      "Walking my dog in the park",
      "Making dog excuse to gawk at the hot girl",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
    {
      info: {
        "Project": ["Off White x Air Jordan"],
        "Description": [
          "Off-White x Air Jordan 1 Retro High OG UNC ",
        ],
	      "My Objectives": [
	        "Learning by doing",
	        "Getting more into Product/Advertisement/Poster Design"
	      ],
      },

      Link: "https://twitter.com/RoxxCreates/status/1489985744450072581",
      Image: "/images/apple.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing",
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/spiderman.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing", 
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/microsoft.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "dark",
};
