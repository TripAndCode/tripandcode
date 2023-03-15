// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
declare const window: any;

export const pageview = (url: any) => {
    window.gtag("config", process.env.NEXT_PUBLIC_GA4_TRACKING_ID, {
        page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: { action: any, category: any, label: any, value: any }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
