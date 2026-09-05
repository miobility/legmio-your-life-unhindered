import { metaDe } from "@/lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";
import { INK, LINE, MUTED, MUTED_INK, SAND, WHITE } from "@/lib/couleurs";

export const Route = createFileRoute("/faq")({
  head: () => metaDe("fr", "faq"),
  component: Faq,
});

type Item = { q: [string, string, string]; a: [string, string, string] };
type Theme = { title: [string, string, string]; items: Item[] };

const themes: Theme[] = [
  {
    title: ["Morphologie utilisateur", "User morphology", "Nutzer-Morphologie"],
    items: [
      { q: ["Quelle est la taille et le poids maximum supportés par legmio ?", "What is the maximum height and weight supported by legmio?", "Welche maximale Größe und welches maximale Gewicht unterstützt legmio?"], a: ["legmio convient aux utilisateurs mesurant entre 1m50 et 1m95, pour un poids jusqu'à 130 kg. Des travaux sont en cours pour élargir ce spectre.", "legmio is suitable for users between 1.50m and 1.95m tall, for a weight of up to 130 kg. Work is underway to widen this range.", "legmio eignet sich für Nutzer zwischen 1,50 m und 1,95 m Körpergröße, bei einem Gewicht von bis zu 130 kg. Es wird daran gearbeitet, diesen Bereich zu erweitern."] },
      { q: ["Comment régler legmio à ma taille ?", "How do I adjust legmio to my size?", "Wie stelle ich legmio auf meine Größe ein?"], a: ["La béquille se règle manuellement à deux niveaux — la poignée et l'appui coude — pour s'adapter à votre taille.", "The crutch is manually adjustable at two levels — the handle and the elbow support — to adapt to your size.", "Die Krücke lässt sich manuell auf zwei Ebenen einstellen — am Griff und an der Ellbogenstütze — um sich an Ihre Größe anzupassen."] },
      { q: ["legmio est-elle utilisable par des enfants ?", "Can legmio be used by children?", "Kann legmio von Kindern verwendet werden?"], a: ["legmio est adaptée aux utilisateurs mesurant au minimum 1m50.", "legmio is suitable for users measuring at least 1.50m.", "legmio ist für Nutzer mit einer Mindestgröße von 1,50 m geeignet."] },
    ],
  },
  {
    title: ["Caractéristiques de la béquille", "Crutch specifications", "Krücken-Eigenschaften"],
    items: [
      { q: ["Quel est le poids de legmio ?", "How much does legmio weigh?", "Wie viel wiegt legmio?"], a: ["850 grammes.", "850 grams.", "850 Gramm."] },
      { q: ["Quelle est la taille de la béquille ?", "What is the size of the crutch?", "Wie groß ist die Krücke?"], a: ["La béquille mesure entre 1m10 et 1m40, réglable manuellement au niveau de la poignée et de l'appui coude.", "The crutch measures between 1.10m and 1.40m, manually adjustable at the handle and the elbow support.", "Die Krücke misst zwischen 1,10 m und 1,40 m und ist manuell am Griff und an der Ellbogenstütze verstellbar."] },
      { q: ["Dans quelles matières legmio est-elle fabriquée ?", "What materials is legmio made of?", "Aus welchen Materialien ist legmio gefertigt?"], a: ["La structure est en aluminium. La poignée est en nylon renforcé (GF30) avec revêtement TPU et mousse nitrile pour le confort. Le tissu d'appui est synthétique avec laminage TPU. La sangle est synthétique, les attaches en velcro.", "The structure is made of aluminum. The handle is made of reinforced nylon (GF30) with a TPU coating and nitrile foam for comfort. The support fabric is synthetic with a TPU lamination. The strap is synthetic, with velcro fastenings.", "Die Struktur besteht aus Aluminium. Der Griff besteht aus verstärktem Nylon (GF30) mit TPU-Beschichtung und Nitrilschaum für den Komfort. Der Stützstoff ist synthetisch mit TPU-Laminierung. Der Riemen ist synthetisch, die Verschlüsse sind Klettverschlüsse."] },
      { q: ["Les embouts sont-ils remplaçables ?", "Are the tips replaceable?", "Sind die Aufsätze austauschbar?"], a: ["Oui. legmio sera livrée avec un embout standard en TPU, interchangeable avec les embouts du marché (diamètre 18/19 mm).", "Yes. legmio will come with a standard TPU tip, interchangeable with tips available on the market (18/19 mm diameter).", "Ja. legmio wird mit einem Standardaufsatz aus TPU geliefert werden, der mit im Handel erhältlichen Aufsätzen (Durchmesser 18/19 mm) austauschbar ist."] },
    ],
  },
  {
    title: ["Embouts", "Tips", "Aufsätze"],
    items: [
      { q: ["L'embout de legmio est-il interchangeable ?", "Is the legmio tip interchangeable?", "Ist der Aufsatz von legmio austauschbar?"], a: ["Oui, très facilement et sans outil. legmio est compatible avec les embouts standards du marché de 18/19 mm de diamètre.", "Yes, very easily and without any tool. legmio is compatible with standard 18/19 mm diameter market tips.", "Ja, sehr einfach und ohne Werkzeug. legmio ist mit handelsüblichen Standardaufsätzen mit 18/19 mm Durchmesser kompatibel."] },
      { q: ["Quel embout pour ne pas glisser ?", "Which tip prevents slipping?", "Welcher Aufsatz verhindert Rutschen?"], a: ["L'embout caoutchouc standard convient dans la plupart des situations. Pour plus d'accroche (extérieur, sol mouillé), le Flexyfoot reste en contact permanent avec le sol et offre jusqu'à 50 % d'adhérence supplémentaire par rapport à un embout classique.", "The standard rubber tip is suitable for most situations. For more grip (outdoors, wet ground), the Flexyfoot stays in constant contact with the ground and offers up to 50% more grip than a classic tip.", "Der Standardgummiaufsatz eignet sich für die meisten Situationen. Für mehr Halt (im Freien, auf nassem Untergrund) bleibt der Flexyfoot dauerhaft in Kontakt mit dem Boden und bietet bis zu 50 % mehr Grip als ein klassischer Aufsatz."] },
      { q: ["legmio peut-elle tenir debout seule ?", "Can legmio stand upright on its own?", "Kann legmio von selbst aufrecht stehen?"], a: ["Oui, avec un embout trépied stabilisateur compatible 18/19 mm. Un quart de tour suffit pour passer de la position de marche à la position debout — ainsi la béquille tient seule lors des pauses sans nécessiter de support.", "Yes, with a compatible 18/19 mm tripod stabilizer tip. A quarter turn is enough to switch from the walking position to the standing position — so the crutch stands on its own during breaks without needing support.", "Ja, mit einem kompatiblen 16-mm-Stativ-Stabilisatoraufsatz. Eine Vierteldrehung genügt, um von der Gehposition in die Standposition zu wechseln — so steht die Krücke bei Pausen von selbst, ohne Stütze zu benötigen."] },
      { q: ["Quand changer l'embout ?", "When should the tip be replaced?", "Wann sollte der Aufsatz gewechselt werden?"], a: ["Dès les premiers signes d'usure. En usage quotidien, comptez environ tous les 3 à 6 mois.", "At the first signs of wear. With daily use, count on roughly every 3 to 6 months.", "Bei den ersten Anzeichen von Verschleiß. Bei täglichem Gebrauch sollte man etwa alle 3 bis 6 Monate rechnen."] },
    ],
  },
  {
    title: ["Amortissement", "Cushioning", "Dämpfung"],
    items: [
      { q: ["legmio amortit-elle les chocs ?", "Does legmio absorb shocks?", "Dämpft legmio Stöße?"], a: ["Oui, via deux niveaux : une mousse intégrée à la poignée absorbe les vibrations à la prise en main, et l'embout Flexyfoot (en option) ajoute un amortissement au sol via son système de soufflet flexible.", "Yes, through two levels: a foam integrated into the handle absorbs vibrations at the grip, and the optional Flexyfoot tip adds ground cushioning via its flexible bellows system.", "Ja, über zwei Ebenen: Ein in den Griff integrierter Schaumstoff dämpft Vibrationen beim Greifen, und der optionale Flexyfoot-Aufsatz sorgt über sein flexibles Balgsystem für zusätzliche Bodendämpfung."] },
      { q: ["La béquille est-elle confortable sur la durée ?", "Is the crutch comfortable over time?", "Ist die Krücke auf Dauer bequem?"], a: ["La mousse de poignée réduit les contraintes au niveau du poignet. La redistribution des zones d'appui limite la fatigue du bras et de l'épaule par rapport à une béquille classique.", "The handle foam reduces strain on the wrist. The redistribution of support zones limits arm and shoulder fatigue compared to a classic crutch.", "Der Griffschaum reduziert die Belastung des Handgelenks. Die Umverteilung der Stützzonen verringert im Vergleich zu einer klassischen Krücke die Ermüdung von Arm und Schulter."] },
    ],
  },
  {
    title: ["Livraison internationale", "International shipping", "Internationaler Versand"],
    items: [
      { q: ["legmio est-elle disponible à l'international ?", "Is legmio available internationally?", "Ist legmio international verfügbar?"], a: ["Ce sera possible au lancement : la commande se fera depuis votre pays directement sur notre site. Les frais de douane et taxes locales éventuels resteront à votre charge à la réception.", "This will be possible at launch: you will be able to order from your country directly on our website. Any customs fees and local taxes will remain your responsibility upon receipt.", "Das wird zum Marktstart möglich sein: Sie werden aus Ihrem Land direkt auf unserer Website bestellen können. Eventuell anfallende Zoll- und lokale Steuern gehen bei Erhalt zu Ihren Lasten."] },
    ],
  },
  {
    title: ["Preuves et certification", "Evidence and certification", "Nachweise und Zertifizierung"],
    items: [
      { q: ["legmio est-elle un dispositif médical certifié ?", "Is legmio a certified medical device?", "Ist legmio ein zertifiziertes Medizinprodukt?"], a: ["legmio est en cours de certification dispositif médical classe I CE, conformément au Règlement (UE) 2017/745.", "legmio is currently undergoing Class I CE medical device certification, in accordance with Regulation (EU) 2017/745.", "legmio befindet sich derzeit im Zertifizierungsprozess als CE-Medizinprodukt der Klasse I gemäß der Verordnung (EU) 2017/745."] },
      { q: ["legmio est-elle issue de la recherche scientifique ?", "Does legmio come from scientific research?", "Stammt legmio aus wissenschaftlicher Forschung?"], a: ["Oui. legmio est née des travaux du CNRS/ISIR (Sorbonne Université) dans le cadre du projet ANR ASSISTMOV (programme PEPR O2R), dédié à la mobilité et à l'assistance au mouvement.", "Yes. legmio originated from work by the CNRS/ISIR (Sorbonne University) as part of the ANR ASSISTMOV project (PEPR O2R program), dedicated to mobility and movement assistance.", "Ja. legmio entstand aus den Arbeiten des CNRS/ISIR (Sorbonne Université) im Rahmen des ANR-Projekts ASSISTMOV (Programm PEPR O2R), das sich der Mobilität und der Bewegungsunterstützung widmet."] },
      { q: ["legmio est-elle brevetée ?", "Is legmio patented?", "Ist legmio patentiert?"], a: ["Oui. legmio fait l'objet d'un brevet déposé en octobre 2024 (FR2411206).", "Yes. legmio is the subject of a patent filed in October 2024 (FR2411206).", "Ja. Für legmio wurde im Oktober 2024 ein Patent angemeldet (FR2411206)."] },
      { q: ["legmio a-t-elle été testée par des professionnels de santé ?", "Has legmio been tested by healthcare professionals?", "Wurde legmio von medizinischem Fachpersonal getestet?"], a: ["Oui. legmio a été évaluée par des médecins MPR (Médecine Physique et de Réadaptation) de différents centres SMR en France.", "Yes. legmio has been evaluated by PRM (Physical and Rehabilitation Medicine) physicians from various SMR centers in France.", "Ja. legmio wurde von PRM-Ärzten (Physikalische und Rehabilitative Medizin) verschiedener SMR-Zentren in Frankreich bewertet."] },
      { q: ["legmio a-t-elle été récompensée ?", "Has legmio won any awards?", "Wurde legmio ausgezeichnet?"], a: ["Oui. legmio a remporté la Médaille d'Or au Concours Lépine 2026, ainsi que le Prix de l'Impact du Média Positif.", "Yes. legmio won the Gold Medal at the Concours Lépine 2026, as well as the Positive Media Impact Award.", "Ja. legmio gewann die Goldmedaille beim Concours Lépine 2026 sowie den Positive Media Impact Award."] },
    ],
  },
  {
    title: ["SAV et garantie", "After-sales & warranty", "Kundendienst & Garantie"],
    items: [
      { q: ["Comment fonctionne le service après-vente à l'international ?", "How does after-sales service work internationally?", "Wie funktioniert der Kundendienst international?"], a: ["Notre SAV opérera depuis la France. Tout retour ou échange se fera par voie postale internationale, aux frais de l'acheteur.", "Our after-sales service will operate from France. Any return or exchange will be done via international mail, at the buyer's expense.", "Unser Kundendienst wird von Frankreich aus arbeiten. Jede Rücksendung oder jeder Umtausch erfolgt per internationalem Postweg auf Kosten des Käufers."] },
      { q: ["Peut-on commander des pièces détachées ou des embouts de remplacement ?", "Can spare parts or replacement tips be ordered?", "Können Ersatzteile oder Ersatzaufsätze bestellt werden?"], a: ["Oui, ce sera possible au lancement.", "Yes, this will be possible at launch.", "Ja, das wird zum Marktstart möglich sein."] },
    ],
  },
  {
    title: ["Tester legmio", "Testing legmio", "legmio testen"],
    items: [
      { q: ["Peut-on tester legmio avant d'acheter ?", "Can legmio be tested before buying?", "Kann legmio vor dem Kauf getestet werden?"], a: ["Ce sera possible au lancement, chez nos futurs revendeurs physiques.", "This will be possible at launch, at our future physical retailers.", "Das wird zum Marktstart bei unseren künftigen stationären Händlern möglich sein."] },
    ],
  },
  {
    title: ["Usage & activité", "Use & activity", "Nutzung & Aktivität"],
    items: [
      { q: ["Peut-on courir avec legmio ?", "Can you run with legmio?", "Kann man mit legmio laufen?"], a: ["Oui. Des utilisateurs ont déjà réalisé des courses entre 6 et 8 km/h sur des distances d'environ 5 km, sans difficulté.", "Yes. Users have already run at speeds between 6 and 8 km/h over distances of about 5 km, without difficulty.", "Ja. Nutzer haben bereits Läufe mit 6 bis 8 km/h über Distanzen von etwa 5 km problemlos absolviert."] },
      { q: ["Peut-on utiliser legmio en extérieur / sur terrain irrégulier ?", "Can legmio be used outdoors / on uneven terrain?", "Kann legmio im Freien / auf unebenem Gelände verwendet werden?"], a: ["Oui. L'embout interchangeable permet d'adapter legmio à différents types de sols. Le Flexyfoot (compatible 18/19 mm) est particulièrement recommandé pour l'extérieur et les sols irréguliers.", "Yes. The interchangeable tip allows legmio to be adapted to different types of ground. The Flexyfoot (18/19 mm compatible) is particularly recommended for outdoor use and uneven ground.", "Ja. Der austauschbare Aufsatz ermöglicht die Anpassung von legmio an verschiedene Bodenarten. Der Flexyfoot (18/19 mm kompatibel) wird besonders für den Außenbereich und unebenes Gelände empfohlen."] },
      { q: ["Peut-on monter des escaliers avec legmio ?", "Can you climb stairs with legmio?", "Kann man mit legmio Treppen steigen?"], a: ["Oui.", "Yes.", "Ja."] },
      { q: ["legmio est-elle adaptée à un usage quotidien prolongé ?", "Is legmio suitable for prolonged daily use?", "Ist legmio für den dauerhaften täglichen Gebrauch geeignet?"], a: ["Oui. La mousse nitrile de la poignée et la structure aluminium légère (850g) sont conçues pour un confort sur la durée.", "Yes. The handle's nitrile foam and the lightweight aluminum structure (850g) are designed for lasting comfort.", "Ja. Der Nitrilschaum des Griffs und die leichte Aluminiumstruktur (850 g) sind auf dauerhaften Komfort ausgelegt."] },
      { q: ["legmio est-elle utilisable en cas de faiblesse ou perte de force dans les mains ?", "Can legmio be used in case of weakness or loss of strength in the hands?", "Kann legmio bei Schwäche oder Kraftverlust in den Händen verwendet werden?"], a: ["Oui, dans une large mesure : un peu de force reste nécessaire, mais la poignée réduit nettement le besoin en force de préhension.", "Yes, to a large extent: some strength is still needed, but the grip clearly reduces the need for gripping strength.", "Ja, weitgehend: Etwas Kraft ist weiterhin nötig, aber der Griff verringert den Bedarf an Greifkraft deutlich."] },
      { q: ["legmio est-elle utilisable en cas d'amputation d'un membre inférieur, avec ou sans prothèse ?", "Can legmio be used in the case of a lower limb amputation, with or without a prosthesis?", "Kann legmio bei einer Amputation eines Beines, mit oder ohne Prothese, verwendet werden?"], a: ["Oui dans les deux cas. legmio nécessite uniquement un appui podal partiel côté controlatéral. Avec prothèse : legmio se positionne côté valide pour décharger le côté prothétique. À valider avec votre médecin MPR ou votre prothésiste selon le niveau d'amputation. Sans prothèse : utilisable notamment en post-op ou hors appareillage, sous réserve d'un appui controlatéral suffisant.", "Yes in both cases. legmio only requires partial foot support on the contralateral side. With a prosthesis: legmio is positioned on the sound side to offload the prosthetic side. To be confirmed with your PRM physician or prosthetist depending on the level of amputation. Without a prosthesis: usable especially post-op or without fitting, provided there is sufficient contralateral support.", "In beiden Fällen ja. legmio erfordert lediglich eine teilweise Fußbelastung auf der gegenüberliegenden Seite. Mit Prothese: legmio wird auf der gesunden Seite positioniert, um die prothetische Seite zu entlasten. Je nach Amputationsgrad mit Ihrem PRM-Arzt oder Orthopädietechniker abzuklären. Ohne Prothese: insbesondere postoperativ oder ohne Versorgung nutzbar, sofern eine ausreichende Belastung der Gegenseite möglich ist."] },
      { q: ["Pour quels types de pathologies legmio est-elle recommandée ?", "For which types of conditions is legmio recommended?", "Für welche Krankheitsbilder wird legmio empfohlen?"], a: ["legmio convient aux mêmes indications que les béquilles classiques : fractures, entorses, suites opératoires des membres inférieurs, pathologies chroniques réduisant l'appui podal, ou tout contexte nécessitant un soulagement partiel ou total d'un membre inférieur.", "legmio is suitable for the same indications as classic crutches: fractures, sprains, post-operative lower limb conditions, chronic conditions reducing foot support, or any context requiring partial or total relief of a lower limb.", "legmio eignet sich für dieselben Indikationen wie klassische Krücken: Frakturen, Verstauchungen, postoperative Zustände der unteren Extremitäten, chronische Erkrankungen mit reduzierter Fußbelastung oder jeden Kontext, der eine teilweise oder vollständige Entlastung eines Beines erfordert."] },
      { q: ["Combien de temps faut-il pour s'adapter à legmio ?", "How long does it take to get used to legmio?", "Wie lange dauert es, sich an legmio zu gewöhnen?"], a: ["La prise en main est immédiate : legmio s'utilise comme une canne anglaise classique dès les premiers pas, sans rien réapprendre. Ce qui demande un peu d'habitude, c'est le mode mains libres — il devient un réflexe en quelques heures pour certains, plusieurs jours pour d'autres, comme avec toute nouvelle aide à la marche.", "You can use it right away: from the first steps, legmio works like an ordinary forearm crutch, with nothing to relearn. What takes a little habit is the hands-free mode — it becomes second nature within a few hours for some, several days for others, as with any new walking aid.", "Der Einstieg ist sofort möglich: Ab dem ersten Schritt funktioniert legmio wie eine gewöhnliche Unterarmgehstütze, ohne Umlernen. Etwas Gewöhnung braucht der Freihand-Modus — er wird bei manchen schon nach wenigen Stunden zur Selbstverständlichkeit, bei anderen nach mehreren Tagen, wie bei jeder neuen Gehhilfe."] },
      { q: ["legmio est-elle compatible avec un plâtre ou une orthèse ?", "Is legmio compatible with a cast or an orthosis?", "Ist legmio mit einem Gips oder einer Orthese kompatibel?"], a: ["Oui, legmio est compatible avec le port d'un plâtre ou d'une orthèse.", "Yes, legmio is compatible with wearing a cast or an orthosis.", "Ja, legmio ist mit dem Tragen eines Gipses oder einer Orthese kompatibel."] },
    ],
  },
  {
    title: ["Fabrication et origine", "Manufacturing and origin", "Herstellung und Herkunft"],
    items: [
      { q: ["Où est fabriquée et assemblée legmio ?", "Where is legmio manufactured and assembled?", "Wo wird legmio hergestellt und montiert?"], a: ["legmio est conçue et assemblée en France. Dans le détail : les pièces en plastique injecté sont produites par un plasturgiste français, la structure aluminium vient de Chine, et l'assemblage final est réalisé en France.", "legmio is designed and assembled in France. In detail: the injection-moulded parts are produced by a French plastics manufacturer, the aluminium structure comes from China, and final assembly takes place in France.", "legmio wird in Frankreich entwickelt und montiert. Im Detail: Die spritzgegossenen Kunststoffteile stammen von einem französischen Kunststoffverarbeiter, die Aluminiumstruktur kommt aus China, und die Endmontage erfolgt in Frankreich."] },
    ],
  },
  {
    title: ["Remboursement et prise en charge", "Reimbursement and coverage", "Erstattung und Kostenübernahme"],
    items: [
      { q: ["legmio est-elle remboursée par la Sécurité Sociale ?", "Is legmio reimbursed by Social Security?", "Wird legmio von der Sozialversicherung erstattet?"], a: ["Pas encore : legmio n'est pas commercialisée et sa certification est en cours. Ce que nous visons se fera en deux temps. D'abord une prise en charge partielle sur prescription médicale, au titre de la nomenclature béquille (LPP), dont le tarif de remboursement se situe aujourd'hui entre 12,20 € et 18,29 €. Ensuite, une ligne de remboursement propre à legmio, mieux ajustée à ce qu'elle apporte.", "Not yet: legmio is not on sale and its certification is under way. What we are aiming for will come in two stages. First, partial coverage on medical prescription under the French crutch nomenclature (LPP), whose reimbursement rate currently sits between €12.20 and €18.29. Then a reimbursement line of its own, better matched to what legmio brings.", "Noch nicht: legmio ist nicht im Handel und die Zertifizierung läuft. Unser Ziel besteht aus zwei Schritten. Zuerst eine teilweise Kostenübernahme auf ärztliche Verordnung im Rahmen der französischen Krücken-Nomenklatur (LPP), deren Erstattungssatz derzeit zwischen 12,20 € und 18,29 € liegt. Danach eine eigene Erstattungsposition für legmio."] },
      { q: ["Ma mutuelle peut-elle compléter le remboursement ?", "Can my supplementary insurance top up the reimbursement?", "Kann meine Zusatzversicherung die Erstattung ergänzen?"], a: ["Oui, selon votre contrat de mutuelle ou d'assurance. Vous pouvez aussi vous rapprocher d'une équipe locale d'accompagnement aides techniques (EqLAAT) : elle réalise une évaluation et vous aide à monter un dossier PCH ou MDPH.", "Yes, depending on your supplementary health insurance policy. In France you can also contact a local assistive-technology support team (EqLAAT): it carries out an assessment and helps you build a PCH or MDPH application.", "Ja, je nach Vertrag Ihrer Zusatzversicherung. In Frankreich können Sie sich zudem an ein lokales Beratungsteam für Hilfsmittel (EqLAAT) wenden: Es führt eine Bewertung durch und hilft beim Antrag auf PCH oder MDPH."] },
      { q: ["Existe-t-il une prise en charge dans le cadre professionnel ?", "Is there any coverage available in a professional context?", "Gibt es eine Kostenübernahme im beruflichen Kontext?"], a: ["C'est la voie que nous visons, et c'est de loin la plus favorable. En contexte professionnel, l'Agefiph (secteur privé, sous condition de RQTH) et le FIPHFP (fonction publique) financent les aides techniques jusqu'à 90 %, ce qui ramènerait le reste à charge à presque rien. Ces dispositifs existent déjà : il nous reste à y faire entrer legmio.", "This is the route we are aiming for, and by far the most favourable one. At work, France's Agefiph (private sector, with recognised disabled-worker status) and FIPHFP (public sector) fund assistive devices up to 90%, which would leave almost nothing to pay. These schemes already exist; what remains is to get legmio into them.", "Das ist der Weg, den wir anstreben, und der mit Abstand günstigste. Im Beruf fördern die französischen Einrichtungen Agefiph (Privatsektor, mit anerkanntem Behindertenstatus) und FIPHFP (öffentlicher Dienst) Hilfsmittel mit bis zu 90 %, sodass fast nichts zu zahlen bliebe. Diese Programme bestehen bereits; legmio muss noch aufgenommen werden."] },
    ],
  },
  {
    title: ["Commande et prix", "Order and price", "Bestellung und Preis"],
    items: [
      { q: ["Quel est le prix de legmio ?", "What is the price of legmio?", "Was kostet legmio?"], a: ["Le prix sera communiqué au lancement.", "The price will be announced at launch.", "Der Preis wird zum Marktstart bekannt gegeben."] },
      { q: ["Où acheter legmio ?", "Where can I buy legmio?", "Wo kann man legmio kaufen?"], a: ["Directement sur legmio.com ou auprès de nos futurs revendeurs partenaires.", "Directly on legmio.com or from our future partner retailers.", "Direkt auf legmio.com oder bei unseren zukünftigen Partnerhändlern."] },
      { q: ["Quels sont les délais de livraison ?", "What are the delivery times?", "Wie lange dauert die Lieferung?"], a: ["Nous visons une livraison standard en 3 à 5 jours ouvrés, avec une option express 24-48h.", "We are aiming for standard delivery within 3 to 5 business days, with an express 24-48h option.", "Wir streben eine Standardlieferung innerhalb von 3 bis 5 Werktagen an, mit einer Express-Option (24-48 Std.)."] },
      { q: ["Quels sont les frais de livraison ?", "What are the shipping costs?", "Wie hoch sind die Versandkosten?"], a: ["La livraison sera a priori gratuite pour toute commande en France métropolitaine.", "Shipping will most likely be free for any order within mainland France.", "Der Versand wird voraussichtlich für alle Bestellungen innerhalb des französischen Mutterlandes kostenlos sein."] },
      { q: ["Est-il possible de louer legmio ?", "Is it possible to rent legmio?", "Kann man legmio mieten?"], a: ["La location est en cours de réflexion avec nos revendeurs/distributeurs physiques.", "Rental is currently under consideration with our physical retailers/distributors.", "Die Vermietung wird derzeit gemeinsam mit unseren stationären Händlern/Vertriebspartnern geprüft."] },
    ],
  },
  {
    title: ["Entretien", "Maintenance", "Wartung"],
    items: [
      { q: ["Comment nettoyer legmio ?", "How do I clean legmio?", "Wie reinigt man legmio?"], a: ["Un nettoyage à l'eau savonneuse avec un chiffon humide suffit pour l'ensemble de la béquille. Évitez l'immersion et les produits abrasifs. La structure aluminium et les pièces plastique TPU/nylon supportent un essuyage régulier. Le tissu synthétique peut être nettoyé avec un chiffon légèrement humide.", "Cleaning with soapy water and a damp cloth is enough for the whole crutch. Avoid immersion and abrasive products. The aluminum structure and TPU/nylon plastic parts withstand regular wiping. The synthetic fabric can be cleaned with a slightly damp cloth.", "Eine Reinigung mit Seifenwasser und einem feuchten Tuch genügt für die gesamte Krücke. Vermeiden Sie ein Eintauchen sowie scheuernde Reinigungsmittel. Die Aluminiumstruktur und die Kunststoffteile aus TPU/Nylon vertragen regelmäßiges Abwischen. Der synthetische Stoff kann mit einem leicht angefeuchteten Tuch gereinigt werden."] },
      { q: ["Quelles pièces sont remplaçables ?", "Which parts are replaceable?", "Welche Teile sind austauschbar?"], a: ["Les embouts, les poignées et les sangles sont remplaçables. Elles seront disponibles directement sur notre site ou auprès de nos revendeurs agréés.", "The tips, handles and straps are replaceable. They will be available directly on our website or from our authorized retailers.", "Die Aufsätze, Griffe und Riemen sind austauschbar. Sie werden direkt auf unserer Website oder bei unseren autorisierten Händlern erhältlich sein."] },
      { q: ["Pourquoi avoir conçu legmio avec des pièces interchangeables ?", "Why was legmio designed with interchangeable parts?", "Warum wurde legmio mit austauschbaren Teilen konzipiert?"], a: ["La plupart des béquilles sont conçues comme des produits jetables — dès qu'une pièce s'use, c'est l'ensemble qui est remplacé. Chez legmio, le choix inverse a été fait dès la conception : chaque composant d'usure (embout, sangle, poignée) est remplaçable séparément, ce qui prolonge la durée de vie du produit, réduit le coût global pour l'utilisateur et limite les déchets.", "Most crutches are designed as disposable products — as soon as one part wears out, the whole thing gets replaced. With legmio, the opposite choice was made from the design stage: each wearing component (tip, strap, handle) can be replaced separately, which extends the product's lifespan, reduces the overall cost for the user, and limits waste.", "Die meisten Krücken sind als Wegwerfprodukte konzipiert — sobald ein Teil verschleißt, wird das Ganze ersetzt. Bei legmio wurde bereits im Design die gegenteilige Entscheidung getroffen: Jede Verschleißkomponente (Aufsatz, Riemen, Griff) kann separat ersetzt werden, was die Lebensdauer des Produkts verlängert, die Gesamtkosten für den Nutzer senkt und Abfall reduziert."] },
    ],
  },
];

export function Faq() {
  const { lang, tr } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);
  const idx = lang === "fr" ? 0 : lang === "de" ? 2 : 1;
                // Donnees structurees FAQPage : possibles seulement parce que les reponses
  // sont desormais presentes dans le HTML servi. Google exige que le contenu
  // balise soit reellement dans la page.
  const donneesFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: themes.flatMap((th) =>
      th.items.map((it) => ({
        "@type": "Question",
        name: it.q[idx],
        acceptedAnswer: { "@type": "Answer", text: it.a[idx] },
      }))
    ),
  };

  return (
    <div style={{ backgroundColor: WHITE }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesFaq) }}
      />
      <section className="grain relative jonction-bas px-4 sm:px-6 py-20" style={{ backgroundColor: INK }}>
        <h1 className="titre-page text-center" style={{ color: WHITE }}>
          {tr("Tout ce que vous voulez savoir.", "Everything you want to know.", "Alles was Sie wissen möchten.")}
        </h1>
        <p className="sous-titre mt-4 text-center" style={{ color: MUTED_INK }}>
          {tr("Toutes les réponses en un seul endroit.", "All the answers in one place.", "Alle Antworten an einem Ort.")}
        </p>
      </section>
      {themes.map((th, ti) => {
        const isCream = ti % 2 === 1;
        const bg = isCream ? SAND : WHITE;
        return (
          <section key={ti} className="px-4 sm:px-6 py-16" style={{ backgroundColor: bg }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl mb-4 font-display font-bold" style={{ color: INK }}>{th.title[idx]}</h2>
              <div>
                {th.items.map((it, ii) => {
                  const key = `${ti}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <div key={ii} className="border-b" style={{ borderColor: LINE }}>
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        aria-controls={`reponse-${key}`}
                        className="w-full flex justify-between items-center py-4 text-left gap-4"
                        style={{ color: INK }}
                      >
                        <span>{it.q[idx]}</span>
                        <span className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} style={{ color: INK }}><IconChevron size={18} /></span>
                      </button>
                      {/* La reponse reste dans le HTML : repliee, pas retiree. */}
                      <div id={`reponse-${key}`} role="region" className={`repli ${isOpen ? "repli-ouvert" : ""}`}>
                        <div>
                          <div className="pb-4 legende" style={{ color: MUTED }}>{it.a[idx]}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
