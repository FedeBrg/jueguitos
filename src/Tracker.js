import { useState } from "react";

const leaderboardData = [
  { name: "Iaratak", score: 0, image: "https://i.pinimg.com/1200x/f6/25/96/f62596a7671ed03aa31f77f02423a5a8.jpg" },
  { name: "Federex", score: 0, image: "https://i.ibb.co/m5L74B9G/Whats-App-Image-2025-03-23-at-20-02-49.jpg" },
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
      category: "Estrategia, Ajedrex",
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
        image: "https://www.ludokubo.com/wp-content/uploads/2020/09/El-Mortal-juego.jpg",
        players: "2-4",
        time: "20-30 min",
        category: "Party, Cartas, Humor (Similar a Exploding Kittens)",
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
      }


  ];
  
export default function GameNightTracker() {
  const [tab, setTab] = useState("leaderboard");
  const [search, setSearch] = useState("");
  
  const filteredGames = gameListData.filter(game => 
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`p-4 max-w-3xl mx-auto ${tab === 'truco' ? 'bg-[#298458]' : ''}`}>
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setTab("leaderboard")} className={`px-4 py-2 rounded ${tab === "leaderboard" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>Tabla de posiciones</button>
        <button onClick={() => setTab("games")} className={`px-4 py-2 rounded ${tab === "games" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>Jueguitos</button>
        <button onClick={() => setTab("truco")} className={`px-4 py-2 rounded ${tab === "truco" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>Torneo de truco</button>
      </div>
      
      {tab === "leaderboard" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Tabla de posiciones</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Puesto</th>
                <th className="border p-2">Jugador</th>
                <th className="border p-2">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.sort((a, b) => b.score - a.score).map((player, index) => (
                <tr key={player.name} className="border">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2 flex items-center">
                    <img src={player.image} alt={player.name} className="w-8 h-8 rounded-full mr-2 object-cover" />
                    {player.name}
                  </td>
                  <td className="border p-2">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {tab === "games" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Jueguitos</h2>
          <input 
            type="text" 
            placeholder="Search games..." 
            className="border p-2 w-full mb-4" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredGames.map((game) => (
              <div key={game.name} className="border p-4 rounded-lg shadow">
                <img src={game.image} alt={game.name} className="w-full h-64 object-contain mb-2" />
                <h3 className="text-lg font-bold">{game.name}</h3>
                <p className="text-sm">{game.description}</p>
                <p className="text-sm mt-2">Jugadores: {game.players}</p>
                <p className="text-sm">Tiempo estimado: {game.time}</p>
                <p className="text-sm">Categoria: {game.category}</p>
                <p className="text-sm">Dificultad: {game.complexity}</p>
                <a href={game.link} target="_blank" className="text-blue-500 underline block mt-2" rel="noreferrer">Videito reglas</a>
              </div>
            ))}
          </div>
        </div>
      )}

{tab === "truco" && (
        <div className="w-full flex flex-col items-center">

<img src="https://i.ibb.co/BH3GyMxn/Whats-App-Image-2025-03-23-at-16-10-32.jpg" alt="Whats-App-Image-2025-03-23-at-16-10-32" border="0"/>
<img src="https://i.ibb.co/v4DcGf7s/Whats-App-Image-2025-03-23-at-16-10-32-1.jpg" alt="Whats-App-Image-2025-03-23-at-16-10-32-1" border="0"/>
<div className="relative w-80 h-96">
  <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://i.ibb.co/xK9Zdfn6/Whats-App-Image-2025-03-23-at-14-34-22-removebg-preview-1.png" alt="text" border="0" />
  <img className="absolute top-0 left-5 w-full h-full object-cover" src="https://i.ibb.co/p6XGhncV/carp.png" alt="carp" border="0"/>
</div>

</div>
      )}


    </div>
  );
}


