

### Deprecated Documentation - Work In Progress
TODO: Move to Strava Client readme
## 📡 Strava API

Reference: https://developers.strava.com/docs/reference/ (API reference)  
Auth docs: https://developers.strava.com/docs/authentication/ (OAuth flow)

### Prerequisites
- Strava account.
- Register an application in your Strava account to get Client ID and Client Secret.
- Local dev environment: Python or Node (and package manager).
- Basic knowledge of OAuth 2.0 (authorization code flow).
- Secure storage for tokens (env vars, secrets manager).

### Configuration
1. Register your app at https://www.strava.com/settings/api and set a Redirect URI.
2. Add these environment variables to your local/dev config:
    - STRAVA_CLIENT_ID
    - STRAVA_CLIENT_SECRET
    - STRAVA_REDIRECT_URI
    - (optional) STRAVA_ACCESS_TOKEN / STRAVA_REFRESH_TOKEN for short-term testing
3. Start the OAuth flow to obtain an authorization code:
    - Example authorize URL:
      https://www.strava.com/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI&scope=activity:read
4. Exchange the authorization code for an access token and refresh token via Strava’s token endpoint (see auth docs).
5. Persist refresh tokens and refresh access tokens as needed (tokens are short-lived).

### Required scopes / permissions
- activity:read — read a user’s activities (required for this project).
- activity:read_all — read private activities (if you need private activity data).
- profile:read — read basic athlete profile (optional).
Ensure the requested scope includes activity:read (or activity:read_all) when authorizing.

### Useful endpoints
- List activities: GET /athlete/activities — https://developers.strava.com/docs/reference/#api-Activities
- Get activity: GET /activities/{id} — https://developers.strava.com/docs/reference/#api-Activities-getActivityById

Notes:
- Follow Strava’s API rate limits and terms.
- For automated workflows, implement token refresh using the refresh token.


