"use strict";

/*
  RKJ s. r. o. global website configuration.
  This file is loaded before page-specific scripts.
  Change company, contact, service, legal, form, footer, and meta data here.
*/

window.SITE_CONFIG = {
    companyName: "RKJ s. r. o.",
    brandName: "RKJ",

    email: {
        value: "support@rkjmarketingmedia.com",
        href: "mailto:support@rkjmarketingmedia.com",
        label: "Email"
    },

    phone: {
        number: "",
        href: "",
        label: "Call"
    },

    address: {
        full: "434, Tureň 903 01, Slovakia",
        mapUrl:
            "https://www.google.com/maps/search/?api=1&query=434%2C%20Ture%C5%88%20903%2001%2C%20Slovakia"
    },

    assets: {
        favicon: "./assets/icons/favicon.svg",
        images: {
            homeHeroComputer: "./assets/images/home-hero-computer.png",
            homeHeroBg: "./assets/images/home-hero-bg.jpg",
            homeAdvantageBg: "./assets/images/home-advantage-bg.jpg",

            googleAdsHero: "./assets/images/google-ads-hero.jpg",
            seoHero: "./assets/images/seo-hero.jpg",
            socialMediaHero: "./assets/images/social-media-hero.jpg",
            webDesignHero: "./assets/images/web-design-hero.jpg",
            conversionBoostHero: "./assets/images/conversion-boost-hero.jpg",
            localSeoHero: "./assets/images/local-seo-hero.jpg",

            googleAdsMethod01: "./assets/images/google-ads-method-01.jpg",
            googleAdsMethod02: "./assets/images/google-ads-method-02.jpg",
            seoMethod01: "./assets/images/seo-optimization-method-01.jpg",
            seoMethod02: "./assets/images/seo-optimization-method-02.jpg",
            socialMediaMethod01: "./assets/images/social-media-marketing-method-01.jpg",
            socialMediaMethod02: "./assets/images/social-media-marketing-method-02.jpg",
            webDesignMethod01: "./assets/images/web-design-method-01.jpg",
            webDesignMethod02: "./assets/images/web-design-method-02.jpg",
            conversionBoostMethod01: "./assets/images/conversion-boost-method-01.jpg",
            conversionBoostMethod02: "./assets/images/conversion-boost-method-02.jpg",
            localSeoMethod01: "./assets/images/local-seo-method-01.jpg",
            localSeoMethod02: "./assets/images/local-seo-method-02.jpg",

            serviceSection01: "./assets/images/service-section-01.jpg",
            serviceSection02: "./assets/images/service-section-02.jpg"
        }
    },

    navigation: [
        {
            label: "Home",
            href: "./index.html",
            type: "page"
        },
        {
            label: "About",
            href: "./index.html#about",
            type: "anchor"
        },
        {
            label: "Services",
            href: "./index.html#services",
            type: "dropdown"
        },
        {
            label: "Process",
            href: "./index.html#process",
            type: "anchor"
        },
        {
            label: "Contact",
            href: "./index.html#contact",
            type: "anchor"
        }
    ],

    cta: {
        primaryLabel: "Get Started",
        primaryHref: "./index.html#contact",
        secondaryLabel: "Explore Services",
        secondaryHref: "./index.html#services",
        proposalLabel: "Request Proposal",
        proposalHref: "./index.html#contact"
    },

    legalLinks: [
        {
            label: "Privacy Policy",
            href: "./privacy-policy.html"
        },
        {
            label: "Cookie Policy",
            href: "./cookie-policy.html"
        },
        {
            label: "Terms of Service",
            href: "./terms-of-service.html"
        }
    ],

    footer: {
        description:
            "RKJ s. r. o. is a digital marketing agency helping businesses improve visibility, attract qualified leads, and grow through paid advertising, SEO, social media, web design, and conversion-focused strategies.",
        copyright:
            "© 2026 RKJ s. r. o. All rights reserved.",
        disclaimer:
            "Marketing performance may vary depending on business goals, competition, budget, website quality, market conditions, and campaign implementation. RKJ s. r. o. does not guarantee specific rankings, leads, revenue, or advertising results."
    },

    disclaimer:
        "Marketing performance may vary depending on business goals, competition, budget, website quality, market conditions, and campaign implementation. RKJ s. r. o. does not guarantee specific rankings, leads, revenue, or advertising results.",

    cookieBanner: {
        storageKey: "rkjPolicyChoice",
        title: "Privacy & cookie preferences",
        text:
            "RKJ uses essential website storage and may use basic analytics-style data to improve the browsing experience. Choose Accept or Decline to save your preference.",
        acceptLabel: "Accept",
        declineLabel: "Decline",
        links: [
            {
                label: "Privacy Policy",
                href: "./privacy-policy.html"
            },
            {
                label: "Cookie Policy",
                href: "./cookie-policy.html"
            },
            {
                label: "Terms of Service",
                href: "./terms-of-service.html"
            }
        ]
    },

    form: {
        successMessage: "Thank you. Your request has been received.",
        errorMessage: "Please complete the required fields correctly.",
        labels: {
            fullName: "Full Name",
            email: "Email",
            phone: "Phone",
            service: "Selected Service",
            message: "Message"
        },
        placeholders: {
            fullName: "Your name",
            email: "you@example.com",
            phone: "Your phone number",
            service: "Choose a service",
            message: "Tell us what you want to improve"
        },
        submitLabel: "Send Request",
        requiredMessage: "This field is required.",
        emailMessage: "Please enter a valid email address."
    },

    pageMeta: {
        "index.html": {
            title: "RKJ s. r. o. | Digital Marketing & Advertising Agency",
            description:
                "RKJ s. r. o. is a digital marketing and advertising agency helping businesses improve visibility, attract qualified leads, and grow through Google Ads, SEO, social media, web design, conversion strategy, and local SEO."
        },
        "google-ads.html": {
            title: "Google Ads Management | RKJ s. r. o.",
            description:
                "Google Ads management by RKJ s. r. o. for businesses that need clearer targeting, campaign structure, conversion tracking, and budget-focused optimization."
        },
        "seo-optimization.html": {
            title: "SEO Optimization | RKJ s. r. o.",
            description:
                "SEO optimization services by RKJ s. r. o. focused on technical clarity, keyword planning, on-page improvements, content structure, and long-term search visibility."
        },
        "social-media-marketing.html": {
            title: "Social Media Marketing | RKJ s. r. o.",
            description:
                "Social media marketing support by RKJ s. r. o. for businesses that need organized content direction, campaign planning, audience targeting, and performance review."
        },
        "web-design.html": {
            title: "Web Design | RKJ s. r. o.",
            description:
                "Modern web design by RKJ s. r. o. focused on clarity, trust, responsive layouts, conversion-focused sections, and better digital marketing performance."
        },
        "conversion-boost.html": {
            title: "Conversion Boost | RKJ s. r. o.",
            description:
                "Conversion-focused strategy by RKJ s. r. o. for improving landing pages, calls-to-action, forms, messaging, user flow, and tracking direction."
        },
        "local-seo.html": {
            title: "Local SEO | RKJ s. r. o.",
            description:
                "Local SEO support by RKJ s. r. o. for businesses that want clearer local visibility through profile direction, local keyword planning, and location-based content structure."
        },
        "privacy-policy.html": {
            title: "Privacy Policy | RKJ s. r. o.",
            description:
                "Privacy Policy for RKJ s. r. o., including information about contact forms, website data, user rights, and company contact details."
        },
        "cookie-policy.html": {
            title: "Cookie Policy | RKJ s. r. o.",
            description:
                "Cookie Policy for RKJ s. r. o., including essential cookies, preference choices, analytics-style data, and browser cookie controls."
        },
        "terms-of-service.html": {
            title: "Terms of Service | RKJ s. r. o.",
            description:
                "Terms of Service for RKJ s. r. o., including website use, marketing service limitations, user responsibilities, third-party links, and no guaranteed results."
        }
    },

    home: {
        hero: {
            kicker: "MARKETING AGENCY",
            title:
                "Delivering marketing solutions that enable you to work smarter.",
            text:
                "RKJ s. r. o. helps businesses improve visibility, attract qualified leads, and turn digital channels into measurable growth through paid ads, SEO, social media, web design, and conversion-focused strategy.",
            points: [
                "Paid campaign strategy",
                "SEO visibility planning",
                "Conversion-focused websites"
            ],
            stats: [
                {
                    label: "Campaign Flow",
                    value: "Clear"
                },
                {
                    label: "Growth Direction",
                    value: "Focused"
                },
                {
                    label: "Reporting",
                    value: "Structured"
                }
            ]
        },

        intro: {
            eyebrow: "Descriptions",
            title:
                "A focused digital marketing partner for visibility, traffic, and measurable growth.",
            text:
                "RKJ s. r. o. builds digital marketing systems for businesses that need clearer visibility, stronger websites, better campaign structure, and more organized growth planning.",
            featureTitle: "Feature",
            featureItems: [
                "UX/UI Friendly",
                "Focused on Target",
                "Clear Campaign Flow",
                "Conversion Tracking",
                "Search Visibility",
                "Performance Reports"
            ],
            bullets: [
                "Google Ads Strategy",
                "SEO Growth Planning",
                "Social Media Campaigns",
                "Conversion Web Design",
                "Local Search Visibility",
                "Transparent Reporting",
                "Audience & Keyword Research",
                "Monthly Optimization"
            ]
        },

        whyChoose: {
            eyebrow: "Why Choose RKJ",
            title:
                "Strategy, visibility, and growth connected in one digital marketing system.",
            text:
                "RKJ s. r. o. helps brands connect paid traffic, organic search, social content, website experience, and conversion planning into one clearer marketing direction.",
            items: [
                {
                    title: "Goal-first planning",
                    text:
                        "Marketing direction begins with business goals, audience clarity, and realistic campaign priorities.",
                    icon: "target"
                },
                {
                    title: "Clean campaign structure",
                    text:
                        "Campaigns, pages, content, and conversion paths are organized to reduce waste and improve decision-making.",
                    icon: "workflow"
                },
                {
                    title: "Transparent reporting",
                    text:
                        "Reporting focuses on visibility, traffic quality, conversions, and practical next-step improvements.",
                    icon: "bar-chart-3"
                },
                {
                    title: "Continuous optimization",
                    text:
                        "Digital channels are refined over time based on data, market signals, and business priorities.",
                    icon: "refresh-cw"
                }
            ]
        },

        process: {
            eyebrow: "Process",
            title: "Unlock stronger digital growth with 4 focused steps.",
            steps: [
                {
                    number: "01",
                    title: "Free Consultation",
                    text:
                        "Understand your business goals, current channels, audience, and marketing priorities.",
                    icon: "messages-square",
                    label: "Start direction"
                },
                {
                    number: "02",
                    title: "Strategy Planning",
                    text:
                        "Build a focused plan for paid ads, SEO, social content, website performance, or conversion improvement.",
                    icon: "route",
                    label: "Map the system"
                },
                {
                    number: "03",
                    title: "Campaign Launch",
                    text:
                        "Prepare campaign structure, messaging, landing direction, tracking, and channel setup.",
                    icon: "rocket",
                    label: "Go live & launch"
                },
                {
                    number: "04",
                    title: "Optimization & Reporting",
                    text:
                        "Review performance, reduce friction, refine targeting, and improve the next round of decisions.",
                    icon: "line-chart",
                    label: "Improve continuously"
                }
            ]
        },

        advantage: {
            title:
                "Pioneering Digital Growth: Discover the RKJ Marketing Advantage",
            text:
                "From paid ads to SEO, websites, and conversion planning, RKJ s. r. o. helps businesses create a clearer path from online visibility to qualified customer action.",
            buttonLabel: "Discover More",
            buttonHref: "./index.html#services"
        },

        campaignFeatures: {
            eyebrow: "Campaign Features",
            title:
                "Built for campaigns that need clarity, control, and momentum.",
            text:
                "A stronger digital presence is easier to manage when campaigns, content, landing pages, and reporting are connected instead of working separately.",
            items: [
                {
                    title: "Paid traffic direction",
                    icon: "mouse-pointer-click"
                },
                {
                    title: "Search visibility support",
                    icon: "search"
                },
                {
                    title: "Landing page improvements",
                    icon: "layout-template"
                },
                {
                    title: "Audience targeting",
                    icon: "crosshair"
                },
                {
                    title: "Conversion tracking",
                    icon: "activity"
                },
                {
                    title: "Reporting clarity",
                    icon: "clipboard-check"
                }
            ]
        },

        testimonials: {
            eyebrow: "Client Feedback & Reviews",
            title: "What businesses value about organized digital marketing.",
            items: [
                {
                    text: "RKJ helped us organize our digital campaigns and understand which channels were bringing better-quality traffic.",
                    name: "Sarah Thompson",
                    role: "Local Service Business"
                },
                {
                    text: "The team brought structure to our paid ads and landing page direction. Everything became easier to understand and manage.",
                    name: "Daniel Morris",
                    role: "Service Company Owner"
                },
                {
                    text: "We needed clearer SEO planning and better website messaging. RKJ gave us a practical direction without overcomplicating the process.",
                    name: "Emily Carter",
                    role: "Operations Manager"
                },
                {
                    text: "Our social media and website strategy finally started working together instead of feeling like separate tasks.",
                    name: "Michael Evans",
                    role: "Small Business Founder"
                },
                {
                    text: "RKJ helped us see where leads were coming from and where our campaign budget needed more control.",
                    name: "Laura Bennett",
                    role: "Marketing Coordinator"
                },
                {
                    text: "The work felt organized, clear, and focused on business goals rather than random marketing activity.",
                    name: "James Walker",
                    role: "Growth-Focused Business"
                },
                {
                    text: "We appreciated the clear communication, campaign structure, and practical recommendations for improving customer action.",
                    name: "Natalie Brooks",
                    role: "Professional Services"
                }
            ]
        },

        contact: {
            eyebrow: "Contact",
            title: "Ready to build a clearer marketing system?",
            text:
                "Tell RKJ s. r. o. what you want to improve, and the team will help outline a focused digital marketing direction."
        }
    },

    services: [
        {
            id: "google-ads",
            title: "Google Ads",
            shortTitle: "Google Ads",
            href: "./google-ads.html",
            icon: "mouse-pointer-click",
            image: "./assets/images/google-ads-hero.jpg",
            summary:
                "Paid campaign planning, setup, tracking direction, and ongoing optimization for clearer traffic and budget control.",
            bullets: [
                "Campaign setup",
                "Keyword planning",
                "Conversion tracking"
            ],
            hero: {
                kicker: "Google Ads Management",
                heading:
                    "Paid campaign planning, setup, tracking direction.",
                text:
                    "RKJ s. r. o. helps businesses plan, launch, and optimize Google Ads campaigns focused on qualified traffic, budget control, and conversion improvement."
            },
            overview: {
                title: "Google Ads management with structure, clarity, and control.",
                text:
                    "Google Ads can bring fast visibility, but performance depends on targeting, landing page quality, budget structure, and continuous optimization. RKJ focuses on building campaigns that are easier to understand, measure, and improve.",
                metrics: [
                    {
                        value: "01",
                        label: "Targeting direction"
                    },
                    {
                        value: "02",
                        label: "Budget structure"
                    },
                    {
                        value: "03",
                        label: "Conversion clarity"
                    }
                ]
            },
            manageTitle: "What we manage",
            manage: [
                {
                    title: "Search campaigns",
                    icon: "search",
                    text: "Campaigns built around high-intent search behavior."
                },
                {
                    title: "Display campaigns",
                    icon: "panels-top-left",
                    text: "Visual campaign direction for awareness and reach."
                },
                {
                    title: "Remarketing campaigns",
                    icon: "rotate-ccw",
                    text: "Audience re-engagement for visitors who already showed interest."
                },
                {
                    title: "Conversion tracking",
                    icon: "activity",
                    text: "Tracking direction to understand what actions matter."
                },
                {
                    title: "Landing page direction",
                    icon: "layout-template",
                    text: "Page recommendations that support better user action."
                },
                {
                    title: "Keyword and audience planning",
                    icon: "crosshair",
                    text: "Structured keyword and audience planning before launch."
                }
            ],
            matters: {
                title: "Why Google Ads structure matters",
                text:
                    "Google Ads can create fast visibility, but without structure it can waste budget. RKJ focuses on campaign clarity, better targeting, and ongoing optimization.",
                points: [
                    "Clearer campaign priorities",
                    "Better traffic qualification",
                    "More organized performance review"
                ]
            },
            method: [
                {
                    title: "Understand goals",
                    text: "Clarify business objectives, audience needs, and conversion priorities.",
                    image: "./assets/images/google-ads-method-01.jpg",
                    alt: "Google Ads planning dashboard and paid campaign strategy workspace"
                },
                {
                    title: "Build the structure",
                    text: "Plan campaigns, keywords, landing direction, and tracking needs.",
                    image: "./assets/images/google-ads-method-02.jpg",
                    alt: "Paid advertising campaign structure and keyword planning dashboard"
                },
                {
                    title: "Launch carefully",
                    text: "Prepare ads and settings with budget control and campaign clarity."
                },
                {
                    title: "Optimize continuously",
                    text: "Review data, refine targeting, and improve the campaign path."
                }
            ],
            process: [
                "Goal discovery",
                "Keyword and audience research",
                "Campaign setup",
                "Optimization and reporting"
            ],
            benefits: [
                {
                    title: "Faster visibility",
                    icon: "zap",
                    text: "Reach people actively searching for relevant solutions."
                },
                {
                    title: "Budget control",
                    icon: "sliders-horizontal",
                    text: "Structure campaigns around practical spend and priorities."
                },
                {
                    title: "Clearer measurement",
                    icon: "bar-chart-3",
                    text: "Use tracking direction to understand what creates action."
                },
                {
                    title: "Ongoing refinement",
                    icon: "refresh-cw",
                    text: "Improve targeting, messaging, and campaign decisions over time."
                }
            ],
            faq: [
                {
                    question: "How fast can a Google Ads campaign start?",
                    answer:
                        "A campaign can usually be prepared after goals, targeting, landing pages, tracking needs, and budget direction are reviewed."
                },
                {
                    question: "Do you guarantee leads?",
                    answer:
                        "No. Marketing results are not guaranteed. Leads depend on budget, market demand, competition, offer quality, website experience, and campaign strategy."
                },
                {
                    question: "What budget is needed?",
                    answer:
                        "Budget depends on the industry, location, competition, and goals. RKJ can help outline a practical starting direction."
                },
                {
                    question: "Can landing pages be improved too?",
                    answer:
                        "Yes. Landing page direction can be reviewed because page clarity and conversion flow often affect paid campaign performance."
                }
            ],
            cta: {
                title: "Ready to create a clearer Google Ads direction?",
                text:
                    "Share your goals and RKJ will help outline a more organized paid campaign path."
            }
        },

        {
            id: "seo-optimization",
            title: "SEO Optimization",
            shortTitle: "SEO",
            href: "./seo-optimization.html",
            icon: "search",
            image: "./assets/images/seo-hero.jpg",
            summary:
                "Search-focused planning, technical checks, on-page improvements, content structure, and visibility monitoring.",
            bullets: [
                "Keyword mapping",
                "Technical checks",
                "On-page structure"
            ],
            hero: {
                kicker: "SEO Optimization",
                heading:
                    "Search visibility built for long-term digital growth.",
                text:
                    "RKJ s. r. o. helps businesses improve organic visibility through technical SEO, content direction, keyword planning, and search-focused optimization."
            },
            overview: {
                title: "SEO direction for businesses that need stronger discoverability.",
                text:
                    "SEO works best when content, technical structure, page clarity, and search intent are connected. RKJ helps organize these elements into a practical visibility strategy.",
                metrics: [
                    {
                        value: "01",
                        label: "Search intent"
                    },
                    {
                        value: "02",
                        label: "Technical clarity"
                    },
                    {
                        value: "03",
                        label: "Content structure"
                    }
                ]
            },
            manageTitle: "What we manage",
            manage: [
                {
                    title: "Keyword research",
                    icon: "key-round",
                    text: "Keyword opportunities organized around search intent."
                },
                {
                    title: "Technical SEO checks",
                    icon: "settings-2",
                    text: "Review of technical issues that may affect search visibility."
                },
                {
                    title: "On-page optimization",
                    icon: "file-check-2",
                    text: "Page-level improvements for headings, metadata, and structure."
                },
                {
                    title: "Content structure",
                    icon: "layers-3",
                    text: "Content direction that supports readability and topical clarity."
                },
                {
                    title: "Metadata improvement",
                    icon: "tags",
                    text: "Titles and descriptions shaped for search and user clarity."
                },
                {
                    title: "Search performance monitoring",
                    icon: "line-chart",
                    text: "Visibility review to guide ongoing SEO decisions."
                }
            ],
            matters: {
                title: "Why SEO consistency matters",
                text:
                    "SEO helps businesses become more discoverable in search, but it requires consistent structure, content quality, and technical clarity.",
                points: [
                    "Better search visibility foundations",
                    "More organized content planning",
                    "Improved technical and on-page clarity"
                ]
            },
            method: [
                {
                    title: "Audit the current site",
                    text: "Review structure, metadata, content clarity, and technical signals.",
                    image: "./assets/images/seo-optimization-method-01.jpg",
                    alt: "SEO audit dashboard with search visibility and website structure analysis"
                },
                {
                    title: "Map search intent",
                    text: "Connect pages and topics with practical keyword opportunities.",
                    image: "./assets/images/seo-optimization-method-02.jpg",
                    alt: "Keyword mapping and organic search strategy workspace"
                },
                {
                    title: "Improve the pages",
                    text: "Refine headings, content flow, metadata, and internal linking."
                },
                {
                    title: "Monitor and refine",
                    text: "Use performance signals to improve SEO direction over time."
                }
            ],
            process: [
                "SEO audit",
                "Keyword mapping",
                "On-page improvements",
                "Monitoring and refinement"
            ],
            benefits: [
                {
                    title: "Long-term visibility",
                    icon: "telescope",
                    text: "Support organic growth through stronger site and content structure."
                },
                {
                    title: "Search clarity",
                    icon: "search-check",
                    text: "Align pages with the topics and queries customers use."
                },
                {
                    title: "Better page structure",
                    icon: "layout-panel-top",
                    text: "Improve readability, hierarchy, and search-friendly organization."
                },
                {
                    title: "Technical direction",
                    icon: "wrench",
                    text: "Identify technical issues that may reduce performance."
                }
            ],
            faq: [
                {
                    question: "How long does SEO take?",
                    answer:
                        "SEO is usually a long-term process. Timing depends on competition, site quality, content depth, technical condition, and market demand."
                },
                {
                    question: "Can rankings be guaranteed?",
                    answer:
                        "No. Search rankings cannot be guaranteed because they depend on many external factors, including search engine changes and competition."
                },
                {
                    question: "Do you write content?",
                    answer:
                        "RKJ can support content direction and structure. Specific writing scope can be defined in a separate proposal."
                },
                {
                    question: "Is technical SEO included?",
                    answer:
                        "Technical SEO checks can be included as part of the SEO review and optimization direction."
                }
            ],
            cta: {
                title: "Ready to improve search visibility with clearer SEO direction?",
                text:
                    "Tell RKJ what you want to grow, and the team will help outline a practical SEO path."
            }
        },

        {
            id: "social-media-marketing",
            title: "Social Media Marketing",
            shortTitle: "Social Media",
            href: "./social-media-marketing.html",
            icon: "share-2",
            image: "./assets/images/social-media-hero.jpg",
            summary:
                "Social content direction, campaign planning, creative messaging, audience targeting, and performance review.",
            bullets: [
                "Content planning",
                "Creative messaging",
                "Audience targeting"
            ],
            hero: {
                kicker: "Social Media Marketing",
                heading:
                    "Social media direction that helps brands communicate clearly.",
                text:
                    "RKJ s. r. o. helps businesses plan social media content, campaign direction, creative messaging, and audience engagement strategies."
            },
            overview: {
                title: "Social media direction that helps brands communicate clearly.",
                text:
                    "Social media performs better when content, brand message, audience, and campaign goals are aligned. RKJ helps create a more organized and professional social presence.",
                metrics: [
                    {
                        value: "01",
                        label: "Brand message"
                    },
                    {
                        value: "02",
                        label: "Content flow"
                    },
                    {
                        value: "03",
                        label: "Audience fit"
                    }
                ]
            },
            manageTitle: "What we manage",
            manage: [
                {
                    title: "Content planning",
                    icon: "calendar-days",
                    text: "Structured content direction for more consistent communication."
                },
                {
                    title: "Social campaign direction",
                    icon: "megaphone",
                    text: "Campaign concepts shaped around goals and audience attention."
                },
                {
                    title: "Creative messaging",
                    icon: "sparkles",
                    text: "Messaging direction that keeps the brand clear and memorable."
                },
                {
                    title: "Audience targeting",
                    icon: "users",
                    text: "Audience planning for better relevance and engagement."
                },
                {
                    title: "Posting structure",
                    icon: "list-checks",
                    text: "More organized publishing rhythm and content themes."
                },
                {
                    title: "Performance review",
                    icon: "bar-chart-3",
                    text: "Review of engagement and campaign signals for improvement."
                }
            ],
            matters: {
                title: "Why social media planning matters",
                text:
                    "Social media works best when content, audience, and message are aligned. RKJ helps create a more organized and professional social presence.",
                points: [
                    "More consistent brand communication",
                    "Clearer campaign direction",
                    "Better understanding of audience engagement"
                ]
            },
            method: [
                {
                    title: "Review the brand",
                    text: "Understand voice, audience, current channels, and business priorities.",
                    image: "./assets/images/social-media-marketing-method-01.jpg",
                    alt: "Social media brand planning with content calendar and campaign visuals"
                },
                {
                    title: "Plan content themes",
                    text: "Create content direction that supports visibility and trust.",
                    image: "./assets/images/social-media-marketing-method-02.jpg",
                    alt: "Social content strategy dashboard with audience engagement planning"
                },
                {
                    title: "Shape campaign ideas",
                    text: "Connect creative messaging with platform and audience context."
                },
                {
                    title: "Review performance",
                    text: "Use engagement signals to refine content and campaign planning."
                }
            ],
            process: [
                "Brand and audience review",
                "Content direction",
                "Campaign planning",
                "Reporting and improvement"
            ],
            benefits: [
                {
                    title: "Clearer presence",
                    icon: "badge-check",
                    text: "Make social communication feel more consistent and professional."
                },
                {
                    title: "Better content flow",
                    icon: "calendar-check",
                    text: "Plan posts around themes, campaigns, and audience needs."
                },
                {
                    title: "Audience relevance",
                    icon: "users-round",
                    text: "Shape messaging around the people the business wants to reach."
                },
                {
                    title: "Campaign clarity",
                    icon: "megaphone",
                    text: "Turn content into a more organized marketing channel."
                }
            ],
            faq: [
                {
                    question: "Which platforms can be included?",
                    answer:
                        "Platform scope depends on the business and audience. Common options may include Instagram, Facebook, LinkedIn, TikTok, or other relevant channels."
                },
                {
                    question: "Do you create content ideas?",
                    answer:
                        "Yes. RKJ can help with content direction, campaign themes, and creative messaging ideas."
                },
                {
                    question: "Can social ads be included?",
                    answer:
                        "Social advertising direction can be included depending on the campaign scope and platform needs."
                },
                {
                    question: "How often should businesses post?",
                    answer:
                        "Posting frequency depends on audience, platform, content quality, and available resources. RKJ can help define a realistic rhythm."
                }
            ],
            cta: {
                title: "Ready to make social media feel more organized?",
                text:
                    "Share your brand goals and RKJ will help outline a clearer social content direction."
            }
        },

        {
            id: "web-design",
            title: "Web Design",
            shortTitle: "Web Design",
            href: "./web-design.html",
            icon: "monitor",
            image: "./assets/images/web-design-hero.jpg",
            summary:
                "Modern website structure, UI/UX direction, responsive layouts, landing pages, and conversion-focused sections.",
            bullets: [
                "UI/UX direction",
                "Responsive layouts",
                "Landing pages"
            ],
            hero: {
                kicker: "Web Design",
                heading:
                    "Websites designed for clarity, trust, and conversion.",
                text:
                    "RKJ s. r. o. creates modern website experiences that help businesses present their services clearly, build trust, and support better marketing performance."
            },
            overview: {
                title: "Website experiences built around clarity and action.",
                text:
                    "A strong website should explain the business quickly, build trust, and make the next step easy. RKJ approaches web design as part of the full marketing system.",
                metrics: [
                    {
                        value: "01",
                        label: "Clear structure"
                    },
                    {
                        value: "02",
                        label: "Responsive UX"
                    },
                    {
                        value: "03",
                        label: "Conversion flow"
                    }
                ]
            },
            manageTitle: "What we manage",
            manage: [
                {
                    title: "Website structure",
                    icon: "panel-top",
                    text: "Page architecture that helps visitors understand the offer."
                },
                {
                    title: "UI/UX direction",
                    icon: "layout-dashboard",
                    text: "Clean interface direction shaped around usability and trust."
                },
                {
                    title: "Landing page design",
                    icon: "file-input",
                    text: "Focused pages for campaign traffic and lead generation."
                },
                {
                    title: "Responsive layouts",
                    icon: "smartphone",
                    text: "Design direction for desktop, tablet, and mobile experiences."
                },
                {
                    title: "Conversion-focused sections",
                    icon: "mouse-pointer-click",
                    text: "Sections shaped to support inquiries and customer action."
                },
                {
                    title: "Contact form experience",
                    icon: "send",
                    text: "Form flow that feels clear, compact, and easy to use."
                }
            ],
            matters: {
                title: "Why web design affects marketing performance",
                text:
                    "A website is often the center of digital marketing. Better structure, design, readability, and calls-to-action can improve how visitors understand and contact a business.",
                points: [
                    "Stronger first impression",
                    "Clearer service presentation",
                    "Better path from visitor to inquiry"
                ]
            },
            method: [
                {
                    title: "Plan the structure",
                    text: "Define pages, sections, calls-to-action, and user journey.",
                    image: "./assets/images/web-design-method-01.jpg",
                    alt: "Modern website structure planning with UX wireframes and layout design"
                },
                {
                    title: "Shape visual direction",
                    text: "Create a premium interface direction that matches the business.",
                    image: "./assets/images/web-design-method-02.jpg",
                    alt: "Premium web design interface with responsive layout and UI components"
                },
                {
                    title: "Design responsively",
                    text: "Make layouts comfortable across desktop, tablet, and mobile."
                },
                {
                    title: "Refine for action",
                    text: "Improve clarity, trust signals, forms, and conversion flow."
                }
            ],
            process: [
                "Structure planning",
                "Visual direction",
                "Responsive design",
                "Launch support and refinement"
            ],
            benefits: [
                {
                    title: "Better trust",
                    icon: "shield-check",
                    text: "A polished interface can help the business feel more credible."
                },
                {
                    title: "Clearer messaging",
                    icon: "message-square-text",
                    text: "Organized content helps visitors understand the value faster."
                },
                {
                    title: "Mobile comfort",
                    icon: "smartphone",
                    text: "Responsive design keeps the experience usable on smaller screens."
                },
                {
                    title: "Conversion support",
                    icon: "cursor-click",
                    text: "Better calls-to-action and forms support customer action."
                }
            ],
            faq: [
                {
                    question: "Can you redesign an existing website?",
                    answer:
                        "Yes. RKJ can review an existing website and outline a clearer design, structure, and conversion direction."
                },
                {
                    question: "Do you create landing pages?",
                    answer:
                        "Yes. Landing page direction can be created for campaigns, service pages, or conversion-focused offers."
                },
                {
                    question: "Will the site be mobile-friendly?",
                    answer:
                        "Responsive layout is part of the design direction so the site can work across desktop, tablet, and mobile."
                },
                {
                    question: "Can the website support ads and SEO?",
                    answer:
                        "Yes. Website structure can be planned to support paid campaigns, SEO visibility, and conversion-focused user journeys."
                }
            ],
            cta: {
                title: "Ready to design a website that supports your marketing?",
                text:
                    "Tell RKJ what your website needs to improve, and the team will help outline a clearer digital experience."
            }
        },

        {
            id: "conversion-boost",
            title: "Conversion Boost",
            shortTitle: "Conversion",
            href: "./conversion-boost.html",
            icon: "trending-up",
            image: "./assets/images/conversion-boost-hero.jpg",
            summary:
                "Landing page improvements, CTA direction, form optimization, messaging clarity, user flow review, and tracking support.",
            bullets: [
                "CTA improvement",
                "Form optimization",
                "User flow review"
            ],
            hero: {
                kicker: "Conversion Boost",
                heading:
                    "Better digital journeys built to turn traffic into action.",
                text:
                    "RKJ s. r. o. helps businesses improve landing pages, calls-to-action, forms, messaging, and user flow so more visitors can become qualified leads."
            },
            overview: {
                title: "Conversion direction for traffic that needs a clearer next step.",
                text:
                    "Traffic only creates value when visitors understand the offer and know what action to take. RKJ reviews the journey from first impression to inquiry.",
                metrics: [
                    {
                        value: "01",
                        label: "CTA clarity"
                    },
                    {
                        value: "02",
                        label: "Form flow"
                    },
                    {
                        value: "03",
                        label: "Message fit"
                    }
                ]
            },
            manageTitle: "What we manage",
            manage: [
                {
                    title: "CTA improvement",
                    icon: "mouse-pointer-2",
                    text: "Clearer calls-to-action that guide visitors toward the next step."
                },
                {
                    title: "Landing page structure",
                    icon: "layout-template",
                    text: "Page flow improvements that support comprehension and action."
                },
                {
                    title: "Form optimization",
                    icon: "clipboard-list",
                    text: "Form layout and field direction that reduce friction."
                },
                {
                    title: "User flow review",
                    icon: "route",
                    text: "Journey review from traffic source to conversion opportunity."
                },
                {
                    title: "Message clarity",
                    icon: "message-circle-more",
                    text: "Sharper content that explains value with less confusion."
                },
                {
                    title: "Conversion tracking direction",
                    icon: "activity",
                    text: "Tracking direction for key actions and useful performance signals."
                }
            ],
            matters: {
                title: "Why conversion improvements matter",
                text:
                    "Traffic alone is not enough. Conversion-focused improvements help turn visitors into inquiries, calls, and measurable business opportunities.",
                points: [
                    "Reduce friction in the customer journey",
                    "Make calls-to-action easier to understand",
                    "Improve the connection between traffic and inquiries"
                ]
            },
            method: [
                {
                    title: "Review the journey",
                    text: "Look at page flow, message clarity, forms, and calls-to-action.",
                    image: "./assets/images/conversion-boost-method-01.jpg",
                    alt: "Conversion journey review with landing page and customer action analysis"
                },
                {
                    title: "Find friction",
                    text: "Identify points that may confuse visitors or reduce action.",
                    image: "./assets/images/conversion-boost-method-02.jpg",
                    alt: "Conversion analytics dashboard showing user flow and optimization signals"
                },
                {
                    title: "Improve key elements",
                    text: "Refine CTAs, forms, section order, and landing page content."
                },
                {
                    title: "Measure and refine",
                    text: "Use tracking direction and performance signals to improve."
                }
            ],
            process: [
                "Conversion review",
                "Friction analysis",
                "CTA and form improvements",
                "Testing and reporting"
            ],
            benefits: [
                {
                    title: "Clearer action path",
                    icon: "navigation",
                    text: "Help visitors understand what to do next."
                },
                {
                    title: "Less form friction",
                    icon: "form-input",
                    text: "Improve form layout, field clarity, and completion comfort."
                },
                {
                    title: "Better landing pages",
                    icon: "layout-template",
                    text: "Create stronger page flow for campaign and organic traffic."
                },
                {
                    title: "Smarter tracking",
                    icon: "radar",
                    text: "Focus measurement around actions that matter to the business."
                }
            ],
            faq: [
                {
                    question: "What is conversion optimization?",
                    answer:
                        "Conversion optimization is the process of improving pages, forms, messages, and user flows so more visitors take useful actions."
                },
                {
                    question: "Do I need traffic first?",
                    answer:
                        "Traffic helps provide performance signals, but conversion improvements can still be planned before scaling campaigns."
                },
                {
                    question: "Can forms be improved?",
                    answer:
                        "Yes. Forms can often be improved through clearer labels, better field order, reduced friction, and stronger context."
                },
                {
                    question: "Do you guarantee conversion increases?",
                    answer:
                        "No. Conversion results cannot be guaranteed because outcomes depend on traffic quality, offer, market conditions, competition, and implementation."
                }
            ],
            cta: {
                title: "Ready to make more of your existing traffic?",
                text:
                    "Share your page or campaign goals and RKJ will help outline a conversion-focused improvement path."
            }
        },

        {
            id: "local-seo",
            title: "Local SEO Optimization",
            shortTitle: "Local SEO",
            href: "./local-seo.html",
            icon: "map-pin",
            image: "./assets/images/local-seo-hero.jpg",
            summary:
                "Local keyword planning, business profile direction, local content structure, visibility monitoring, and location page support.",
            bullets: [
                "Local visibility",
                "Profile guidance",
                "Location content"
            ],
            hero: {
                kicker: "Local SEO Optimization",
                heading:
                    "Local search visibility built for area-based growth.",
                text:
                    "RKJ s. r. o. helps businesses improve local search visibility through profile direction, local keyword planning, location-based content, and clearer area-focused SEO structure."
            },
            overview: {
                title: "Local SEO support for businesses that depend on area-based visibility.",
                text:
                    "Local visibility depends on search relevance, business information clarity, location signals, profile quality, and content direction. RKJ helps organize these elements into a clearer local search system.",
                metrics: [
                    {
                        value: "01",
                        label: "Local intent"
                    },
                    {
                        value: "02",
                        label: "Profile clarity"
                    },
                    {
                        value: "03",
                        label: "Area content"
                    }
                ]
            },
            manageTitle: "What we manage",
            manage: [
                {
                    title: "Local keyword planning",
                    icon: "map",
                    text: "Keyword direction based on location and service search behavior."
                },
                {
                    title: "Location page direction",
                    icon: "layout-list",
                    text: "Page structure that supports area-based service visibility."
                },
                {
                    title: "Business profile guidance",
                    icon: "badge-info",
                    text: "Direction for clearer profile information and presentation."
                },
                {
                    title: "Local content structure",
                    icon: "file-text",
                    text: "Content planning that supports local relevance."
                },
                {
                    title: "Review visibility strategy",
                    icon: "star",
                    text: "Guidance around review visibility and trust signals."
                },
                {
                    title: "Local search monitoring",
                    icon: "radar",
                    text: "Review of local visibility signals over time."
                }
            ],
            matters: {
                title: "Why local SEO matters",
                text:
                    "Local SEO helps businesses appear more clearly when people search for services in specific areas. A strong local presence can support calls, visits, and inquiries.",
                points: [
                    "Support location-based search visibility",
                    "Improve business information clarity",
                    "Create stronger local trust signals"
                ]
            },
            method: [
                {
                    title: "Review local presence",
                    text: "Understand current visibility, profile clarity, and area relevance.",
                    image: "./assets/images/local-seo-method-01.jpg",
                    alt: "Local SEO visibility planning with map search and business profile signals"
                },
                {
                    title: "Plan local keywords",
                    text: "Map service and location search opportunities.",
                    image: "./assets/images/local-seo-method-02.jpg",
                    alt: "Local keyword planning and area-based search optimization workspace"
                },
                {
                    title: "Improve local structure",
                    text: "Refine profile direction, local pages, and content structure."
                },
                {
                    title: "Monitor and refine",
                    text: "Review signals and improve the local SEO direction over time."
                }
            ],
            process: [
                "Local visibility review",
                "Local keyword research",
                "Profile and content direction",
                "Monitoring and refinement"
            ],
            benefits: [
                {
                    title: "Area visibility",
                    icon: "map-pin",
                    text: "Help the business appear more clearly for location-based searches."
                },
                {
                    title: "Profile clarity",
                    icon: "badge-check",
                    text: "Support a more complete and trustworthy local presence."
                },
                {
                    title: "Local relevance",
                    icon: "locate-fixed",
                    text: "Shape content around services and areas that matter."
                },
                {
                    title: "Inquiry support",
                    icon: "phone-call",
                    text: "Improve visibility paths that may support calls and inquiries."
                }
            ],
            faq: [
                {
                    question: "Can you improve Google Business Profile visibility?",
                    answer:
                        "RKJ can provide profile direction and local SEO structure support, but specific visibility improvements cannot be guaranteed."
                },
                {
                    question: "How long does local SEO take?",
                    answer:
                        "Timing depends on competition, profile quality, location, reviews, website structure, and market demand."
                },
                {
                    question: "Can local rankings be guaranteed?",
                    answer:
                        "No. Local rankings cannot be guaranteed because they depend on search engines, competition, user location, and many external factors."
                },
                {
                    question: "Is local SEO different from regular SEO?",
                    answer:
                        "Yes. Local SEO focuses more on location-based search intent, local profile clarity, local content, and area relevance."
                }
            ],
            cta: {
                title: "Ready to build stronger local search direction?",
                text:
                    "Tell RKJ where your business wants to be found, and the team will help outline a local visibility plan."
            }
        }
    ]
};