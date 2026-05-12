// Central location for external URLs.
//
// The iOS URL omits the regional segment (e.g. /ae, /us) so visitors are
// routed to their local App Store automatically.
// The Android URL omits the &pcampaignid tracking parameter from the share
// link — that's only relevant for share-source attribution.

export const IOS_APP_URL =
  'https://apps.apple.com/app/contractly-ai/id6762138259';
export const ANDROID_APP_URL =
  'https://play.google.com/store/apps/details?id=com.contractly.dev';
