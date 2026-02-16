# EC2 Test App

A small Node.js web application for testing EC2 deployments.

## Quick Start

### Installation
```bash
npm install
```

### Running the App
```bash
npm start
```

The app will start on `http://localhost:3000` by default.

### Environment Variables
- `PORT` - Server port (default: 3000)
- `HOST` - Server host (default: localhost)
- `NODE_ENV` - Environment (development/production)

## API Endpoints

### GET /
Main endpoint - returns app status and timestamp
```bash
curl http://localhost:3000/
```

### GET /health
Health check endpoint - returns uptime
```bash
curl http://localhost:3000/health
```

### GET /info
App info with hostname and version
```bash
curl http://localhost:3000/info
```

### POST /echo
Echo endpoint - sends back what you send
```bash
curl -X POST http://localhost:3000/echo \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## Using with EC2

Deploy the app to your EC2 instance and test with:
```bash
# From EC2 instance
curl http://localhost:3000/health

# From local machine (assuming security group allows port 3000)
curl http://<EC2-PUBLIC-IP>:3000/health
```

## Testing

Run the health check endpoint to verify deployment success:
- Status 200 = App is running
- Status check endpoint at `/health` is ideal for load balancers
