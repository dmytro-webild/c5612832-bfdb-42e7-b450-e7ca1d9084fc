"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, ChefHat, Flame, Gift, Mail, Instagram, Facebook, Twitter, Heart, Briefcase } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="large"
      background="none"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Experience", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Reserve", id: "contact" },
            { name: "Events", id: "pricing" },
            { name: "Reviews", id: "testimonial" }
          ]}
          brandName="Tattu"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="A Modern Chinese Dining Experience"
          description="Where culinary artistry, immersive design, and unforgettable moments meet in the heart of London."
          tag="⭐⭐⭐⭐⭐ 4.6 Rating"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ewmk2f"
          imageAlt="Tattu London luxury dining interior with cherry blossoms"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              name: "Guest Review",              handle: "Google Reviews",              testimonial: "Exceptional dining experience — the atmosphere is absolutely cinematic.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2tuy65&_wi=1"
            },
            {
              name: "Diner",              handle: "TripAdvisor",              testimonial: "Food, cocktails, service and atmosphere were all first class.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=heki7c&_wi=1"
            },
            {
              name: "London Guest",              handle: "Review Platform",              testimonial: "One of the most beautiful restaurants in London. Pure magic.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nmr9xk&_wi=1"
            }
          ]}
          buttons={[
            { text: "Reserve a Table", href: "contact" },
            { text: "View Menu", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="The Experience"
          tagIcon={Sparkles}
          title="More Than Dining — It's Theatre"
          description="Step into a world inspired by traditional Chinese culture and modern culinary innovation."
          subdescription="Beneath cascading cherry blossoms and dramatic lighting, every dish is crafted as a visual and sensory experience. Our chefs blend premium ingredients with bold flavours to create dishes that are as stunning as they are unforgettable."
          icon={ChefHat}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rmpzhz"
          imageAlt="Signature culinary plating and presentation"
          mediaAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <ProductCardThree
          title="Signature Creations"
          description="Explore our carefully curated selection of modern Chinese dishes that showcase culinary excellence."
          tag="Menu Highlights"
          tagIcon={Flame}
          products={[
            {
              id: "1",              name: "Dragon Roll",              price: "£24.00",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rt1a4j",              imageAlt: "Dragon Roll with fresh seafood and house sauce"
            },
            {
              id: "2",              name: "Wagyu Dumplings",              price: "£28.00",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0flsvb",              imageAlt: "Luxury wagyu beef dumplings with black truffle"
            },
            {
              id: "3",              name: "Mushroom Bao Bun",              price: "£14.00",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sdjjwp",              imageAlt: "Steamed bao with rich umami mushrooms"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Explore Full Menu", href: "#" }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by London's Elite"
          description="Featured and recommended by leading publications and platforms."
          tag="Recognition"
          textboxLayout="default"
          useInvertedBackground={true}
          names={[
            "Michelin Guide",            "TripAdvisor",            "Google Reviews",            "Tatler",            "Evening Standard",            "OpenTable",            "Resy"
          ]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=mokivc",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2k2kyz",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hz75cu",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xfoex6",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3yv5x4",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vssyrd",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oqocen"
          ]}
          showCard={true}
          speed={30}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2tuy65&_wi=2"
            },
            {
              id: "2",              name: "Michael Chen",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=heki7c&_wi=2"
            },
            {
              id: "3",              name: "Emma Rodriguez",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nmr9xk&_wi=2"
            },
            {
              id: "4",              name: "James Wilson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9c5ffo"
            },
            {
              id: "5",              name: "Sophie Laurent",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2tuy65&_wi=3"
            },
            {
              id: "6",              name: "David Park",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=heki7c&_wi=3"
            }
          ]}
          cardTitle="Over 8,000 guests have experienced Tattu's unforgettable culinary theatre"
          cardTag="See what they say"
          cardAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Celebrate Something Special"
          description="Host your next milestone at Tattu. Perfect for birthdays, anniversaries, corporate dinners, and private celebrations."
          tag="Private Events"
          tagIcon={Gift}
          plans={[
            {
              id: "birthday",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "From £45pp",              subtitle: "Intimate Birthday Celebration",              buttons: [
                { text: "Enquire Now", href: "#" }
              ],
              features: [
                "Exclusive private dining room",                "Customised multi-course menu",                "Dedicated sommelier service",                "Complimentary sparkling welcome drink",                "Personalised ambiance and lighting"
              ]
            },
            {
              id: "anniversary",              badge: "Romantic",              badgeIcon: Heart,
              price: "From £65pp",              subtitle: "Romantic Anniversary Dinner",              buttons: [
                { text: "Reserve", href: "#" }
              ],
              features: [
                "Premium private dining experience",                "Curated luxury tasting menu",                "Wine pairing selection",                "Rose petals and ambient lighting",                "VIP treatment and concierge"
              ]
            },
            {
              id: "corporate",              badge: "Executive",              badgeIcon: Briefcase,
              price: "From £55pp",              subtitle: "Corporate Private Dining",              buttons: [
                { text: "Get Details", href: "#" }
              ],
              features: [
                "Elegant private event space",                "Flexible menu options",                "Audio-visual capabilities",                "Professional service team",                "Customisable duration options"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated"
          description="Subscribe to Tattu's newsletter for exclusive event announcements, seasonal menu previews, and special dining invitations."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=a7vijd"
          imageAlt="Tattu's exclusive private dining space"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Tattu"
          copyrightText="© 2025 Tattu London. All rights reserved."
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/tattu", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com/tattu", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com/tattu", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
