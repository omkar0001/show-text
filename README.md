# Deploy Backend to eks.
- Prerequisites
  - Setup eks cluster
  - Install kubectl
  - Install helm
  - Install npm
- Modify  values in `backend/chart/values.yaml`. Mainly `mongoDBURI`.
- Deploy to cluster
  ```
  pushd backend && npm run deploy && popd
  ```

# Run Frontend
- Prerequisites
  - Install nodejs and npm
- Modify `apiUrl` value in `frontend/src/constants.js`. Right now its already pointing to the working aws eks loadbalancer.
- Run react
  ```
  pushd frontend && npm install --save && npm run start && popd
  ```
  
