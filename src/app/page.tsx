import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DonationSection from '@/components/DonationSection';
import ShortsShowcase from '@/components/ShortsShowcase';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

/**
 * Main Landing Page - The Office Vibes
 * 
 * Purpose: Convert YouTube Shorts viewers into supporters
 * Strategy: Minimize bounce rate, maximize donations
 * 
 * Structure:
 * 1. Hero - Hook immediately, CTA above fold ✅ (PHASE 1)
 * 2. Donation Section - Multiple options, zero friction ✅ (PHASE 2)
 * 3. Shorts Showcase - Social proof, keep engaged ✅ (PHASE 3)
 * 4. Email Signup - Capture before bounce ✅ (PHASE 4)
 * 5. Footer - Fun copy, social links ✅ (PHASE 4)
 */
export default function Home() {
  return (
    <>
      {/* Sticky header that appears after scrolling */}
      <Header />
      
      <main className="min-h-screen">
        {/* PHASE 1: Hero section - most critical for first impression ✅ */}
        <Hero />

      {/* PHASE 2: Donation section - THE MONEY MAKER ✅ */}
      <DonationSection />
      
      {/* PHASE 3: Shorts showcase - Social proof & engagement ✅ */}
      <ShortsShowcase />
      
      {/* PHASE 4: Email signup - Capture emails before bounce ✅ */}
      <EmailSignup />
      
      {/* PHASE 4: Footer - Social links & fun copy ✅ */}
      <Footer />
    </main>
    </>
  );
}
