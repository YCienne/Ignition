import {
  facebook,
  instagram,      
  serv1,
  serv2,
  serv3,
  serv4,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#about-us",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  
  {
    id: "3",
    title: "Swimming Packages",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Book Space Here",
    url: "#",
  },
  {
    id: "5",
    title: "Contact",
    url: "#Footer",
    onlyMobile: true,
  },
  
];



export const service = [
  {
    id: "0",
    title: "Swimming Lessons",
    text: "We offer swimming lessons for all people",
    imageUrl: serv1,
    gallery: [
      serv1,
      serv1,
      serv1,
      serv1,
      serv1,
    ]
  },
  {
    id: "1",
    title: "Drinking and relaxing Pub",
    text: "Bar and lounge, Games",
    imageUrl: serv2,
    gallery: [
      serv1,
      serv1,
      serv1,
      serv1,
      serv1,
    ]
  },
  {
    id: "2",
    title: "Event Planning",
    text: "Come plan your events with us",
    imageUrl: serv3,
    gallery: [
      serv1,
      serv1,
      serv1,
      serv1,
      serv1,
    ]
  },
  {
    id: "3",
    title: "Lodging",
    
    imageUrl: serv4,
    gallery: [
      serv1,
      serv1,
      serv1,
      serv1,
      serv1,
    ]
    
  },
  {
    id: "3",
    title: "Restaurant",
    
    imageUrl: serv4,
    gallery: [
      serv1,
      serv1,
      serv1,
      serv1,
      serv1,
    ]
    
  },
];



// constants/index.js

export const swimmingPackages = [
  {
    id: 1,
    title: "Beginner Package",
    price: "₵200/month",
    features: [
      "2 sessions/week",
      "Free swim cap",
      "Coach-guided basics",
      "Beginner-friendly pool access",
    ],
  },
  {
    id: 2,
    title: "Intermediate Package",
    price: "₵350/month",
    features: [
      "3 sessions/week",
      "Access to technique drills",
      "Video analysis",
      "Pool + gym included",
    ],
  },
  {
    id: 3,
    title: "Family Package",
    price: "₵500/month",
    features: [
      "Up to 4 members", 
      "Weekend sessions",
      "Group instructor"
      ],
  },
  {
    id: 3,
    title: "Advanced Training",
    price: "₵700/month",
    features: [
      "5 sessions/week",
      "Competition prep",
      "Nutrition guidance",
      "1-on-1 coaching",
    ],
  },
];


export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/ignition_events_center?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
