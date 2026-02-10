================================================================
          WALKIE-TALKIE PRO V13 - SISTEMA MULTICANAL
================================================================

DESCRIPCIÓN:
------------
Aplicación de comunicación por voz en tiempo real (Push-to-Talk) 
con arquitectura basada en WebSockets, capaz de gestionar múltiples 
salas independientes con cifrado por contraseña de acceso.

ESTADO DEL PROYECTO: v13.0 (Glassmorphism & Multi-Room)
TECNOLOGÍAS: Node.js, Socket.io, Web Audio API, Cloudflare Tunnel.

NUEVAS FUNCIONALIDADES (v13):
----------------------------
1. ARQUITECTURA DE SALAS (ROOMS):
   El servidor ahora actúa como una centralita. El audio y texto 
   de una sala son invisibles para el resto de frecuencias.

2. SEGURIDAD REFORZADA:
   - Autenticación por sala: Cada canal requiere su propia clave.
   - Sanitización XSS: Protección total contra inyección de código 
     en el chat mediante renderizado de texto plano.
   - Control de Buffer: Límite de 1MB por paquete de audio para 
     prevenir ataques de denegación de servicio (DoS).

3. INTERFAZ GLASSMORPHISM:
   - Diseño capacitativo: Se adapta automáticamente a dispositivos 
     móviles y escritorio.
   - Feedback Visual: Osciloscopio de audio mejorado y botón PTT 
     con animación de pulso dinámico.

REQUERIMIENTOS TÉCNICOS:
------------------------
- Servidor: Node.js v18 o superior.
- Cliente: Navegador compatible con Web Audio API (Chrome, Safari, Edge).
- Conectividad: Requiere túnel HTTPS para capturar audio (Micrófono).

GUÍA DE INSTALACIÓN RÁPIDA:
---------------------------
1. En el servidor (VM Linux):
   $ npm install express socket.io
   $ node server.js

2. Configurar el túnel (Cloudflare):
   $ cloudflared tunnel --url http://localhost:3000

3. Configurar el cliente:
   - Copiar la URL generada por Cloudflare en 'index.html'.
   - Subir cambios a GitHub Pages.

GUÍA DE OPERACIÓN:
------------------
- ID OPERADOR: Tu apodo en la frecuencia.
- CANAL: Nombre de la sala (Ej: ALPHA-1).
- PASSWORD: Clave acordada para esa sala específica.

SOLUCIÓN DE PROBLEMAS (FAQ):
----------------------------
- Error EADDRINUSE: El puerto 3000 está ocupado. 
  Solución: 'sudo fuser -k 3000/tcp'.
- Micrófono no funciona: Asegúrate de que la URL de acceso 
  comience estrictamente por https://.
- ERR_NAME_NOT_RESOLVED: La URL de Cloudflare ha caducado o 
  el túnel se ha cerrado. Reinicia el proceso y actualiza la URL.

----------------------------------------------------------------
Desarrollado como Prueba de Concepto (POC) para comunicaciones
críticas y experimentación con Web Audio API.
================================================================
