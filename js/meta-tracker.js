// js/meta-tracker.js
// Meta Pixel & Conversions API (CAPI) Tracker

const META_PIXEL_ID = '1375060937891260';
const META_ACCESS_TOKEN = 'EAAUFNPFwJ70BSNea50mNqly7l26w3bu6DMOP4XZBKCH8PrlevahS5X2RXHeEToq8SzZBk8Oia1yFlJJ25piZBl1YiW8EKduPCEVeCfeDXgHZCBGZBrElA6nZAmuK2Uz4D3dWaycQhXVLKSo8taaGv3z4MMZAfAZBZC4RDHUheszqWq59WJE2tzPhg4yZBIRJQZCZCgZDZD';

/**
 * Utility to get cookie value by name
 */
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

/**
 * Generates a unique event ID for deduplication between Pixel & CAPI
 */
function generateEventId() {
  return 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
}

/**
 * Tracks a Lead event via Meta Pixel (browser) AND Meta Conversions API (CAPI)
 */
function trackMetaLead(eventId) {
  const eventIdToUse = eventId || generateEventId();

  // 1. Browser Meta Pixel Event
  if (typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Lead', {}, { eventID: eventIdToUse });
    } catch (err) {
      console.warn('Meta Pixel tracking error:', err);
    }
  }

  // 2. Server-side / Direct Meta Conversions API (CAPI) Event
  const fbp = getCookie('_fbp');
  const fbc = getCookie('_fbc');
  
  const userData = {
    client_user_agent: navigator.userAgent
  };
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const capiPayload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventIdToUse,
        event_source_url: window.location.href,
        action_source: 'website',
        user_data: userData
      }
    ]
  };

  // Asynchronously send to Meta Graph API
  fetch(`https://graph.facebook.net/v19.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(capiPayload)
  }).then(response => response.json())
    .then(data => console.log('Meta CAPI Lead Event Sent:', data))
    .catch(err => console.warn('Meta CAPI Error:', err));

  return eventIdToUse;
}

window.trackMetaLead = trackMetaLead;
