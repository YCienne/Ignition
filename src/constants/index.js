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
    url: "#roadmap",
  },
  
  {
    id: "3",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
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
    colorful: true,
  },
  {
    id: "1",
    title: "Drinking and relaxing Pub",
    text: "Bar and lounge, Games",
    imageUrl: serv2,
  },
  {
    id: "2",
    title: "Event Planning",
    text: "Come plan your events with us",
    imageUrl: serv3,
  },
  {
    id: "3",
    title: "Lodging",
    
    imageUrl: serv4,
    colorful: true,
    
  },
];



export const pricing = [
  {
    id: "0",
    title: "Children",
    description: "Under 15 years",
    price: "50.00",
    features: [
      "Bring your kids",
    ],
  },
  
  {
    id: "1",
    title: "Adult",
    description: "15 years and Older",
    price: "80.00",
    features: [
      "Adult package",
      
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
