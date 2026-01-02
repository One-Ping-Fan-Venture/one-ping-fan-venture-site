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
    // Provide lightweight visibility during development without persisting or transmitting data.
    // eslint-disable-next-line no-console
    console.info('[analytics]', eventName, props);
  }
};

