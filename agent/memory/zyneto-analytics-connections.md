---
name: zyneto-analytics-connections
description: "How to reach Zyneto's GA4, Search Console and Tag Manager: auth, property IDs, endpoints and the API gotchas"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 43b06a1f-d5ce-450b-86ff-03b16805d5eb
  modified: 2026-08-25T00:00:00.000Z
---

Two paths exist. Check which is live before assuming either.

**Composio MCP** (accounts aliased "zyneto") is how this was originally connected, read-only, and it dropped from the session on 2026-08-24 with no tool available to reconnect it — a different failure from the Google account connections being removed, which is reversible; the connector itself going away is not something any tool here can fix. If it is back, it is the simpler path for one-off pulls.

**Direct OAuth, added 2026-08-24, scopes widened 2026-08-25, READ AND WRITE.** A GCP OAuth client ("testclaude", project 326416931385) was authorized directly, scoped to full `analytics`, `analytics.edit`, `analytics.readonly`, `analytics.manage.users.readonly`, full `webmasters` (not `.readonly` — this can submit sitemaps, add or remove properties), and `tagmanager` edit plus publish on container 176251464 (`GTM-MKCDM7CL`). Credentials in `.zyneto-env` at the workspace root (`GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, `GA4_PROPERTY_ID`, `GSC_SITE_URL`, `GTM_ACCOUNT_ID`, `GTM_CONTAINER_ID`); the refresh token is in `.google-oauth-token.json`, same directory, mode 600, neither inside any git repo. Mint an access token with `agent/tools/google_auth.py` (`from google_auth import access_token`), then call the REST APIs directly: `analyticsdata.googleapis.com` for GA4 reports, `analyticsadmin.googleapis.com` for GA4 configuration, `www.googleapis.com/webmasters/v3` for Search Console, `searchconsole.googleapis.com/v1` for URL Inspection, `tagmanager.googleapis.com/tagmanager/v2` for GTM. Re-run `google_oauth_authorize.py` then `google_oauth_exchange.py` if the token is ever lost or revoked; the OAuth client is in Testing publish status, so a new Google account needs adding under Test users in the Cloud Console before it can consent, or Google returns `Error 403: access_denied` before showing a consent screen at all.

**Two separate things gate the GA4 Admin API, and they fail with near-identical 403s.** First, scope: plain `analytics` is the legacy Universal Analytics scope and authorizes the Data API only — the Admin API rejects it with `ACCESS_TOKEN_SCOPE_INSUFFICIENT` and accepts only `analytics.readonly` or `analytics.edit`. Second, API enablement: `analyticsadmin.googleapis.com` had never been turned on in project 326416931385, which returns a *different* 403 saying the API "has not been used in project ... before or it is disabled". Both are now resolved, but read the 403 body before re-running the OAuth flow — re-consenting does nothing for the second one. `analyticsdata.googleapis.com` was already enabled, which is why reporting worked while configuration reads did not.

**No API exists for some of it.** The Admin API has no `searchConsoleLinks` resource in v1beta or v1alpha, so the GA4↔GSC link cannot be read directly — test it instead by querying `organicGoogleSearchClicks` against dimension `landingPagePlusQueryString` in the Data API, which only returns rows when the link is live (confirmed working 2026-08-25). There is likewise no `dataFilters` resource and no internal-traffic-definition endpoint: internal traffic filters are interface-only and cannot be scripted.

**This grant can write.** A read call (`runReport`, `searchAnalytics.query`) is exactly as safe as the Composio path was. Anything else — submitting or removing a sitemap, changing a GSC property, publishing a GTM container version — is a real production change to a live site and a live tag container, same standard as everything else in this project: say what it will do before running it, the way a `PostRevision` apply or a `categories.ts` flip already gets said out loud. Never assume read-only just because the prior path was.

**Google Analytics (GA4):** property `properties/424771795` (account `accounts/300174958`, displayName "Zyneto", timezone Asia/Calcutta, currency USD, standard tier). One web stream, `6673305409`, measurement ID `G-BHGWRCQ5LF`. Pull data with `GOOGLE_ANALYTICS_RUN_REPORT` (dims like landingPage, sessionDefaultChannelGroup, sessionSourceMedium; metrics sessions, engagedSessions, engagementRate, averageSessionDuration, bounceRate, keyEvents). Note: in GA4 `keyEvents` = conversions; `averageEngagementTime` and `exits` are NOT valid metrics.

**Counting event names: pass the property's `createTime` (2024-01-25) as `startDate`.** A default `runReport` window silently returns a fraction of the lifetime cardinality and reads like a total. Most of this property's distinct event names are historical `gtm.*` junk from a tag removed in container v21; filter reports with `NOT BEGINS_WITH gtm.`. Custom dimensions and event *parameters* do not count against event names.

**GTM container `GTM-MKCDM7CL`, numeric `176251464`.** Event parameters on a GA4 event tag (type `gaawe`) live under the `eventSettingsTable` parameter key in API v2; Data Layer Variables are type `v`. A tag-level `consentSettings` of `{"consentStatus":"needed","consentType":{...}}` is the only way to gate a third-party template that has no built-in Consent Mode support.

**Publishing via the API retires the workspace.** `workspaces/{id}:create_version` then `versions/{v}:publish` leaves the old workspace *deleted* and a fresh one created with a new ID (22 → 23 on 2026-08-25). Querying the old workspace's `/status` after publishing returns the pre-publish change list and looks like drift; it is a stale handle. Re-list `/workspaces` to get the current ID before trusting any status read. Guard any scripted publish by asserting the pending-change set is exactly what you staged.

**Google Search Console:** property `sc-domain:zyneto.com` (siteOwner). Pull data with `GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY` (dimensions query / page / date; recompute rollup CTR as clicks/impressions, don't average row CTR). Data lags 2-3 days.

**Execution path:** load tools via ToolSearch, discover with `COMPOSIO_SEARCH_TOOLS`, run with `COMPOSIO_MULTI_EXECUTE_TOOL` (parallel), process large responses with `COMPOSIO_REMOTE_WORKBENCH`. Large multi-execute results get saved to a remote sandbox file (e.g. /mnt/files/mex/*.json) rather than returned inline.

**Baseline snapshot (90 days, 2026-05-03 to 2026-08-01):** ~819 sessions; Organic Search 350 sessions at 57.7% engagement (best channel), Direct 365. Top-250 non-brand queries: 568 clicks / 50,523 impressions = 1.12% CTR (very low for the rankings held). Flagship page /blog/restapi-vs-fastapi: 74,021 impressions, 0.43% CTR, position 5.6. Core-business terms (ai workflow automation services, ai copilot development company) stuck on page 2. Blog pages drive dwell time but ~0 conversions.
