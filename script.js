// Data makanan dengan foto asli
const foods = [
    {
        name: "Rendang",
        origin: "Sumatera Barat",
        category: "sumatera",
        image: "media/rendang.jpg",
        description: "Hidangan daging sapi yang dimasak dalam santan dan rempah-rempah khas Minangkabau.",
        fullDescription: "Rendang adalah masakan daging yang berasal dari Minangkabau, Sumatera Barat. Hidangan ini dimasak dalam waktu yang lama dengan santan kelapa dan campuran rempah-rempah seperti cabai, serai, daun jeruk, lengkuas, bawang merah, bawang putih, jahe, dan kunyit. Proses memasak yang panjang membuat daging menjadi empuk dan bumbu meresap sempurna. Rendang telah diakui sebagai hidangan terlezat di dunia oleh CNN pada tahun 2011."
    },
    {
        name: "Gudeg",
        origin: "Yogyakarta",
        category: "jawa",
        image: "media/gudeg.jpg",
        description: "Makanan tradisional Yogyakarta berbahan dasar nangka muda yang dimasak dengan santan.",
        fullDescription: "Gudeg adalah hidangan tradisional dari Yogyakarta yang terbuat dari nangka muda (gori) yang dimasak dengan santan kelapa, gula jawa, dan berbagai rempah. Gudeg biasanya disajikan dengan nasi, ayam, telur pindang, sambal goreng krecek, dan tahu/tempe bacem. Cita rasanya yang manis dan gurih menjadikan gudeg sebagai ikon kuliner Yogyakarta yang terkenal hingga mancanegara."
    },
    {
        name: "Rawon",
        origin: "Jawa Timur",
        category: "jawa",
        image: "media/rawon.jpg",
        description: "Sup daging sapi berkuah hitam dengan bumbu kluwek yang khas dari Jawa Timur.",
        fullDescription: "Rawon adalah masakan sup daging sapi berkuah hitam yang berasal dari Jawa Timur. Warna hitam khas rawon berasal dari kluwek (keluak), bumbu yang memberikan rasa gurih dan aroma khas. Rawon biasanya disajikan dengan nasi putih, tauge pendek, telur asin, kerupuk udang, dan sambal. Hidangan ini sangat populer di kota-kota besar Jawa Timur seperti Surabaya dan Malang."
    },
    {
        name: "Sate Padang",
        origin: "Sumatera Barat",
        category: "sumatera",
        image: "media/sate.jpg",
        description: "Sate daging sapi dengan kuah gulai kental berwarna kuning khas Padang.",
        fullDescription: "Sate Padang adalah variasi sate yang berasal dari Padang, Sumatera Barat. Yang membedakan sate ini adalah kuah gulai yang kental dan berwarna kuning yang disiramkan di atas daging sate. Kuah ini terbuat dari kaldu daging, santan, dan berbagai rempah seperti kunyit, ketumbar, dan cabai. Sate Padang memiliki rasa yang lebih kaya dan kompleks dibandingkan sate pada umumnya."
    },
    {
        name: "Pempek",
        origin: "Palembang",
        category: "sumatera",
        image: "media/pempek.jpg",
        description: "Makanan khas Palembang dari ikan dan tepung sagu, disajikan dengan kuah cuko.",
        fullDescription: "Pempek adalah makanan asli Palembang yang terbuat dari ikan (biasanya ikan belida atau tenggiri) dan tepung sagu. Ada berbagai jenis pempek seperti kapal selam (berisi telur), lenjer, adaan, dan keriting. Pempek disajikan dengan kuah cuko yang terbuat dari air asam jawa, gula merah, garam, dan cabai rawit. Perpaduan rasa gurih pempek dengan kuah cuko yang asam, manis, dan pedas menciptakan cita rasa yang khas."
    },
    {
        name: "Coto Makassar",
        origin: "Sulawesi Selatan",
        category: "sulawesi",
        image: "media/coto makassar.jpg",
        description: "Sup daging sapi dengan bumbu rempah khas Makassar yang kaya akan cita rasa.",
        fullDescription: "Coto Makassar adalah hidangan sup tradisional dari Makassar, Sulawesi Selatan. Sup ini berisi daging sapi, jeroan, dan ketupat yang disiram kuah kaldu daging yang gurih dan kaya rempah. Bumbu coto terdiri dari bawang merah, bawang putih, jahe, lengkuas, serai, daun salam, dan kemiri. Hidangan ini biasanya dimakan dengan ketupat dan ditaburi bawang goreng serta daun seledri."
    },
    {
        name: "Sate Lilit",
        origin: "Bali",
        category: "bali",
        image: "media/sate lilit.jpg",
        description: "Sate ikan cincang yang dililitkan pada batang serai, khas Bali.",
        fullDescription: "Sate Lilit adalah hidangan sate khas Bali yang terbuat dari daging ikan (biasanya tongkol atau tenggiri) yang dicincang halus dan dicampur dengan kelapa parut, santan, dan bumbu Base Gede. Adonan kemudian dililitkan pada batang serai atau bambu dan dibakar. Penggunaan serai sebagai tusukan memberikan aroma yang khas. Sate lilit memiliki tekstur yang lebih padat dan rasa yang gurih dengan aroma rempah Bali yang khas."
    },
    {
        name: "Ayam Betutu",
        origin: "Bali",
        category: "bali",
        image: "media/ayam betutu.jpg",
        description: "Ayam utuh yang dibumbui rempah-rempah dan dibungkus daun kemudian dipanggang.",
        fullDescription: "Ayam Betutu adalah hidangan tradisional Bali berupa ayam utuh yang dibumbui dengan bumbu Base Gede (bumbu dasar Bali) yang terdiri dari berbagai rempah seperti bawang merah, bawang putih, cabai, kemiri, kunyit, jahe, lengkuas, dan terasi. Ayam kemudian dibungkus dengan daun dan dipanggang dalam tanah atau oven dengan waktu yang cukup lama sehingga bumbu meresap sempurna."
    },
    {
        name: "Nasi Liwet",
        origin: "Jawa Tengah",
        category: "jawa",
        image: "media/nasi liwet.jpeg",
        description: "Nasi yang dimasak dengan santan dan rempah, disajikan dengan lauk tradisional.",
        fullDescription: "Nasi Liwet adalah hidangan nasi khas Solo dan sekitarnya yang dimasak dengan santan kelapa, daun salam, serai, dan garam. Nasi liwet memiliki tekstur yang lebih lembek dan gurih dibandingkan nasi putih biasa. Hidangan ini biasanya disajikan dengan ayam kampung, telur pindang, sambal goreng krecek, dan lalapan. Tradisionalnya, nasi liwet dimakan dengan tangan di atas daun pisang."
    },
    {
        name: "Soto Betawi",
        origin: "Jakarta",
        category: "jawa",
        image: "media/soto ayam.jpg",
        description: "Soto khas Betawi dengan kuah santan dan isian daging sapi serta jeroan.",
        fullDescription: "Soto Betawi adalah hidangan soto khas Jakarta yang memiliki kuah berwarna putih kekuningan dari santan kelapa. Isian soto ini biasanya berupa daging sapi, jeroan (babat, paru, hati), tahu, dan tomat. Bumbu yang digunakan antara lain bawang merah, bawang putih, jahe, ketumbar, dan daun bawang. Soto Betawi biasanya disajikan dengan nasi putih, kerupuk, dan sambal."
    },
    {
        name: "Ayam Taliwang",
        origin: "Lombok, NTB",
        category: "bali",
        image: "media/ayam taliwang.jpg",
        description: "Ayam bakar atau goreng dengan bumbu pedas khas Lombok yang menggugah selera.",
        fullDescription: "Ayam Taliwang adalah hidangan khas Lombok, Nusa Tenggara Barat. Ayam muda dipotong dan dibumbui dengan cabai merah, bawang merah, bawang putih, kemiri, terasi, gula merah, dan asam. Ayam kemudian dibakar atau digoreng hingga matang. Ciri khas ayam taliwang adalah rasanya yang pedas dan gurih dengan aroma rempah yang kuat. Hidangan ini biasanya disajikan dengan plecing kangkung dan nasi."
    },
    {
        name: "Sop Konro",
        origin: "Sulawesi Selatan",
        category: "sulawesi",
        image: "media/sop buntut.jpg",
        description: "Sup iga sapi khas Makassar dengan bumbu rempah yang harum dan kuah yang kaya.",
        fullDescription: "Sop Konro adalah hidangan sup iga sapi khas Makassar dan Gowa, Sulawesi Selatan. Sup ini dibuat dari iga sapi yang dimasak dengan berbagai rempah seperti pala, kayu manis, kapulaga, cengkeh, dan kemiri. Kuah konro berwarna coklat kehitaman karena penggunaan kluwek dan kecap. Hidangan ini memiliki aroma yang sangat harum dan rasa yang gurih. Sop konro biasanya disajikan dengan ketupat atau buras."
    },
    {
        name: "Bebek Betutu",
        origin: "Bali",
        category: "bali",
        image: "media/bebek betutu.jpeg",
        description: "Bebek utuh yang dibumbui rempah tradisional Bali dan dipanggang dengan cara tradisional.",
        fullDescription: "Bebek Betutu adalah variasi dari Ayam Betutu yang menggunakan bebek utuh. Bebek dibumbui dengan bumbu Base Gede yang kaya rempah, kemudian dibungkus daun dan dipanggang dalam tanah selama berjam-jam. Proses memasak yang lama membuat daging bebek menjadi sangat empuk dan bumbu meresap hingga ke tulang. Hidangan ini adalah salah satu hidangan ceremonial Bali yang sering disajikan dalam acara-acara penting."
    },
    {
        name: "Sate Buntel",
        origin: "Yogyakarta",
        category: "jawa",
        image: "media/sate buntel.jpg",
        description: "Sate daging kambing cincang yang dibungkus lemak kambing, khas Yogyakarta.",
        fullDescription: "Sate Buntel adalah kuliner khas Solo dan Yogyakarta yang terbuat dari daging kambing cincang yang dibungkus (dibuntel) dengan lemak kambing tipis, kemudian ditusuk dan dibakar. Bumbu yang digunakan sederhana namun memberikan rasa yang khas. Sate buntel biasanya disajikan dengan nasi gudangan, sambel kecap, dan lalapan. Teksturnya yang unik dan rasa daging kambing yang kuat menjadi daya tarik utama hidangan ini."
    },
    {
        name: "Kerak Telor",
        origin: "Jakarta",
        category: "jawa",
        image: "media/kerak telur.jpg",
        description: "Makanan tradisional Jakarta dari telur dan beras ketan dengan taburan kelapa sangrai.",
        fullDescription: "Kerak Telor adalah makanan asli Betawi yang terbuat dari beras ketan putih, telur ayam atau bebek, ditambah ebi (udang kering) yang disangrai kering, bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa cabai merah, kencur, jahe, merica butiran, garam dan gula pasir. Makanan ini dimasak di atas api arang dengan menggunakan wajan khusus, dan sering dijual oleh pedagang keliling."
    },
    {
        name: "Papeda",
        origin: "Papua & Maluku",
        category: "papua",
        image: "media/papeda.jpg",
        description: "Makanan pokok dari sagu dengan tekstur lengket, biasanya disajikan dengan ikan kuah kuning.",
        fullDescription: "Papeda adalah makanan pokok masyarakat Papua dan Maluku yang terbuat dari tepung sagu. Teksturnya yang lengket dan kenyal dimakan dengan cara digulung menggunakan garpu khusus yang terbuat dari bambu. Papeda biasanya disajikan dengan ikan tongkol atau ikan cakalang yang dimasak dengan bumbu kuning (kunyit, lengkuas, serai) atau dengan sayur ganemo. Meskipun terlihat sederhana, papeda sangat mengenyangkan dan kaya akan karbohidrat."
    },
    {
        name: "Ayam Pop",
        origin: "Sumatera Barat",
        category: "sumatera",
        image: "media/ayam pop.jpeg",
        description: "Ayam rebus kemudian digoreng dengan bumbu sederhana khas Padang.",
        fullDescription: "Ayam Pop adalah hidangan ayam khas Padang yang unik karena proses memasaknya. Ayam terlebih dahulu direbus dengan bumbu sederhana hingga empuk, kemudian digoreng sebentar hingga kulitnya renyah. Bumbu yang digunakan sangat sederhana yaitu hanya garam, bawang putih, dan sedikit kunyit. Hasilnya adalah ayam dengan daging yang empuk, kulit yang renyah, dan rasa yang gurih alami. Ayam pop biasanya disajikan dengan nasi putih dan sambal lado."
    },
    {
        name: "Ikan Bakar Manokwari",
        origin: "Papua Barat",
        category: "papua",
        image: "media/ikan bakar manokwari.jpeg",
        description: "Ikan laut segar yang dibakar dengan bumbu rempah khas Papua.",
        fullDescription: "Ikan Bakar Manokwari adalah hidangan ikan bakar khas Papua Barat yang menggunakan ikan laut segar seperti ikan kakap, baronang, atau kerapu. Ikan dibumbui dengan campuran bawang merah, bawang putih, cabai, kunyit, jahe, dan kemangi, kemudian dibakar di atas bara api. Yang membuat istimewa adalah penggunaan kemangi segar yang memberikan aroma khas. Hidangan ini biasanya disajikan dengan nasi, sambal dabu-dabu, dan sayur kangkung."
    },
    {
        name: "Soto Banjar",
        origin: "Kalimantan Selatan",
        category: "kalimantan",
        image: "media/soto banjar.jpg",
        description: "Soto ayam khas Banjar dengan kuah bening dan perkedel kentang.",
        fullDescription: "Soto Banjar adalah hidangan soto khas Kalimantan Selatan yang memiliki ciri khas kuah bening yang jernih dan segar. Soto ini berisi ayam kampung, kentang rebus, telur rebus, dan perkedel kentang yang menjadi ciri khasnya. Bumbu soto banjar terdiri dari bawang merah, bawang putih, kemiri, ketumbar, kunyit, jahe, dan daun jeruk. Soto banjar biasanya disajikan dengan nasi putih, kerupuk, dan sambal."
    },
    {
        name: "Ketupat Kandangan",
        origin: "Kalimantan Selatan", 
        category: "kalimantan",
        image: "media/ketupat kandangan.jpg",
        description: "Ketupat khas Kandangan dengan kuah santan dan aneka lauk tradisional.",
        fullDescription: "Ketupat Kandangan adalah makanan khas dari Kandangan, Kalimantan Selatan. Ketupat disajikan dengan kuah santan yang gurih, dilengkapi dengan berbagai lauk seperti ayam, telur, perkedel kentang, dan sayuran. Yang membedakan ketupat kandangan adalah kuah santannya yang kental dan bumbu rempah yang khas. Hidangan ini sering disajikan saat acara-acara khusus dan hari raya."
    },
    {
        name: "Amplang",
        origin: "Kalimantan Timur",
        category: "kalimantan", 
        image: "media/amplang.jpeg",
        description: "Kerupuk ikan khas Samarinda yang renyah dan gurih sebagai camilan favorit.",
        fullDescription: "Amplang adalah kerupuk ikan khas Kalimantan Timur, khususnya Samarinda. Amplang dibuat dari ikan tenggiri yang dihaluskan, dicampur dengan tepung tapioka dan bumbu-bumbu, kemudian dibentuk dan digoreng hingga mengembang dan renyah. Teksturnya yang renyah dan rasa ikan yang gurih membuat amplang menjadi oleh-oleh favorit dari Kalimantan. Amplang dapat bertahan lama dan cocok dijadikan camilan."
    },
    {
        name: "Bubur Pedas",
        origin: "Kalimantan Barat",
        category: "kalimantan",
        image: "media/bubur pedas.jpg",
        description: "Bubur gurih pedas khas Sambas dengan ikan dan sayuran segar.",
        fullDescription: "Bubur Pedas adalah makanan khas Sambas, Kalimantan Barat. Bubur ini dibuat dari beras yang dimasak dengan santan kelapa dan bumbu rempah hingga mengental. Isinya berupa ikan (biasanya ikan gabus atau ikan patin), sayur kangkung, tauge, dan kemangi. Bumbu yang digunakan antara lain bawang merah, bawang putih, cabai, kemiri, dan terasi. Meskipun disebut 'pedas', tingkat kepedasannya bisa disesuaikan dengan selera."
    },
    {
        name: "Manday",
        origin: "Kalimantan Tengah",
        category: "kalimantan",
        image: "media/manday.jpg",
        description: "Ikan patin asap khas Dayak yang dimasak dengan bumbu tradisional.",
        fullDescription: "Manday adalah ikan patin asap khas suku Dayak di Kalimantan Tengah. Ikan patin segar diasapi menggunakan kayu khusus sehingga menghasilkan aroma dan rasa yang khas. Setelah diasapi, ikan kemudian dimasak dengan bumbu tradisional Dayak yang terdiri dari bawang merah, bawang putih, cabai, kunyit, dan rempah lainnya. Manday memiliki tekstur yang kenyal dan rasa yang sangat gurih dengan aroma asap yang khas."
    },
    {
        name: "Lemang Tapai",
        origin: "Kalimantan Selatan",
        category: "kalimantan",
        image: "media/lamang tapai.jpg",
        description: "Ketan yang dimasak dalam bambu dengan tapai khas Banjar.",
        fullDescription: "Lemang Tapai adalah makanan tradisional Kalimantan Selatan yang terbuat dari beras ketan yang dimasak dalam bambu (lemang) dan disajikan dengan tapai. Tapai yang digunakan biasanya tapai singkong atau tapai ketan yang difermentasi sehingga memiliki rasa manis dan sedikit asam. Kombinasi lemang yang gurih dengan tapai yang manis-asam menciptakan perpaduan rasa yang unik. Makanan ini sering disajikan saat acara adat atau perayaan khusus."
    },
    {
        name: "Nasi Goreng",
        origin: "Jawa",
        category: "jawa",
        image: "media/nasi goreng.jpg",
        fullDescription: "Nasi Goreng adalah hidangan nasi yang digoreng dengan bumbu rempah khas Indonesia seperti bawang putih, bawang merah, cabai, dan kecap manis. Meskipun populer di seluruh Indonesia, nasi goreng memiliki akar kuat di Jawa, terutama di daerah Jawa Tengah dan Jawa Timur. Hidangan ini telah diakui sebagai salah satu makanan terenak dunia dan menjadi hidangan nasional Indonesia yang paling dikenal di mancanegara."
    },
    {
        name: "Gado-gado",
        origin: "Jakarta",
        category: "jawa",
        image: "media/gado gado.jpg",
        description: "Salad sayuran segar Indonesia dengan bumbu kacang yang kaya rasa.",
        fullDescription: "Gado-gado adalah salad khas Indonesia yang terdiri dari sayuran segar seperti kacang panjang, tauge, kol, dan tomat, disajikan dengan bumbu kacang yang gurih dan pedas. Gado-gado berasal dari Jawa, Indonesia, dan dianggap sebagai salah satu makanan tradisional Indonesia yang paling terkenal. Hidangan ini mencerminkan kekayaan sayuran tropis Indonesia dan kreativitas dalam mencampur berbagai tekstur dan rasa."
    },
    {
        name: "Martabak",
        origin: "Jakarta",
        category: "jawa",
        image: "media/martabak.jpg",
        description: "Roti tebal berisi telur, daging, atau cokelat yang digoreng hingga renyah.",
        fullDescription: "Martabak adalah roti tebal yang diisi dengan telur, daging, atau cokelat, kemudian digoreng dan disajikan dengan saus kacang atau saus manis. Martabak dikenal sebagai salah satu camilan favorit di Indonesia, dengan varian yang berasal dari Betawi, Jakarta. Ada dua jenis martabak utama: martabak asin (berisi telur dan daging) dan martabak manis (berisi cokelat, kacang, atau keju)."
    },
    {
        name: "Lumpia",
        origin: "Jawa Tengah",
        category: "jawa",
        image: "media/lumpia.jpg",
        description: "Gulungan kulit lumpia berisi sayuran dan daging, digoreng hingga renyah.",
        fullDescription: "Lumpia adalah gulungan kulit lumpia yang diisi dengan sayuran, daging, atau seafood, kemudian digoreng hingga renyah. Meskipun lumpia berasal dari pengaruh Tionghoa, lumpia versi Indonesia, terutama Lumpia Semarang, menjadi populer di seluruh Nusantara dan dianggap sebagai makanan khas Indonesia. Lumpia Semarang memiliki ciri khas isi rebung, telur, dan udang."
    },
    {
        name: "Nasi Uduk",
        origin: "Jakarta",
        category: "jawa",
        image: "media/nasi uduk.jpg",
        description: "Nasi yang dimasak dengan santan dan rempah, disajikan dengan aneka lauk.",
        fullDescription: "Nasi Uduk adalah hidangan nasi khas Betawi yang dimasak dengan santan kelapa dan rempah-rempah hingga harum dan gurih. Nasi uduk biasanya disajikan dengan pelengkap seperti telur dadar, tempe goreng, tahu goreng, ikan asin, serundeng, dan sambal. Hidangan ini populer sebagai sarapan atau makan malam yang mengenyangkan dan kaya cita rasa."
    },
    {
        name: "Rujak",
        origin: "Jawa",
        category: "jawa",
        image: "media/rujak.JPG",
        description: "Salad buah segar dengan sambal manis pedas yang menyegarkan.",
        fullDescription: "Rujak adalah salad buah-buahan segar yang disajikan dengan sambal manis pedas atau bumbu kacang. Rujak menjadi camilan yang populer di seluruh Indonesia dengan berbagai variasi buah seperti mangga muda, jambu air, bengkuang, nanas, dan kedondong. Kombinasi rasa manis, asam, pedas, dan asin dalam rujak menciptakan sensasi rasa yang unik dan menyegarkan."
    },
    {
        name: "Bakso",
        origin: "Jawa Timur",
        category: "jawa",
        image: "media/bakso.jpg",
        description: "Bola daging dalam kuah kaldu dengan mie dan sayuran.",
        fullDescription: "Bakso adalah bola daging yang terbuat dari campuran daging sapi dan tepung tapioka, disajikan dalam kuah kaldu yang gurih dengan tambahan mie, tahu, dan sayuran. Bakso menjadi makanan jalanan paling populer di Indonesia dengan berbagai ukuran dan varian, mulai dari bakso biasa hingga bakso urat, bakso keju, dan bakso bakar."
    },
    {
        name: "Es Cendol",
        origin: "Jawa Barat",
        category: "jawa",
        image: "media/es cendol.jpg",
        description: "Minuman dingin dengan santan, gula merah, dan cendol hijau.",
        fullDescription: "Es Cendol adalah minuman dingin tradisional yang terbuat dari santan kelapa, gula merah cair, dan tetesan tepung tapioka berwarna hijau (cendol), disajikan dengan es serut. Minuman ini sangat menyegarkan dan populer di cuaca tropis Indonesia. Cendol yang kenyal dan manis berpadu dengan santan yang gurih menciptakan kombinasi rasa yang sempurna."
    },
    {
        name: "Nasi Kuning",
        origin: "Jawa",
        category: "jawa",
        image: "media/nasi kuning.jpg",
        description: "Nasi yang diwarnai kunyit, disajikan dalam acara-acara spesial.",
        fullDescription: "Nasi Kuning adalah hidangan nasi yang diwarnai dan diberi aroma oleh kunyit, disajikan dengan pelengkap seperti telur, ayam goreng, serundeng, dan acar. Nasi kuning memiliki makna simbolis dalam budaya Indonesia dan sering disajikan dalam acara-acara penting seperti ulang tahun, syukuran, atau perayaan tradisional. Warna kuning melambangkan kemakmuran dan kebahagiaan."
    },
    {
        name: "Babi Guling",
        origin: "Bali",
        category: "bali",
        image: "media/babi guling.jpg",
        description: "Daging babi yang dipanggang dengan rempah khas Bali.",
        fullDescription: "Babi Guling adalah hidangan tradisional Bali berupa daging babi utuh yang dipanggang secara tradisional di atas bara api dengan bumbu rempah khas Bali. Daging babi dibumbui dengan Base Gede yang terdiri dari berbagai rempah seperti bawang merah, bawang putih, cabai, kemiri, kunyit, jahe, dan kencur. Hidangan ini menjadi menu wajib dalam upacara adat Hindu Bali dan diakui sebagai kuliner internasional khas Indonesia."
    },
    {
        name: "Sambal Matah",
        origin: "Bali",
        category: "bali",
        image: "media/sambal matah.jpeg",
        description: "Sambal segar khas Bali dengan cabai, bawang, dan jeruk nipis.",
        fullDescription: "Sambal Matah adalah sambal khas Bali yang terbuat dari cabai rawit, bawang merah, bawang putih, jeruk nipis, dan daun jeruk purut yang dipotong kasar dan dicampur mentah. Sambal ini memberikan cita rasa segar, pedas, dan harum yang khas. Berbeda dengan sambal lainnya, sambal matah tidak dimasak sehingga mempertahankan kesegaran semua bahan dan memberikan sensasi rasa yang unik."
    },
    {
        name: "Nasi Tumpeng",
        origin: "Jawa",
        category: "jawa",
        image: "media/nasi tumpeng.jpg",
        description: "Nasi berbentuk kerucut untuk perayaan dan upacara adat.",
        fullDescription: "Nasi Tumpeng adalah hidangan nasi tradisional Indonesia yang disajikan dalam bentuk kerucut dan dikelilingi berbagai lauk pauk. Nasi tumpeng biasanya disajikan dalam acara-acara khusus, perayaan, dan upacara adat sebagai simbol rasa syukur. Bentuk kerucut nasi tumpeng melambangkan gunung yang dianggap suci, sementara lauk-pauk di sekelilingnya melambangkan kehidupan yang harmonis."
    },
    {
        name: "Pisang Goreng",
        origin: "Jawa",
        category: "jawa",
        image: "media/pisang goreng.jpeg",
        description: "Pisang yang dilapisi adonan tepung dan digoreng renyah.",
        fullDescription: "Pisang Goreng adalah camilan populer Indonesia berupa potongan pisang yang dilapisi dengan adonan tepung berbumbu, kemudian digoreng hingga renyah dan berwarna keemasan. Pisang goreng menjadi camilan favorit di seluruh Indonesia bahkan mancanegara karena rasanya yang manis, tekstur yang lembut di dalam dan renyah di luar. Ada berbagai variasi pisang goreng, mulai dari yang sederhana hingga yang diisi cokelat atau keju."
    },
    {
        name: "Pecel Lele",
        origin: "Jawa",
        category: "jawa",
        image: "media/pecel lele.jpeg",
        description: "Lele goreng dengan sambal kacang dan lalapan segar.",
        fullDescription: "Pecel Lele adalah hidangan yang terdiri dari ikan lele yang digoreng hingga renyah dan disajikan dengan sambal kacang pedas atau sambal terasi, lalapan segar, dan nasi. Hidangan ini menjadi makanan rakyat yang sangat populer di Indonesia karena harganya yang terjangkau namun rasanya yang lezat. Kombinasi lele goreng yang gurih dengan sambal pedas dan lalapan segar menciptakan harmoni rasa yang sempurna."
    },
    {
        name: "Es Teler",
        origin: "Jakarta",
        category: "jawa",
        image: "media/es teler.jpg",
        description: "Minuman segar dengan buah-buahan tropis dan susu kental manis.",
        fullDescription: "Es Teler adalah minuman dingin yang terdiri dari potongan buah-buahan segar seperti kelapa muda, alpukat, nangka, dan cincau, disajikan dengan susu kental manis dan es serut. Minuman ini sangat populer sebagai penutup yang menyegarkan, terutama di cuaca panas. Kombinasi berbagai buah tropis dengan susu kental manis menciptakan rasa yang kaya dan tekstur yang beragam."
    },
    {
        name: "Sayur Lodeh",
        origin: "Jawa",
        category: "jawa",
        image: "media/sayur lodeh.jpg",
        description: "Sayuran dalam kuah santan dengan rempah tradisional.",
        fullDescription: "Sayur Lodeh adalah hidangan sayuran yang dimasak dalam kuah santan kelapa dengan tambahan rempah-rempah seperti daun salam, serai, lengkuas, dan cabai. Hidangan ini biasanya berisi berbagai sayuran seperti labu siam, kacang panjang, terong, dan tahu tempe. Sayur lodeh menjadi hidangan yang lezat dan bergizi, serta merupakan bagian penting dari masakan Jawa tradisional."
    },
    {
        name: "Pisang Ijo",
        origin: "Sulawesi Selatan",
        category: "sulawesi",
        image: "media/es pisang ijo.jpg",
        description: "Pisang dengan lapisan tepung hijau dan kuah santan manis.",
        fullDescription: "Pisang Ijo adalah makanan khas Makassar yang terbuat dari pisang yang dilapisi adonan tepung beras berwarna hijau (dari pandan), kemudian dikukus dan disajikan dengan kuah santan dan gula merah. Hidangan ini menjadi dessert yang segar dan manis, sangat cocok dinikmati dalam cuaca panas. Warna hijau yang menarik dan rasa yang manis membuatnya menjadi favorit wisatawan."
    },
    {
        name: "Es Doger",
        origin: "Jawa Barat",
        category: "jawa",
        image: "media/es doger.jpg",
        description: "Minuman es campur dengan tape ketan dan buah-buahan.",
        fullDescription: "Es Doger adalah minuman dingin yang terbuat dari campuran es serut, santan, gula merah, tape ketan hitam, alpukat, kelapa muda, dan agar-agar warna-warni. Minuman ini menjadi favorit terutama pada cuaca yang panas karena kesegaran dan variasi tekstur yang diberikan. Es doger mencerminkan kreativitas kuliner Indonesia dalam mencampur berbagai bahan menjadi minuman yang lezat dan menarik."
    },
    {
        name: "Ketoprak",
        origin: "Jakarta",
        category: "jawa",
        image: "media/ketoprak.jpg",
        description: "Hidangan vegetarian dengan tahu, bihun, dan bumbu kacang.",
        fullDescription: "Ketoprak adalah hidangan vegetarian yang terdiri dari tahu goreng, bihun, tauge, dan lontong, disajikan dengan bumbu kacang dan kecap manis. Hidangan ini menjadi pilihan yang lezat dan bergizi bagi vegetarian maupun non-vegetarian. Ketoprak populer sebagai makanan jalanan yang mengenyangkan dengan harga terjangkau, dan bumbu kacangnya yang gurih menjadi daya tarik utama."
    },
    {
        name: "Tahu Tek",
        origin: "Jawa Timur",
        category: "jawa",
        image: "media/tahu tek.jpg",
        description: "Tahu goreng dengan telur dan bumbu kacang khas Surabaya.",
        fullDescription: "Tahu Tek adalah hidangan khas Surabaya yang terdiri dari tahu goreng yang dipotong-potong dan dicampur dengan irisan mentimun, taoge, telur rebus, dan bumbu kacang yang kaya rasa. Nama 'tek' berasal dari suara gunting yang memotong tahu dan sayuran. Hidangan ini menjadi camilan favorit masyarakat Surabaya dengan cita rasa yang gurih dan segar."
    },
    {
        name: "Rujak Cingur",
        origin: "Jawa Timur",
        category: "jawa",
        image: "media/rujak cingur.jpg",
        description: "Rujak dengan cingur dan sayuran, khas Surabaya.",
        fullDescription: "Rujak Cingur adalah hidangan khas Surabaya yang terdiri dari irisan mentimun, bengkuang, tauge, lontong, tahu, tempe, dan cingur (hidung sapi yang dimasak), semua dicampur dengan bumbu rujak yang pedas dan segar. Hidangan ini memiliki kombinasi rasa yang kompleks dan tekstur yang beragam, menjadikannya salah satu kuliner ikonik Jawa Timur yang unik dan menantang untuk dicoba."
    },
    {
        name: "Pisang Bakar",
        origin: "Jawa",
        category: "jawa",
        image: "media/pisang bakar.jpg",
        description: "Pisang yang dipanggang dengan topping manis modern.",
        fullDescription: "Pisang Bakar adalah hidangan yang terbuat dari pisang raja yang dipanggang di atas bara api kemudian disajikan dengan berbagai topping seperti keju, cokelat, susu kental manis, atau selai. Camilan ini menjadi populer di seluruh Indonesia sebagai street food yang manis dan mengenyangkan. Kombinasi pisang yang manis dengan topping modern menciptakan variasi rasa yang menarik."
    },
    {
        name: "Klepon",
        origin: "Jawa",
        category: "jawa",
        image: "media/klepon.jpg",
        description: "Kue ketan bulat berisi gula merah dengan kelapa parut.",
        fullDescription: "Klepon adalah kue tradisional Indonesia yang terbuat dari tepung ketan yang dibentuk bulat kemudian diisi dengan gula merah cair, direbus hingga matang, dan dilapisi kelapa parut. Klepon memiliki tekstur kenyal di luar dengan kejutan manis di dalam saat gigitan pertama. Kue ini menjadi jajanan pasar yang populer dan sering disajikan dalam acara-acara tradisional."
    },
    {
        name: "Sambal Pecel",
        origin: "Jawa Timur",
        category: "jawa",
        image: "media/sambal pecel.jpg",
        description: "Sambal kacang pedas untuk sayuran rebus dan lontong.",
        fullDescription: "Sambal Pecel adalah sambal tradisional Indonesia yang terbuat dari kacang tanah, gula kelapa, cabai, bawang merah, bawang putih, daun jeruk, dan berbagai rempah lainnya yang dihaluskan hingga tercampur dan bertekstur kental. Sambal pecel menjadi bagian penting dari hidangan pecel dan banyak dipadukan dengan nasi, lontong, sayuran rebus, dan lauk lainnya dalam berbagai acara di Nusantara."
    }
];

// Fungsi untuk mengambil data favorit dari localStorage
function getFavorites() {
    const favorites = localStorage.getItem('favoriteFoods');
    return favorites ? JSON.parse(favorites) : [];
}

// Fungsi untuk menyimpan data favorit ke localStorage
function saveFavorites(favorites) {
    localStorage.setItem('favoriteFoods', JSON.stringify(favorites));
}

// Fungsi untuk menambah atau menghapus makanan dari daftar favorit
function toggleFavorite(foodName) {
    let favorites = getFavorites();
    if (favorites.includes(foodName)) {
        favorites = favorites.filter(name => name !== foodName);
    } else {
        favorites.push(foodName);
    }
    saveFavorites(favorites);
}

// State untuk menyimpan data yang sedang ditampilkan
let displayedFoods = foods;
let currentPage = 1;
const itemsPerPage = 6;

// Fungsi untuk membuat card makanan
function createFoodCard(food) {
    const favorites = getFavorites();
    const isFavorited = favorites.includes(food.name);
    const favoritedClass = isFavorited ? 'favorited' : '';

    return `
        <div class="food-card" data-category="${food.category}" data-name="${food.name}">
            <span class="favorite-btn ${favoritedClass}" title="Tambahkan ke favorit">♥</span>
            <div class="food-image" style="background-image: url('${food.image}')"></div>
            <div class="food-content">
                <h3 class="food-title">${food.name}</h3>
                <p class="food-origin">📍 ${food.origin}</p>
                <p class="food-description">${food.description || 'Klik untuk deskripsi lengkap.'}</p>
            </div>
        </div>
    `;
}


// Fungsi untuk menampilkan makanan di grid
function displayFoods() {
    const foodGrid = document.getElementById('foodGrid');
    foodGrid.innerHTML = ''; 

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = displayedFoods.slice(startIndex, endIndex);

    const foodCards = paginatedItems.map(createFoodCard).join('');
    foodGrid.innerHTML = foodCards;

    // Tambahkan event listener untuk tombol favorit
    const favoriteButtons = foodGrid.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const card = btn.closest('.food-card');
            const foodName = card.dataset.name;
            
            toggleFavorite(foodName);
            btn.classList.toggle('favorited'); 
        });
    });

    // Tambahkan event listener untuk setiap card
    const cards = foodGrid.querySelectorAll('.food-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const foodName = card.dataset.name;
            const foodData = foods.find(f => f.name === foodName);
            showFoodModal(foodData);
        });
    });

    setupPagination();
}

//untuk membuat tombol-tombol halaman
function setupPagination() {
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = '';

    const pageCount = Math.ceil(displayedFoods.length / itemsPerPage);

    if (pageCount <= 1) return;

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.classList.add('page-btn');
        btn.innerText = i;
        if (i === currentPage) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            currentPage = i;
            displayFoods();
            window.scrollTo(0, 0);
        });
        paginationContainer.appendChild(btn);
    }
}

// Fungsi untuk filter berdasarkan kategori
function filterByCategory(category) {
    if (category === 'all') {
        displayedFoods = foods;
    } else if (category === 'favorit') {
        const favoriteNames = getFavorites();
        displayedFoods = foods.filter(food => favoriteNames.includes(food.name));
    } else {
        displayedFoods = foods.filter(food => food.category === category);
    }
    currentPage = 1;
    displayFoods();
}

// Fungsi untuk pencarian
function searchFoods(searchTerm) {
    const term = searchTerm.toLowerCase();

    if (term) {
        displayedFoods = foods.filter(food =>
            food.name.toLowerCase().includes(term) ||
            food.origin.toLowerCase().includes(term)
        );
    } else {
        displayedFoods = foods;
    }
    currentPage = 1;
    displayFoods();
}

// Fungsi untuk menampilkan modal
function showFoodModal(food) {
    const modal = document.getElementById('foodModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = food.name;
    modalBody.innerHTML = `
        <p><strong>📍 Asal Daerah:</strong> ${food.origin}</p>
        <br>
        <p>${food.fullDescription}</p>
        <br>
        <p><em>Hidangan ini merupakan bagian dari kekayaan kuliner Nusantara yang patut kita lestarikan dan banggakan.</em></p>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('foodModal').style.display = 'none';
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('foodModal').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    displayFoods();

    // Event listener untuk tombol filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });

    // Event listener untuk search box
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('input', function() {
        searchFoods(this.value);
    });

    // Event listener untuk menutup modal
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('foodModal');
        if (event.target == modal) {
            closeModal();
        }
    });
});