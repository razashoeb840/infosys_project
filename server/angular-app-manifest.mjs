
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V3UJKZ6B.js",
      "chunk-RT77OCZB.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6XH3PJ5U.js",
      "chunk-RT77OCZB.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6ZVJHLSP.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TSI5QKFG.js",
      "chunk-7Y7FW6I6.js",
      "chunk-RT77OCZB.js"
    ],
    "route": "/events"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VZA5GMLB.js",
      "chunk-7Y7FW6I6.js",
      "chunk-RT77OCZB.js"
    ],
    "route": "/events/create"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MO4I76A3.js",
      "chunk-7Y7FW6I6.js",
      "chunk-RT77OCZB.js",
      "chunk-AMPFQZDU.js",
      "chunk-AOTZG4PN.js"
    ],
    "route": "/events/*"
  },
  {
    "renderMode": 0,
    "route": "/dashboard"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S7HEGLH7.js",
      "chunk-AMPFQZDU.js",
      "chunk-AOTZG4PN.js"
    ],
    "route": "/dashboard/student"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AAJK5XVE.js",
      "chunk-7Y7FW6I6.js",
      "chunk-AMPFQZDU.js",
      "chunk-AOTZG4PN.js"
    ],
    "route": "/dashboard/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CT74ACPH.js",
      "chunk-7Y7FW6I6.js",
      "chunk-AMPFQZDU.js"
    ],
    "route": "/dashboard/admin/participants/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BQUZVZUL.js",
      "chunk-7Y7FW6I6.js",
      "chunk-AOTZG4PN.js"
    ],
    "route": "/dashboard/admin/feedback/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S7MU63B7.js"
    ],
    "route": "/unauthorized"
  },
  {
    "renderMode": 0,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: 'c8db5aabc9d343323ea00f8dc292bc3925d7b92cc9892aba35e6667879f579ca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '47fea3ddda563a4c0f1e9d5e8c31b6aa2f3f50f3166c2bcc985455fac663d1b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
