# 🏃‍♂️ TrailMetrics
An open source personal tool to explore, analyze and visualize endurance training data through Strava API data. Aimed to help out planning and race preparation for endurance athletes.

## 🚧 Project Status
This repository is currently in its early development phase.  
Work in progress includes:
- Setting up the project structure
- Refactoring to switch stack (Python client to Full Stack App)

## 🎯 Goals
- Analyze key training metrics
- Generate training reports
- Provide a clear, continuous view of athlete development and training lods to help in planning.
- Traning load goals and achievements

## 🧠 Planned Technologies
- Backend: Node.js + Express + TypeScript
- Frontend: React + TypeScript
- TypeScript Strava API Client (Module)

## 🤝 Contributing
The project is under construction, but suggestions and ideas are welcome.

## 📄 License
To be added later.


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


