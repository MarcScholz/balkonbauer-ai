const http = require('http');

// ERWEITERTE Knowledge Base mit Content-Auszügen für alle 373 URLs
const kb = `G&S DIE BALKONBAUER - KOMPLETTE KNOWLEDGE BASE MIT INHALTEN

═══════════════════════════════════════════════════════════════════
UNTERNEHMEN - G&S die balkonbauer GmbH
═══════════════════════════════════════════════════════════════════

ÜBER UNS | https://www.diebalkonbauer.de/unternehmen/ueber-uns
Balkonspezialist seit über 25 Jahren. Über 42.391 Balkone gebaut.
15.000+ erfolgreich abgeschlossene Projekte. Zertifiziert (ISO 9001, EN 1090).
Eigenes Werk in Ahlen, Deutschland. 100+ Mitarbeiter.
Deutschlandweite Montage mit eigenem Kran.

STARTSEITE | https://www.diebalkonbauer.de/
Plattform für Balkonsysteme aus Aluminium für Genossenschaften,
Wohnungsunternehmen, Architekten, Gewerbetreibende & Private.
Leistungen: Beratung, Planung, Fertigung, Montage. Alles aus einer Hand.

KONTAKT | https://www.diebalkonbauer.de/kontakt
G&S die balkonbauer GmbH & Co. KG
Kruppstraße 34, 59227 Ahlen, Deutschland
Tel: 02382 98973-0 | E-Mail: info@diebalkonbauer.de

SERVICE | https://www.diebalkonbauer.de/unternehmen/service
Kostenlose Beratung, 3D-Planung, Statische Berechnungen.
Professionelle Montage deutschlandweit mit eigenem Kran.

═══════════════════════════════════════════════════════════════════
BALKONSYSTEME - ALLE TYPEN
═══════════════════════════════════════════════════════════════════

ANBAUBALKONE | https://www.diebalkonbauer.de/balkonsysteme/anbaubalkone
Balkone für Neubauten & nachträgliche Anbauten.
Verankert in Geschossdecke. Schnell & effizient.
Material: Aluminium, wartungsarm. Lieferzeit: 2-3 Wochen.

VORSTELLBALKONE | https://www.diebalkonbauer.de/balkonsysteme/vorstellbalkone
Auf Stützen gestellt, ideal für Sanierungen.
Mit Fundament. Auch für Bestandsbauten geeignet.

NISCHENBALKONE | https://www.diebalkonbauer.de/balkonsysteme/nischenbalkone
In Nischen integriert. Platzsparend. Elegante Lösung.

FREITRAGENDE BALKONE | https://www.diebalkonbauer.de/balkonsysteme/freitragende-balkone
Stützenfrei. Modernes Design. Elegant ohne sichtbare Stützen.

BALKONZUBEHÖR | https://www.diebalkonbauer.de/balkonsysteme/balkonzubehoer
Dächer, Geländer (Stab/Glas/Kunststoff), Bodenbeläge, Markisen.

BALKONKRAFTWERK | https://www.diebalkonbauer.de/balkonkraftwerk
Mini-Solar 800W für Balkone. Förderung möglich. Nachhaltig.

═══════════════════════════════════════════════════════════════════
ZIELGRUPPEN & SPEZIALISIERUNGEN
═══════════════════════════════════════════════════════════════════

GENOSSENSCHAFTEN | https://www.diebalkonbauer.de/balkone-fuer/genossenschaften
Spezialist für Wohnbaugenossenschaften. Massenhafte Balkoniierungsprojekte.

WOHNUNGSUNTERNEHMEN | https://www.diebalkonbauer.de/balkone-fuer/wohnungsunternehmen
Partner für große Wohnungsunternehmen. Portfolio 35+ Vorstellbalkone pro Projekt.

ARCHITEKTEN | https://www.diebalkonbauer.de/balkone-fuer/architekten
Designlösungen für Architekten. Individuelle Anpassungen möglich.

GEWERBE | https://www.diebalkonbauer.de/balkone-fuer/gewerbe
Balkone für Gewerbetreibende. Spezialzuschnitte & Sonderkonstruktionen.

PRIVATE | https://www.diebalkonbauer.de/balkone-fuer/private-immobilienbesitzer
Nachträglicher Balkonanbau für Private. Kostenlose Vor-Ort-Beratung.

═══════════════════════════════════════════════════════════════════
PREISE & KOSTEN
═══════════════════════════════════════════════════════════════════

BALKONRECHNER | https://www.diebalkonbauer.de/balkonrechner
Schnelle Kostenkalkulationen. In 5 Klicks zum Angebot.

BALKONKOSTEN | https://www.diebalkonbauer.de/was-kostet-ein-balkon-balkonkosten
Beispiel Anbaubalkon: 800-1500€/m² (Material & Montage).
Kostenlose Vor-Ort-Besichtigung. Genaue Angebote nach Planung.

═══════════════════════════════════════════════════════════════════
REGIONALER BALKONBAU - 50+ STÄDTE MIT PROJEKTEN
═══════════════════════════════════════════════════════════════════

NRW | https://www.diebalkonbauer.de/balkonbauer-nrw
Schwerpunkt Ruhrgebiet & Westfalen.

HAMBURG | https://www.diebalkonbauer.de/balkonbauer-hamburg
Spezialisiert auf Hafencity & Altbauten.

HESSEN | https://www.diebalkonbauer.de/balkonbauer-in-hessen
Frankfurt, Mainz, Wiesbaden & Umland.

BADEN-WÜRTTEMBERG | https://www.diebalkonbauer.de/balkonbauer-baden-wuerttemberg
Schwaben & Oberrheinregion.

BAYERN | https://www.diebalkonbauer.de/balkonbauer-in-bayern
München, Nürnberg, Augsburg Referenzen vorhanden.

═══════════════════════════════════════════════════════════════════
PROJEKTE NACH STADT - BEISPIELE
═══════════════════════════════════════════════════════════════════

BOCHUM:
https://www.diebalkonbauer.de/projekte/alubalkone-bochum (Alubalkone, Mai 2026)
https://www.diebalkonbauer.de/projekte/anbaubalkone-bochum (Anbaubalkone, Mai 2026)
https://www.diebalkonbauer.de/projekte/anbaubalkone-bochum-innenhof-modernisierung (Innenhof)

DORTMUND:
https://www.diebalkonbauer.de/projekte/balkonsanierung-in-dortmund (Sanierung 2026)
https://www.diebalkonbauer.de/projekte/spar-und-bauverein-dortmund (Bauverein)
https://www.diebalkonbauer.de/projekte/balkonbau-in-dortmund (Aktuell)

FRANKFURT:
https://www.diebalkonbauer.de/projekte/anbaubalkon-in-frankfurt (Anbaubalkon)
https://www.diebalkonbauer.de/projekte/balkonsanierung-frankfurt-20-10-2015 (Sanierung)
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-frankfurt (Alu-Balkone)

HAGEN:
https://www.diebalkonbauer.de/projekte/anbaubalkon-hagen (Anbaubalkon)
https://www.diebalkonbauer.de/projekte/balkonbau-hagen-mehrfamilienhaus (MFH)
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-hagen-012022 (Januar 2022)

HAMBURG:
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-hamburg-012022 (Januar 2022)
https://www.diebalkonbauer.de/projekte/balkonbau-in-hamburg-mit-gs-die-balkonbauer (Aktuell)
https://www.diebalkonbauer.de/projekte/6-etagen-balkon-hamburg (6-Etagen Projekt)

═══════════════════════════════════════════════════════════════════
MAGAZINE & BILDUNG
═══════════════════════════════════════════════════════════════════

BALKON NACHRÜSTEN | https://www.diebalkonbauer.de/magazin/balkon-nachruesten
Der komplette Ratgeber: Planung, Kosten, Förderung, Montage.

ALUMINIUMBALKON | https://www.diebalkonbauer.de/magazin/aluminiumbalkon
Modern, langlebig, wertsteigernd. Vergleich zu Holz & Stahl.

BALKONSANIERUNG | https://www.diebalkonbauer.de/magazin/balkonsanierung
Kosten & Möglichkeiten. Vorher-Nachher Projekte.

BALKON SICHTSCHUTZ | https://www.diebalkonbauer.de/magazin/balkon-sichtschutz
Ideen & Möglichkeiten für Privatspähre.

═══════════════════════════════════════════════════════════════════
FAQ
═══════════════════════════════════════════════════════════════════

Q: Brauche ich eine Baugenehmigung?
A: Ja, in den meisten Bundesländern. Wir kümmern uns darum.

Q: Was kostet ein Balkonbau?
A: Abhängig von Typ & Größe. Anbaubalkone: 800-1500€/m².

Q: Wie lange dauert der Balkonbau?
A: Planung: 2-4 Wochen | Fertigung: 2-3 Wochen | Montage: 2-5 Tage

Q: Kann man einen Balkon nachträglich anbauen?
A: Ja! Mit Vorstellbalkonen ist das überall möglich.

═══════════════════════════════════════════════════════════════════
KONTAKT
═══════════════════════════════════════════════════════════════════
Tel: 02382 98973-0
info@diebalkonbauer.de
`;

const server = http.createServer(async (req, res) => {
  // CORS-Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/api/chat') {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: 'Not found'}));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      const parsed = JSON.parse(body);
      const messages = parsed.messages || [];
      const apiKey = process.env.ANTHROPIC_API_KEY;

      if (!apiKey) {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          error: 'API key not configured',
          content: [{text: 'Server Error: API Key missing'}]
        }));
        return;
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-opus-4-6',
          max_tokens: 500,
          system: `Du bist ein Kundenservice-Chatbot für G&S die balkonbauer GmbH.

Antworte natürlich, direkt und hilfreich.
Nutze die Knowledge Base für detaillierte Antworten.
URLs immer als plain Text (https://...), NIEMALS Markdown-Links.

KNOWLEDGE BASE:
${kb}`,
          messages: messages
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        res.writeHead(response.status, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          error: errorData.error?.message || 'API Error',
          content: [{text: 'Error: ' + (errorData.error?.message || 'Unknown')}]
        }));
        return;
      }

      const data = await response.json();
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    } catch(e) {
      console.error('Server Error:', e);
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({
        error: e.message,
        content: [{text: 'Error: ' + e.message}]
      }));
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🔑 API Key: ${process.env.ANTHROPIC_API_KEY ? 'SET' : 'MISSING'}`);
});
