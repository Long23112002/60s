/**
 * Locket Gold 60s Unlocker Script (Chuẩn 100% theo Payload Reverse-Engineered)
 * GitHub: https://github.com/Long23112002/60s
 */

let obj = {};

try {
  obj = JSON.parse($response.body);
} catch (e) {
  obj = {};
}

const nowMs = Date.now();
const expireDate = "2099-12-18T01:04:17Z";
const purchaseDate = "2024-07-28T01:04:17Z";

const goldData = {
  grace_period_expires_date: null,
  purchase_date: purchaseDate,
  product_identifier: "locket_1600_1y",
  expires_date: expireDate
};

const subData = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: expireDate,
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: purchaseDate,
  store: "app_store"
};

const subscriberAttributes = {
  locket_gold_badge: {
    value: "true",
    updated_at_ms: nowMs
  },
  locket_gold_badge_small: {
    value: "true",
    updated_at_ms: nowMs
  },
  locket_gold_since: {
    value: purchaseDate,
    updated_at_ms: nowMs
  }
};

if (!obj.subscriber) {
  obj.subscriber = {};
}

obj.subscriber.entitlements = {
  Gold: goldData,
  gold: goldData,
  locket_gold: goldData,
  pro: goldData,
  Pro: goldData,
  premium: goldData,
  Premium: goldData
};

obj.subscriber.subscriptions = {
  locket_1600_1y: subData,
  locket_gold_yearly: subData,
  locket_gold: subData
};

obj.subscriber.subscriber_attributes = subscriberAttributes;

$done({ body: JSON.stringify(obj) });
