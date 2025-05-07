// Base64 placeholder images for headphones
document.addEventListener('DOMContentLoaded', function() {
    // Create and inject hero headphone image with better clarity
    const heroHeadphoneImg = document.getElementById('hero-headphones');
    if (heroHeadphoneImg) {
        // Create a more detailed gold and black headphone image for hero section
        const heroImageSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="500" height="400">
                <defs>
                    <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#e6c656" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                        <feOffset dx="3" dy="3" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="250" cy="200" r="180" fill="#121212" stroke="url(#gold-gradient)" stroke-width="5" filter="url(#shadow)" />
                <path d="M140,150 C140,100 180,60 250,60 C320,60 360,100 360,150 V320 C360,340 345,350 330,350 H300 C290,350 280,340 280,330 V270 C280,260 290,250 300,250 H330 C340,250 350,245 350,230 V170 C350,120 310,70 250,70 C190,70 150,120 150,170 V230 C150,245 160,250 170,250 H200 C210,250 220,260 220,270 V330 C220,340 210,350 200,350 H170 C155,350 140,340 140,320 V150 Z" fill="#121212" stroke="url(#gold-gradient)" stroke-width="4" />
                <circle cx="250" cy="150" r="80" fill="#1a1a1a" stroke="url(#gold-gradient)" stroke-width="3" />
                <text x="250" y="160" font-family="Arial" font-size="22" text-anchor="middle" fill="url(#gold-gradient)">SONIC VIBE</text>
            </svg>
        `;
        const heroImgBase64 = 'data:image/svg+xml;base64,' + btoa(heroImageSVG);
        heroHeadphoneImg.src = heroImgBase64;
        heroHeadphoneImg.style.maxWidth = '100%';
        heroHeadphoneImg.style.height = 'auto';
    }

    // Product images with enhanced visibility
    document.querySelectorAll('.product-card img').forEach((img, index) => {
        let productSVG = '';
        
        if (index === 0) { // Sonic Vibe Pro
            productSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="250" height="250">
                <defs>
                    <linearGradient id="gold-gradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f0dfa0" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                    <filter id="glow-${index}" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feComposite in="blur" in2="SourceGraphic" operator="over" />
                    </filter>
                </defs>
                <rect width="250" height="250" fill="#1a1a1a" rx="15" ry="15" />
                <circle cx="150" cy="100" r="60" fill="#121212" stroke="url(#gold-gradient-${index})" stroke-width="4" />
                <path d="M100,130 C100,100 120,80 150,80 C180,80 200,100 200,130 V240 C200,250 190,260 180,260 H160 C150,260 140,250 140,240 V220 C140,210 150,200 160,200 H180 C190,200 195,190 195,180 V140 C195,120 175,90 150,90 C125,90 105,120 105,140 V180 C105,190 110,200 120,200 H140 C150,200 160,210 160,220 V240 C160,250 150,260 140,260 H120 C110,260 100,250 100,240 V130 Z" fill="url(#gold-gradient-${index})" filter="url(#glow-${index})" />
                <text x="150" y="215" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#121212">PRO</text>
                <text x="150" y="280" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="white">SONIC VIBE PRO</text>
            </svg>
            `;
        } else if (index === 1) { // Sonic Vibe Sport
            productSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="250" height="250">
                <defs>
                    <linearGradient id="gold-gradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f0dfa0" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                    <filter id="glow-${index}" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                        <feComposite in="blur" in2="SourceGraphic" operator="over" />
                    </filter>
                </defs>
                <rect width="250" height="250" fill="#1a1a1a" rx="15" ry="15" />
                <circle cx="150" cy="150" r="100" fill="#121212" stroke="url(#gold-gradient-${index})" stroke-width="2" />
                <path d="M110,100 C110,90 130,80 150,80 C170,80 190,90 190,100 V180 C190,190 180,200 170,200 H160 C150,200 140,190 140,180 V150 C140,140 150,130 160,130 H170 C180,130 185,125 185,120 V110 C185,100 170,90 150,90 C130,90 115,100 115,110 V120 C115,125 120,130 130,130 H140 C150,130 160,140 160,150 V180 C160,190 150,200 140,200 H130 C120,200 110,190 110,180 V100 Z" fill="url(#gold-gradient-${index})" filter="url(#glow-${index})" />
                <path d="M90,160 C90,150 100,140 110,140 H120 C130,140 135,150 135,160 V180 C135,190 130,200 120,200 H110 C100,200 90,190 90,180 V160 Z" fill="url(#gold-gradient-${index})" filter="url(#glow-${index})" />
                <path d="M210,160 C210,150 200,140 190,140 H180 C170,140 165,150 165,160 V180 C165,190 170,200 180,200 H190 C200,200 210,190 210,180 V160 Z" fill="url(#gold-gradient-${index})" filter="url(#glow-${index})" />
                <text x="150" y="280" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="white">SONIC VIBE SPORT</text>
            </svg>
            `;
        } else if (index === 2) { // Sonic Vibe Studio
            productSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="250" height="250">
                <defs>
                    <linearGradient id="gold-gradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f0dfa0" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                    <filter id="glow-${index}" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                        <feComposite in="blur" in2="SourceGraphic" operator="over" />
                    </filter>
                </defs>
                <rect width="250" height="250" fill="#1a1a1a" rx="15" ry="15" />
                <circle cx="150" cy="150" r="110" fill="#121212" stroke="url(#gold-gradient-${index})" stroke-width="3" />
                <circle cx="150" cy="150" r="95" fill="none" stroke="url(#gold-gradient-${index})" stroke-width="2" stroke-dasharray="5,5" />
                <path d="M110,80 C110,70 130,60 150,60 C170,60 190,70 190,80 V220 C190,230 170,240 150,240 C130,240 110,230 110,220 V80 Z" fill="#121212" stroke="url(#gold-gradient-${index})" stroke-width="4" />
                <path d="M120,90 C120,80 135,70 150,70 C165,70 180,80 180,90 V210 C180,220 165,230 150,230 C135,230 120,220 120,210 V90 Z" fill="url(#gold-gradient-${index})" opacity="0.7" filter="url(#glow-${index})" />
                <circle cx="150" cy="150" r="35" fill="#121212" stroke="url(#gold-gradient-${index})" stroke-width="3" />
                <text x="150" y="280" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="white">SONIC VIBE STUDIO</text>
                <text x="150" y="155" text-anchor="middle" font-family="Arial" font-size="15" font-weight="bold" fill="url(#gold-gradient-${index})">STUDIO</text>
            </svg>
            `;
        } else if (index === 3) { // Sonic Vibe Mini
            productSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="250" height="250">
                <defs>
                    <linearGradient id="gold-gradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f0dfa0" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                    <filter id="glow-${index}" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feComposite in="blur" in2="SourceGraphic" operator="over" />
                    </filter>
                </defs>
                <rect width="250" height="250" fill="#1a1a1a" rx="15" ry="15" />
                <circle cx="150" cy="150" r="75" fill="#121212" stroke="url(#gold-gradient-${index})" stroke-width="3" />
                <path d="M130,100 C130,90 140,80 150,80 C160,80 170,90 170,100 V200 C170,210 160,220 150,220 C140,220 130,210 130,200 V100 Z" fill="#121212" stroke="url(#gold-gradient-${index})" stroke-width="2" />
                <path d="M140,110 C140,105 145,100 150,100 C155,100 160,105 160,110 V190 C160,195 155,200 150,200 C145,200 140,195 140,190 V110 Z" fill="url(#gold-gradient-${index})" filter="url(#glow-${index})" />
                <path d="M80,140 H60 C55,140 50,145 50,150 V170 C50,175 55,180 60,180 H80 C85,180 90,175 90,170 V150 C90,145 85,140 80,140 Z" fill="url(#gold-gradient-${index})" filter="url(#glow-${index})" />
                <path d="M240,140 H220 C215,140 210,145 210,150 V170 C210,175 215,180 220,180 H240 C245,180 250,175 250,170 V150 C250,145 245,140 240,140 Z" fill="url(#gold-gradient-${index})" filter="url(#glow-${index})" />
                <text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="white">MINI</text>
                <text x="150" y="250" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="white">SONIC VIBE MINI</text>
            </svg>
            `;
        }
        
        // Set the base64 image
        if (productSVG) {
            const imgBase64 = 'data:image/svg+xml;base64,' + btoa(productSVG);
            img.src = imgBase64;
        }
        
        // Set styles to ensure images display properly
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.borderRadius = '8px';
    });

    // Testimonial user images with better visibility
    document.querySelectorAll('.testimonial-author img').forEach((img, index) => {
        let userSVG = '';
        
        // Generate different user avatars for each testimonial
        if (index === 0) {
            userSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                <defs>
                    <linearGradient id="gold-gradient-user-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f0dfa0" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="#2a2a2a" />
                <circle cx="50" cy="35" r="18" fill="#444" />
                <path d="M50,60 C36,60 25,70 25,85 L75,85 C75,70 64,60 50,60 Z" fill="#444" />
                <path d="M50,85 L75,85 C75,70 64,60 50,60" fill="url(#gold-gradient-user-${index})" opacity="0.8" />
                <circle cx="50" cy="35" r="8" fill="url(#gold-gradient-user-${index})" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gold-gradient-user-${index})" stroke-width="3" />
            </svg>
            `;
        } else if (index === 1) {
            userSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                <defs>
                    <linearGradient id="gold-gradient-user-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f0dfa0" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="#2a2a2a" />
                <circle cx="50" cy="30" r="15" fill="#444" />
                <path d="M30,90 C30,70 40,60 50,60 C60,60 70,70 70,90" fill="#444" />
                <rect x="25" y="50" width="50" height="6" fill="url(#gold-gradient-user-${index})" />
                <path d="M40,30 C40,25 45,20 50,20 C55,20 60,25 60,30" fill="none" stroke="url(#gold-gradient-user-${index})" stroke-width="3" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gold-gradient-user-${index})" stroke-width="3" />
            </svg>
            `;
        } else {
            userSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                <defs>
                    <linearGradient id="gold-gradient-user-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f0dfa0" />
                        <stop offset="50%" stop-color="#d4af37" />
                        <stop offset="100%" stop-color="#aa8c2c" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="#2a2a2a" />
                <circle cx="50" cy="35" r="17" fill="#444" />
                <path d="M28,90 C28,65 38,55 50,55 C62,55 72,65 72,90" fill="#444" />
                <path d="M25,95 L75,95" stroke="url(#gold-gradient-user-${index})" stroke-width="4" />
                <path d="M38,30 A12,12 0 0 1 62,30" fill="none" stroke="url(#gold-gradient-user-${index})" stroke-width="3" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gold-gradient-user-${index})" stroke-width="3" />
            </svg>
            `;
        }
        
        // Set the base64 image
        if (userSVG) {
            const imgBase64 = 'data:image/svg+xml;base64,' + btoa(userSVG);
            img.src = imgBase64;
        }
        
        // Set styles to ensure images display properly
        img.style.width = '60px';
        img.style.height = '60px';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        img.style.border = '2px solid #d4af37';
    });

    // Background image for contact section
    const contactBackground = document.createElement('img');
    contactBackground.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjMwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q0YWYzNyIgc3RvcC1vcGFjaXR5PSIuMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEyMTIxMiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiMxMjEyMTIiLz48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0idXJsKCNhKSIvPjxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMzAiIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PGNpcmNsZSBjeD0iNTAwIiBjeT0iNDAwIiByPSI1MCIgZmlsbD0iI2Q0YWYzNyIgZmlsbC1vcGFjaXR5PSIuMDMiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIyMDAiIHI9IjQwIiBmaWxsPSIjZDRhZjM3IiBmaWxsLW9wYWNpdHk9Ii4wNCIvPjxjaXJjbGUgY3g9IjQyMCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iLjAzIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iNDUwIiByPSI2MCIgZmlsbD0iI2Q0YWYzNyIgZmlsbC1vcGFjaXR5PSIuMDIiLz48L3N2Zz4=';
    contactBackground.style.display = 'none';
    document.body.appendChild(contactBackground);
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.style.backgroundImage = `url('${contactBackground.src}')`;
        contactSection.style.backgroundSize = 'cover';
        contactSection.style.backgroundPosition = 'center';
    }
});
