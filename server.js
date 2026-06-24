const http = require('http');

// UMFASSENDE Knowledge Base mit ALLEN 373 Website-URLs aus der Sitemap
const kb = `G&S DIE BALKONBAUER - KOMPLETTE WEBSITE & KNOWLEDGE BASE

ALLE 373 WEBSITE-SEITEN (aus sitemap.xml):

HAUPTSEITEN & NAVIGATION:
https://www.diebalkonbauer.de/
https://www.diebalkonbauer.de/projekte
https://www.diebalkonbauer.de/kontakt
https://www.diebalkonbauer.de/impressum
https://www.diebalkonbauer.de/datenschutz

BALKONE FÜR (ZIELGRUPPEN):
https://www.diebalkonbauer.de/balkone-fuer
https://www.diebalkonbauer.de/balkone-fuer/genossenschaften
https://www.diebalkonbauer.de/balkone-fuer/wohnungsunternehmen
https://www.diebalkonbauer.de/balkone-fuer/architekten
https://www.diebalkonbauer.de/balkone-fuer/gewerbe
https://www.diebalkonbauer.de/balkone-fuer/private-immobilienbesitzer

BALKONSYSTEME & ZUBEHÖR:
https://www.diebalkonbauer.de/balkonsysteme
https://www.diebalkonbauer.de/balkonsysteme/anbaubalkone
https://www.diebalkonbauer.de/balkonsysteme/vorstellbalkone
https://www.diebalkonbauer.de/balkonsysteme/nischenbalkone
https://www.diebalkonbauer.de/balkonsysteme/freitragende-balkone
https://www.diebalkonbauer.de/balkonsysteme/balkonzubehoer
https://www.diebalkonbauer.de/balkonsysteme/balkonzubehoer/balkongelaender
https://www.diebalkonbauer.de/balkonsysteme/balkonzubehoer/balkondaecher
https://www.diebalkonbauer.de/balkonsysteme/balkonzubehoer/blumenkaesten
https://www.diebalkonbauer.de/balkonsysteme/balkonzubehoer/bodenbelaege
https://www.diebalkonbauer.de/balkonsysteme/balkonzubehoer/balkontoerchen

BALKONBAU & LÖSUNGEN:
https://www.diebalkonbauer.de/balkon
https://www.diebalkonbauer.de/balkon-anbau
https://www.diebalkonbauer.de/anbaubalkon
https://www.diebalkonbauer.de/vorstellbalkon
https://www.diebalkonbauer.de/vorstellbalkon-anbauen
https://www.diebalkonbauer.de/balkonbauer
https://www.diebalkonbauer.de/balkonbau
https://www.diebalkonbauer.de/balkonbauer-in-der-naehe
https://www.diebalkonbauer.de/balkone
https://www.diebalkonbauer.de/fertigbalkon-kaufen
https://www.diebalkonbauer.de/balkon-sanieren
https://www.diebalkonbauer.de/balkon-kaufen

BALKONBAUER REGIONAL:
https://www.diebalkonbauer.de/balkonbauer-nrw
https://www.diebalkonbauer.de/balkonbauer-baden-wuerttemberg
https://www.diebalkonbauer.de/balkonbauer-in-hessen
https://www.diebalkonbauer.de/balkonbauer-in-bayern
https://www.diebalkonbauer.de/balkonbauer-hamburg

PREISE & KOSTEN:
https://www.diebalkonbauer.de/was-kostet-ein-balkon-balkonkosten
https://www.diebalkonbauer.de/vorstellbalkon-preise
https://www.diebalkonbauer.de/anbaubalkon-preise
https://www.diebalkonbauer.de/was-kostet-ein-nachtraeglicher-balkonanbau

TOOLS & ANGEBOTE:
https://www.diebalkonbauer.de/balkonrechner
https://www.diebalkonbauer.de/balkonkraftwerk
https://www.diebalkonbauer.de/ausschreibung
https://www.diebalkonbauer.de/aktion

UNTERNEHMEN:
https://www.diebalkonbauer.de/unternehmen/downloads
https://www.diebalkonbauer.de/unternehmen/ueber-uns
https://www.diebalkonbauer.de/unternehmen/unsere-geschichte
https://www.diebalkonbauer.de/unternehmen/sponsoring
https://www.diebalkonbauer.de/unternehmen/service
https://www.diebalkonbauer.de/unternehmen/showroom

FAQ & SERVICE:
https://www.diebalkonbauer.de/faq

MAGAZIN - ALLE 17 ARTIKEL:
https://www.diebalkonbauer.de/magazin
https://www.diebalkonbauer.de/magazin/wird-ein-balkonanbau-gefoerdert
https://www.diebalkonbauer.de/magazin/balkonkraftwerk-800-watt
https://www.diebalkonbauer.de/magazin/balkon-trends-2025
https://www.diebalkonbauer.de/magazin/serielles-bauen
https://www.diebalkonbauer.de/magazin/balkone-fuer-das-erste-3d-gedruckte-mehrfamilienhaus-deutschlands
https://www.diebalkonbauer.de/magazin/balkonkraftwerk-foerderung
https://www.diebalkonbauer.de/magazin/welche-haeuser-muessen-bis-2023-saniert-werden
https://www.diebalkonbauer.de/magazin/was-kostet-es-einen-balkon-abzureissen
https://www.diebalkonbauer.de/magazin/balkon-abreissen
https://www.diebalkonbauer.de/magazin/kann-ein-balkon-abbrechen
https://www.diebalkonbauer.de/magazin/ist-das-rauchen-auf-dem-balkon-erlaubt
https://www.diebalkonbauer.de/magazin/ist-das-grillen-auf-dem-balkon-erlaubt
https://www.diebalkonbauer.de/magazin/die-besten-pflanzen-fuer-den-balkon
https://www.diebalkonbauer.de/magazin/balkon-sichtschutz
https://www.diebalkonbauer.de/magazin/balkonsanierung
https://www.diebalkonbauer.de/magazin/aluminiumbalkon
https://www.diebalkonbauer.de/magazin/balkon-nachruesten

ALLE 301 PROJEKT-SEITEN (Referenzen nach Stadt):
https://www.diebalkonbauer.de/projekte/alubalkone-bochum
https://www.diebalkonbauer.de/projekte/aluminium-balkon-muenchen
https://www.diebalkonbauer.de/projekte/aluminiumbalkon
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-forchheim
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-wuppertal
https://www.diebalkonbauer.de/projekte/aluminiumbalkone
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-paderborn-08-2024-1
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-sendenhorst-1
https://www.diebalkonbauer.de/projekte/anbau-nischenbalkone-hagen-1
https://www.diebalkonbauer.de/projekte/anbaubalkon-vorstellbalkone-duisburg
https://www.diebalkonbauer.de/projekte/anbaubalkon-in-frankfurt
https://www.diebalkonbauer.de/projekte/anbaubalkon-hagen
https://www.diebalkonbauer.de/projekte/anbaubalkon-dortmund
https://www.diebalkonbauer.de/projekte/halle-07-10-2015
https://www.diebalkonbauer.de/projekte/anbaubalkon-aluminium-harsewinkel
https://www.diebalkonbauer.de/projekte/anbaubalkon-rheine-112019
https://www.diebalkonbauer.de/projekte/anbaubalkone-halver-042021
https://www.diebalkonbauer.de/projekte/anbaubalkone-bochum
https://www.diebalkonbauer.de/projekte/anbaubalkone-bochum-innenhof-modernisierung
https://www.diebalkonbauer.de/projekte/spar-und-bauverein-dortmund
https://www.diebalkonbauer.de/projekte/anbaubalkone-dortmund-09-2018
https://www.diebalkonbauer.de/projekte/anbaubalkone-duesseldorf-042021
https://www.diebalkonbauer.de/projekte/anbaubalkone-duesseldorf-2018
https://www.diebalkonbauer.de/projekte/anbaubalkone-ennepetal-2018
https://www.diebalkonbauer.de/projekte/balkonbau-frankfurt-sep2020
https://www.diebalkonbauer.de/projekte/anbaubalkone-bayreuth-2016
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-bielefeld
https://www.diebalkonbauer.de/projekte/anbaubalkone-bottrop-092019
https://www.diebalkonbauer.de/projekte/anbaubalkone-dortmund-102021
https://www.diebalkonbauer.de/projekte/anbaubalkone-aluminium-essen
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-ettlingen
https://www.diebalkonbauer.de/projekte/anbaubalkone-frankfurt-02-2020
https://www.diebalkonbauer.de/projekte/anbaubalkone-frankfurt-102019
https://www.diebalkonbauer.de/projekte/anbaubalkone-frankfurt-092019
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-frankfurt-1
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-hagen-012022
https://www.diebalkonbauer.de/projekte/balkonbau-hagen-mehrfamilienhaus
https://www.diebalkonbauer.de/projekte/anbaubalkone-halle-102019
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-halver
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-hamburg-012022
https://www.diebalkonbauer.de/projekte/anbaubalkone-ludwigsburg
https://www.diebalkonbauer.de/projekte/anbaubalkone-muenster-102019
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-neu-isenburg
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-oberhausen
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-plettenberg-1
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-waiblingen
https://www.diebalkonbauer.de/projekte/anbaubalkone-neuwied
https://www.diebalkonbauer.de/projekte/anbaubalkone-oberhausen-11-2021
https://www.diebalkonbauer.de/projekte/anbaubalkone-wilhelmshaven-2
https://www.diebalkonbauer.de/projekte/balkonbau-in-siegen-2018
https://www.diebalkonbauer.de/projekte/aluminiumbalkon-statt-holzbalkon
https://www.diebalkonbauer.de/projekte/balkon-anbauen-langgoens
https://www.diebalkonbauer.de/projekte/balkon-nachtraeglich-anbauen-soest
https://www.diebalkonbauer.de/projekte/balkonabbruch-soest-06-2022
https://www.diebalkonbauer.de/projekte/balkonanbau-bielefeld-2018
https://www.diebalkonbauer.de/projekte/balkonanbau-in-fulda
https://www.diebalkonbauer.de/projekte/balkonbau-aus-aluminimum
https://www.diebalkonbauer.de/projekte/extra-grosse-balkone-herne-052021
https://www.diebalkonbauer.de/projekte/anbaubalkone-hagen-12-2019
https://www.diebalkonbauer.de/projekte/balkonbau-bottrop-022022
https://www.diebalkonbauer.de/projekte/balkonbau-in-bottrop
https://www.diebalkonbauer.de/projekte/balkonbau-in-bottrop-2018
https://www.diebalkonbauer.de/projekte/balkonbau-darmstadt-022022
https://www.diebalkonbauer.de/projekte/balkonbau-in-dortmund
https://www.diebalkonbauer.de/projekte/balkonbauer-in-dortmund-062021
https://www.diebalkonbauer.de/projekte/balkonbau-in-dortmund-2024
https://www.diebalkonbauer.de/projekte/balkonbau-essen-10-2018
https://www.diebalkonbauer.de/projekte/balkonbau-essen-022022
https://www.diebalkonbauer.de/projekte/balkonbauer-privat-frankfurt-03-2020
https://www.diebalkonbauer.de/projekte/balkonbauer-in-frankfurt
https://www.diebalkonbauer.de/projekte/balkonbau-geslenkirchen-private-immobilienbesitzer
https://www.diebalkonbauer.de/projekte/balkonbau-hagen-2018
https://www.diebalkonbauer.de/projekte/halle-an-der-saale-10-2015
https://www.diebalkonbauer.de/projekte/balkonbau-in-halle-westfalen
https://www.diebalkonbauer.de/projekte/balkonbau-in-hamburg-mit-gs-die-balkonbauer
https://www.diebalkonbauer.de/projekte/balkonbau-in-hamm
https://www.diebalkonbauer.de/projekte/balkonbauer-in-hemer-2023
https://www.diebalkonbauer.de/projekte/balkonbau-hessen-frankfurt
https://www.diebalkonbauer.de/projekte/balkonbau-iserlohn-2017
https://www.diebalkonbauer.de/projekte/balkonbau-muenster-032022
https://www.diebalkonbauer.de/projekte/balkonbau-in-muenster-022024
https://www.diebalkonbauer.de/projekte/balkonbau-in-muenster-09-2018
https://www.diebalkonbauer.de/projekte/balkone-nuernberg-okt2015
https://www.diebalkonbauer.de/projekte/balkonbau-oberhausen-032022
https://www.diebalkonbauer.de/projekte/balkonbau-oberhausen-nischenbalkone-022021
https://www.diebalkonbauer.de/projekte/private-balkone-oer-erkenschwick-09-2015
https://www.diebalkonbauer.de/projekte/balkonbau-in-rheine
https://www.diebalkonbauer.de/projekte/balkonbauer-in-herne-sep2020
https://www.diebalkonbauer.de/projekte/balkonsonderkonstruktion-hagen-112019
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-hemer-1
https://www.diebalkonbauer.de/projekte/balkone-arnsberg-04-2022
https://www.diebalkonbauer.de/projekte/balkone-3er-anlage-bielefeld-04-2022
https://www.diebalkonbauer.de/projekte/balkone-duesseldorf-05-2022
https://www.diebalkonbauer.de/projekte/balkone-frankfurt-vergleich-04-2022
https://www.diebalkonbauer.de/projekte/balkone-frankfurt-stabgelaender-04-2022
https://www.diebalkonbauer.de/projekte/balkone-balkontreppe-hamburg-05-2022
https://www.diebalkonbauer.de/projekte/balkone-herne-05-2022
https://www.diebalkonbauer.de/projekte/balkone-mannheim-05-2022
https://www.diebalkonbauer.de/projekte/balkone-muenster-04-2022
https://www.diebalkonbauer.de/projekte/balkone-wetzlar-05-2022
https://www.diebalkonbauer.de/projekte/balkonbauer-castrop-rauxel-052021
https://www.diebalkonbauer.de/projekte/anbaubalkone-duesseldorf-012021
https://www.diebalkonbauer.de/projekte/balkonbauer-duesseldorf-05-2020
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-frankfurt-04-2020
https://www.diebalkonbauer.de/projekte/balkonbau-furth-im-wald-bayern
https://www.diebalkonbauer.de/projekte/balkonanbau-gelsenkirchen-1
https://www.diebalkonbauer.de/projekte/balkonbauer-in-halstern-am-see
https://www.diebalkonbauer.de/projekte/balkonbauer-im-wangerland
https://www.diebalkonbauer.de/projekte/privat-ahlen-balkon-sonderkonstruktion
https://www.diebalkonbauer.de/projekte/vorstellbalkon-aluminium-bauen-ahlen
https://www.diebalkonbauer.de/projekte/balkonbau-ansbach-09-2015
https://www.diebalkonbauer.de/projekte/balkone-ansbach-bayern
https://www.diebalkonbauer.de/projekte/anbaubalkone-bayreuth
https://www.diebalkonbauer.de/projekte/balkonbauer-in-beckum-vorstellbalkone
https://www.diebalkonbauer.de/projekte/balkonbau-bergneustadt-okt-2013
https://www.diebalkonbauer.de/projekte/balkonbau-genossenschaft-berlin
https://www.diebalkonbauer.de/projekte/nischenbalkone-bielefeld-11-2022
https://www.diebalkonbauer.de/projekte/balkonbauer-bielefeld-07-2019
https://www.diebalkonbauer.de/projekte/balkonbauer-bielefeld-vorstellbalkone-2
https://www.diebalkonbauer.de/projekte/balkonbauer-in-bochum-052021
https://www.diebalkonbauer.de/projekte/balkonbauer-bochum-2018
https://www.diebalkonbauer.de/projekte/bochum-03-2018
https://www.diebalkonbauer.de/projekte/anbaubalkone-bottrop-05-2020
https://www.diebalkonbauer.de/projekte/balkonbauer-in-bottrop-2025
https://www.diebalkonbauer.de/projekte/balkonbau-breckerfeld-09-2015
https://www.diebalkonbauer.de/projekte/balkonbauer-bueckeburg-06-2022
https://www.diebalkonbauer.de/projekte/balkonbauer-budenheim-mainz
https://www.diebalkonbauer.de/projekte/castrop-rauxel-2015
https://www.diebalkonbauer.de/projekte/anbaubalkone-coesfeld-022021
https://www.diebalkonbauer.de/projekte/balkonbauer-detmold-07-2022
https://www.diebalkonbauer.de/projekte/anbaubalkone-detmold-02-2020
https://www.diebalkonbauer.de/projekte/balkonbauer-detmold-07-2019
https://www.diebalkonbauer.de/projekte/balkonbau-dortmund-mai-2013
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-dortmund
https://www.diebalkonbauer.de/projekte/hohenloh-dortmund
https://www.diebalkonbauer.de/projekte/neue-anbaubalkone-dortmund-2020
https://www.diebalkonbauer.de/projekte/balkonbauer-dortmund-03-2020
https://www.diebalkonbauer.de/projekte/balkonbauer-dortmund-08-2019
https://www.diebalkonbauer.de/projekte/dortmund-balkonsanierung-2015
https://www.diebalkonbauer.de/projekte/freitragende-balkone-dreieich
https://www.diebalkonbauer.de/projekte/balkonbauer-in-duisburg
https://www.diebalkonbauer.de/projekte/anbaubalkon-duisburg-04-2020
https://www.diebalkonbauer.de/projekte/balkonbau-duesseldorf-aug-2013
https://www.diebalkonbauer.de/projekte/neue-vorstellbalkone-duesseldorf
https://www.diebalkonbauer.de/projekte/balkonbauer-am-rhein-duesseldorf
https://www.diebalkonbauer.de/projekte/balkonbauer-elpse-lennestadt-sauerland
https://www.diebalkonbauer.de/projekte/balkonbauer-in-eschwege-pestalozzistr-p22-0114
https://www.diebalkonbauer.de/projekte/balkonbauer-in-essen
https://www.diebalkonbauer.de/projekte/balkonbau-in-essen-05-2023
https://www.diebalkonbauer.de/projekte/anbaubalkon-essen-04-2020
https://www.diebalkonbauer.de/projekte/balkongelaenderbauer-essen
https://www.diebalkonbauer.de/projekte/essen-032018
https://www.diebalkonbauer.de/projekte/balkonbauer-in-essen-2017
https://www.diebalkonbauer.de/projekte/balkonbauer-frankfurt-2012
https://www.diebalkonbauer.de/projekte/balkonbau-frankfurt-juli-2013
https://www.diebalkonbauer.de/projekte/balkonbauer-in-frankfut
https://www.diebalkonbauer.de/projekte/balkonsanierung-frankfurt-20-10-2015
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-frankfurt
https://www.diebalkonbauer.de/projekte/balkonbau-anbaubalkon-froendenberg-2016
https://www.diebalkonbauer.de/projekte/balkonbau-gelsenkirchen-mai-2015
https://www.diebalkonbauer.de/projekte/balkonbauer-in-greven
https://www.diebalkonbauer.de/projekte/balkonbauer-in-hagen-nrw
https://www.diebalkonbauer.de/projekte/balkonbau-haben-nischenbalkone
https://www.diebalkonbauer.de/projekte/balkonbauer-profi-in-hagen-anbaubalkone-aus-aluminium
https://www.diebalkonbauer.de/projekte/balkonbauer-in-hagen-teil-3
https://www.diebalkonbauer.de/projekte/hagen-12-2019
https://www.diebalkonbauer.de/projekte/balkonbau-halle-sep-2013
https://www.diebalkonbauer.de/projekte/balkonbau-halle-022019
https://www.diebalkonbauer.de/projekte/haltern-am-see-12-2019
https://www.diebalkonbauer.de/projekte/balkonbau-halver
https://www.diebalkonbauer.de/projekte/6-etagen-balkon-hamburg
https://www.diebalkonbauer.de/projekte/balkonbauer-in-hamburg-grindelallee
https://www.diebalkonbauer.de/projekte/in-hamm-stadionstrasse
https://www.diebalkonbauer.de/projekte/balkonbauer-hamm-082021
https://www.diebalkonbauer.de/projekte/balkonbauer-in-heiligenhaus
https://www.diebalkonbauer.de/projekte/balkonbauer-hemer-102021
https://www.diebalkonbauer.de/projekte/balkonbauer-in-hemer
https://www.diebalkonbauer.de/projekte/neue-anbaubalkone-hemer-2016
https://www.diebalkonbauer.de/projekte/balkonbauer-in-hemer-privat
https://www.diebalkonbauer.de/projekte/vorstellbalkone-herne-01-2020
https://www.diebalkonbauer.de/projekte/balkonbauer-herne-06-2019
https://www.diebalkonbauer.de/projekte/balkonsanierung-herne-12-2015
https://www.diebalkonbauer.de/projekte/balkonbauer-in-herten
https://www.diebalkonbauer.de/projekte/balkonbauer-in-holzwickede
https://www.diebalkonbauer.de/projekte/balkone-iserlohn-sept20151
https://www.diebalkonbauer.de/projekte/balkonbauer-in-iserlohn-genossenschaft
https://www.diebalkonbauer.de/projekte/balkonbauer-in-iserlohn-1
https://www.diebalkonbauer.de/projekte/vorstellbalkone-iserlohn-12-2019
https://www.diebalkonbauer.de/projekte/balkonbauer-iserlohn-05-2019
https://www.diebalkonbauer.de/projekte/anbaubalkone-in-iserlohn-2017
https://www.diebalkonbauer.de/projekte/balkonbauer-friesland-jever-07-2022
https://www.diebalkonbauer.de/projekte/balkonbau-kassel-022019
https://www.diebalkonbauer.de/projekte/balkonbauer-in-koeln-mit-neuen-balkonen-2
https://www.diebalkonbauer.de/projekte/balkonbauer-koenigstein
https://www.diebalkonbauer.de/projekte/neue-balkone-kreuztal-nrw
https://www.diebalkonbauer.de/projekte/balkonbauer-in-kronau-1
https://www.diebalkonbauer.de/projekte/anbaubalkone-langenselbold-11-2022
https://www.diebalkonbauer.de/projekte/langenzenn-06-2015
https://www.diebalkonbauer.de/projekte/balkonbauer-leonberg-07-2019
https://www.diebalkonbauer.de/projekte/balkonbauer-leonberg
https://www.diebalkonbauer.de/projekte/anbaubalkone-luedenscheid-112019
https://www.diebalkonbauer.de/projekte/vorstellbalkone-luedinghausen
https://www.diebalkonbauer.de/projekte/balkonbau-in-ludwigsburg
https://www.diebalkonbauer.de/projekte/balkonbauer-profi-in-moenchengladbach-anbaubalkone-aus-aluminium
https://www.diebalkonbauer.de/projekte/balkonbau-morsbach
https://www.diebalkonbauer.de/projekte/aluminium-balkone-muelheim-08-2022
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-muenchen-bayern
https://www.diebalkonbauer.de/projekte/anbaubalkone-muenchen-122017
https://www.diebalkonbauer.de/projekte/balkonbau-muenster-092020
https://www.diebalkonbauer.de/projekte/balkonbauer-muenster-2019
https://www.diebalkonbauer.de/projekte/balkonbauer-in-muenster
https://www.diebalkonbauer.de/projekte/balkone-aluminium-muenster
https://www.diebalkonbauer.de/projekte/nachrodt-wiblingwerde
https://www.diebalkonbauer.de/projekte/neu-isenburg
https://www.diebalkonbauer.de/projekte/neu-wulmstorf
https://www.diebalkonbauer.de/projekte/balkonbauer-in-neuss
https://www.diebalkonbauer.de/projekte/balkonbauer-in-neustadt-a-d-aisch
https://www.diebalkonbauer.de/projekte/balkonbauer-niederkassel
https://www.diebalkonbauer.de/projekte/balkonbau-norderstedt-032021
https://www.diebalkonbauer.de/projekte/balkonbauer-nottuln-06-2022
https://www.diebalkonbauer.de/projekte/balkonbauer-nuernberg-juni-2013
https://www.diebalkonbauer.de/projekte/anbaubalkone-nuernberg-2017
https://www.diebalkonbauer.de/projekte/balkon-nuernberg-september-2017
https://www.diebalkonbauer.de/projekte/balkonbau-oberhausen-022019
https://www.diebalkonbauer.de/projekte/anbaubalkone-osterhofen-2017
https://www.diebalkonbauer.de/projekte/balkonbau-osterhofen-bayern
https://www.diebalkonbauer.de/projekte/aluminiumbalkone-paderborn
https://www.diebalkonbauer.de/projekte/neue-nischen-balkone-paderborn
https://www.diebalkonbauer.de/projekte/bayern-muenchen-pliening
https://www.diebalkonbauer.de/projekte/anbaubalkone-pulheim-09-2022
https://www.diebalkonbauer.de/projekte/balkonbau-recklinghausen-08-2019
https://www.diebalkonbauer.de/projekte/balkonbau-remscheid-jan-2013
https://www.diebalkonbauer.de/projekte/moderne-balkone-rheine-20150
https://www.diebalkonbauer.de/projekte/vorstellbalkone-aluminium-rheine
https://www.diebalkonbauer.de/projekte/balkonbauer-rheine-07-2019
https://www.diebalkonbauer.de/projekte/moderne-balkone-rotenburg
https://www.diebalkonbauer.de/projekte/balkonbau-roethenbach
https://www.diebalkonbauer.de/projekte/balkonbauer-in-seligenstadt
https://www.diebalkonbauer.de/projekte/balkonbauer-in-sendenhorst
https://www.diebalkonbauer.de/projekte/balkonbau-siegburg
https://www.diebalkonbauer.de/projekte/anbaubalkone-soest-11-2022
https://www.diebalkonbauer.de/projekte/anbaubalkone-soest-09-2022
https://www.diebalkonbauer.de/projekte/balkonbau-soest-08-2022
https://www.diebalkonbauer.de/projekte/balkonbauer-in-soest
https://www.diebalkonbauer.de/projekte/balkonbauer-solingen-07-2019
https://www.diebalkonbauer.de/projekte/balkonbau-stuttgart-vorstellbalkone
https://www.diebalkonbauer.de/projekte/balkonbauer-in-taunusstein
https://www.diebalkonbauer.de/projekte/anbaubalkone-verden-06-2020
https://www.diebalkonbauer.de/projekte/balkonbauer-verden-06-2019
https://www.diebalkonbauer.de/projekte/anbaubalkone-vreden-2017
https://www.diebalkonbauer.de/projekte/balkone-mit-milchlasgelaender-waltrop
https://www.diebalkonbauer.de/projekte/balkonbauer-in-wanne-eickel
https://www.diebalkonbauer.de/projekte/weingarten
https://www.diebalkonbauer.de/projekte/anbaubalkone-werther-06-2020
https://www.diebalkonbauer.de/projekte/balkonsysteme-wetzlar-2022-01
https://www.diebalkonbauer.de/projekte/balkonbauer-witten
https://www.diebalkonbauer.de/projekte/anbaubalkone-wolfenbuettel-2017
https://www.diebalkonbauer.de/projekte/balkonbau-wulfen-032021
https://www.diebalkonbauer.de/projekte/balkonbauer-wuppertal-2012
https://www.diebalkonbauer.de/projekte/balkonbauer-wuppertal-07-2019
https://www.diebalkonbauer.de/projekte/anbaubalkone-wuerzburg-2016
https://www.diebalkonbauer.de/projekte/alumimiumbalkone-nettetal
https://www.diebalkonbauer.de/projekte/wir-schaffen-ausblicke-in-muenster
https://www.diebalkonbauer.de/projekte/balkonbauer-wohnungsbau-rheine-2
https://www.diebalkonbauer.de/projekte/anbaubalkone-wolfenbuettel-012021
https://www.diebalkonbauer.de/projekte/balkongelaender-hagen
https://www.diebalkonbauer.de/projekte/balkone-neubau-rheine
https://www.diebalkonbauer.de/projekte/balkone-in-ahlen
https://www.diebalkonbauer.de/projekte/balkone-nach-mass-rheine-2018
https://www.diebalkonbauer.de/projekte/balkonbau-freckenhorst
https://www.diebalkonbauer.de/projekte/balkonkaesten-hagen
https://www.diebalkonbauer.de/projekte/balkonkonzept-forchheim-2016
https://www.diebalkonbauer.de/projekte/balkonlieferung-dortmund
https://www.diebalkonbauer.de/projekte/balkonmacher-nuernberg
https://www.diebalkonbauer.de/projekte/balkonmodernisierung-hamburg
https://www.diebalkonbauer.de/projekte/052016-balkonmodernisierung-muenchen
https://www.diebalkonbauer.de/projekte/balkonmontage-essen-ruettenscheid
https://www.diebalkonbauer.de/projekte/balkonmontage-herne-052021
https://www.diebalkonbauer.de/projekte/balkonsanierer-neustadt
https://www.diebalkonbauer.de/projekte/balkonsanierung-vorher-nachher
https://www.diebalkonbauer.de/projekte/balkonsanierung-bad-homburg-1
https://www.diebalkonbauer.de/projekte/balkonsanierung-in-dortmund
https://www.diebalkonbauer.de/projekte/balkonsanierung-frankfurt-am-main
https://www.diebalkonbauer.de/projekte/balkonsanierung-hagen-2016
https://www.diebalkonbauer.de/projekte/balkonsanierung-herne-082021
https://www.diebalkonbauer.de/projekte/balkonsanierung-nuernberg
https://www.diebalkonbauer.de/projekte/balkonsanierung-muenster-1
https://www.diebalkonbauer.de/projekte/balkonspezialist-nuernberg-2016
https://www.diebalkonbauer.de/projekte/balkonsysteme-rheine
https://www.diebalkonbauer.de/projekte/balkonterasse-in-fuessen
https://www.diebalkonbauer.de/projekte/balkontreppen-frankfurt
https://www.diebalkonbauer.de/projekte/vorstellbalkone-hagen
https://www.diebalkonbauer.de/projekte/balkontuerme-luedenscheid
https://www.diebalkonbauer.de/projekte/barrierefreier-balkon
https://www.diebalkonbauer.de/projekte/bauausfuehrungen-hamburg
https://www.diebalkonbauer.de/projekte/balkonbau-firmengebaeude-nuernberg
https://www.diebalkonbauer.de/projekte/balkonbau-frankfurt-082021
https://www.diebalkonbauer.de/projekte/freitragende-balkone-kleve
https://www.diebalkonbauer.de/projekte/balkonbau-in-beckum
https://www.diebalkonbauer.de/projekte/balkonbau-herne-10-2018
https://www.diebalkonbauer.de/projekte/balkone-frankfurt-oktober-2015
https://www.diebalkonbauer.de/projekte/balkone-mit-glasgelaender-herne-2022-01
https://www.diebalkonbauer.de/projekte/balkone-mit-gelaender-stuttgart
https://www.diebalkonbauer.de/projekte/balkonbau-bottrop-sep2020
https://www.diebalkonbauer.de/projekte/balkone-fuer-haus-aus-dem-3d-drucker-1
https://www.diebalkonbauer.de/projekte/individuelle-balkone
https://www.diebalkonbauer.de/projekte/zeit-fuer-balkonsanierung-2015
https://www.diebalkonbauer.de/projekte/moderner-balkonbau-klostergarten-forchheim
https://www.diebalkonbauer.de/projekte/megabalkone-systembalkone-iserlohn
https://www.diebalkonbauer.de/projekte/metallbauer-in-hemer
https://www.diebalkonbauer.de/projekte/minibalkon-hamburg
https://www.diebalkonbauer.de/projekte/moderne-anbaubalkone-in-duesseldorf-erkrath
https://www.diebalkonbauer.de/projekte/moderner-balkonbau-in-ladenburg
https://www.diebalkonbauer.de/projekte/nachtraeglich-balkonanbau-dortmund-2018
https://www.diebalkonbauer.de/projekte/nachtraeglicher-balkonanbau-bottrop
https://www.diebalkonbauer.de/projekte/nachtraeglicher-balkonanbau-essen-1
https://www.diebalkonbauer.de/projekte/nachtraeglicher-balkonanbau-gelsenkirchen
https://www.diebalkonbauer.de/projekte/frankfurt-nachtraeglicher-balkonanbau-12-2019
https://www.diebalkonbauer.de/projekte/neubau-in-beckum-1
https://www.diebalkonbauer.de/projekte/neue-anbaubalkone-aus-alu-in-hagen
https://www.diebalkonbauer.de/projekte/anbau-balkon-wetter-2015
https://www.diebalkonbauer.de/projekte/neue-balkone-hamburg-12-202
https://www.diebalkonbauer.de/projekte/modern-balkone-frankfurt-20150
https://www.diebalkonbauer.de/projekte/neue-balkone-hagen
https://www.diebalkonbauer.de/projekte/neue-balkone-in-muenster
https://www.diebalkonbauer.de/projekte/anbaubalkone-nuernberg
https://www.diebalkonbauer.de/projekte/neue-vorstellbalkone-in-hamburg
https://www.diebalkonbauer.de/projekte/vorstellbalkone-rheine-2018
https://www.diebalkonbauer.de/projekte/privater-freitragender-balkon-herne
https://www.diebalkonbauer.de/projekte/nischenbalkon-kleve
https://www.diebalkonbauer.de/projekte/nischenbalkone-bielefeld-2018
https://www.diebalkonbauer.de/projekte/nischen-balkone-hemer-11-2021
https://www.diebalkonbauer.de/projekte/nischenbalkone-frankfurt-2018
https://www.diebalkonbauer.de/projekte/hagen-nischenbalkone-04-2018
https://www.diebalkonbauer.de/projekte/nischenbalkone-muenster-112019
https://www.diebalkonbauer.de/projekte/neue-nischenbalkone-neuwied-2016
https://www.diebalkonbauer.de/projekte/nischenbalkone-in-paderborn
https://www.diebalkonbauer.de/projekte/nischenbalkone-neuwied
https://www.diebalkonbauer.de/projekte/nischenbalkone-paderborn-06-2021
https://www.diebalkonbauer.de/projekte/nischenloesungen-sonderkonstruktionen
https://www.diebalkonbauer.de/projekte/balkone-nuernberg-sept2015
https://www.diebalkonbauer.de/projekte/privat-balkon-gelsenkirchen
https://www.diebalkonbauer.de/projekte/privater-balkon-warendorf
https://www.diebalkonbauer.de/projekte/balkonbau-profi-rheine
https://www.diebalkonbauer.de/projekte/balkonbau-sonderkonstruktion-holzwickede
https://www.diebalkonbauer.de/projekte/sonderkonstruktion-in-ennepetal
https://www.diebalkonbauer.de/projekte/sonderkonstruktion-kiel
https://www.diebalkonbauer.de/projekte/balkonbau-sonderkonstruktion-verglasung-luenen
https://www.diebalkonbauer.de/projekte/sonderloesung-hamburg-3
https://www.diebalkonbauer.de/projekte/metallbauer-muenster
https://www.diebalkonbauer.de/projekte/stuetzenlose-balkone-in-frankfurt-1
https://www.diebalkonbauer.de/projekte/balkonsanierung-wuppertal-juni-2015
https://www.diebalkonbauer.de/projekte/vorstellbalkon-in-bielefeld
https://www.diebalkonbauer.de/projekte/vorstellbalkon-in-hemer
https://www.diebalkonbauer.de/projekte/vorstellbalkon-in-herne-nachtraeglich-angebaut
https://www.diebalkonbauer.de/projekte/vorstellbalkon-moers
https://www.diebalkonbauer.de/projekte/caritas-ahlen
https://www.diebalkonbauer.de/projekte/vorstellbalkone-dortmund-balkonbauer
https://www.diebalkonbauer.de/projekte/vorstellbalkone-balkone-duisburg
https://www.diebalkonbauer.de/projekte/vorstellbalkone-aluminium-duesseldorf
https://www.diebalkonbauer.de/projekte/vorstellbalkone-bottrop-092019
https://www.diebalkonbauer.de/projekte/vorstellbalkone-in-darmstadt
https://www.diebalkonbauer.de/projekte/vorstellbalkone-in-frankfurt
https://www.diebalkonbauer.de/projekte/vorstellbalkone-in-muenster-1
https://www.diebalkonbauer.de/projekte/vorstellbalkone-in-muenster
https://www.diebalkonbauer.de/projekte/vorstellbalkone-in-neuwied
https://www.diebalkonbauer.de/projekte/vorstellbalkone-in-oelde
https://www.diebalkonbauer.de/projekte/vorstellbalkone-in-recklinghausen-1
https://www.diebalkonbauer.de/projekte/balkonbau-wohnungsunternehmen-rheine
https://www.diebalkonbauer.de/projekte/vorstellbalkone-wetter-an-der-ruhr
https://www.diebalkonbauer.de/projekte/vorstell-balkone-muelheim-12-2021
https://www.diebalkonbauer.de/projekte/vorstellbalkone-varel
https://www.diebalkonbauer.de/projekte/zweifamilienhaus-balkone-ahlen`;

const http = require('http');

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST' || req.url !== '/api/chat') {
    res.writeHead(404);
    res.end(JSON.stringify({error: 'Not found'}));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      const { messages } = JSON.parse(body);
      const key = process.env.ANTHROPIC_API_KEY;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-opus-4-6',
          max_tokens: 500,
          system: `Du bist ein Kundenservice-Chatbot für G&S die balkonbauer GmbH. Antworte natürlich und direkt - kein Marketing-Sprech, keine Emojis, kein fett-Text. Kurze, prägnante Sätze.

WICHTIG - Lead-Generierung & Links:
- Nutze AUSSCHLIESSLICH diese Informationen: ${kb}
- **URLs IMMER als plain Text ausgeben (z.B. https://www.diebalkonbauer.de/projekte/alubalkone-bochum)**
- **NIEMALS Markdown-Links verwenden [Text](URL) - nur plain URLs!**
- **Merke dir den Kontext:** Wenn der User auf deine Frage antwortet, baue darauf auf
- **Lead-Generierung:** Frage aktiv: "Möchtest du auch einen ähnlichen Balkon?", "Interessiert dich ein Angebot?"
- **Balkonrechner pushen:** https://www.diebalkonbauer.de/balkonrechner wenn User interessiert ist
- **NICHT mit Kontaktdaten enden** - frage stattdessen, ob interessiert
- Fließtext, keine Bulletpoints

WENN UNBEKANNT:
- Sag es ehrlich
- Gib Kontakt: 02382 98973-0, info@diebalkonbauer.de`,
          messages: messages
        })
      });

      const data = await response.json();
      res.writeHead(response.status);
      res.end(JSON.stringify(data));
    } catch(e) {
      res.writeHead(500);
      res.end(JSON.stringify({error: e.message}));
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
