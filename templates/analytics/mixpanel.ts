import Mixpanel from 'mixpanel';
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN!);
export function track(event: string, props?: Record<string, any>) {
  mixpanel.track(event, props);
}