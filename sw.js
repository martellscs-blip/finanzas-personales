// Service worker mínimo de la app Finanzas.
// Su único trabajo es permitir que salgan las NOTIFICACIONES en Android
// y manejar el toque sobre ellas. NO guarda caché (así las actualizaciones
// de GitHub Pages siempre llegan sin problemas).
self.addEventListener("install",e=>{self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim());});
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(cs=>{
    if(cs.length){cs[0].focus();}
    else{self.clients.openWindow("./");}
  }));
});
