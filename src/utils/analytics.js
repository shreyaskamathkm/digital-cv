import ReactGA from 'react-ga4';

const initializeAnalytics = () => {
    const trackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    if (trackingId) {
        ReactGA.initialize(trackingId);
        console.log('Google Analytics initialized');
    } else {
        console.warn('Google Analytics tracking ID not found');
    }
};

const trackPageView = (path) => {
    ReactGA.send({ hitType: 'pageview', page: path });
};

const trackEvent = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};

export { initializeAnalytics, trackPageView, trackEvent };
