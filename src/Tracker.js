import { useState } from "react";

const leaderboardData = [
  { name: "Iaratak", score: 0, image: "https://i.ibb.co/kVXD53gF/Whats-App-Image-2025-03-23-at-21-39-03.png" },
  { name: "Federex", score: 0, image: "https://i.ibb.co/m5L74B9G/Whats-App-Image-2025-03-23-at-20-02-49.jpg" },
  { name: "Muffi Mafia", score: 0, image: "https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg" },
  { name: "vickiroosa", score: 0, image: "https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg" },
  { name: "vickihernando", score: 0, image: "https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg" },
  { name: "Ponsha", score: 0, image: "https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg" },
  { name: "Gatinho", score: 0, image: "https://i.ibb.co/HLrhFKxP/Whats-App-Image-2025-03-26-at-23-38-49.png" },
  { name: "DonGonzon", score: 0, image: "https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg" },
  { name: "Nautatius", score: 0, image: "https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg" },
];

const gameListData = [
    {
      name: "Patchwork",
      image: "https://images-cdn.ubuy.co.in/64c92a0e7812a570d14ef4a7-patchwork-board-game-for-ages-8-and-up.jpg",
      players: "2",
      time: "30 min",
      category: "Estrategia, Puzzle, Losetas",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=k-NVaMt1o60"
    },
    {
      name: "Hive",
      image: "https://cf.geekdo-images.com/fQe85tsBZoH6ibPnm1k1UA__itemrep/img/SdQ5at_SaQCPbs1QES2KfeUKqaQ=/fit-in/246x300/filters:strip_icc()/pic791151.jpg",
      players: "2",
      time: "20 min",
      category: "Estrategia, Ajedrez",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=K9PQlqPdGRw"
    },
    {
      name: "Azul",
      image: "https://upload.wikimedia.org/wikipedia/en/2/23/Picture_of_Azul_game_box.jpg",
      players: "2-4",
      time: "30-45 min",
      category: "Estrategia, Losetas",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=byHjDCxF5WU"
    },
    {
      name: "Magic: The Gathering (Commander)",
      image: "https://nexussueca.com/wp-content/uploads/2023/01/Magic-The-Gathering-logo.png",
      players: "4",
      time: "60-120 min",
      category: "Juego de cartas, Estrategia",
      complexity: "Alta",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      name: "The Crew: Mission Deep Sea",
      image: "https://cf.geekdo-images.com/VuBqZ1sMaDAVVHF_OEJP4g__itemrep/img/tgB3g7PECxG14yQ0FkMiMaXaOFE=/fit-in/246x300/filters:strip_icc()/pic5988903.jpg",
      players: "2-5",
      time: "20 min",
      category: "Cooperativo, Juego de Bazas (Triunfo)",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=sZFqdWgbZk8"
    },
    {
      name: "Munchkin",
      image: "https://cf.geekdo-images.com/J-ts3MW0UhDzs621TR6cog__itemrep/img/2MRtjy32fdzTBDCvUk73dA-ZtJk=/fit-in/246x300/filters:strip_icc()/pic1871016.jpg",
      players: "3-6",
      time: "60-90 min",
      category: "Juego de Cartas, Estrategia, Humor",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=WTFCWILpEo8"
    },
    {
      name: "Betrayal at House on the Hill",
      image: "https://cf.geekdo-images.com/nLDGtbwdSC0eYKffjYzrnQ__itemrep/img/YBFCbauH6KZYrQHIwdaxFku0EtQ=/fit-in/246x300/filters:strip_icc()/pic6917219.jpg",
      players: "3-6",
      time: "60 min",
      category: "Tematico, Miedito",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=4qfYtJA1ULg"
    },
    {
      name: "Ciudadelas",
      image: "https://acdn-us.mitiendanube.com/stores/001/050/004/products/ciudadelas01-5b85ae601fd93c87ff17278213489210-480-0.jpg",
      players: "2-7",
      time: "30-60 min",
      category: "Juego de cartas, Estrategia, Recursos",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=_jNNYfxSgw0"
    },
    {
      name: "Sushi Go Party!",
      image: "https://cf.geekdo-images.com/2f9uTicUSXkdPp2Yks6zFw__itemrep/img/Y_jPOWbp6_2qOzymSNIC6SZo4TE=/fit-in/246x300/filters:strip_icc()/pic5885689.jpg",
      players: "2-8",
      time: "20 min",
      category: "Drafteo de cartas, Party",
      complexity: "Facil",
      link: "https://www.youtube.com/watch?v=VHa7TDkZ9Hc"
    },
    {
      name: "That's Not a Hat",
      image: "https://http2.mlstatic.com/D_NQ_NP_945618-MLU69626892312_052023-O.webp",
      players: "3-8",
      time: "15 min",
      category: "Memoria, Party",
      complexity: "Facil",
      link: "https://www.youtube.com/watch?v=rzJrvxFgNAs"
    },
    {
      name: "Taboo",
      image: "https://play-lh.googleusercontent.com/UzanzAEXapQC4sDZmsqy-XcZHzvjgDkKcxY0e5e6cjW6pkhZP4tBMjfHtbQ7DEt79A",
      players: "4+",
      time: "30 min",
      category: "Palabras, Party",
      complexity: "Facil",
      link: "https://www.youtube.com/watch?v=4QeA4nrcQV0&t=42s"
    },
    {
      name: "Codenames",
      image: "https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__itemrep/img/e8zw8YQvQB8q8zfWkHQ48Ls920g=/fit-in/246x300/filters:strip_icc()/pic2582929.jpg",
      players: "4+",
      time: "15 min",
      category: "Palabras, Deduccion, Party",
      complexity: "Media",
      link: "https://www.youtube.com/watch?v=zQVHkl8oQEU"
    },
    {
      name: "Uno",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBRFXeIUSzhnaZlFRCWNhs_QXtyCmwj4CAQ&s",
      players: "2-10",
      time: "30 min",
      category: "Juego de Cartas",
      complexity: "Facil",
      link: "https://www.youtube.com/watch?v=FkuqYtE1rw0"
    },
    {
      name: "Tinderblox",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89r0jh8RMw0lrR1ZKkGcgOspw4r7zK9w5HA&s",
      players: "2-6",
      time: "5-15 min",
      category: "Destreza",
      complexity: "Facil",
      link: "https://www.youtube.com/shorts/eJLuwSETJdI"
    },
    {
        name: "Misión: Cumplida",
        image: "https://brainpicnic.com/wp-content/uploads/2022/08/juego-mision-cumplida-caja.png",
        players: "2-4",
        time: "5-15 min",
        category: "Cooperativo",
        complexity: "Facil",
        link: "https://www.youtube.com/watch?v=Jg8em3Flos0"
      },
      {
        name: "El Mortal",
        image: "https://http2.mlstatic.com/D_NQ_NP_682856-MLA74207225419_012024-O.webp",
        players: "2-4",
        time: "20-30 min",
        category: "Party, Cartas, Humor, (Similar a Exploding Kittens)",
        complexity: "Facil",
        link: "https://www.youtube.com/watch?v=q9LXlhhxn7E"
      },
      {
        name: "Dígalo con Memes",
        image: "https://acdn-us.mitiendanube.com/stores/117/811/products/digalo-con-memes1-ad47dc7fffbe2123c616649942662845-640-0.png",
        players: "4+",
        time: "30 min",
        category: "Party, Humor",
        complexity: "Facil",
        link: "https://www.youtube.com/watch?v=DWZ11vXmbDo"
      },
      {
        name: "Trio (cartas normales)",
        image: "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436607944423-1200-face3d-copy.jpg",
        players: "3-6",
        time: "20 min",
        category: "Memoria, Deduccion",
        complexity: "Facil",
        link: "https://www.youtube.com/watch?v=PtWaNlg2j9Q"
      },
            {
        name: "Skull (cartas normales)",
        image: "https://cf.geekdo-images.com/OPrd2iXm43dir7BwKAMOuQ__itemrep/img/-OqEtnWB7kEI_C_Zq9XkhDYAnNI=/fit-in/246x300/filters:strip_icc()/pic6097488.jpg",
        players: "3-10",
        time: "20 min",
        category: "Memoria, Deduccion, Apuestas",
        complexity: "Facil",
        link: "https://www.youtube.com/watch?v=Lu_IgiU4lh8"
      },
                  {
        name: "Regicide (cartas normales)",
        image: "https://cf.geekdo-images.com/C9U2E51tkzLljewFEGQ74g__itemrep@2x/img/ruS5lzknjiVo7iwHhzWeM7VPJco=/fit-in/492x600/filters:strip_icc()/pic5837347.jpg",
        players: "1-4",
        time: "20-30 min",
        category: "Cooperativo, Estrategia",
        complexity: "Medio+",
        link: "https://www.youtube.com/watch?v=7XoRlKzLobk"
      },

      
      // {
      //   name: "Cryptid (Próximamente)",
      //   image: "https://cf.geekdo-images.com/qrPLpAnhFgc470ZRuXlvbg__imagepage/img/5NPoTdJE4JVMz6S4zAL1xFD4k8U=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4037705.jpg",
      //   players: "3-5",
      //   time: "30-50 min",
      //   category: "Deduccion, Investigacion, Pistas",
      //   complexity: "Media+",
      //   link: "https://www.youtube.com/watch?v=ehrU9HesAg0"
      // },
      {
        name: "Taco, Gato, Cabra, Queso, Pizza",
        image: "https://cf.geekdo-images.com/GHrnr-Khb0LvBU_QkrC_qA__itemrep/img/cWh2D89fj4HLBkLT71g7JYWiM1s=/fit-in/246x300/filters:strip_icc()/pic7192024.png",
        players: "2-8",
        time: "15 min",
        category: "Matching, Reflejos, Rapido",
        complexity: "Facil",
        link: "https://www.youtube.com/watch?v=ZoTlfTmJvuQ"
      },
      {
        name: "Cartographers Heroes",
        image: "https://cf.geekdo-images.com/HIFpoE6wwuriOREJmqizPw__itemrep/img/r1I6NYxeb0n-O6fIKHSNfOmKOro=/fit-in/246x300/filters:strip_icc()/pic5567490.png",
        players: "2+",
        time: "30-45 min",
        category: "Flip & Write",
        complexity: "Media",
        link: "https://www.youtube.com/watch?v=aVDlVoUDFhw"
      },
      // {
      //   name: "Draftosaurus",
      //   image: "https://cf.geekdo-images.com/JahbLRZ_jEe8P8gisXUtJw__itemrep/img/3HPC1vPT_u5pUPBP-gwl24X4YBw=/fit-in/246x300/filters:strip_icc()/pic4447676.jpg",
      //   players: "2-5",
      //   time: "20 min",
      //   category: "Drafteo",
      //   complexity: "Facil",
      //   link: "https://www.youtube.com/watch?v=a5pegumye6E"
      // },
      {
        name: "Dables",
        image: "https://http2.mlstatic.com/D_NQ_NP_823982-MLA45813207705_052021-O.webp",
        players: "2+",
        time: "30-50 min",
        category: "Matching, Reflejos, Rapido",
        complexity: "Fácil",
        link: "https://www.youtube.com/watch?v=ehrU9HesAg0"
      },
      {
        name: "Faraway",
        image: "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__imagepagezoom/img/WtPGreEgZSev10AYRjYiJRmMIGQ=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic7570101.png",
        players: "2-6",
        time: "20 min",
        category: "Draft, Estrategia",
        complexity: "Media",
        link: "https://www.youtube.com/watch?v=6DQTFnwfWAE"
      },
            {
        name: "Yellowstone",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/122261030/5090844076.jpg",
        players: "4-8",
        time: "20 min",
        category: "Hidden roles, Party, Social, Temático",
        complexity: "Fácil",
        link: "https://www.youtube.com/shorts/S0sm9-8wdIg"
      },
      {
        name: "Deep Sea Adventure",
        image: "https://oinkgames.com/images/flatview/deep-sea-adventure_en_front.png",
        players: "2-6",
        time: "30 min",
        category: "Estrategia, Competitivo",
        complexity: "Fácil",
        link: "https://www.youtube.com/watch?v=Sxw0pMAg5S8"
      },
            {
        name: "Jamaica",
        image: "https://cf.geekdo-images.com/jZRfv3isrBG5waCzEx60Cw__itemrep@2x/img/ZXoaO80f0kyj1sCADj-uLS97qk8=/fit-in/492x600/filters:strip_icc()/pic6434838.png",
        players: "2-6",
        time: "30-60 min",
        category: "Carrera, Competitivo",
        complexity: "Fácil",
        link: "https://www.youtube.com/watch?v=yuP6hyZqnBk"
      },

            {
        name: "The Lord of the Rings: Fate of the Fellowship",
        image: "https://cf.geekdo-images.com/scw36iBIad7l-rGzxPGcGg__itemrep@2x/img/xvVUhJo2v3KZx0RqrG5_TFd8ZZc=/fit-in/492x600/filters:strip_icc()/pic8662670.png",
        players: "2-6",
        time: "60-120 min",
        category: "Pandemic, Cooperativo, Temático",
        complexity: "Medio+",
        link: "https://www.youtube.com/watch?v=OhCfFQVlT7M"
      },

            {
        name: "River Rats (cartas normales)",
        image: "https://cf.geekdo-images.com/zZdY44-XdymMdBBk6bjJPQ__itemrep@2x/img/341foocQgjKHCdClIFTlrzlGYJ4=/fit-in/492x600/filters:strip_icc()/pic9147056.jpg",
        players: "1-4",
        time: "10-30 min",
        category: "Poker, Cooperativo",
        complexity: "Medio",
        link: "https://drive.google.com/file/d/1QeCWS2E0LdDhb0R5Bkb7QzXR-q2wiW6N/view"
      },
            {
        name: "Tatrix",
        image: "https://cf.geekdo-images.com/4_motvqsgOa1NjQUwoeIng__itemrep@2x/img/4PVIy3NP1NcLg8cOnKeCbwJka6c=/fit-in/492x600/filters:strip_icc()/pic8692267.png",
        players: "1-6",
        time: "20-30 min",
        category: "Rapido, Matching",
        complexity: "Facil",
        link: "https://www.tantrix.com/english/TantrixGameRules.html"
      },
            {
        name: "Dune: Imperium - Uprising",
        image: "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__itemrep@2x/img/R1DfoFAXuuOgg8vDr1n7_ovrscg=/fit-in/492x600/filters:strip_icc()/pic7664424.jpg",
        players: "1-4",
        time: "60-120 min",
        category: "Worker placement, deck builder, area control",
        complexity: "Dificil",
        link: "https://www.youtube.com/watch?v=H7sACDILaZw"
      },
      
  ];
  
export default function GameNightTracker() {
  const [tab, setTab] = useState("leaderboard");
  const [search, setSearch] = useState("");
  
  const filteredGames = gameListData.filter(game => 
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`text-[#ff5426] w-full flex flex-col h-full p-4 max-w-3xl mx-auto ${tab === 'truco' ? 'bg-[#298458]' : ''}`}>
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setTab("leaderboard")} className={`px-4 py-2 rounded ${tab === "leaderboard" ? "bg-[#ff5426] text-[#fff1e7]" : tab ==='truco' ? 'border border-[#145A38] text-[#fff1e7]': "bg-[#fff1e7] border border-[#ff5426]"}`}>Tabla de posiciones</button>
        <button onClick={() => setTab("games")} className={`px-4 py-2 rounded ${tab === "games" ? "bg-[#ff5426] text-[#fff1e7]" :tab ==='truco' ? 'border border-[#145A38] text-[#fff1e7]': "bg-[#fff1e7] border border-[#ff5426]"}`}>Jueguitos</button>
        {/* <button onClick={() => setTab("truco")} className={`px-4 py-2 rounded ${tab === "truco" ? "bg-[#145A38] text-[#fff1e7]" : "bg-[#fff1e7] border border-[#ff5426]"}`}>Torneo de truco</button> */}
      </div>
      
      {tab === "leaderboard" && (
        <div>
          <h2 className="text-4xl mb-4 mt-4">TABLA DE POSICIONES</h2>
          <table className="w-full border-collapse  border border-[#ff5426]">
            <thead>
              <tr className=" border border-[#ff5426] bg-[#fff1e7] bg-opacity-50">
                <th className=" border border-[#ff5426] p-2">Puesto</th>
                <th className="border border-[#ff5426] p-2">Jugador</th>
                <th className=" border border-[#ff5426] p-2">Puntos</th>
              </tr>
            </thead>
            <tbody className=" border border-[#ff5426]">
              {leaderboardData.sort((a, b) => b.score - a.score).map((player, index) => (
                <tr key={player.name} className="bg-[#fff1e7] bg-opacity-50 border border-[#ff5426]">
                  <td className=" border border-[#ff5426] p-2">{index + 1}</td>
                  <td className=" p-2 flex items-center">
                    <img src={player.image} alt={player.name} className="w-10 h-10 rounded-full mr-2 object-cover" />
                    {player.name}
                  </td>
                  <td className=" border border-[#ff5426] p-2">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {tab === "games" && (
        <div>
          <h2 className="text-4xl font-bold mb-4 mt-4">JUEGUITOS</h2>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="border border-[#fdbfd5] rounded-xl p-2 w-full mb-4 text-[#ff5426] focus:outline-[#ff5426] placeholder:text-[#fdbfd5]" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredGames.sort(() => Math.random() - 0.5).map((game) => (
              <div key={game.name} className="bg-[#fff1e7] border border-[#ff5426] p-4 rounded-lg shadow">
                <img src={game.image} alt={game.name} className="w-full h-64 object-contain mb-2" />
                <h3 className="text-xl font-bold">{game.name}</h3>
                <p className="text-base">{game.description}</p>
                <p className="text-sm mt-2">Jugadores: {game.players}</p>
                <p className="text-sm mt-1">Tiempo estimado: {game.time}</p>
                <p className="text-sm mt-1">Categoria: {game.category}</p>
                <p className="text-sm mt-1">Dificultad: {game.complexity}</p>
                <a href={game.link} target="_blank" className="text-[#ff5426] underline block mt-2 text-xs" rel="noreferrer">Videito reglas</a>
              </div>
            ))}
          </div>
        </div>
      )}

{/* {tab === "truco" && (
        <div className="w-full flex flex-col items-center">

<img src="https://i.ibb.co/BH3GyMxn/Whats-App-Image-2025-03-23-at-16-10-32.jpg" alt="Whats-App-Image-2025-03-23-at-16-10-32" border="0"/>
<img src="https://i.ibb.co/v4DcGf7s/Whats-App-Image-2025-03-23-at-16-10-32-1.jpg" alt="Whats-App-Image-2025-03-23-at-16-10-32-1" border="0"/>
<div className="relative w-80 h-96">
  <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://i.ibb.co/xK9Zdfn6/Whats-App-Image-2025-03-23-at-14-34-22-removebg-preview-1.png" alt="text" border="0" />
  <img className="absolute top-0 left-5 w-full h-full object-cover" src="https://i.ibb.co/p6XGhncV/carp.png" alt="carp" border="0"/>
</div>

</div>
      )} */}


    </div>
  );
}


