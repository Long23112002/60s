/**
 * Locket Gold 60s Unlocker Script
 * GitHub: https://github.com/Long23112002/60s
 * 
 * Các tính năng mở khóa:
 * 1. Quay video trực tiếp 60 giây (kèm micro thu âm).
 * 2. Đăng video từ thư viện (Camera Roll) thời lượng đến 60 giây có âm thanh.
 * 3. Mở khóa toàn bộ các style Caption (viết dài hơn, đa dạng font chữ, màu sắc).
 * 4. Huy hiệu Locket Gold Profile vĩnh viễn.
 */

let obj = {};

try {
  obj = JSON.parse($response.body);
} catch (e) {
  obj = {};
}

if (!obj.subscriber) {
  obj.subscriber = { subscriptions: {}, entitlements: {} };
}
if (!obj.subscriber.subscriptions) {
  obj.subscriber.subscriptions = {};
}
if (!obj.subscriber.entitlements) {
  obj.subscriber.entitlements = {};
}

const expireDate = "2099-12-31T23:59:59Z";
const purchaseDate = "2023-01-01T00:00:00Z";

const goldData = {
  grace_period_expires_date: null,
  purchase_date: purchaseDate,
  product_identifier: "locket_1600_1y",
  expires_date: expireDate
};

const subData = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    amount: 399000.0,
    currency: "VND"
  },
  expires_date: expireDate,
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: purchaseDate,
  purchase_date: purchaseDate,
  store: "app_store",
  store_transaction_id: "2000001108724193"
};

// Cấp đầy đủ các entitlement mà các bản Locket App Store kiểm tra
obj.subscriber.subscriptions["locket_1600_1y"] = subData;
obj.subscriber.subscriptions["locket_gold_yearly"] = subData;
obj.subscriber.subscriptions["locket_gold"] = subData;

obj.subscriber.entitlements["Gold"] = goldData;
obj.subscriber.entitlements["gold"] = goldData;
obj.subscriber.entitlements["pro"] = goldData;
obj.subscriber.entitlements["Pro"] = goldData;
obj.subscriber.entitlements["locket_gold"] = goldData;
obj.subscriber.entitlements["premium"] = goldData;
obj.subscriber.entitlements["Premium"] = goldData;

$done({ body: JSON.stringify(obj) });
