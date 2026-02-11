================================================================
          SECURE COMMS V14.5 - TACTICAL COMMANDER
================================================================

DESCRIPCIÓN TÉCNICA:
--------------------
Sistema de radiocomunicación digital táctico con cifrado de 
extremo a extremo (E2EE) AES-GCM de 256 bits. Diseñado para 
comunicaciones seguras, privadas y de baja latencia.

CARACTERÍSTICAS DE LA VERSIÓN 14.5:
-----------------------------------
1. SEGURIDAD TOTAL: Cifrado en el cliente. El servidor nunca 
   ve el audio real, solo datos cifrados.
2. SISTEMA SOS PRO: Alerta de emergencia con tono sintético 
   de 800Hz, vibración y aviso visual estroboscópico.
3. NOISE GATE: Ahorro de datos inteligente. El sistema no 
   transmite si no detecta voz (umbral ajustable).
4. ERGONOMÍA MÓVIL: Botón PTT elevado para evitar conflictos 
   con las barras de navegación de iOS/Android.
5. LISTA DE OPERADORES: Desplegable dinámico en tiempo real.

GUÍA DE INSTALACIÓN (SERVIDOR):
-------------------------------
1. Instalar dependencias: npm install express socket.io helmet
2. Ejecutar: node server.js
3. Exponer con Cloudflare: cloudflared tunnel --url http://localhost:3000

GUÍA DE OPERACIÓN (USUARIO):
----------------------------
- El envío de mensajes de texto se activa con la tecla 'ENTER'.
- El botón SOS requiere 2 segundos de presión para activarse.
- Use el icono de la batería para desactivar las ondas y ahorrar energía.

AVISO LEGAL:
------------
Proyecto educativo de ingeniería. No apto para emergencias reales.
El desarrollador no se hace responsable del uso de la herramienta.
================================================================
