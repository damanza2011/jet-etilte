# PLAN DE DESARROLLO Y ARQUITECTURA: JET ELITE (UHNW PRIVATE AVIATION)

**Cliente:** Jet Elite (`https://jet-elite.com/es/inicio/`)  
**Sector:** Chárter de Jet Privado y Aviación Ejecutiva / Membresías  
**Audiencia Objetivo:** UHNW (Ultra-High-Net-Worth Individuals), Family Offices, Ejecutivos Corporativos (España, LATAM, USA, Europa).  
**Objetivo Primario de Negocio:** Convertir visitantes de alta cualificación en solicitudes de cotización cerradas y contactos de membresía/fraccional con fricción cero y máxima transparencia.

---

## 1. Auditoría Heurística y Diagnóstico del Sitio Actual

| Vector de Análisis | Estado Actual en `jet-elite.com` | Solución de Arquitectura & CRO en Nueva Versión |
| :--- | :--- | :--- |
| **Above-the-Fold & Hero** | Copy aspiracional genérico sobre "lujo", sin herramientas inmediatas ni separación de intenciones. | **Hero con Doble Intención (Patrón VistaJet/JetBay):** Separación visual nítida: **Chárter Puntual** (abre estimador/flujo guiado) vs. **Membresías/Fraccional** (cliente recurrente). |
| **Mecanismo de Cotización** | Formulario de contacto genérico estático (input text largo, fricción cognitiva alta). | **Flujo Multi-Paso Progresivo (4 Pasos):** (1) Origen-Destino & Tipo de vuelo, (2) Fechas & Pasajeros, (3) Categoría de Aeronave (con rangos orientativos), (4) Datos de contacto y requerimientos VIP. Validación Zod en tiempo real. |
| **Señales de Confianza (Trust Signals)** | Ocultas en el pie de página o ausentes; falta de credenciales de seguridad operacional. | **Franja de Credibilidad Inmediata (Above-the-Fold):** Certificaciones AOC (Air Operator Certificate), estándares equivalentes ARGUS / Wyvern Gold/Platinum, mantenimiento en centros certificados FAA/EASA. |
| **Presentación de Flota** | Catálogo informativo plano sin entidad de producto ni contextualización de ruta. | **Páginas de Flota Dinámicas (`/flota/[slug]`)**: Específicas por modelo (Very Light, Midsize, Heavy Jet, Ultra Long Range) con esquema Schema.org `Product` / `Service`, alcance visual en mapa y CTA contextual "Cotizar este avión para mi ruta". |
| **Rendimiento & Core Web Vitals** | Peso excesivo por assets no optimizados; riesgo de LCP > 3.5s en móvil 4G. | **Stack Next.js 14+ App Router**: Cero JavaScript innecesario en el primer render, imágenes en WebP/AVIF con `next/image` y dimensiones fijas para CLS = 0, fuentes variables con `font-display: swap`, LCP < 1.8s. |
| **SEO Técnico e i18n** | Ausencia de entidades estructuradas y URLs semánticas por ruta. | Arquitectura i18n lista (`/es`, `/en`), metadatos OpenGraph dinámicos y JSON-LD estructurado (`FAQPage`, `BreadcrumbList`, `Airline`/`Service`). |

---

## 2. Benchmark de los 10 Portales de Referencia

1. **VistaJet:** Separación radical en el hero entre necesidades de vuelo por demanda y soluciones recurrentes de horas de vuelo garantizadas.
2. **JetBay:** Calculadora de ruta y estimación de tiempo de vuelo en la primera interacción antes de solicitar el lead.
3. **AirX:** Tarjetas de flota con anatomía técnica rigurosa (autonomía náutica, dimensiones de cabina, equipaje).
4. **OPUL Jets:** Generoso espacio en blanco, estética minimalista y fotografía de interiores como foco sensorial.
5. **Reliance Jets:** Especificaciones de performance (velocidad de crucero, altitud máxima para evitar turbulencias) para decisores técnicos.
6. **Jesko Jets:** Transiciones de página y modales elegantes con Framer Motion, evitando retrasos en la carga (sin autoplay de videos pesados en móvil).
7. **Jet Monde:** Paleta sobria (negro grafito, platino, toques bronce/dorado mate) que transmite confidencialidad absoluta.
8. **KHONSU Aviation:** Tipografía refinada (serif editorial + sans limpia) y ritmo visual pausado para audiencias UHNW.
9. **Skyfirst:** Carga diferida inteligente de imágenes con blur placeholder para experiencia fluida.
10. **The Jet Guys:** Reducción de la fricción: la web aporta valor inmediato (ej. aeropuertos ejecutivos FBO recomendados) antes de pedir los datos de contacto.

---

## 3. Arquitectura de Información y Rutas de la Aplicación

```
jet-elite/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout con fuentes variables y JSON-LD global
│   │   ├── page.tsx                   # Landing principal: Hero doble CTA, Trust Bar, Flujo Cotización, Flota Destacada, Rutas VIP
│   │   ├── flota/
│   │   │   ├── page.tsx               # Directorio general de aeronaves clasificadas por categoría
│   │   │   └── [slug]/page.tsx        # Ficha técnica individual de aeronave con JSON-LD y cotizador contextual
│   │   ├── rutas/
│   │   │   ├── page.tsx               # Catálogo de rutas frecuentes (Europa, América, Transatlánticas)
│   │   │   └── [rutaSlug]/page.tsx    # Landing específica (ej: madrid-ibiza, miami-medellin) con precios orientativos
│   │   ├── membresias/
│   │   │   └── page.tsx               # Soluciones de propiedad fraccionada y jet card para clientes recurrentes
│   │   └── api/
│   │       └── quote/route.ts         # Endpoint seguro para procesar solicitudes de cotización validadas
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Navegación premium, selector i18n, CTA rápido
│   │   │   ├── Footer.tsx             # Disclaimer legal, AOC, privacidad estricta
│   │   │   └── TrustBar.tsx           # Badges de seguridad operacional above-the-fold
│   │   ├── hero/
│   │   │   └── HeroSection.tsx        # Hero con doble intención y selector rápido
│   │   ├── quote-flow/
│   │   │   ├── QuoteModal.tsx         # Contenedor modal accesible con gestión de foco
│   │   │   ├── Step1Route.tsx         # Paso 1: Origen, Destino, Vuelo solo ida / ida y vuelta
│   │   │   ├── Step2Passengers.tsx    # Paso 2: Fecha, hora, número de pasajeros y equipaje
│   │   │   ├── Step3Aircraft.tsx      # Paso 3: Selección de categoría (Light, Midsize, Heavy)
│   │   │   ├── Step4Contact.tsx       # Paso 4: Datos del pasajero / asistente, confidencialidad
│   │   │   └── StepProgress.tsx       # Indicador de progreso accesible con opción de retroceso
│   │   └── ui/                        # Componentes atómicos (Button, Input, Select, Badge, Card)
│   ├── lib/
│   │   ├── validations/
│   │   │   └── quote.schema.ts        # Esquema Zod estricto para validación de cotización
│   │   ├── data/
│   │   │   ├── fleet.data.ts          # Datos estructurados de la flota (categorías, performance, fotos)
│   │   │   └── routes.data.ts         # Datos de rutas prioritarias y tiempos de vuelo FBO
│   │   └── types/
│   │       └── index.ts               # Tipos TypeScript centralizados
```

---

## 4. Modelo de Datos (TypeScript)

### 4.1 Entidad Aeronave (`Aircraft`)
- `id`, `slug`, `name`, `category` (Light, Super Midsize, Heavy, Ultra Long Range)
- `capacity` (pasajeros), `rangeNm` (millas náuticas), `speedKnots` (Mach / nudos)
- `baggageVolumeCuFt`, `cabinHeightMeters`, `lavatory` (boolean), `wifi` (boolean)
- `hourlyRateEstimatedUsd` (rango orientativo para transparencia)
- `images`: exterior, cabina día, cabina noche

### 4.2 Entidad Solicitud de Cotización (`FlightQuoteRequest`)
- `tripType`: `'one_way' | 'round_trip' | 'multi_leg'`
- `origin`: `{ code: string, city: string, fbo?: string }`
- `destination`: `{ code: string, city: string, fbo?: string }`
- `departureDate`: Date, `returnDate`?: Date
- `passengers`: number (1-19)
- `aircraftCategory`: `'any' | 'light' | 'midsize' | 'heavy' | 'ultra_long'`
- `specialRequests`?: string (catering VIP, transporte FBO, mascotas, confidencialidad NDA)
- `contact`: `{ fullName: string, email: string, phone: string, isAssistantOrBroker: boolean }`

---

## 5. Criterios de Rendimiento, Accesibilidad y CRO

- **Rendimiento:** Cero layout shift mediante contenedores con `aspect-ratio` predeterminado. Fuentes alojadas localmente con Next.js Font Optimization.
- **Accesibilidad:** Cumplimiento estricto WCAG 2.2 AA. El flujo multi-paso permite navegación 100% por teclado (`Tab`, `Shift+Tab`, `Enter`, `Escape`), estados `aria-current="step"`, `role="dialog"` y trampas de foco en modal.
- **CRO (Fricción Cero):**
  - No pedir datos personales en el paso 1; primero entregar valor y selección de viaje.
  - Opciones de aeropuertos inteligentes con códigos ICAO/IATA más comunes para aviación ejecutiva (LFPB/Le Bourget, EGGW/Luton, KTEB/Teterboro, LEMD/Barajas, SKBO/El Dorado, etc.).
  - Política explícita de confidencialidad y respuesta garantizada en menos de 2 horas.
