export const initGA = (GA_MEASUREMENT_ID) => {
  if (window && !window.gtagInitialized) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    window.gtagInitialized = true;
  }
};
