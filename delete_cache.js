/**
 * Script xóa ETag và Cache Header cho RevenueCat (Shadowrocket / Surge / Loon)
 * Đảm bảo app Locket luôn nhận được 200 OK thay vì 304 Not Modified
 */

const headers = $request.headers;

delete headers['x-revenuecat-etag'];
delete headers['X-RevenueCat-ETag'];
delete headers['if-none-match'];
delete headers['If-None-Match'];
delete headers['if-modified-since'];
delete headers['If-Modified-Since'];

$done({ headers });
