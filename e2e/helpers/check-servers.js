/**
 * Helper to check if game servers are running
 */
import http from 'http';

export async function checkServer(port, timeout = 2000) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}/health`, { timeout }, (res) => {
      resolve(res.statusCode === 200);
    });

    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

export async function waitForServer(port, maxAttempts = 10, delay = 500) {
  for (let i = 0; i < maxAttempts; i++) {
    if (await checkServer(port)) {
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  return false;
}

