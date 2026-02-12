==========================================================
        PHANTOM RADIO - SISTEMA TÁCTICO V21.7
==========================================================

DESCRIPCIÓN:
Sistema de radiocomunicación sobre protocolo WebSocket con 
encriptación AES-GCM punto a punto y sistema de gestión de
canales (PTT con bloqueo de colisión).

REQUISITOS PREVIOS:
1. Node.js instalado (versión 16 o superior).
2. Un túnel (Cloudflare Tunnel o Ngrok) para acceso remoto.
3. Navegador compatible con Web Audio API (Chrome, Safari, Edge).

ESTRUCTURA DE ARCHIVOS:
- server.js: Motor del servidor Socket.io y gestión de salas.
- index.html: Interfaz de usuario y motor de audio encriptado.
- package.json: Dependencias del proyecto.

INSTRUCCIONES DE INSTALACIÓN:
1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias:
   npm install express socket.io http
3. Ejecuta el servidor:
   node server.js

CONFIGURACIÓN DE RED:
Si usas Cloudflare Tunnel (recomendado para móviles):
1. Inicia el túnel: cloudflared tunnel --url http://localhost:3000
2. COPIA la URL generada (ej. https://xxx-xxx.trycloudflare.com).
3. Abre 'index.html' y localiza la línea:
   const socket = io("TU_URL_AQUÍ", ...);
4. PEGA tu URL y guarda el archivo.

GUÍA DE USO:
1. Accede a la URL desde tu móvil o PC.
2. Ingresa un NICKNAME, el nombre de CANAL y la CLAVE E2EE.
3. IMPORTANTE: Todos los usuarios en el mismo canal deben
   usar la misma CLAVE para poder desencriptar el audio.
4. BOTÓN PTT: 
   - Naranja: Canal libre, listo para hablar.
   - Rojo: Estás transmitiendo (TX).
   - Gris: Canal ocupado por otro operador (RX).

NOTAS TÉCNICAS:
- El audio se envía en paquetes sólidos al soltar el botón. 
  Esto garantiza estabilidad en redes móviles 4G/5G.
- Si el audio no suena en móviles, asegúrate de que el 
  volumen multimedia esté activo y no esté en modo silencio.

SOPORTE:
Versión: Legacy Shield V21.7 (Estabilidad Reforzada)
==========================================================
