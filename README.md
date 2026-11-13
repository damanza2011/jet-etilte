# Jet Elite — Portal de Aviación Privada y Chárter Ejecutivo UHNW

Portal de alta conversión para **Jet Elite** (`https://jet-elite.com/es/inicio/`), desarrollado con arquitectura **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, y **React Hook Form + Zod**.

---

## 🚀 Cómo ejecutar el proyecto en local

### 1. Requisitos previos
- Node.js 18.18+ o Node.js 20+
- npm o pnpm

### 2. Instalación de dependencias
```bash
cd "D:\JET-ELITE"
npm install
```

### 3. Servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

### 4. Compilación para producción
```bash
npm run build
npm start
```

---

## 🔐 Variables de Entorno (`.env.local`)

Crea un archivo `.env.local` en la raíz con las siguientes variables:

```env
# URL base para canonicals y OpenGraph
NEXT_PUBLIC_SITE_URL=https://jet-elite.com

# Integración de CRM / Despacho de Operaciones (Opcional)
# FL3XX_API_KEY=tu_clave_fl3xx
# SCHEDAERO_API_KEY=tu_clave_schedaero
# RESEND_API_KEY=tu_clave_resend_emails

# Email de operaciones para recepción de cotizaciones
DISPATCH_OPS_EMAIL=ops@jet-elite.com
```

---

## 🎯 Entregables de la Tarea Inicial (Completados)

1. **`PLAN.md`:** Documento de arquitectura, análisis heurístico del sitio actual y adaptación de los 10 benchmarks (VistaJet, JetBay, OPUL, etc.).
2. **Hero con Doble Intención:**
   - **Chárter Puntual:** Selector rápido de ruta y botón primario que abre el cotizador guiado.
   - **Membresías / Fraccional:** Acceso diferenciado para clientes recurrentes que buscan horas garantizadas.
   - Optimizado para móvil con imagen estática WebP/AVIF y contraste estricto WCAG 2.2 AA (sin video autoplay para LCP < 2.0s).
3. **Flujo de Cotización Multi-Paso (4 Pasos Accesibles):**
   - **Paso 1 (Ruta):** Modalidad (solo ida / ida y vuelta / multi-leg) y selector de aeropuertos FBO ejecutivos.
   - **Paso 2 (Detalles):** Fechas, horarios, pasajeros (1-19), equipaje y mascotas.
   - **Paso 3 (Aeronave):** Light Jet, Super Midsize, Heavy, Ultra Long o recomendación inteligente de Concierge + requerimientos VIP.
   - **Paso 4 (Contacto & Confidencialidad):** Datos del solicitante, rol (pasajero, PA, family office, broker), opción de firma de NDA y garantía de respuesta < 120 min.
   - Validación en tiempo real con **Zod** y **React Hook Form**.
4. **Señales de Confianza Above-the-Fold (`TrustBar`):**
   - Badges de AOC (Air Operator Certificate), auditorías ARGUS Gold y Wyvern Wingman expuestos inmediatamente en la franja superior sin scroll.
5. **Endpoint API Seguro:** `/api/quote` que valida los datos en servidor y genera número de localizador de expediente.

---

## 📋 Checklist de TODOs Pendientes de Datos Reales de Jet Elite

Para pasar a producción, el cliente Jet Elite debe suministrar los siguientes datos que están marcados explícitamente en el código con `// TODO:`:

- [ ] **AOC y Licencias:** Número de registro oficial del Certificado de Operador Aéreo (AOC) en [`src/lib/data/trust.data.ts`](src/lib/data/trust.data.ts).
- [ ] **Teléfonos Oficiales 24/7:** Líneas directas de despacho para España (`+34`), LATAM (`+57`) y USA (`+1`) en [`src/components/layout/Header.tsx`](src/components/layout/Header.tsx) y [`Footer.tsx`](src/components/layout/Footer.tsx).
- [ ] **Matrículas y Flota Propia:** Lista exacta de aeronaves operadas y sus bases FBO habituales en [`src/lib/data/fleet.data.ts`](src/lib/data/fleet.data.ts).
- [ ] **Tarifas y Términos Fraccionales:** Costos por hora ocupada y mensualidad del programa de propiedad fraccionada.
- [ ] **Integración de Despacho:** Webhook o correo de recepción final en [`src/app/api/quote/route.ts`](src/app/api/quote/route.ts).
