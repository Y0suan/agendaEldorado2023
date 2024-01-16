
export const GA_MEASUREMENT_ID = 'G-H0EHX8H1FP'; // Reemplaza con tu ID de seguimiento

export const initGA = () => {
  if (!window.GA_INITIALIZED) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag; // Asigna la función gtag a window.gtag
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    window.GA_INITIALIZED = true;
  }
};

export const logPageView = () => {
  if (window.GA_INITIALIZED) {
    window.gtag('config', GA_MEASUREMENT_ID, { 'page_path': window.location.pathname });
  }
};
