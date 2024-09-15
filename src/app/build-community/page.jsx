import Header from "@/components/header";
import * as styles from "@/components/styles";
import BuildCommunityContainer from "@/components/ui/BuildCommunityContainer";
import Footer from "@/components/footer";

const teksnya = {
  title:
    "Upaya Perkembangan Kota : Tidak Adanya Keterlibatan Masyarakat Secara Utuh dan Berkelanjutan",
  minutes: 5,
  date: "12 Agt 2024",
  content:
    "Silau dengan pesona dan imaji hidup yang lebih baik, orang-orang tergoda meninggalkan kampungnya dan pergi ke kota, berharap mendapatkan hidup yang lebih sejahtera. Sayang, ruang fisik tidak tumbuh semudah & secepat kedatangan para pengadu nasib, kebutuhan ruang bagi warga kota pun semakin mendesak.\n\nUmumnya, kepentingan sosial dan ekonomi menjadi pemicu utama terjadinya perubahan kota. Dua faktor ini, ditambah daya tarik kota yang menawarkan modernitas peradaban, juga selalu menggoda orang untuk pergi dan menetap di sana. Meningkatnya populasi dan guyuran arus modal yang jauh melebihi daya tampung kota menyebabkan suatu wilayah menjadi semakin padat atau malah meluber ke sekitarnya. Bagian kota yang tak tersentuh dan terurus kemudian berubah menjadi kawasan kumuh.\n\nPengelola, pemerintah, arsitek, perancang, tokoh masyarakat dan segenap stakeholder pun harus memutar otak untuk menangani masalah ini. Rancangan vertikal, seperti rumah susun, pasar susun, hingga kampung susun telah diusulkan berulang kali sebagai jawaban atas kota yang pertumbuhannya kalah cepat dengan pertumbuhan populasinya. Akan tetapi, layaknya sebuah pertaruhan, tidak ada yang dapat memastikan keberhasilannya dengan sempurna.\n\nBeberapa waktu lalu, proyek 'Kampung Susun Produktif Tumbuh Cakung' (selanjutnya disebut Kampung Susun Cakung) diresmikan oleh Gubernur DKI, Anies Baswedan di Jakarta Timur. Perancangnya adalah Yu Sing, arsitek yang banyak berbicara soal arsitektur mikro. Sepak terjangnya termasuk kritik atas pembangunan masif di tengah keterbatasan lahan yang tujuannya tak tentu. Yu Sing mencoba merubah paradigma 'sempit-luas' dan 'cukup-kurang ' dalam sebuah ruang, terkhusus hunian. Kampung susun rancangannya ini, tema besarnya tentu berangkat dari isu efisiensi lahan kota, namun persoalan kultur dirasa patut untuk ikut diperbincangkan di sini, terkhusus kultur kampung.\n\nMenurut Yu Sing, masing-masing unit kampung susun ini berukuran 36m2 dengan pembagian fungsi ruang privat dan ekonomi bagi para calon penghuninya. Kampung Susun Cakung menarik dibahas karena rancangannya yang fokus pada dikotomi ruang privat dan ekonomi. Dari sini, kita kemudian sah untuk bertanya-tanya: 'Apa yang sejatinya membuat kampung disebut 'kampung'?' atau setidaknya 'Bagaimana 'kampung' dimaknai oleh sang perancang?' Jawabannya tentu akan sangat variatif, tergantung dari arah mana kita melihatnya, yang jelas pertanyaan ini penting karena akan berkaitan pula dengan bagaimana standar-standar ruang kampung akan dimanifestasikan.\n\nKita tentu paham bahwa kampung dan kota memiliki kompleksitasnya masing-masing, maka selain pendekatan ekonomi, dimensi sosial dan aktivitas kebudayaan kampung juga perlu diperhitungkan. Belum lagi polemik spasial seperti batas-batas privasi, lingkungan yang sehat bagi anak, kebersihan, kesehatan, akses informasi, dan lain sebagainya. Alih-alih menghadirkan kultur kampung di tengah kota, yang justru dikhawatirkan adalah memperlakukan kampung dengan kacamata orang kota.\n\nKedua, berbicara tentang sosio-kultur kampung akan diawali dengan premis bahwa pada kondisi tertentu, perilaku pengguna tidak selalu dapat diatur sedemikian rupa melalui rekayasa desain dan mantra-mantra akademik. Dengan mengasumsikan bahwa premis ini benar, maka pendekatan atas 'standar kelaziman' warga sebelum relokasi bakal lebih memungkinkan kita memikirkan solusi yang lebih cair, ketimbang mengimpor begitu saja tolok ukur yang sudah mapan.\n\nDengan pola pikir seperti ini, kita seharusnya sudah mulai insaf dan berpikir bahwa memperdebatkan solusi atas persoalan kesejahteraan masyarakat akan terdengar seperti ilusi ketika pemenuhan kebutuhan dasar saja masih belum dipikirkan secara tuntas. Mulai dari hal-hal yang telah disebut sebelumnya, ditambah dengan kualitas air, udara, makanan, hingga taraf pendidikan, akses informasi, dan kesehatan. Mengingat bagaimana 'kawasan kumuh' dicirikan, maka seharusnya pilihan yang muncul tidak terbatas pada relokasi saja, melainkan juga opsi pemenuhan semua kebutuhan dasar di lahan yang sudah ada.\n\nMaka, selain solusi teknis, penyelesaian masalah kota juga perlu mengikutsertakan perubahan sosio-kultur warganya. Maksudnya adalah membuat warga tersadar bahwa infrastruktur dan tata kelola ruang hidup yang layak memang benar-benar dibutuhkan. Lebih spesifik, tuntutan atas pemenuhan kebutuhan dasar harus diartikulasikan dari kesadaran warga sendiri, alih-alih didikte. Kebersihan lingkungan, misalnya, dapat terwujud ketika warga memang memiliki kultur yang bersih sehat dengan didukung infrastruktur dan tata kelola sampah yang baik. Dengan pendekatan teknis dan terlebih aspek humanis yang seimbang, kita kemudian akan dapat mempertanyakan kembali, benarkah relokasi dan aktivitas susun-menyusun adalah jaminan atas selesainya problem kawasan kumuh?",
};

const BuildCommunity = () => {
  return (
    <div
      className={`${styles.pageSize} min-h-[100vh] ${styles.bluePallete} flex justify-stretch`}
    >
      <div className='z-10'>
        <Header title='Build the Community' />
      </div>
      <div className="">
        <div className={`${styles.pageContainer} flex flex-col w-full`}>
          <h2 className='self-end text-white text-4xl font-bold mb-20'>
            Build The Community
          </h2>
          <BuildCommunityContainer />
        </div>
      </div>
      <div className={`${styles.pageContainer}`}>
        <Footer color='white' />
      </div>
    </div>
  );
};

export default BuildCommunity;
