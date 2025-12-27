#!/bin/bash
# Kill processes on ports 3000 and 3001

echo "Killing processes on ports 3000 and 3001..."

# Kill port 3001
PID_3001=$(lsof -ti:3001)
if [ ! -z "$PID_3001" ]; then
  echo "Killing process $PID_3001 on port 3001"
  kill -9 $PID_3001 2>/dev/null || true
fi

# Kill port 3000
PID_3000=$(lsof -ti:3000)
if [ ! -z "$PID_3000" ]; then
  echo "Killing process $PID_3000 on port 3000"
  kill -9 $PID_3000 2>/dev/null || true
fi

echo "Done. Ports should be free now."

