import { PostHog } from 'posthog-node';
const client = new PostHog(process.env.POSTHOG_API_KEY!, { host: 'https://app.posthog.com' });
export function trackEvent(userId: string, event: string, properties?: Record<string, any>) {
  client.capture({ distinctId: userId, event, properties });
}