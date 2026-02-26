# Fuzzy Rock - Premium Memecoin Website

A complete, production-ready website for the Fuzzy Rock memecoin + brand ecosystem. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Project Overview

Fuzzy Rock is a community-first memecoin inspired by a real-world viral mint crystal candy brand. This website combines premium design, viral energy, and compliance-safe language to create trust and excitement.

### Key Features

- Premium, viral-ready design with smooth animations
- Compliance-first language throughout
- Mobile-first responsive design
- Full transparency and legal disclosures
- Community engagement features
- Real-world brand integration
- SEO optimized with OpenGraph cards

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Font**: Space Grotesk (headings) + Inter (body)

## Project Structure

```
/app
  ├── page.tsx              # Home page with all sections
  ├── token/page.tsx        # Token details and contract info
  ├── community/page.tsx    # Community channels and meme gallery
  ├── transparency/page.tsx # Transparency reports and wallets
  ├── legal/page.tsx        # Legal disclosures and risk warnings
  ├── brand/page.tsx        # Physical product information
  ├── faq/page.tsx          # Comprehensive FAQ
  ├── press/page.tsx        # Press kit and media resources
  └── layout.tsx            # Root layout with navbar and footer

/components
  ├── assets/               # SVG icons and mascot
  ├── layout/               # Navbar, Footer, Legal Modal
  ├── sections/             # Home page sections
  └── ui/                   # shadcn/ui components

/lib
  ├── siteConfig.ts         # Main configuration file
  └── tokenData.ts          # Token metrics and data
```

## Configuration

### Main Configuration File

Edit `/lib/siteConfig.ts` to update:

- Token details (name, ticker, contract address)
- Social media links
- E-commerce links
- Transparency wallet addresses
- Meme mission content
- Hero copy and messaging

### Token Data

Edit `/lib/tokenData.ts` to update:

- Token metrics (can connect to live API)
- Social media stats
- Brand traction data
- Security checklist items

## How to Update Key Information

### 1. Contract Address

In `/lib/siteConfig.ts`:
```typescript
token: {
  contractAddress: "YOUR_ACTUAL_CONTRACT_ADDRESS",
}
```

### 2. Social Media Links

In `/lib/siteConfig.ts`:
```typescript
social: {
  twitter: "https://twitter.com/YOUR_HANDLE",
  telegram: "https://t.me/YOUR_GROUP",
  discord: "https://discord.gg/YOUR_SERVER",
  tiktok: "https://tiktok.com/@YOUR_HANDLE",
  instagram: "https://instagram.com/YOUR_HANDLE"
}
```

### 3. E-commerce Links

In `/lib/siteConfig.ts`:
```typescript
ecommerce: {
  tiktokShop: "YOUR_TIKTOK_SHOP_LINK",
  amazon: "YOUR_AMAZON_STORE_LINK"
}
```

### 4. Transparency Wallet Addresses

In `/lib/siteConfig.ts`:
```typescript
transparency: {
  wallets: {
    treasury: "YOUR_TREASURY_WALLET",
    marketing: "YOUR_MARKETING_WALLET",
    team: "YOUR_TEAM_WALLET"
  }
}
```

### 5. DEX Trading Links

In `/lib/siteConfig.ts`:
```typescript
dex: {
  raydium: "YOUR_RAYDIUM_SWAP_LINK",
  jupiter: "YOUR_JUPITER_SWAP_LINK"
}
```

### 6. Meme Mission Content

In `/lib/siteConfig.ts`:
```typescript
memeOfTheWeek: {
  title: "This Week's Meme Mission",
  mission: "YOUR_CURRENT_MISSION",
  prize: "YOUR_PRIZE_DESCRIPTION",
  deadline: "YOUR_DEADLINE"
}
```

## Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Deployment

This project is optimized for deployment on:

- **Netlify** (configured with netlify.toml)
- **Vercel**
- Any static hosting service

### Environment Variables

No environment variables are required for basic functionality. All configuration is in the code files for easy editing.

## Security Best Practices

### Important Notes

1. **Never commit private keys** - All wallet addresses in config are PUBLIC addresses only
2. **Verify all links** - Always test social media and DEX links before going live
3. **Contract verification** - Ensure your contract address is verified on blockchain explorers
4. **Legal review** - Have a lawyer review all disclosures before launch
5. **SSL/HTTPS** - Always deploy with SSL certificate for security

### Pre-Launch Checklist

- [ ] Update all placeholder links in siteConfig.ts
- [ ] Replace "UPDATE_WITH_ACTUAL_CONTRACT_ADDRESS" with real contract
- [ ] Verify all social media links work
- [ ] Test DEX trading links
- [ ] Update treasury wallet addresses
- [ ] Review and customize all legal disclosures
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit for performance
- [ ] Set up SSL certificate
- [ ] Update OG image for social sharing

## Customization Guide

### Colors

The site uses an icy blue and mint color scheme. To change:

1. Edit Tailwind classes in components
2. Main colors used:
   - `cyan-*` - Primary brand color
   - `blue-*` - Secondary color
   - `green-*` - Trust/security indicators
   - `purple-*` - Accent color
   - `amber-*` - Warnings

### Typography

Current fonts:
- **Headings**: Space Grotesk (bold, black weights)
- **Body**: Inter

To change fonts, edit `/app/layout.tsx`

### Mascot (Captain Fuzz)

The mascot SVG is in `/components/assets/CaptainFuzz.tsx`. Replace with your own illustration while maintaining the component structure.

### Adding New Sections

1. Create component in `/components/sections/`
2. Import and add to `/app/page.tsx`
3. Follow existing pattern for consistency

## Features by Page

### Home Page (/)
- Hero with animated mascot
- Proof of Reality metrics
- Anti-Rug security checklist
- What is Fuzzy Rock explainer
- Community perks
- Flywheel infographic
- Token snapshot
- How to join guide
- IRL product showcase
- Mini FAQ

### Token Page (/token)
- Full token details
- Contract information with copy button
- Live metrics (placeholder for API)
- Security checklist
- DEX trading links with legal modal
- Educational resources

### Community Page (/community)
- All social channel cards
- Community metrics
- Meme Mission of the Week
- Meme gallery (placeholder grid)
- Share widget

### Transparency Page (/transparency)
- Token allocation table
- Public wallet addresses
- Liquidity lock details
- Governance overview
- Security practices
- Anti-scam warnings
- Change log

### Legal Page (/legal)
- Comprehensive risk warnings
- Not financial advice disclosure
- Not an investment clarification
- Volatility warnings
- Brand/token separation
- Jurisdictional limitations
- No liability clause

### Brand Page (/brand)
- Product information
- TikTok phenomenon metrics
- Customer reviews
- Captain Fuzz recommendations
- E-commerce links

### FAQ Page (/faq)
- Organized by category
- Compliance-safe answers
- Community links

### Press Page (/press)
- Brand asset downloads (placeholder)
- Mascot preview and description
- Copy snippets with one-click copying
- Quick facts
- Media inquiry contact

## Compliance & Legal

This website is designed with compliance-first language:

- No promises of profit or returns
- Clear risk disclosures throughout
- Separation of brand and token explained
- Legal modal before external trading links
- Comprehensive legal page
- "Not financial advice" messaging

### Legal Modal

Before users can access external trading links, they must:
1. Read risk warnings
2. Acknowledge understanding
3. Check acceptance box
4. Confirm voluntarily

This is implemented in `/components/layout/LegalModal.tsx`

## Animation Guidelines

Animations use Framer Motion with:

- Smooth scroll reveals (whileInView)
- Floating mascot (y-axis loop)
- Rotating elements (360deg continuous)
- Fade-in on load (opacity + y transform)
- Particle effects (Sparkles component)

Keep animations subtle and performant. Avoid heavy animations that impact page speed.

## Performance Optimization

- Lazy loading with Next.js Image (when adding images)
- Code splitting via Next.js App Router
- Minimal external dependencies
- Optimized animations
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Color contrast meets WCAG AA

## Contributing

When contributing:
1. Follow existing code structure
2. Maintain compliance-safe language
3. Test mobile responsiveness
4. Keep animations smooth
5. Update README if needed

## Support

For issues or questions:
- Check FAQ page
- Review this README
- Contact through official channels

## License

All rights reserved. This is proprietary software for the Fuzzy Rock project.

## Disclaimer

This website and code are provided as-is. The developers are not responsible for how this code is used or modified. All legal compliance is the responsibility of the deployer.

---

**Built for culture. Minted by memes. Crunch the hype.**

Last updated: January 2024
