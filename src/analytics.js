export const initGA = () => {
  if (import.meta.env.VITE_GA_ID) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", import.meta.env.VITE_GA_ID);
  }
};
