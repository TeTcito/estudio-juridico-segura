import os
import base64
import subprocess
import fitz # PyMuPDF

# 1. Read and base64 encode logo
logo_path = os.path.abspath('src/assets/images/logo.png')
with open(logo_path, 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode('utf-8')

html_content = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Requerimientos de Información - Estudio Jurídico Segura Santana & Asociados</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 portrait;
      margin: 10mm 12mm 10mm 12mm;
    }}
    
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}

    body {{
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1e293b;
      background-color: #ffffff;
      font-size: 8.5pt;
      line-height: 1.35;
    }}

    .page {{
      page-break-after: always;
      position: relative;
      overflow: hidden;
      break-after: page;
      height: 100%;
      min-height: 260mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
    }}

    .page:last-child {{
      page-break-after: avoid;
    }}

    /* Header styling */
    .header-bar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #c5a059;
      padding-bottom: 8px;
      margin-bottom: 10px;
    }}

    .header-left {{
      display: flex;
      align-items: center;
      gap: 12px;
    }}

    .logo-img {{
      height: 46px;
      width: auto;
      object-fit: contain;
    }}

    .brand-titles h1 {{
      font-family: 'Cinzel', Georgia, serif;
      font-size: 11pt;
      font-weight: 800;
      color: #1c2237;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      line-height: 1.15;
    }}

    .brand-titles .subtitle {{
      font-size: 7pt;
      color: #aa8640;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }}

    .header-badge {{
      text-align: right;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 3px solid #c5a059;
      padding: 4px 10px;
      border-radius: 4px;
    }}

    .header-badge .doc-type {{
      font-family: 'Cinzel', serif;
      font-size: 7.5pt;
      font-weight: 800;
      color: #1c2237;
      text-transform: uppercase;
    }}

    .header-badge .doc-meta {{
      font-size: 6.5pt;
      color: #64748b;
    }}

    /* Progress Banner */
    .progress-banner {{
      background: linear-gradient(135deg, #1c2237 0%, #2a3454 100%);
      color: #ffffff;
      padding: 8px 12px;
      border-radius: 6px;
      margin-bottom: 11px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-left: 4px solid #c5a059;
    }}

    .banner-text {{
      max-width: 78%;
    }}

    .banner-text h2 {{
      font-family: 'Cinzel', serif;
      font-size: 9pt;
      font-weight: 700;
      color: #e5c378;
      margin-bottom: 2px;
    }}

    .banner-text p {{
      font-size: 7.2pt;
      color: #cbd5e1;
      line-height: 1.25;
    }}

    .banner-pill {{
      background: rgba(197, 160, 89, 0.2);
      border: 1px solid #c5a059;
      color: #fce7b0;
      padding: 3px 8px;
      border-radius: 20px;
      font-size: 6.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }}

    /* Sections */
    .section-card {{
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 9px 12px;
      margin-bottom: 10px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    }}

    .section-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 5px;
      margin-bottom: 7px;
    }}

    .section-title-wrap {{
      display: flex;
      align-items: center;
      gap: 7px;
    }}

    .num-tag {{
      background: #1c2237;
      color: #c5a059;
      font-family: 'Cinzel', serif;
      font-weight: 800;
      font-size: 7.5pt;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }}

    .section-title {{
      font-family: 'Cinzel', Georgia, serif;
      font-size: 8.8pt;
      font-weight: 800;
      color: #1c2237;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }}

    .tab-badge {{
      font-size: 6.5pt;
      color: #0f766e;
      background: #f0fdfa;
      border: 1px solid #ccfbf1;
      padding: 2px 7px;
      border-radius: 10px;
      font-weight: 600;
    }}

    .section-goal {{
      font-size: 7.2pt;
      color: #64748b;
      margin-bottom: 7px;
      font-style: italic;
    }}

    /* Grid layout inside sections */
    .cols-2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }}

    .cols-3 {{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
    }}

    .item-box {{
      background: #f8fafc;
      border: 1px solid #edf2f7;
      border-radius: 4px;
      padding: 6px 8px;
    }}

    .item-box.highlight {{
      background: #fafaf9;
      border-color: #e7e5e4;
      border-left: 3px solid #aa8640;
    }}

    .item-label {{
      font-size: 7.2pt;
      font-weight: 700;
      color: #1c2237;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 5px;
    }}

    .item-desc {{
      font-size: 6.8pt;
      color: #475569;
      line-height: 1.25;
    }}

    .checkbox-list {{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 3.5px;
    }}

    .checkbox-list li {{
      display: flex;
      align-items: flex-start;
      gap: 6px;
      font-size: 7pt;
      color: #334155;
      line-height: 1.25;
    }}

    .chk {{
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 1.2px solid #94a3b8;
      border-radius: 2px;
      margin-top: 1.5px;
      flex-shrink: 0;
      background: #ffffff;
    }}

    .dotted-line {{
      border-bottom: 1px dashed #cbd5e1;
      height: 13px;
      margin-top: 3px;
    }}

    /* Tables */
    .mini-table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 6.8pt;
      margin-top: 4px;
    }}

    .mini-table th {{
      background: #f1f5f9;
      color: #1c2237;
      font-weight: 700;
      text-align: left;
      padding: 3px 6px;
      border: 1px solid #e2e8f0;
      font-size: 6.5pt;
      text-transform: uppercase;
    }}

    .mini-table td {{
      padding: 3.5px 6px;
      border: 1px solid #e2e8f0;
      color: #334155;
      vertical-align: top;
    }}

    .tag-active {{
      color: #15803d;
      font-weight: 700;
    }}

    /* Bottom Instructions Card */
    .delivery-box {{
      background: #fcfbf9;
      border: 1px solid #e7e0d3;
      border-left: 4px solid #c5a059;
      border-radius: 6px;
      padding: 7px 10px;
      margin-top: 2px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}

    .delivery-content h4 {{
      font-family: 'Cinzel', serif;
      font-size: 8pt;
      color: #1c2237;
      font-weight: 700;
      margin-bottom: 2px;
    }}

    .delivery-content p {{
      font-size: 6.8pt;
      color: #57534e;
    }}

    .channel-badges {{
      display: flex;
      gap: 6px;
    }}

    .badge-channel {{
      background: #ffffff;
      border: 1px solid #d6d3d1;
      padding: 3px 7px;
      border-radius: 4px;
      font-size: 6.5pt;
      font-weight: 600;
      color: #1c2237;
      white-space: nowrap;
    }}

    /* Footer */
    .footer-bar {{
      border-top: 1px solid #e2e8f0;
      padding-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 6.5pt;
      color: #94a3b8;
    }}

    .footer-bar strong {{
      color: #64748b;
    }}
  </style>
</head>
<body>

  <!-- ==================== PÁGINA 1 ==================== -->
  <div class="page">
    <div>
      <!-- Header -->
      <div class="header-bar">
        <div class="header-left">
          <img src="data:image/png;base64,{logo_b64}" class="logo-img" alt="Logo">
          <div class="brand-titles">
            <h1>Estudio Jurídico Segura Santana &amp; Asociados</h1>
            <div class="subtitle">Especialistas en Derecho Procesal Penal &bull; Litigación de Alta Fidelidad</div>
          </div>
        </div>
        <div class="header-badge">
          <div class="doc-type">Requerimiento de Información</div>
          <div class="doc-meta">Sitio Web Oficial &bull; Versión 1.0 &bull; Octubre 2026</div>
        </div>
      </div>

      <!-- Progress Banner -->
      <div class="progress-banner">
        <div class="banner-text">
          <h2>Reporte de Avance: Pestaña Principal ("Inicio") Completada</h2>
          <p>
            Estimada <strong>Ab. Sofía Segura Santana</strong>: La página principal ya se encuentra estructurada con diseño corporativo de alta gama, línea de tiempo, cálculo de garantías, botón de flagrancia 24/7 y testimonios. Para finalizar las <strong>4 pestañas restantes</strong> con su toque personal, hemos resumido los datos puntuales que requerimos de su parte.
          </p>
        </div>
        <div class="banner-pill">
          Fase 2 de 2: Personalización
        </div>
      </div>

      <!-- SECCIÓN 1: PESTAÑA PERFIL PROFESIONAL -->
      <div class="section-card">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="num-tag">01</span>
            <span class="section-title">Pestaña: Perfil Profesional ("Sobre Mí / Trayectoria")</span>
          </div>
          <span class="tab-badge">Pestaña 2 del Sitio</span>
        </div>
        <div class="section-goal">
          <strong>Objetivo:</strong> Posicionar su autoridad académica penal, rigor ético y experiencia ante jueces, clientes y colegas.
        </div>

        <div class="cols-2">
          <!-- Datos Académicos y Credenciales -->
          <div class="item-box">
            <div class="item-label">
              <span>A. Formación Académica &amp; Títulos</span>
            </div>
            <div class="item-desc">
              Confirme o complete los datos que aparecerán en la vitrina de credenciales:
            </div>
            <ul class="checkbox-list" style="margin-top: 4px;">
              <li>
                <span class="chk"></span>
                <span><strong>Pregrado:</strong> Abogada de los Tribunales (Universidad: <span class="dotted-line" style="display:inline-block; width:120px; height:8px;"></span>)</span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Posgrado:</strong> Magíster en Derecho Procesal Penal (Universidad / Año: <span class="dotted-line" style="display:inline-block; width:110px; height:8px;"></span>)</span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Matrícula Profesional:</strong> Matrícula Foro / CJ (Opcional, recomendado para generar confianza legal inmediata).</span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Actualización Continua:</strong> Menciones o diplomados en Litigación Oral, Casación o Peritajes Forenses que desee destacar.</span>
              </li>
            </ul>
          </div>

          <!-- Reseña y Fotos -->
          <div class="item-box highlight">
            <div class="item-label">
              <span>B. Biografía Resumida &amp; Fotografías</span>
            </div>
            <div class="item-desc">
              En la maqueta hemos redactado una síntesis de su ejercicio penal:
            </div>
            <ul class="checkbox-list" style="margin-top: 4px;">
              <li>
                <span class="chk"></span>
                <span><strong>Años de Ejercicio:</strong> Confirmar si mantenemos <em>"12+ años de experiencia penal"</em> o especificar el año de inicio.</span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Frase Lema Institucional:</strong> Validar propuesta: <em>"La libertad de una persona jamás puede someterse a la improvisación"</em> (o sugerir lema propio).</span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Fotografías Oficiales:</strong> Confirmar si aprueba las fotos actuales del prototipo o si nos enviará 1 a 2 fotografías adicionales en toga/despacho en alta resolución.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECCIÓN 2: PESTAÑA ÁREAS DE PRÁCTICA -->
      <div class="section-card">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="num-tag">02</span>
            <span class="section-title">Pestaña: Especialidades Jurídicas ("Áreas de Práctica")</span>
          </div>
          <span class="tab-badge">Pestaña 3 del Sitio</span>
        </div>
        <div class="section-goal">
          <strong>Objetivo:</strong> Que el justiciable o su familia identifique de inmediato su tipo de problema penal y solicite patrocinio.
        </div>

        <div class="item-desc" style="margin-bottom: 5px;">
          Actualmente el sitio web cuenta con un selector interactivo estructurado con <strong>5 especialidades estratégicas</strong>. Por favor marque si las aprueba o desea hacer cambios:
        </div>

        <table class="mini-table">
          <thead>
            <tr>
              <th style="width: 28%;">Especialidad Propuesta</th>
              <th style="width: 52%;">Alcance &amp; Actuaciones Frecuentes en el Sitio</th>
              <th style="width: 20%; text-align: center;">Acción Requerida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Flagrancias y Detenciones 24/7</strong></td>
              <td>Primeras 24 horas críticas: legalidad de aprehensión, medidas sustitutivas a prisión preventiva y Fiscalía.</td>
              <td style="text-align: center;"><span class="chk"></span> Aprobar &nbsp; <span class="chk"></span> Ajustar</td>
            </tr>
            <tr>
              <td><strong>2. Delitos Contra la Vida e Integridad</strong></td>
              <td>Homicidios, femicidios, lesiones, robo agravado, sustancias sujetas a fiscalización y asociación ilícita.</td>
              <td style="text-align: center;"><span class="chk"></span> Aprobar &nbsp; <span class="chk"></span> Ajustar</td>
            </tr>
            <tr>
              <td><strong>3. Penal Económico &amp; Compliance</strong></td>
              <td>Lavado de activos, fraude procesal, cohecho, delitos tributarios/aduaneros y personas jurídicas.</td>
              <td style="text-align: center;"><span class="chk"></span> Aprobar &nbsp; <span class="chk"></span> Ajustar</td>
            </tr>
            <tr>
              <td><strong>4. Recursos de Apelación y Casación</strong></td>
              <td>Impugnación ante Cortes Provinciales y Corte Nacional de Justicia por nulidades y errores in iudicando.</td>
              <td style="text-align: center;"><span class="chk"></span> Aprobar &nbsp; <span class="chk"></span> Ajustar</td>
            </tr>
            <tr>
              <td><strong>5. Garantías y Hábeas Corpus</strong></td>
              <td>Tutela constitucional urgente ante detenciones arbitrarias, ilegales o vulneración de salud carcelaria.</td>
              <td style="text-align: center;"><span class="chk"></span> Aprobar &nbsp; <span class="chk"></span> Ajustar</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 6px; font-size: 6.8pt; color: #475569; background: #f8fafc; padding: 4px 8px; border-radius: 4px;">
          <strong>Nota de personalización:</strong> ¿Desea añadir o priorizar alguna otra materia? (Ej. Delitos de Tránsito con muerte, Violencia Intrafamiliar, Extradiciones o Delitos Informáticos): <span class="dotted-line" style="display:inline-block; width:45%; height:8px;"></span>
        </div>
      </div>
    </div>

    <!-- Footer Página 1 -->
    <div class="footer-bar">
      <div><strong>Estudio Jurídico Segura Santana &amp; Asociados</strong> &bull; Documento Confidencial de Trabajo</div>
      <div>Página 1 de 2</div>
    </div>
  </div>

  <!-- ==================== PÁGINA 2 ==================== -->
  <div class="page">
    <div>
      <!-- Header Página 2 -->
      <div class="header-bar">
        <div class="header-left">
          <img src="data:image/png;base64,{logo_b64}" class="logo-img" alt="Logo">
          <div class="brand-titles">
            <h1>Estudio Jurídico Segura Santana &amp; Asociados</h1>
            <div class="subtitle">Guía de Requerimientos de Información &bull; Pestañas 4 y 5</div>
          </div>
        </div>
        <div class="header-badge">
          <div class="doc-type">Continuación de Guía</div>
          <div class="doc-meta">Metodología &bull; FAQ &bull; Canales de Contacto</div>
        </div>
      </div>

      <!-- SECCIÓN 3: PESTAÑA METODOLOGÍA Y PREGUNTAS FRECUENTES -->
      <div class="section-card">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="num-tag">03</span>
            <span class="section-title">Pestaña: Metodología y Preguntas Frecuentes ("Cómo Trabajamos")</span>
          </div>
          <span class="tab-badge">Pestaña 4 del Sitio</span>
        </div>
        <div class="section-goal">
          <strong>Objetivo:</strong> Generar transparencia, educar al usuario sobre los pasos procesales y resolver dudas antes de contactar.
        </div>

        <div class="cols-2">
          <!-- Esquema de Proceso -->
          <div class="item-box">
            <div class="item-label">
              <span>A. Metodología de 4 Fases (Propuesta)</span>
            </div>
            <div class="item-desc">
              El sitio web presenta este flujo visual de trabajo:
            </div>
            <ol style="margin-left: 14px; margin-top: 4px; font-size: 6.8pt; color: #334155; line-height: 1.35;">
              <li><strong>01. Evaluación Inmediata:</strong> Análisis preliminar y estado procesal.</li>
              <li><strong>02. Auditoría del Expediente:</strong> Revisión de indicios, peritajes y nulidades.</li>
              <li><strong>03. Estrategia &amp; Teoría del Caso:</strong> Pruebas de descargo e interrogatorios.</li>
              <li><strong>04. Litigio Oral Contundente:</strong> Defensa técnica en audiencia de juicio.</li>
            </ol>
            <div style="margin-top: 5px; font-size: 6.8pt; color: #64748b;">
              <span class="chk"></span> <em>Aprobado conforme a la práctica forense del estudio.</em>
            </div>
          </div>

          <!-- Política de Honorarios y FAQs -->
          <div class="item-box highlight">
            <div class="item-label">
              <span>B. Política de Honorarios &amp; Consultas</span>
            </div>
            <div class="item-desc">
              Defina cómo prefiere comunicar el cobro de servicios:
            </div>
            <ul class="checkbox-list" style="margin-top: 4px;">
              <li>
                <span class="chk"></span>
                <span><strong>Honorarios por Etapas:</strong> Contrato escrito fijado por etapa procesal (flagrancia, instrucción, juicio, recursos) sin cobros ocultos.</span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Consulta Inicial:</strong> Indique si la primera cita o evaluación de expediente tiene costo fijo, o si es deducible al asumir el patrocinio: <span class="dotted-line" style="display:inline-block; width:130px; height:8px;"></span></span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Preguntas Frecuentes (FAQ):</strong> Ya se redactaron 5 respuestas sobre detenciones 24h, prisión preventiva, cambio de defensor, honorarios y hábeas corpus. ¿Desea agregar otra pregunta común?: <span class="dotted-line" style="display:inline-block; width:100px; height:8px;"></span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECCIÓN 4: PESTAÑA CONTACTO Y CANALES DE GUARDIA -->
      <div class="section-card">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="num-tag">04</span>
            <span class="section-title">Pestaña: Canales de Contacto y Despacho ("Contacto 24/7")</span>
          </div>
          <span class="tab-badge">Pestaña 5 del Sitio</span>
        </div>
        <div class="section-goal">
          <strong>Objetivo:</strong> Conectar inmediatamente al cliente en crisis con sus líneas telefónicas y WhatsApp, además de capturar casos por formulario web.
        </div>

        <div class="cols-3">
          <!-- Teléfonos y WhatsApp -->
          <div class="item-box">
            <div class="item-label">
              <span>A. Líneas Telefónicas</span>
            </div>
            <div class="item-desc">
              Actualmente configuradas:
            </div>
            <ul class="checkbox-list" style="margin-top: 4px;">
              <li>
                <span class="chk"></span>
                <span><strong>Línea 1 (Principal):</strong><br><code>099 8203 766</code> (WhatsApp 24/7 y llamadas)</span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Línea 2 (Secundaria):</strong><br><code>098 160 3299</code> (¿Es de oficina, colega o asistente?)</span>
              </li>
              <li>
                <span class="chk"></span>
                <span>¿Desea cambiar o mantener ambos números activos en los botones directos?</span>
              </li>
            </ul>
          </div>

          <!-- Ubicación y Despacho -->
          <div class="item-box">
            <div class="item-label">
              <span>B. Sede / Oficina Física</span>
            </div>
            <div class="item-desc">
              Definir formato de visualización:
            </div>
            <ul class="checkbox-list" style="margin-top: 4px;">
              <li>
                <span class="chk"></span>
                <span><strong>Dirección Exacta:</strong> Si desea publicar la oficina física (Edificio, piso, oficina, cantón/ciudad): <span class="dotted-line" style="display:inline-block; width:100%; height:8px;"></span></span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Atención Previa Cita:</strong> O mantener como está: <em>"Atención presencial en despacho previa cita &bull; Cobertura en unidades judiciales a nivel nacional"</em>.</span>
              </li>
            </ul>
          </div>

          <!-- Correo y Formulario -->
          <div class="item-box">
            <div class="item-label">
              <span>C. Correo &amp; Horarios</span>
            </div>
            <div class="item-desc">
              Canales institucionales:
            </div>
            <ul class="checkbox-list" style="margin-top: 4px;">
              <li>
                <span class="chk"></span>
                <span><strong>Correo Electrónico:</strong> Confirmar correo donde deben llegar las consultas del formulario: <span class="dotted-line" style="display:inline-block; width:100%; height:8px;"></span></span>
              </li>
              <li>
                <span class="chk"></span>
                <span><strong>Horarios de Despacho:</strong> Ej. Lunes a Viernes de 09h00 a 18h00 previa cita (Flagrancias activas 24/7).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CUADRO DE ENTREGA FÁCIL: ¿CÓMO ENVIAR ESTA INFORMACIÓN? -->
      <div class="delivery-box">
        <div class="delivery-content">
          <h4>¿Cómo puede hacernos llegar esta información? (Modalidad Rápida)</h4>
          <p>
            Sabemos que su agenda en audiencias y tribunales es sumamente activa. Por ello, <strong>no necesita redactar un documento extenso</strong>:
            puede simplemente enviarnos un <strong>mensaje de WhatsApp, una nota de voz</strong> respondiendo punto por punto, o llenar directamente las líneas de este documento.
          </p>
        </div>
        <div class="channel-badges">
          <div class="badge-channel">&bull; Audio de WhatsApp</div>
          <div class="badge-channel">&bull; Mensaje de Texto</div>
          <div class="badge-channel">&bull; Correo Electrónico</div>
        </div>
      </div>

      <!-- Resumen de Pasos Inmediatos -->
      <div style="margin-top: 8px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 7px 10px;">
        <div style="font-size: 7.2pt; font-weight: 700; color: #1c2237; text-transform: uppercase; font-family: 'Cinzel', serif; margin-bottom: 3px;">
          Próximo Hito: Entrega Integral del Sitio Web y Despliegue en Línea
        </div>
        <p style="font-size: 6.8pt; color: #475569; line-height: 1.3;">
          Una vez recibidas sus validaciones o datos puntuales, integraremos los contenidos definitivos en las 4 pestañas, configuraremos el dominio institucional y realizaremos las pruebas técnicas de envío de formularios y botones directos de WhatsApp para el lanzamiento definitivo.
        </p>
      </div>
    </div>

    <!-- Footer Página 2 -->
    <div class="footer-bar">
      <div><strong>Estudio Jurídico Segura Santana &amp; Asociados</strong> &bull; Soporte y Desarrollo Web Especializado</div>
      <div>Página 2 de 2</div>
    </div>
  </div>

</body>
</html>
"""

# Write HTML file
html_file = os.path.abspath('documento_requerimientos.html')
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"HTML generado exitosamente en: {html_file}")

# Convert to PDF using Chrome Headless
pdf_file = os.path.abspath('Requerimientos_Informacion_SitioWeb_SofiaSegura.pdf')
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

args = [
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_file}",
    html_file
]

res = subprocess.run(args, capture_output=True, text=True)
print("Salida de Chrome:", res.returncode, res.stdout, res.stderr)

if os.path.exists(pdf_file):
    doc = fitz.open(pdf_file)
    print(f"PDF generado con éxito: {pdf_file}")
    print(f"Total de páginas: {len(doc)}")
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=150)
        preview_path = os.path.abspath(f"preview_pagina_{i+1}.png")
        pix.save(preview_path)
        print(f"Vista previa guardada: {preview_path}")
else:
    print("Error: No se encontró el archivo PDF generado.")
