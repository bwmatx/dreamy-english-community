/* ==========================================================================
   i18n.js: pilihan bahasa murni EN / ID / DE (bukan campuran).
   Tombol melayang (fixed kanan bawah) membuka popup pilihan berbendera;
   klik/tap, posisi tetap terpakai saat halaman digulir.
   Indikator bendera aktif digerakkan via CSS html[data-lang="de|id|en"].
   Pilihan disimpan di localStorage "dmc-lang". Setiap elemen berisi satu
   teks murni; kunci elemen: data-i18n="nama.kunci".
   ========================================================================== */
(() => {
  "use strict";

  window.DMC_I18N = {
    en: {
      /* meta per halaman */
      "meta.title.index": "Dreamy English Community · Pacitan | Speak. Shine. Dream.",
      "meta.desc.index": "A fun English learning community in Pacitan: speak, play, perform. Join the community!",
      "meta.title.programs": "Programs · Dreamy English Community Pacitan",
      "meta.desc.programs": "Training programs at Dreamy English Community Pacitan: weekly Speaking Club, Dreamy Camp, and Digital Class.",
      "a11y.skip": "Skip to content →",

      /* popup pemilih bahasa */
      "lang.title": "Language",
      "lang.en": "English",
      "lang.id": "Indonesian",
      "lang.de": "German",

      /* nav & menu sheet */
      "nav.home": "Home",
      "nav.why": "Why Dreamy?",
      "nav.programs": "Programs",
      "nav.voices": "Voices",
      "nav.faq": "FAQ",
      "btn.join": "Join us",
      "sheet.join": "Join the community",
      "sheet.tag.index": "Learn English together, the fun way",
      "sheet.tag.programs": "Pick your class, come along, keep talking",

      /* hero */
      "hero.l1": "Dream it.",
      "hero.l2": "Speak it.",
      "hero.l3": "Shine out!",
      "hero.lead": "Practice English the fun way: chatting, playing games, and performing together with the community in Pacitan.",
      "hero.cta1": "Join the community",
      "hero.cta2": "Explore programs",
      "hero.note": "No pressure, no judgement, all levels welcome.",

      /* statistik */
      "stat.members": "Active members",
      "stat.meetups": "Meetups hosted",
      "stat.mentors": "Volunteer mentors",

      /* marquee */
      "mq.1": "Speak up",
      "mq.2": "Talk with spirit",
      "mq.3": "Dreamy",
      "mq.4": "Pacitan vibes",
      "mq.5": "No fear, just fun",
      "mq.6": "See you there",

      /* mengapa Dreamy */
      "why.hl": "Learning",
      "why.rest": "that feels like play",
      "why.sub": "Learning that feels like play, not forced memorizing. Here is how:",
      "card1.t": "Speak-up stage",
      "card1.b": "Weekly practice in front of the crowd, mic time for everyone.",
      "card2.t": "Buddy system",
      "card2.b": "You get a speaking buddy, and mentors walk with your progress.",
      "card3.t": "Fun methods",
      "card3.b": "Games, music, and movie nights; grammar sneaks into play.",
      "card4.t": "Pacitan vibes",
      "card4.b": "Outdoor sessions: beaches, hills, and sunset conversations.",

      /* program */
      "prog.eyebrow": "Our programs",
      "prog.rest": "Pick your",
      "prog.hl": "stage",
      "prog.sub": "Pick the program that fits; everything is relaxed but consistent.",
      "tag.weekly": "Weekly",
      "tag.seasonal": "Seasonal",
      "tag.online": "Online",
      "sp.body": "Small groups, real conversations, gentle corrections.",
      "sp.li1": "Weekly meetup (60-90 min)",
      "sp.li2": "Rotating everyday topics",
      "sp.li3": "Feedback that stays supportive",
      "more.link": "See the details",
      "camp.body": "A weekend speak-up camp to perform, win laughs, and grow braver.",
      "camp.li1": "2D1N outdoor camp",
      "camp.li2": "Mini-talk and debate",
      "camp.li3": "Team challenges",
      "dc.body": "Short online classes, from pronunciation to presentation basics.",
      "soon.badge": "Coming soon",
      "dc.li1": "Live and recordings",
      "dc.li2": "Self-paced drills",
      "dc.li3": "Small certificate",

      /* suara komunitas */
      "voc.eyebrow": "Community voices",
      "voc.rest": "They got",
      "voc.hl": "braver",
      "voc.sub": "They all started from zero too. Hear their stories.",
      "q1": "“I finally dare to speak in front of people. My first talk was shaky, but everyone cheered!”",
      "role1": "Student",
      "q2": "“It feels like playing games, not an English class. I keep coming back without feeling forced.”",
      "role2": "Cashier and member",
      "q3": "“The mentors give feedback that lifts you up. Now I help new members find their voice too.”",
      "role3": "Mentor volunteer",

      /* bagian founder */
      "fdn.eyebrow": "Our founders",
      "fdn.rest": "Meet the",
      "fdn.hl": "founders",
      "fdn.sub": "Two people who keep the dream alive in Pacitan.",
      "fdn.founder.role": "Founder",
      "fdn.founder.bio": "Started Dreamy after seeing how hard it is to practice English outside class. Believes in learning by talking, laughing, and trying again.",
      "fdn.co.role": "Co-founder",
      "fdn.co.bio": "Runs the weekly meetups and makes sure every newcomer gets a warm welcome; the friendly glue of the community.",

      /* FAQ */
      "faq.rest": "Good to",
      "faq.hl": "know",
      "faq.sub": "The questions future members ask the most.",
      "fq1": "How can I join?",
      "fa1": "Hit “Join the community”, say hi on the contact link, and show up at the next weekly meetup. English level doesn't matter; showing up does.",
      "fq2": "Is it free?",
      "fa2": "Joining is free. Some events ask a small optional donation for snacks or the venue.",
      "fq3": "I am a beginner, can I really join?",
      "fa3": "Absolutely! Beginners are our favorite people. We start with friendly games and pair practice so nobody gets left behind.",
      "fq4": "Where and when do we meet?",
      "fa4": "Weekly meetups rotate between local cafes and outdoor spots around Pacitan; the schedule is announced in the community group chat.",

      /* ajakan akhir (index) */
      "jn1.eyebrow": "Ready when you are",
      "jn1.l1": "Bring your voice,",
      "jn1.l2": "we'll take care of the brave.",
      "jn1.sub": "See you at the next meetup!",
      "jn1.cta": "Join us now",
      "jn.browse": "Browse programs",

      /* footer & modal */
      "foot.about": "Learning English together with the Pacitan community, a human way.",
"modal.title": "Join Dreamy!",
      "modal.intro": "Three easy steps to join the community:",
      "modal.s1": "Say hi on our contact, and the admin will greet you.",
      "modal.s2": "Join the community group for schedules.",
      "modal.s3": "Show up and shine at the next meetup!",
      "modal.wa": "Chat via WhatsApp",
      "modal.ig": "DM via Instagram",

      /* halaman program */
      "pg.eyebrow": "Dreamy programs",
      "pg.rest": "Three doors to",
      "pg.hl": "fluent-me",
      "pg.sub": "Three doors to a more fluent you, starting with the lightest one.",
      "d1.body": "Weekly small-group talking sessions, the heartbeat of the community. Fits beginners through fluent speakers.",
      "d1.f1": "Check-in with coffee",
      "d1.f2": "Ice-breaker game",
      "d1.f3": "Buddy talk in pairs",
      "d1.f4": "Mini stage: try speaking in front",
      "d1.f5": "Warm feedback",
      "d2.body": "A seasonal 2-day speak-up camp: performance night, team quests, campfire talk.",
      "d2.f1": "Arrival and ice games",
      "d2.f2": "Team quests, English only!",
      "d2.f3": "Campfire talk",
      "d2.f4": "Outdoor session",
      "d2.f5": "Keep the memories",
      "d3.body": "Short online classes: pronunciation, grammar pills, presentation basics.",
      "d3.f1": "Online class each week",
      "d3.f2": "5-minute grammar pills",
      "d3.f3": "Self-paced drills",
      "d3.f4": "Mini presentation gigs",
      "d3.f5": "Small certificate",
      "jn2.eyebrow": "Pick one, or all three",
      "jn2.rest": "See you at the",
      "jn2.hl": "next meetup",
      "jn2.sub": "No level bar to clear, just the intention to come. We clear the rest together.",
      "jn.back": "Back to home",

      "foot.programs": "Programs",
      "foot.faq": "FAQ"
    },

    id: {
      /* meta per halaman */
      "meta.title.index": "Dreamy English Community · Pacitan | Bicara. Bersinar. Bermimpi.",
      "meta.desc.index": "Komunitas belajar bahasa Inggris yang seru di Pacitan: bicara, main, tampil. Gabung sekarang!",
      "meta.title.programs": "Program · Dreamy English Community Pacitan",
      "meta.desc.programs": "Program latihan bahasa Inggris Dreamy English Community Pacitan: Speaking Club mingguan, Dreamy Camp, dan Digital Class.",
      "a11y.skip": "Langsung ke konten →",

      /* popup pemilih bahasa */
      "lang.title": "Bahasa",
      "lang.en": "Inggris",
      "lang.id": "Indonesia",
      "lang.de": "Jerman",

      /* nav & menu sheet */
      "nav.home": "Beranda",
      "nav.why": "Kenapa Dreamy?",
      "nav.programs": "Program",
      "nav.voices": "Cerita",
      "nav.faq": "FAQ",
      "btn.join": "Gabung",
      "sheet.join": "Gabung ke komunitas",
      "sheet.tag.index": "Belajar Inggris bareng, sambil seru-seruan",
      "sheet.tag.programs": "Pilih kelasmu, datang, terus terus bicara",

      /* hero */
      "hero.l1": "Mimpikan.",
      "hero.l2": "Ucapkan.",
      "hero.l3": "Bersinarlah!",
      "hero.lead": "Latihan bahasa Inggris dengan cara seru: ngobrol, main game, dan tampil bersama komunitas di Pacitan.",
      "hero.cta1": "Gabung ke komunitas",
      "hero.cta2": "Lihat program",
      "hero.note": "Tanpa tekanan, tanpa vonis, semua level dipersilakan.",

      /* statistik */
      "stat.members": "Anggota aktif",
      "stat.meetups": "Pertemuan diadakan",
      "stat.mentors": "Mentor relawan",

      /* marquee */
      "mq.1": "Bicara berani",
      "mq.2": "Ngobrol dengan semangat",
      "mq.3": "Dreamy",
      "mq.4": "Pacitan vibes",
      "mq.5": "Tanpa takut, makin seru",
      "mq.6": "Sampai jumpa di sana",

      /* mengapa Dreamy */
      "why.hl": "Belajar",
      "why.rest": "yang serasa bermain",
      "why.sub": "Belajar yang serasa bermain, bukan hafalan paksa. Ini cara kami:",
      "card1.t": "Panggung bicara",
      "card1.b": "Latihan bicara tiap minggu, semua kebagian giliran di panggung.",
      "card2.t": "Sistem buddy",
      "card2.b": "Ada teman bicara, dan mentor mendampingi langkahmu.",
      "card3.t": "Cara seru",
      "card3.b": "Game, musik, dan nonton bareng; grammar menyelinap sambil main.",
      "card4.t": "Pacitan vibes",
      "card4.b": "Kelas outdoor: pantai, bukit, dan ngobrol sambil sunset.",

      /* program */
      "prog.eyebrow": "Program kami",
      "prog.rest": "Pilih",
      "prog.hl": "panggungmu",
      "prog.sub": "Pilih program yang cocok; semuanya santai tapi konsisten.",
      "tag.weekly": "Mingguan",
      "tag.seasonal": "Musiman",
      "tag.online": "Online",
      "sp.body": "Grup kecil, obrolan nyata, koreksi yang tidak menakutkan.",
      "sp.li1": "Pertemuan mingguan (60-90 menit)",
      "sp.li2": "Rotasi topik harian",
      "sp.li3": "Feedback yang selalu suportif",
      "more.link": "Lihat detailnya",
      "camp.body": "Kemah bicara akhir pekan: tampil, nongkrong, makin berani.",
      "camp.li1": "Kemah outdoor 2 hari 1 malam",
      "camp.li2": "Mini-talk dan debat",
      "camp.li3": "Tantangan tim",
      "dc.body": "Kelas online singkat, dari pronunciation sampai dasar presentasi.",
      "soon.badge": "Segera hadir",
      "dc.li1": "Live dan rekaman",
      "dc.li2": "Latihan mandiri",
      "dc.li3": "Sertifikat kecil",

      /* suara komunitas */
      "voc.eyebrow": "Suara komunitas",
      "voc.rest": "Mereka makin",
      "voc.hl": "berani",
      "voc.sub": "Mereka juga mulai dari 0. Dengar cerita mereka.",
      "q1": "“Akhirnya berani bicara di depan orang. Ngomong pertama sempat gemetar, tapi semua dukung!”",
      "role1": "Pelajar",
      "q2": "“Terasa seperti main game, bukan kelas bahasa Inggris. Jadi rajin datang karena seru, bukan paksaan.”",
      "role2": "Kasir dan anggota",
      "q3": "“Mentor memberi feedback yang mengangkat. Sekarang saya juga bantu anggota baru menemukan suaranya.”",
      "role3": "Mentor relawan",

      /* bagian founder */
      "fdn.eyebrow": "Pendiri kami",
      "fdn.rest": "Kenali",
      "fdn.hl": "para pendiri",
      "fdn.sub": "Dua orang yang menjaga mimpi ini tetap hidup di Pacitan.",
      "fdn.founder.role": "Pendiri",
      "fdn.founder.bio": "Memulai Dreamy setelah melihat betapa beratnya berlatih bahasa Inggris di luar kelas. Percaya belajar lewat bicara, tertawa, dan mencoba lagi.",
      "fdn.co.role": "Co-pendiri",
      "fdn.co.bio": "Mengurus pertemuan mingguan dan memastikan setiap pendatang baru disambut hangat; perekat ramah komunitas.",

      /* FAQ */
      "faq.rest": "Perlu",
      "faq.hl": "tahu",
      "faq.sub": "Hal yang paling sering ditanyakan calon anggota.",
      "fq1": "Bagaimana cara gabung?",
      "fa1": "Klik “Gabung ke komunitas”, sapa lewat tautan kontak, dan datang ke pertemuan mingguan berikutnya. Level bahasa Inggris tidak masalah; yang penting hadir.",
      "fq2": "Apakah gratis?",
      "fa2": "Gabung gratis. Beberapa acara meminta donasi opsional untuk snack atau tempat.",
      "fq3": "Saya pemula, apakah boleh ikut?",
      "fa3": "Tentu saja! Pemula adalah favorit kami. Kami mulai dengan permainan ramah dan latihan berpasangan agar tidak ada yang tertinggal.",
      "fq4": "Di mana dan kapan kita bertemu?",
      "fa4": "Pertemuan mingguan bergilir antara kafe lokal dan tempat outdoor di sekitar Pacitan; jadwal diumumkan di grup chat komunitas.",

      /* ajakan akhir (index) */
      "jn1.eyebrow": "Siap kapan pun kamu",
      "jn1.l1": "Bawa suaramu,",
      "jn1.l2": "sisanya berani kita urus bareng.",
      "jn1.sub": "Sampai jumpa di pertemuan berikutnya!",
      "jn1.cta": "Gabung sekarang",
      "jn.browse": "Jelajahi program",

      /* footer & modal */
      "foot.about": "Belajar bahasa Inggris bersama komunitas Pacitan, dengan cara yang manusiawi.",
"modal.title": "Gabung Dreamy!",
      "modal.intro": "Tiga langkah mudah untuk jadi bagian komunitas:",
      "modal.s1": "Sapa lewat kontak kami, admin akan menyahut.",
      "modal.s2": "Masuk grup komunitas untuk info jadwal.",
      "modal.s3": "Datang dan bersinar di pertemuan berikutnya!",
      "modal.wa": "Chat via WhatsApp",
      "modal.ig": "DM via Instagram",

      /* halaman program */
      "pg.eyebrow": "Program Dreamy",
      "pg.rest": "Tiga pintu menuju",
      "pg.hl": "lancar versi aku",
      "pg.sub": "Tiga pintu menuju kamu yang makin lancar, mulai dari yang paling ringan.",
      "d1.body": "Pertemuan mingguan grup kecil, jantungnya komunitas. Cocok untuk pemula sampai mahir.",
      "d1.f1": "Check-in sambil ngopi",
      "d1.f2": "Game pencair suasana",
      "d1.f3": "Buddy talk, ngobrol berpasangan",
      "d1.f4": "Mini stage, coba bicara di depan",
      "d1.f5": "Feedback hangat",
      "d2.body": "Kemah bicara 2 hari: panggung malam, misi kelompok, obrolan api unggun.",
      "d2.f1": "Tiba dan game pembuka",
      "d2.f2": "Misi tim, English only!",
      "d2.f3": "Obrolan api unggun",
      "d2.f4": "Sesi outdoor",
      "d2.f5": "Sematkan kenangan",
      "d3.body": "Kelas online singkat: pronunciation, grammar ringkas, dan dasar presentasi.",
      "d3.f1": "Kelas daring tiap pekan",
      "d3.f2": "Grammar 5 menit",
      "d3.f3": "Latihan mandiri",
      "d3.f4": "Gig presentasi mini",
      "d3.f5": "Sertifikat kecil",
      "jn2.eyebrow": "Pilih satu, atau tiga-tiganya",
      "jn2.rest": "Sampai jumpa di",
      "jn2.hl": "pertemuan berikutnya",
      "jn2.sub": "Tidak ada syarat tingkat kesulitan, cuma niat datang. Sisanya kita rintang bersama.",
      "jn.back": "Kembali ke beranda",

      "foot.programs": "Program",
      "foot.faq": "FAQ"
    },

    de: {
      /* meta pro Seite */
      "meta.title.index": "Dreamy English Community · Pacitan | Sprich. Strahl. Träum.",
      "meta.desc.index": "Eine unterhaltsame englische Lern-Community in Pacitan: sprechen, spielen, auftreten. Mach mit!",
      "meta.title.programs": "Programme · Dreamy English Community Pacitan",
      "meta.desc.programs": "Trainingsprogramme der Dreamy English Community Pacitan: wöchentlicher Speaking Club, Dreamy Camp und Digital Class.",
      "a11y.skip": "Zum Inhalt springen →",

      /* popup pemilih bahasa */
      "lang.title": "Sprache",
      "lang.en": "Englisch",
      "lang.id": "Indonesisch",
      "lang.de": "Deutsch",

      /* Navi & Mobiles Menü */
      "nav.home": "Start",
      "nav.why": "Warum Dreamy?",
      "nav.programs": "Programme",
      "nav.voices": "Stimmen",
      "nav.faq": "FAQ",
      "btn.join": "Mach mit",
      "sheet.join": "Komm in die Community",
      "sheet.tag.index": "Gemeinsam Englisch lernen, mit Spaß",
      "sheet.tag.programs": "Wähle deinen Kurs, komm vorbei und bleib dran",

      /* Hero */
      "hero.l1": "Träum es.",
      "hero.l2": "Sprich es.",
      "hero.l3": "Strahl los!",
      "hero.lead": "Englisch üben auf die lockere Art: reden, Spiele spielen und gemeinsam mit der Community in Pacitan auftreten.",
      "hero.cta1": "Komm in die Community",
      "hero.cta2": "Programme entdecken",
      "hero.note": "Kein Druck, kein Urteil, alle Levels willkommen.",

      /* Statistik */
      "stat.members": "Aktive Mitglieder",
      "stat.meetups": "Veranstaltete Treffen",
      "stat.mentors": "Ehrenamtliche Mentoren",

      /* Laufband */
      "mq.1": "Sprich laut",
      "mq.2": "Red mit Elan",
      "mq.3": "Dreamy",
      "mq.4": "Pacitan vibes",
      "mq.5": "Keine Angst, nur Spaß",
      "mq.6": "Bis bald dort",

      /* Warum Dreamy */
      "why.hl": "Lernen",
      "why.rest": "das sich anfühlt wie Spielen",
      "why.sub": "Lernen wie Spielen statt auswendig Pauken. So machen wir das:",
      "card1.t": "Sprech-Bühne",
      "card1.b": "Wöchentliches Training vor Publikum, Mikrofon-Zeit für alle.",
      "card2.t": "Buddy-System",
      "card2.b": "Du bekommst einen Sprech-Buddy, und Mentoren begleiten deinen Fortschritt.",
      "card3.t": "Spaß-Methoden",
      "card3.b": "Spiele, Musik und Filmonächte; Grammatik schleicht sich beim Spielen ein.",
      "card4.t": "Pacitan vibes",
      "card4.b": "Sessions im Freien: Strände, Hügel und Gespräche im Sonnenuntergang.",

      /* Programme */
      "prog.eyebrow": "Unsere Programme",
      "prog.rest": "Wähl deine",
      "prog.hl": "Bühne",
      "prog.sub": "Wähl das passende Programm; alles locker, aber konsequent.",
      "tag.weekly": "Wöchentlich",
      "tag.seasonal": "Saisonal",
      "tag.online": "Online",
      "sp.body": "Kleine Gruppen, echte Gespräche, sanfte Korrekturen.",
      "sp.li1": "Wöchentliches Treffen (60-90 Min.)",
      "sp.li2": "Rotierende Alltagsthemen",
      "sp.li3": "Immer supportives Feedback",
      "more.link": "Alle Details",
      "camp.body": "Ein Wochenend-Camp zum Vortragen, Lachen und Mutigerwerden.",
      "camp.li1": "Outdoor-Camp, 2 Tage und 1 Nacht",
      "camp.li2": "Mini-Talks und Debatte",
      "camp.li3": "Team-Challenges",
      "dc.body": "Kurze Online-Kurse, von Aussprache bis Präsentations-Basics.",
      "soon.badge": "Demnächst",
      "dc.li1": "Live und Aufnahmen",
      "dc.li2": "Üben im eigenen Tempo",
      "dc.li3": "Kleines Zertifikat",

      /* Community-Stimmen */
      "voc.eyebrow": "Community-Stimmen",
      "voc.rest": "Sie wurden",
      "voc.hl": "mutiger",
      "voc.sub": "Alle haben bei 0 begonnen. Hört ihre Geschichten.",
      "q1": "„Ich traue mich endlich, vor Leuten zu sprechen. Meine einstige Rede wackelte, aber alle haben angefeuert!“",
      "role1": "Studentin",
      "q2": "„Es fühlt sich an wie Spielen, nicht wie ein Englischkurs. Ich komme immer wieder, ganz freiwillig.“",
      "role2": "Kassiererin und Mitglied",
      "q3": "„Die Mentoren geben Feedback, das dich anhebt. Jetzt helfe ich auch neuen Mitgliedern, ihre Stimme zu finden.“",
      "role3": "Freiwillige Mentorin",

      /* bagian founder */
      "fdn.eyebrow": "Unsere Gründer",
      "fdn.rest": "Lernt",
      "fdn.hl": "die Gründer kennen",
      "fdn.sub": "Zwei Menschen, die den Traum in Pacitan am Leben halten.",
      "fdn.founder.role": "Gründer",
      "fdn.founder.bio": "Startete Dreamy, als er sah, wie schwer es ist, außerhalb des Unterrichts Englisch zu üben. Er glaubt daran, dass man Englisch durch Sprechen, Lachen und stetiges Weitermachen lernt.",
      "fdn.co.role": "Co-Gründerin",
      "fdn.co.bio": "Organisiert die Wochentreffen und begrüßt jedes neue Mitglied herzlich; der freundliche Klebstoff der Community.",

      /* FAQ */
      "faq.rest": "Gut zu",
      "faq.hl": "wissen",
      "faq.sub": "Die Fragen, die kommende Mitglieder am häufigsten stellen.",
      "fq1": "Wie kann ich beitreten?",
      "fa1": "Klicke auf „Komm in die Community“, melde dich über den Kontakt-Link und komm zum nächsten Wochentreffen. Das Niveau ist egal; kommen zählt.",
      "fq2": "Ist es kostenlos?",
      "fa2": "Der Beitritt ist kostenlos. Manche Events bitten um eine kleine freiwillige Spende für Snacks oder den Ort.",
      "fq3": "Ich bin Anfänger, kann ich wirklich mitmachen?",
      "fa3": "Absolut! Anfänger sind unser Favorit. Wir starten mit freundlichen Spielen und Partnerübungen, damit keiner zurück bleibt.",
      "fq4": "Wo und wann treffen wir uns?",
      "fa4": "Die Wochentreffen wechseln zwischen lokalen Cafés und Outdoor-Spots in Pacitan; die Termine stehen im Community-Gruppenchat.",

      /* Abschlussaufruf (Index) */
      "jn1.eyebrow": "Bereit, wenn du es bist",
      "jn1.l1": "Bring deine Stimme,",
      "jn1.l2": "den Rest machen wir gemeinsam mutig.",
      "jn1.sub": "Bis zum nächsten Treffen!",
      "jn1.cta": "Jetzt mitmachen",
      "jn.browse": "Programme ansehen",

      /* Fußzeile & Modal */
      "foot.about": "Englisch lernen mit der Pacitan-Community, auf menschliche Art.",
"modal.title": "Mach mit bei Dreamy!",
      "modal.intro": "Drei einfache Schritte, um dabeizusein:",
      "modal.s1": "Melde dich bei unserem Kontakt, die Admins antworten.",
      "modal.s2": "Tritt der Community-Gruppe für die Termine bei.",
      "modal.s3": "Komm vorbei und strahle beim nächsten Treffen!",
      "modal.wa": "Chat per WhatsApp",
      "modal.ig": "DM auf Instagram",

      /* Programmseite */
      "pg.eyebrow": "Dreamy-Programme",
      "pg.rest": "Drei Türen zum",
      "pg.hl": "flüssigeren Ich",
      "pg.sub": "Drei Türen zu einem flüssigeren Ich; beginne mit der leichtesten.",
      "d1.body": "Wöchentliche Kleingruppen-Gespräche, der Herzschlag der Community. Für Anfänger bis Fortgeschrittene.",
      "d1.f1": "Ankommen mit Kaffee",
      "d1.f2": "Ice-Breaker-Spiel",
      "d1.f3": "Buddy-Talk, Gespräche zu zweit",
      "d1.f4": "Mini-Stage, vor allen sprechen",
      "d1.f5": "Herzliches Feedback",
      "d2.body": "Ein saisonales 2-Tage-Sprech-Camp: Bühnenabend, Team-Quests und Lagerfeuer-Gespräche.",
      "d2.f1": "Ankunft und Aufwärmspiele",
      "d2.f2": "Team-Quests, nur Englisch!",
      "d2.f3": "Lagerfeuer-Gespräche",
      "d2.f4": "Session im Freien",
      "d2.f5": "Erinnerungen festhalten",
      "d3.body": "Kurze Online-Kurse: Aussprache, kompakte Grammatik und Präsentations-Basics.",
      "d3.f1": "Online-Kurs jede Woche",
      "d3.f2": "Grammatik in 5 Minuten",
      "d3.f3": "Üben im eigenen Tempo",
      "d3.f4": "Mini-Präsentationen",
      "d3.f5": "Kleines Zertifikat",
      "jn2.eyebrow": "Eins wählen oder alle drei",
      "jn2.rest": "Bis bald beim",
      "jn2.hl": "nächsten Treffen",
      "jn2.sub": "Kein Niveau-Hindernis, nur die Absicht zu kommen. Den Rest schaffen wir gemeinsam.",
      "jn.back": "Zurück zur Startseite",

      "foot.programs": "Programme",
      "foot.faq": "FAQ"
    }
  };

  /* ---------------- Logika pilihan bahasa ---------------- */

  const doc = document;
  const root = doc.documentElement;
  const dict = window.DMC_I18N;
  const LANGS = ["en", "id", "de"];
  const STORE = "dmc-lang";
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Baca pilihan tersimpan (aman bila penyimpanan dibatasi peramban) */
  let saved = "";
  try {
    saved = (localStorage.getItem(STORE) || "").toLowerCase();
  } catch (e) { saved = ""; }
  const start = dict[saved] ? saved : "en";

  /* Tukar semua teks: elemen [data-i18n] diisi teks murni bahasa aktif */
  function putTexts(lang) {
    doc.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = dict[lang][el.dataset.i18n];
      if (val != null) el.textContent = val;
    });

    /* judul dokumen & meta deskripsi mengikuti halaman (data-meta-*) */
    const titleKey = doc.body.dataset.metaTitle || "";
    const descKey = doc.body.dataset.metaDesc || "";
    if (titleKey && dict[lang][titleKey]) doc.title = dict[lang][titleKey];
    if (descKey && dict[lang][descKey]) {
      const m = doc.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", dict[lang][descKey]);
    }
  }

  /* Sinkron atribut: html[lang], html[data-lang] (menggerakkan thumb CSS),
     aria-pressed tiap tombol pilihan */
  function apply(lang) {
    root.lang = lang;
    root.dataset.lang = lang;
    doc.querySelectorAll("[data-lang-choice]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.langChoice === lang))
    );
  }

  function setLang(lang, animate) {
    if (!dict[lang]) return;
    apply(lang);
    try { localStorage.setItem(STORE, lang); } catch (e) {}

    if (!animate || reduceMotion) {
      putTexts(lang);
      return;
    }
    /* animasi halus: fade keluar, tukar teks, fade masuk */
    root.classList.add("i18n-out");
    window.setTimeout(() => {
      putTexts(lang);
      root.classList.remove("i18n-out");
      root.classList.add("i18n-in");
      window.setTimeout(() => root.classList.remove("i18n-in"), 240);
    }, 200);
  }

  /* Terapkan bahasa tersimpan saat halaman dibuka (tanpa animasi) */
  putTexts(start);
  apply(start);

  /* ----------
     Tombol melayang (FAB) + popup berbendera.
     Posisi fixed: tidak terpengaruh gulir, selalu bisa dipakai.
     ---------- */
  const fab = doc.querySelector("[data-lang-toggle]");
  const pop = doc.getElementById("lang-pop");

  function setPop(open) {
    if (!pop) return;
    pop.hidden = !open;
    doc.body.classList.toggle("lang-pop-open", open);
    if (fab) fab.setAttribute("aria-expanded", String(open));
  }

  /* klik / tap tombol bendera: buka-tutup popup */
  fab?.addEventListener("click", () =>
    setPop(!doc.body.classList.contains("lang-pop-open"))
  );

  /* klik / tap pilihan: ganti bahasa, lalu tutup popup */
  doc.querySelectorAll("[data-lang-choice]").forEach((b) =>
    b.addEventListener("click", () => {
      setLang(b.dataset.langChoice, true);
      setPop(false);
    })
  );

  /* klik di luar widget menutup popup */
  doc.addEventListener("click", (e) => {
    if (!doc.body.classList.contains("lang-pop-open")) return;
    if (e.target.closest(".lang-fab")) return;
    setPop(false);
  });

  /* ESC menutup popup */
  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && doc.body.classList.contains("lang-pop-open")) {
      setPop(false);
    }
  });
})();
