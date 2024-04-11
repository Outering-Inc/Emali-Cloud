import MegaDeal from "../components/MegaDeal";
import MegaBanner from "../components/MegaBanner";
import { BiHeadphone,BiUserPlus,BiSolidMap} from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import { GoRocket } from "react-icons/go";
import { ImSpinner3 } from "react-icons/im";


import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin,
   twitter,  
   safaricom,
   google2,
   shopify,
   salesforce, 
   send, 
   shield, 
   star,
   gdpr,
  hipaa, 
  aicpa,
  odpck, 
  inpurchase, 
  prepurchase, 
  postpurchase,
    hubspot,
    salesforce2,
    woocommerce,
    bigcommerce,
    zendesk,
    shopify2,
    magento,
    zapier } from "../assets";


 

export const links = [
  { name: "Solutions" ,
    colCount:"3",
    submenu:true,
    sublinks : [
    {
      Head:"By Industry",
      sublink:[
        {icon:BiHeadphone,name:"Conversational Intelligence",subname:"The Complete Converational AI Solution.",link:"/conversational-intelligence/"},
        {icon:ImSpinner3,name:"Omnichannel Messaging",subname:"Let you Customers choose the channel they are comforatable.",link:"/about"},
        {icon:IoIosRocket,name:"Conversation X Cloud",subname:"Automate % Personalize Customer Support",link:"/support"},
        {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
        {icon:IoIosRocket,name:"Conversation Elloe Cloud",subname:"Automate % Personalize Customer Support",link:"/"}
      ],
    }, 
    {
      Head:"Health Care",
      sublink:[
        {img:people01,name:"Conversation Service Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
        {icon:BiHeadphone,name:"Conversation Commerce Cloud",link:"/"},
        {icon:IoIosRocket,name:"Conversation X Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
        {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
        {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
        {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
        {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
        {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"}
      ],
    }, 
    {
      Head:"Elloe",
      sublink:[
        {component:MegaDeal,name1:"Conversation Service Cloud",subname1:"Automate % Personalize Customer Support",link:"/"},
        {component:MegaBanner,name2:"Conversation Service Cloud",subname2:"Automate % Personalize Customer Support",link:"/"},
      ],
    },
  ]},
  { name: "Products" ,
  colCount:"3",
  submenu:true,
  sublinks : [
  {
    Head:"By Industry",
    sublink:[
      {img:people01,name:"Conversation Service Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:BiHeadphone,name:"Conversation Commerce Cloud",link:"/"},
      {icon:IoIosRocket,name:"Conversation X Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"}
    ],
  }, 
  {
    Head:"Health Care",
    sublink:[
      {img:people01,name:"Conversation Service Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:BiHeadphone,name:"Conversation Commerce Cloud",link:"/"},
      {icon:IoIosRocket,name:"Conversation X Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"}
    ],
  }, 
  {
    Head:"Emali",
    sublink:[
      {component:MegaDeal,name1:"Conversation Service Cloud",subname1:"Automate % Personalize Customer Support",link:"/"},
      {component:MegaBanner,name2:"Conversation Service Cloud",subname2:"Automate % Personalize Customer Support",link:"/"},
    ],
  },
  ]},
  { name: "Resources" ,
  colCount:"3",
  submenu:true,
  sublinks : [
  {
    Head:"By Industry",
    sublink:[
      {img:people01,name:"Conversation Service Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:BiHeadphone,name:"Conversation Commerce Cloud",link:"/"},
      {icon:IoIosRocket,name:"Conversation X Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"}
    ],
  },  
  {
    Head:"Emali",
    sublink:[
      {component:MegaDeal,name1:"Conversation Service Cloud",subname1:"Automate % Personalize Customer Support",link:"/"},
      {component:MegaBanner,name2:"Conversation Service Cloud",subname2:"Automate % Personalize Customer Support",link:"/"},
    ],
  },
  {
    Head:"Emali",
    sublink:[
      {component:MegaDeal,name1:"Conversation Service Cloud",subname1:"Automate % Personalize Customer Support",link:"/"},
      {component:MegaBanner,name2:"Conversation Service Cloud",subname2:"Automate % Personalize Customer Support",link:"/"},
    ],
  },
  ]},
  { name: "Company" ,
  colCount:"2",
  submenu:true,
  sublinks : [
  {
    Head:"Our Root",
    sublink:[
      {icon:BiSolidMap,name:"About Us",subname:"The people behind Emali Cloud and the story of shared success.",link:"/"},
      {icon:GoRocket,name:"Career",subname:"Come and build with us to shape the future of Cloud Computing + Genarative AI.",link:"/career/"},
      {icon:BiUserPlus,name:"Our Partner",subname:"Collaborate with Emali Cloud and drive mutual growth.",link:"/"},
      {icon:IoIosRocket,name:"Conversation Emali Cloud",subname:"Automate % Personalize Customer Support",link:"/"},
      {icon:IoIosRocket,name:"Conversation Elloe Cloud",subname:"Automate % Personalize Customer Support",link:"/"}
    ],
  },  
  {
    Head:"Elloe",
    sublink:[
      {component:MegaDeal,name1:"Conversation Service Cloud",subname1:"Automate % Personalize Customer Support",link:"/career"},
      {component:MegaBanner,name2:"Conversation Service Cloud",subname2:"Automate % Personalize Customer Support",link:"/career"},
    ],
  },
  ]}
];    

export const jobnavLinks = [
  {
    id: "jobs",
    title: "Jobs",
  },
  {
    id: "company",
    title: "Company",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "login",
    title: "Login",
  },
  {
    id: "register",
    title: "Register",
  },
];

//For all the jobs we are going to use high ordr array to map our data
export const jobData =[
  {
    id:"job-1",
    image:people01,
    title:"Web Developer",
    time:"Now",
    location:"Emali HQ",
    description: "At Emali, we prioritize fostering a culture where every interaction begins with a smile, where connections are meaningful and genuine, and where we collectively build a community that embraces diversity and fosters a sense of belonging for all.",
    company:"Emali Inc"
  },
  {
    id:"job-2",
    image:people02,
    title:"Cloud Engineer",
    time:"14 Hrs",
    location:"Emali HQ",
    description: "At Emali, we prioritize fostering a culture where every interaction begins with a smile, where connections are meaningful and genuine, and where we collectively build a community that embraces diversity and fosters a sense of belonging for all.",
    company:"Emali Inc"
  },
  {
    id:"job-3",
    image:hipaa,
    title:"Software Engineer",
    time:"2 Days",
    location:"Emali HQ",
    description: "At Emali, we prioritize fostering a culture where every interaction begins with a smile, where connections are meaningful and genuine, and where we collectively build a community that embraces diversity and fosters a sense of belonging for all.",
    company:"Emali Inc"
  },
  {
    id:"job-4",
    image:people03,
    title:"Solution Architecture",
    time:"Now",
    location:"Emali HQ",
    description: "At Emali, we prioritize fostering a culture where every interaction begins with a smile, where connections are meaningful and genuine, and where we collectively build a community that embraces diversity and fosters a sense of belonging for all.",
    company:"Emali Inc"
  },
  {
    id:"job-5",
    image:people01,
    title:"UI/UX Designer",
    time:"Now",
    location:"Emali HQ",
    description: 'Here at Emali, we’re fostering a people-first and inclusive culture, where people from all walks of life have a sense of friendship and belonging.',
    company:"Emali Inc"
  },
  {
    id:"job-6",
    image:people03,
    title:"Data Scientist",
    time:"Now",
    location:"Emali HQ",
    description: 'Here at Emali, we’re fostering a people-first and inclusive culture, where people from all walks of life have a sense of friendship and belonging.',
    company:"Emali Inc"
  },
  {
    id:"job-7",
    image:people02,
    title:"Web Developer",
    time:"Now",
    location:"Emali HQ",
    description: 'Here at Emali, we’re fostering a people-first and inclusive culture, where people from all walks of life have a sense of friendship and belonging.',
    company:"Emali Inc"
  },
  {
    id:"job-8",
    image:people02,
    title:"Cloud Support",
    time:"7 Hrs",
    location:"Mombasa",
    description: 'Here at Emali, we’re fostering a people-first and inclusive culture, where people from all walks of life have a sense of friendship and belonging.',
    company:"FoodPlus"
  }
  
]
export const megaMenuContent = [
  {
    title: "Category 1",
    links: [
      {
        name: "Link 1.1",
        link: "https://example.com/link1.1",
      },
      {
        name: "Link 1.2",
        link: "https://example.com/link1.2",
      },
    ],
  },
  {
    title: "Category 2",
    links: [
      {
        name: "Link 2.1",
        link: "https://example.com/link2.1",
      },
      {
        name: "Link 2.2",
        link: "https://example.com/link2.2",
      },
    ],
  },
  {
    title: "Category 3",
    links: [
      {
        name: "Link 3.1",
        link: "https://example.com/link3.1",
      },
      {
        name: "Link 3.2",
        link: "https://example.com/link3.2",
      },
    ],
  },
  // Add more categories and links as needed
];


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Aly Mtsumi",
    title: "Founder & Leader",
    img: people03,
  },
];

export const support = [
  {
    id: "support-1",
    content:
      "Empower prospects to converse with you while engaging with their friends through their preferred channel.Engage with your customers via voice bots and chatbots to campaign, capture leads, and increase retention and loyalty.Maximize advertising ROI & conversions with conversational ads and powerful campaign manager.",
    name: "Pre-purchase",
    img: prepurchase,
  },
  {
    id: "support-2",
    content:
      "Boost your revenue by selling to the right consumers at the right time, on the channels they prefer to spend time onLeverage digital catalogues, tailored recommendations, one-click-payments to convert more visitors on social media and webIntelligently re-engage with prospects with abandoned carts and successfully complete the sale",
    name: "In-Purchase",
    img: inpurchase,
  },
  {
    id: "support-3",
    content:
      "Empower your customers to find a resolution to their queries on demand, 24/7, in their preferred languageResolve ~80% of queries with automation and smartly route critical queries to live agents Unclog tickets with easy-to-scale self-service customer support to care for peaks and business as usual",
    name: "Post-purchase",
    img: postpurchase,
  },
];

export const action = [
  {
    id: "action-1",
    content:
      "Tickets solved without human touch",
    name: "90%",
    img: prepurchase,
  },
  {
    id: "action-2",
    content:
      "Growth",
    name: "25%",
    img: inpurchase,
  },
  {
    id: "action-3",
    content:
      "Users",
    name: "500+",
    img: postpurchase,
  },
  {
    id: "action-4",
    content:
      "Community",
    name: "300+",
    img: postpurchase,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const analytics = [
  {
    id: "analytics-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "analytics-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "analytics-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.emali.co.ke/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.emali.co.ke/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.emali.co.ke/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.emali.co.ke/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.emali.co.ke/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.emali.co.ke/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.emali.co.ke/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.emali.co.ke/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.emali.co.ke/become-a-partner/",
      },
      {
        name: "KnowledgeBase",
        link: "https://www.emali.co.ke/knowledge-base-center/",
      },
    ],
  },
  {
    title: "Emali-Fulfillment",
    links: [
      {
        name: "Career",
        link: "https://www.elloe.ai/career/",
      },
      {
        name: "Emali Academy",
        link: "https://www.elloe.ai/elloe-academy/",
      },
      {
        name: "KnowledgeBase",
        link: "https://www.elloe.ai/knowledge-base-center/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/emalicloud/",
  },
];

export const extraFooterLinks = [
  {
    id: "licence-partner-1",
    name:"emali.co.ke", 
    link: "https://www.odpc.go.ke/",
  },
  {
    id: "licence-partner-2",
    name: "Data Policy",
    link: "https://emalicloud/data-policy/",
  },
  {
    id: "licence-partner-3",
    name: "Privacy Policy",
    link: "https://www.hhs.gov/hipaa/",
  },
  {
    id: "licence-partner-4",
    name: "Cookie Policy",
    link: "https://www.aicpa-cima.com/",
  },
];

export const licencePartner = [
  {
    id: "licence-partner-1",
    icon: odpck,
    link: "https://www.odpc.go.ke/",
  },
  {
    id: "licence-partner-2",
    icon: gdpr,
    link: "https://gdpr-info.eu/",
  },
  {
    id: "licence-partner-3",
    icon: hipaa,
    link: "https://www.hhs.gov/hipaa/",
  },
  {
    id: "licence-partner-4",
    icon: aicpa,
    link: "https://www.aicpa-cima.com/",
  },
];

export const intergrationPartner = [
  {
    id: "intergration-partner-1",
    icon: hubspot,
    link: "https://www.odpc.go.ke/",
  },
  {
    id: "intergration-partner-2",
    icon: salesforce,
    link: "https://gdpr-info.eu/",
  },
  {
    id: "intergration-partner-3",
    icon: woocommerce,
    link: "https://www.hhs.gov/hipaa/",
  },
  {
    id: "intergration-partner-4",
    icon: bigcommerce,
    link: "https://www.aicpa-cima.com/",
  },
  {
    id: "intergration-partner-5",
    icon: zendesk,
    link: "https://www.aicpa-cima.com/",
  },
  {
    id: "intergration-partner-6",
    icon: shopify,
    link: "https://www.aicpa-cima.com/",
  },
  {
    id: "intergration-partner-7",
    icon: magento,
    link: "https://www.aicpa-cima.com/",
  },
  {
    id: "intergration-partner-8",
    icon: zapier,
    link: "https://www.aicpa-cima.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: safaricom,
  },
  {
    id: "client-2",
    logo: google2,
  },
  {
    id: "client-3",
    logo: shopify2,
  },
  {
    id: "client-4",
    logo: salesforce2,
  },
];