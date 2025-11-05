

    <script>
        const serviceContent = {
            'web-software-tab': `
                <div class="space-y-4">
                    <p class="text-lg text-gray-700">We build fast, secure, and scalable digital platforms using local and global best practices for the Bangladeshi market.</p>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-desktop text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Web Design & Development:</span> <a href="#pricing" class="service-link ml-1">Custom PHP, WordPress & E-Commerce sites.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-mobile-alt text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">App & Software Solutions:</span> <a href="#contact" class="service-link ml-1">Native Mobile Apps (Android/iOS) and custom web apps (POS, ERP).</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-server text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Infrastructure:</span> <a href="#contact" class="service-link ml-1">Reliable Domain Registration & Secure Hosting Services.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-cubes text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Business Efficiency:</span> <a href="#contact" class="service-link ml-1">Micro-credit Management, Accounting, and Courier Software.</a>
                        </li>
                    </ul>
                </div>
            `,
            'marketing-creative-tab': `
                <div class="space-y-4">
                    <p class="text-lg text-gray-700">Drive targeted traffic, maximize conversions, and build powerful brand recognition across all digital channels.</p>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-search-plus text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">SEO & Traffic:</span> <a href="#contact" class="service-link ml-1">Local, E-Commerce, and Professional SEO strategies for ranking.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fab fa-facebook-square text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Social Marketing:</span> <a href="#contact" class="service-link ml-1">Full Facebook Marketing, Promotion, Ads, and Verification services.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-paint-brush text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Creative Design:</span> <a href="#contact" class="service-link ml-1">UI/UX, Logo Design, Graphic Design, and Ad Campaigns visuals.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-bullhorn text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Branding & PR:</span> <a href="#contact" class="service-link ml-1">Corporate Identity, Personal Branding, and Wikipedia Page Creation.</a>
                        </li>
                    </ul>
                </div>
            `,
            'ai-automation-tab': `
                <div class="space-y-4">
                    <p class="text-lg text-gray-700">Integrate next-generation AI and automation tools (n8n, Gemini) to reduce operational costs and accelerate growth.</p>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-robot text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">AI Sales Automation:</span> <a href="#contact" class="service-link ml-1">AI-powered lead scraping, personalized outreach, and automated phone calls.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-cogs text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Workflow Integration:</span> <a href="#contact" class="service-link ml-1">Automate hiring, support, email, calendar, and internal data processing with n8n.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-video text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">AI Content Production:</span> <a href="#contact" class="service-link ml-1">Generate social media posts, CGI video ads, and detailed reports automatically.</a>
                        </li>
                        <li class="flex items-start space-x-3 text-gray-700">
                            <i class="fas fa-flask text-indigo-600 mt-1 flex-shrink-0"></i>
                            <span class="font-medium">Research & Analysis:</span> <a href="#contact" class="service-link ml-1">AI tools for competitor ad spying, YouTube comment analysis, and market research.</a>
                        </li>
                    </ul>
                </div>
            `,
            'f-commerce-services': {
                introTitle: 'F-Commerce Service Details',
                intro: 'Our specialized F-Commerce services focus on leveraging the most popular platforms (Facebook, Instagram, TikTok) in Bangladesh to extend your reach and drive immediate sales.',
                services: [
                    { name: 'Facebook Page Setup & Design', link: '#contact' },
                    { name: 'Facebook Ad Management & Boost Campaigns', link: '#contact' },
                    { name: 'Brands / Products Advertisement', link: '#contact' },
                    { name: 'Graphic Design for Engaging Posts', link: '#contact' },
                    { name: 'Video Editing for Social Media', link: '#contact' },
                    { name: 'Social Media Marketing (SMM)', link: '#contact' }
                ]
            },
            'f-commerce-guide': {
                title: 'E-Commerce Business Launch Guide | Launching F-Commerce in 4 Steps',
                desc: `
                    <div class="p-4 bg-red-50 border border-red-300 rounded-lg mb-6">
                        <h3 class="text-xl font-extrabold text-red-800 mb-2">সহজেই নিজে করুন !</h3>
                        <p class="text-red-700 mb-4">অতিরিক্ত খরচ ছাড়াই এই সহজ ধাপগুলো অনুসরণ করে আপনি আপনার সাধারণ এফ-কমার্স (F-Commerce) ব্যবসাটি চালু করতে পারেন। সাধারণ প্রাথমিক কাজগুলির জন্য আর বেশি টাকা খরচ করতে হবে না।</p>
                        <p class="text-red-700 font-semibold">যদি আপনি একটি পেশাদার ও ব্যবহারের জন্য প্রস্তুত (Ready-to-Launch) সেটআপ চান, তাহলে নিচে আমাদের <a href="https://aarry.org/bd/fb/page-setup.html" class="text-indigo-600 hover:text-indigo-800 underline"> প্রফেশনাল ফেসবুক সার্ভিস প্ল্যান </a> দেখুন—আমরা সবকিছু প্রস্তুত করে দেবো, যাতে আপনি শুধু বিক্রির দিকে মনোযোগ দিতে পারেন।</p>
                        <a href="https://aarry.org/bd/fb/page-setup.html" class="mt-4 inline-block cta-button bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow-md">
                            প্রফেশনাল ফেসবুক পেইজ
                        </a>
                          <a href="https://aarry.org/bd/fb/facebook-ads-boost-Service.html" class="mt-4 inline-block cta-button bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow-md">
                            ফেসবুক অ্যাডস
                        </a>
                          <a href="https://aarry.org/bd/fb/page-setup.html" class="mt-4 inline-block cta-button bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow-md">
                            ফেসবুক পেজ ভেরিফিকেশন
                        </a>
                    </div>
                `,
                showVideoUrl: 'https://www.youtube.com/embed/Hu3T-ZDROx8', // Specific embed URL
                funnel: [
                    {
                        stage: "Stage 1: Awareness & Presence",
                        icon: 'fas fa-map-marker-alt',
                        steps: [
                            "<b>Platform Setup:</b> Create and optimize your Facebook Business Page and Instagram Profile.",
                            "<b>Ad Strategy:</b> Start with low-cost <b>Reach and Engagement Ads</b> on Facebook and Instagram for local targeting.",
                            "<b>Visual Identity:</b> Use high-quality <b>Logo and Banner Design</b> (Creative Services) to ensure professionalism from day one.",
                            "<b>Viral Media:</b> Start testing short videos on TikTok/YouTube Shorts to capture attention."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Learn more about Facebook Shop setup on our blog.</a>'
                    },
                    {
                        stage: "Stage 2: Engagement & Trust",
                        icon: 'fas fa-heart',
                        steps: [
                            "<b>Content Calendar:</b> Post engaging content regularly (2-3 times a day) including customer reviews and product tips.",
                            "<b>Interaction:</b> Actively respond to all comments, messages, and inquiries. Use professional handling for <b>Facebook Page Maintenance</b>.",
                            "<b>Verification (Optional):</b> Plan for <b>Facebook Page Verify</b> if eligible to build credibility."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Read the guide on boosting audience trust and engagement.</a>'
                    },
                    {
                        stage: "Stage 3: Conversion & Sales",
                        icon: 'fas fa-dollar-sign',
                        steps: [
                            "<b>Conversion Ads:</b> Shift budget to Conversion Ads (Boost Your Business) targeting users who previously interacted or viewed products.",
                            "<b>Clear CTA:</b> Ensure every post and ad has a clear <b>Call-to-Action</b> (e.g., 'Message to order', 'WhatsApp Us').",
                            "<b>Order Management:</b> Use Messenger or WhatsApp (<b>SMS Marketing</b>) for fast order processing."
                        ],
                        learn: 'Need help setting up high-converting ad campaigns? <a href="#contact" class="service-link text-indigo-600 hover:text-indigo-800">Contact our Digital Marketing team.</a>'
                    },
                    {
                        stage: "Stage 4: Scale & Grow",
                        icon: 'fas fa-chart-line',
                        steps: [
                            "<b>Data Analysis:</b> Analyze which products and ad sets performed best. Increase investment in what works.",
                            "<b>Retargeting:</b> Run targeted <b>Retargeting Ads</b> for users who added items to the cart but did not purchase.",
                            "<b>E-commerce Upgrade:</b> When sales volume increases, migrate to an <b>E-Commerce Website</b> (Stage 2) for automated inventory and professional scalability."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Watch the full YouTube video: Easy Ways to Start an E-Commerce Business.</a>'
                    }
                ]
            },
            'ecommerce-upgrade': {
                introTitle: 'E-Commerce Upgrade Service Details',
                intro: 'To upgrade your existing F-Commerce or dropshipping model, you need a stable, high-performance website foundation for long-term scalability and trust.',
                services: [
                    { name: 'E-Commerce Website (WordPress / Custom PHP)', link: '#pricing' },
                    { name: 'Secure Domain and Hosting Service', link: '#contact' },
                    { name: 'UI / UX Design Audit and Optimization', link: '#contact' },
                    { name: 'Aamarpay / ShurjoPay Payment Gateway Integration', link: '#partners' },
                    { name: 'Courier & Logistics Software Integration', link: '#contact' },
                    { name: 'Technical SEO for E-Commerce', link: '#contact' }
                ],
                funnel: [
                    {
                        stage: "Phase 1: Foundation & Planning",
                        icon: 'fas fa-laptop-code',
                        steps: [
                            "<b>Requirements Assessment:</b> Determine custom features, inventory size, and integration needs (POS/ERP).",
                            "<b>Tech Stack:</b> Select the right technology (WordPress, PHP, Laravel) and choose scalable <b>Domain & Hosting Service</b>.",
                            "<b>Site Map & Wireframe:</b> Plan user flow for intuitive navigation and high performance."
                        ]
                    },
                    {
                        stage: "Phase 2: Development & Design",
                        icon: 'fas fa-paint-brush',
                        steps: [
                            "<b>Custom Development:</b> Build E-commerce framework (product pages, cart, checkout) and integrate security features.",
                            "<b>UI/UX Design:</b> Implement a modern, mobile-first design focusing on conversion and clear product display.",
                            "<b>Content Migration:</b> Safely transfer existing product data and customer information from your previous platform."
                        ]
                    },
                    {
                        stage: "Phase 3: Integration & Launch Prep",
                        icon: 'fas fa-wrench',
                        steps: [
                            "<b>Payment Gateways:</b> Integrate local payment solutions like <b>Aamarpay, ShurjoPay, or PortWallet</b>.",
                            "<b>Logistics:</b> Set up rates and tracking with major local couriers; consider our <b>Courier Service Software</b> for seamless order fulfillment.",
                            "<b>Testing:</b> Conduct rigorous QA, speed tests, and device compatibility checks before launch."
                        ]
                    },
                    {
                        stage: "Phase 4: Optimization & Growth",
                        icon: 'fas fa-chart-line',
                        steps: [
                            "<b>SEO:</b> Implement <b>Technical SEO for E-Commerce</b> (Product Schema, Site Speed) to capture organic traffic.",
                            "<b>Maintenance:</b> Enroll in a <b>Website Maintenance</b> package for regular updates and security monitoring.",
                            "<b>Marketing:</b> Launch targeted Google Ads (PPC) and retargeting campaigns to maximize sales."
                        ]
                    }
                ]
            },
            'ecommerce-upgrade-guide': {
                title: 'E-Commerce Upgrade Roadmap: Scaling Beyond F-Commerce',
                desc: `
                    <div class="p-4 bg-red-50 border border-red-300 rounded-lg mb-6">
                        <h3 class="text-xl font-extrabold text-red-800 mb-2">Ready to Own Your Platform?</h3>
                        <p class="text-red-700 mb-4">Moving to an E-commerce website gives you full control, better data, and true scalability. Use this guide to plan your transition.</p>
                        <p class="text-red-700 font-semibold">Need professionals to handle the migration without downtime? Check out our <a href="#core-pillars" class="text-indigo-600 hover:text-indigo-800 underline">Web & Software Pillar</a> for seamless development.</p>
                    </div>
                `,
                showVideoUrl: 'https://www.youtube.com/embed/Hu3T-ZDROx8', 
                funnel: [
                    {
                        stage: "Phase 1: Requirements Analysis",
                        icon: 'fas fa-search',
                        steps: [
                            "<b>Define Scale:</b> Estimate current and future order volume to choose the right hosting plan.",
                            "<b>Feature Set:</b> List essential features (e.g., custom filters, loyalty program) beyond basic platform capabilities.",
                            "<b>Data Audit:</b> Prepare all product descriptions, images, and pricing for migration."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Compare WordPress vs. Custom E-commerce platforms in our Blog.</a>'
                    },
                    {
                        stage: "Phase 2: Development & UI/UX",
                        icon: 'fas fa-code',
                        steps: [
                            "<b>Secure Foundation:</b> Procure a reliable **Domain & Hosting Service**.",
                            "<b>Conversion-Focused Design:</b> Implement a clear, simple checkout process to minimize cart abandonment.",
                            "<b>Mobile-First:</b> Ensure the design is flawlessly responsive on all mobile devices and browsers."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Our UI/UX team can review your mockups for conversion potential.</a>'
                    },
                    {
                        stage: "Phase 3: Integrations & Payments",
                        icon: 'fas fa-handshake',
                        steps: [
                            "<b>Local Payments:</b> Integrate primary payment gateways like **Aamarpay** or **ShurjoPay**.",
                            "<b>Logistics:</b> Set up rates and tracking with major local couriers; consider our **Courier Service Software**.",
                            "<b>Inventory Sync:</b> Ensure your POS or Accounting system synchronizes inventory with the E-commerce platform."
                        ],
                        learn: 'Need guidance on payment gateway setup? <a href="#contact" class="service-link text-indigo-600 hover:text-indigo-800">Contact our Integration Support team.</a>'
                    },
                    {
                        stage: "Phase 4: Launch & Optimization",
                        icon: 'fas fa-rocket',
                        steps: [
                            "<b>Soft Launch:</b> Run a controlled launch with a small audience to detect and fix bugs.",
                            "<b>Monitoring:</b> Set up Google Analytics and GTM for detailed performance tracking.",
                            "<b>SEO:</b> Begin running specialized **Technical SEO** and content campaigns to capture organic traffic."
                        ],
                        learn: 'Want expert management post-launch? <a href="#contact" class="service-link text-indigo-600 hover:text-indigo-800">Explore our Website Maintenance packages.</a>'
                    }
                ]
            },
            'growth-branding-services': {
                introTitle: 'Growth & Branding Service Details',
                intro: 'Achieve market leadership and rapid revenue growth by boosting brand authority, expanding digital reach, and converting existing traffic.',
                services: [
                    { name: 'Professional SEO Service', link: '#contact' },
                    { name: 'Google Ads (PPC) Management', link: '#contact' },
                    { name: 'Corporate & Personal Branding Strategy', link: '#contact' },
                    { name: 'Video Editing & Production', link: '#contact' },
                    { name: 'Wikipedia Page Creation', link: '#contact' },
                    { name: 'UI / UX Design Audit', link: '#contact' }
                ],
                funnel: [] // Funnel data defined below
            },
            'growth-branding-guide': {
                title: 'Growth Strategy Roadmap: Scaling an Established Business',
                desc: `
                    <div class="p-4 bg-red-50 border border-red-300 rounded-lg mb-6">
                        <h3 class="text-xl font-extrabold text-red-800 mb-2">Free Growth Blueprint Included!</h3>
                        <p class="text-red-700 mb-4">Follow this strategic roadmap to guide your in-house teams. These are the exact steps professionals use to scale revenue.</p>
                        <p class="text-red-700 font-semibold">Ready to hand off execution to experts? Let our team handle the entire process from audit to reporting. <a href="#contact" class="text-indigo-600 hover:text-indigo-800 underline">Get a custom Growth Plan.</a></p>
                    </div>
                `,
                showVideoUrl: 'https://www.youtube.com/embed/Hu3T-ZDROx8', 
                funnel: [
                    {
                        stage: "Phase 1: Technical & SEO Audit",
                        icon: 'fas fa-desktop',
                        steps: [
                            "Conduct a full technical site audit (Core Web Vitals, schema, crawl errors).",
                            "Identify 5-10 high-value competitor keywords to target.",
                            "Optimize existing landing pages for maximum quality score and speed."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Learn how to run a full SEO audit in our Blog.</a>'
                    },
                    {
                        stage: "Phase 2: Conversion Optimization (CRO)",
                        icon: 'fas fa-mouse-pointer',
                        steps: [
                            "Implement heatmaps and session recordings to understand user behavior.",
                            "Design and deploy A/B tests on key funnels (checkout, product pages).",
                            "Reduce friction points in the customer journey to boost conversion rate."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Read our CRO best practices guide.</a>'
                    },
                    {
                        stage: "Phase 3: Brand Authority & PR",
                        icon: 'fas fa-medal',
                        steps: [
                            "Develop a targeted PR strategy to secure high-authority backlinks and features.",
                            "Begin the process for <b>Wikipedia Page Creation</b> (if applicable and verifiable).",
                            "Formalize your brand messaging and tone across all channels (Social, Ads, Website)."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">Contact our Branding team for a Brand Authority score.</a>'
                    },
                    {
                        stage: "Phase 4: Scalable Campaign Management",
                        icon: 'fas fa-chart-line',
                        steps: [
                            "Re-segment paid media audiences based on high-LTV data.",
                            "Integrate <b>AI Automation</b> to manage ad budgets and optimize bid strategies in real-time.",
                            "Focus on full-funnel reporting to calculate actual CPA and LTV across all platforms."
                        ],
                        learn: 'Need help with advanced Google Ads? <a href="#contact" class="service-link text-indigo-600 hover:text-indigo-800">Request a consultation.</a>'
                    }
                ]
            },
            'corporate-automation-services': {
                introTitle: 'Corporate & Automation Service Details',
                intro: 'We provide end-to-end custom software development, ERP integration, and AI workflow solutions designed to automate manual tasks and create enterprise-level efficiency.',
                services: [
                    { name: 'Custom Software Development (Web/App)', link: '#contact' },
                    { name: 'AI Automation (n8n, Vapi Integration)', link: '#contact' },
                    { name: 'Micro-credit / POS / Accounting Software', link: '#contact' },
                    { name: 'Automated Hiring Process Management System', link: '#contact' },
                    { name: 'Telegram AI Assistant for Email and Calendar', link: '#contact' },
                    { name: 'Dealership Management Software', link: '#contact' }
                ],
                funnel: [] // Funnel data defined below
            },
            'corporate-automation-guide': {
                title: 'AI Automation Strategy: Achieving Enterprise Efficiency',
                desc: `
                    <div class="p-4 bg-red-50 border border-red-300 rounded-lg mb-6">
                        <h3 class="text-xl font-extrabold text-red-800 mb-2">Automate Your Business Processes!</h3>
                        <p class="text-red-700 mb-4">This strategic roadmap outlines the steps to integrate AI and automation into your corporate structure to maximize efficiency and reduce labor costs.</p>
                        <p class="text-red-700 font-semibold">Need expert implementation? Our team specializes in custom n8n and AI integration. <a href="#contact" class="text-indigo-600 hover:text-indigo-800 underline">Request a consultation to automate your specific workflow.</a></p>
                    </div>
                `,
                showVideoUrl: 'https://www.youtube.com/embed/Hu3T-ZDROx8', // Generic video for guide
                funnel: [
                    {
                        stage: "Step 1: Identify Automation Targets",
                        icon: 'fas fa-bullseye',
                        steps: [
                            "Pinpoint repetitive tasks that consume significant HR, Sales, or Support time.",
                            "Focus on processes involving data transfer between systems (e.g., Google Sheets to ERP).",
                            "Determine ROI potential: How much money or time will be saved by automating the task?"
                        ],
                        learn: '<a href="#contact" class="service-link text-indigo-600 hover:text-indigo-800">Discuss automation potential with our consultants.</a>'
                    },
                    {
                        stage: "Step 2: Custom Workflow Development (n8n)",
                        icon: 'fas fa-cogs',
                        steps: [
                            "Design the workflow blueprint on n8n (or equivalent) to connect systems like Telegram, Gmail, and Google Docs.",
                            "Develop <b>AI Assistants</b> (like for Email Management or Customer Support) using OpenAI integration.",
                            "Build custom nodes or APIs to handle complex, proprietary business logic."
                        ],
                        learn: '<a href="#" class="service-link text-indigo-600 hover:text-indigo-800">See our full n8n portfolio in AI Automation.</a>'
                    },
                    {
                        stage: "Step 3: Testing & Security",
                        icon: 'fas fa-shield-alt',
                        steps: [
                            "Run extensive end-to-end testing across the new automated workflow.",
                            "Implement strict security protocols (e.g., API key management) to protect sensitive data.",
                            "Ensure the system scales correctly under peak operational load."
                        ],
                        learn: '<a href="#contact" class="service-link text-indigo-600 hover:text-indigo-800">Schedule a security and compliance review.</a>'
                    },
                    {
                        stage: "Step 4: Monitoring & Handover",
                        icon: 'fas fa-tasks',
                        steps: [
                            "Implement a centralized dashboard to monitor the health and performance of all automated workflows.",
                            "Provide comprehensive documentation and training for your internal IT/Ops team.",
                            "Establish a quarterly review cycle to identify new opportunities for AI-driven optimization."
                        ],
                        learn: '<a href="#contact" class="service-link text-indigo-600 hover:text-indigo-800">Request post-deployment support details.</a>'
                    }
                ]
            }
        };

        let currentActiveStage = null;

        /**
         * Renders the tab content for the Core Pillars section.
         * @param {string} tabKey The key for the serviceContent (e.g., 'web-software-tab').
         */
        function renderTabContent(tabKey) {
            const tabContent = document.getElementById('tab-content');
            if (tabContent && serviceContent[tabKey]) {
                tabContent.innerHTML = serviceContent[tabKey];
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active-tab');
                    btn.style.borderBottomColor = 'transparent';
                });
                const activeBtn = document.querySelector(`.tab-button[data-tab="${tabKey}"]`);
                if (activeBtn) {
                    activeBtn.classList.add('active-tab');
                    activeBtn.style.borderBottomColor = '#4f46e5'; /* indigo-600 */
                }
            }
        };

        /**
         * Renders the dynamic details panel for customer stages.
         * @param {string} stageKey The key for the customer stage data (e.g., 'f-commerce-guide').
         * @param {string} type 'services' or 'guide'.
         */
        function renderDetails(stageKey, type = 'services') {
            const container = document.getElementById('dynamic-details-container');
            const contentDiv = document.getElementById('details-card-content');
            const data = serviceContent[stageKey];
            
            if (!data || !container || !contentDiv) return;

            // Step 1: Check if panel should close (if clicking the currently active button)
            const isClosing = container.classList.contains('open') && currentActiveStage === stageKey;
            
            if (isClosing) {
                closeDetailsPanel();
                return;
            }
            
            // Step 2: Generate Content
            let htmlContent = '';
            
            if (type === 'services') {
                htmlContent = `
                    <button onclick="closeDetailsPanel()" class="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"><i class="fas fa-times text-2xl"></i></button>
                    <h2 class="text-gray-900 font-bold mb-4 text-3xl">${data.introTitle || 'Recommended Services'}</h2>
                    <p class="text-gray-600 mb-8">${data.intro}</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                `;
                data.services.forEach(service => {
                    htmlContent += `
                        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white transition">
                            <a href="${service.link}" class="text-indigo-600 font-semibold service-link block">
                                <i class="fas fa-angle-right mr-2 text-sm"></i> ${service.name}
                            </a>
                        </div>
                    `;
                });
                htmlContent += `</div>`;
            } else if (type === 'guide') {
                // Guide content includes the new promotional header
                const promoHeader = (data.desc) ? data.desc : '';

                htmlContent = `
                    <button onclick="closeDetailsPanel()" class="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"><i class="fas fa-times text-2xl"></i></button>
                    ${promoHeader}
                    <h2 class="text-gray-900 font-bold mb-4 text-3xl">${data.title}</h2>
                    
                    ${data.showVideoUrl ? `
                        <div class="mb-8">
                            <div class="video-responsive">
                                <iframe src="${data.showVideoUrl}?autoplay=0&rel=0&modestbranding=1" title="${data.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p class="text-sm text-gray-500 mt-2 text-center">Watch the video and understand the strategy visually.</p>
                        </div>
                    ` : ''}

                    <h3 class="text-2xl font-bold text-indigo-600 mb-6">4-Phase Funnel Strategy:</h3>
                    <div class="space-y-8">
                `;
                
                data.funnel.forEach((step, index) => {
                    htmlContent += `
                        <div class="p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xl mr-4 font-bold">${index + 1}</div>
                                <h4 class="text-xl font-extrabold text-gray-900">${step.stage}</h4>
                            </div>
                            <div class="pl-14 pt-2 border-l-2 border-indigo-200 space-y-3">
                                ${step.steps.map(s => `<p class="text-gray-700 flex items-start"><i class="fas fa-angle-right text-indigo-500 mr-2 mt-1 flex-shrink-0"></i> <span>${s}</span></p>`).join('')}
                            </div>
                            <p class="mt-4 text-sm text-gray-500">${step.learn}</p>
                        </div>
                    `;
                });

                htmlContent += `</div>`;
            }

            contentDiv.innerHTML = htmlContent;
            
            // Step 3: Calculate Height and Reveal
            // Use a slight delay to ensure browser calculates the scrollHeight correctly after content injection
            setTimeout(() => {
                const contentHeight = contentDiv.scrollHeight;
                container.style.maxHeight = contentHeight + 100 + 'px'; // +100px for padding and margin buffer
                container.classList.add('open');
                currentActiveStage = stageKey;
                
                // Scroll to the content for better UX
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        };

        /**
         * Closes the dynamic details panel.
         */
        function closeDetailsPanel() {
            const container = document.getElementById('dynamic-details-container');
            if (container) {
                container.classList.remove('open');
                container.style.maxHeight = '0';
                currentActiveStage = null;
            }
        };
        
        /**
         * Initializes the default content and handles auto-open.
         */
        function renderDefaultContent() {
            // 1. Initialize Default Tab Content
            const defaultTabButton = document.querySelector('.tab-button[data-tab="web-software-tab"]');
            if (defaultTabButton) {
                renderTabContent('web-software-tab');
            }

            // 2. Auto-open F-Commerce guide on page load
            const container = document.getElementById('dynamic-details-container');
            if (container) {
                renderDetails('f-commerce-guide', 'guide');
            }
        };

        document.addEventListener('DOMContentLoaded', function() {
            const body = document.body;
            const mobileNav = document.getElementById('mobile-nav');
            const openNavButton = document.getElementById('mobile-menu-open-button');
            const closeNavButton = document.getElementById('mobile-menu-close-button');
            const navLinks = document.querySelectorAll('.nav-link');
            const accordionButtons = document.querySelectorAll('.accordion-button, .mobile-accordion-button');
            const detailButtons = document.querySelectorAll('.details-button');
            const tabButtons = document.querySelectorAll('.tab-button');
            
            // Initial rendering of the core content
            renderDefaultContent();

            // Tab Click Handler
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabKey = button.getAttribute('data-tab');
                    renderTabContent(tabKey);
                });
            });

            // --- Dynamic Customer Card Handler ---
            detailButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const stage = button.getAttribute('data-stage');
                    // Determine if the content is the guide or the services list
                    const type = button.textContent.includes('Guideline') ? 'guide' : 'services';
                    renderDetails(stage, type);
                });
            });

            // --- Mobile Menu Handler ---
            const openMobileNav = () => { mobileNav.classList.add('open'); body.classList.add('overflow-hidden'); };
            const closeMobileNav = () => { mobileNav.classList.remove('open'); body.classList.remove('overflow-hidden'); };

            openNavButton.addEventListener('click', openMobileNav);
            closeNavButton.addEventListener('click', closeMobileNav);
            navLinks.forEach(link => link.addEventListener('click', closeMobileNav));

            // --- Accordion Handler (Mobile Menu) ---
            accordionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const content = button.nextElementSibling;
                    const icon = button.querySelector('i');
                    const isOpening = content.classList.toggle('open');
                    
                    if (icon) { icon.classList.toggle('rotate-180'); }

                    if (isOpening) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = '0';
                    }
                });
            });

            // --- Scroll Animation Handler ---
            const hiddenSections = document.querySelectorAll('.hidden-section');
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('open');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            hiddenSections.forEach(section => { sectionObserver.observe(section); });

            // --- Dynamic Year in Footer ---
            document.getElementById('year').textContent = new Date().getFullYear();
        });
    </script>
    <script>
        // --- Main Accordion (Level 1) Logic ---
        const mainAccordionButtons = document.querySelectorAll('.main-accordion-button');
        const allMainNavItems = document.querySelectorAll('.main-nav-item');
        const allSubContentDisplays = document.querySelectorAll('.sub-content-display');
        const initialMessage = document.getElementById('initial-message');

        mainAccordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const parentItem = button.closest('.main-nav-item');
                const nestedContent = button.nextElementSibling;
                
                // 1. Handle Accordion Toggle (Open/Close)
                const isCurrentlyOpen = nestedContent.classList.contains('open');

                // Close all main accordions and remove active styling
                allMainNavItems.forEach(item => {
                    const content = item.querySelector('.nested-content');
                    const btn = item.querySelector('.main-accordion-button');
                    
                    content.classList.remove('open');
                    btn.classList.remove('active');
                    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-xl');
                    btn.classList.add('bg-gray-100', 'text-gray-800', 'shadow-md');
                    item.querySelector('i').classList.remove('rotate-180');
                    item.classList.remove('shadow-xl');
                    item.classList.add('shadow-md');
                });
                
                // If it was not open, open it and apply active styles
                if (!isCurrentlyOpen) {
                    nestedContent.classList.add('open');
                    button.classList.add('active');
                    button.classList.remove('bg-gray-100', 'text-gray-800');
                    button.classList.add('bg-indigo-600', 'text-white');
                    parentItem.classList.remove('shadow-md');
                    parentItem.classList.add('shadow-xl');
                    button.querySelector('i').classList.add('rotate-180');
                    
                    // 2. Auto-select the FIRST sub-tab and display its content
                    const firstSubButton = nestedContent.querySelector('.sub-nav-button');
                    if (firstSubButton) {
                        subNavSwitchingLogic(firstSubButton);
                    }
                }
            });
        });


        // --- Sub Navigation (Level 2) Logic ---
        function subNavSwitchingLogic(button) {
            
            // 1. Deactivate all Level 2 sub-nav buttons across ALL main containers
            document.querySelectorAll('.sub-nav-button').forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-50', 'text-indigo-700');
                btn.classList.add('text-gray-700', 'hover:bg-indigo-100');
            });

            // 2. Hide all detailed content sections on the right
            allSubContentDisplays.forEach(content => {
                content.classList.remove('active');
            });
            initialMessage.classList.remove('active');

            // 3. Activate the clicked Level 2 button
            button.classList.add('active', 'bg-indigo-50', 'text-indigo-700');
            button.classList.remove('text-gray-700', 'hover:bg-indigo-100');

            // 4. Show the corresponding detailed content on the right
            const contentId = button.getAttribute('data-content-id');
            const contentToShow = document.getElementById(contentId);
            if (contentToShow) {
                contentToShow.classList.add('active');

                // 5. Close all accordions in the newly activated content area
                contentToShow.querySelectorAll('.accordion-content.open').forEach(openContent => {
                    openContent.classList.remove('open');
                    openContent.previousElementSibling.querySelector('i').classList.remove('rotate-180');
                });
            }
        }

        // Listener for the Level 2 sub-nav buttons
        document.querySelectorAll('.sub-nav-button').forEach(button => {
            button.addEventListener('click', () => subNavSwitchingLogic(button));
        });


        // --- Service Accordion Logic (Inner Dropdowns) ---
        const accordionButtons = document.querySelectorAll('.accordion-button');
        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('i');

                if (content.classList.contains('open')) {
                    content.classList.remove('open');
                    icon.classList.remove('rotate-180');
                } else {
                    // Close other open accordions in the current sub-tab content area (so only one is open at a time)
                    const parentContent = button.closest('.sub-content-display');
                    if (parentContent) {
                        parentContent.querySelectorAll('.accordion-content.open').forEach(openContent => {
                            openContent.classList.remove('open');
                            openContent.previousElementSibling.querySelector('i').classList.remove('rotate-180');
                        });
                    }
                    
                    content.classList.add('open');
                    icon.classList.add('rotate-180');
                }
            });
        });


        // --- Initial Load Setup ---
        window.addEventListener('load', () => {
            // Find the initially active L1 button (Web & Software) and auto-select its first L2 item.
            const initialMainButton = document.querySelector('#nav-web-software .main-accordion-button');
            const initialSubButton = document.querySelector('#nav-web-software .sub-nav-button:first-child');
            
            if (initialMainButton && initialSubButton) {
                // Manually apply active styles to the initial L1 button
                initialMainButton.classList.add('active');
                initialMainButton.classList.remove('bg-gray-100', 'text-gray-800');
                initialMainButton.classList.add('bg-indigo-600', 'text-white');
                initialMainButton.querySelector('i').classList.add('rotate-180');

                // Manually open the nested content
                initialMainButton.nextElementSibling.classList.add('open');

                // Auto-select the first sub-button and display its content
                subNavSwitchingLogic(initialSubButton);
            } else {
                // If anything fails, just show the initial message
                initialMessage.classList.add('active');
            }
        });
    </script>
