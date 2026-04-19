'use client';

import { useEffect } from 'react';

export function TrackUTMParams() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Wait for gtag to be available (Google Analytics might take a moment to load)
    const checkGtagInterval = setInterval(() => {
      const gtag = (window as any).gtag;

      if (!gtag) return; // gtag not ready yet, will retry

      // gtag is ready, clear the interval
      clearInterval(checkGtagInterval);

      // Extract UTM parameters from URL
      const params = new URLSearchParams(window.location.search);

      const utmSource = params.get('utm_source') || 'direct';
      const utmMedium = params.get('utm_medium') || 'direct';
      const utmCampaign = params.get('utm_campaign') || 'organic';
      const utmContent = params.get('utm_content') || 'none';
      const utmTerm = params.get('utm_term') || 'none';

      /**
       * CRITICAL: Use gtag('config') to set UTM parameters as session-level properties
       * This makes them available in ALL events and ALL reports, not just custom events
       */
      gtag('config', 'G-PZ21G7CZZB', {
        'utm_source': utmSource,
        'utm_medium': utmMedium,
        'utm_campaign': utmCampaign,
        'utm_content': utmContent,
        'utm_term': utmTerm,
      });

      /**
       * ALSO fire a specific "utm_tracked" event for explicit tracking
       * This creates a trackable event you can see in GA4 Events report
       */
      gtag('event', 'utm_tracked', {
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
      });

      // Log to console for debugging
      console.log('✓ UTM Parameters successfully tracked:', {
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
      });
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(checkGtagInterval);
  }, []);

  // This component doesn't render anything
  return null;
}