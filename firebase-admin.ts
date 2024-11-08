import {
  initializeApp,
  getApps,
  App,
  getApp,
  cert,
} from 'firebase-admin/app';

import { getFirestore} from 'firebase-admin/firestore';

let app: App;
const serviceKey = require('./service_key.json');

if(getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export {app as adminApp,adminDb};