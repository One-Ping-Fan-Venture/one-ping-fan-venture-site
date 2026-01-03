type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
  }
}

const getPlausibleClient = () => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window.plausible;
};

export const trackEvent = (eventName: string, props?: EventProps) => {
  const plausibleClient = getPlausibleClient();

  if (plausibleClient) {
    plausibleClient(eventName, props ? { props } : undefined);
  } else if (process.env.NODE_ENV !== 'production') {
    // Development visibility only; nothing is persisted or transmitted.
    // eslint-disable-next-line no-console
    console.info('[analytics]', eventName, props);
  }
};
