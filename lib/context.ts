import { createContext } from "react";

export const series = [
  {
    slug: "arrow",
    image: "/images/arrow.png",
    about: `Batwoman é uma série de televisão americana de super-herói 
            desenvolvida por Caroline Dries. É baseado no personagem Batwoman, da DC Comics, uma combatente do crime 
            criado por Geoff Johns, Grant Morrison, Greg Rucka, Mark Waid e Keith Giffen, e 
            é ambientado no Arrowverse, compartilhando a continuidade com as outras séries de televisão do universo.`,
  },
  {
    slug: "batwoman",
    image: "/images/batwoman.png",
    about: `Arrow foi uma série de televisão americana desenvolvida por Greg Berlanti, 
            Andrew Kreisberg e Marc Guggenheim, transmitida pela emissora The CW desde 10 de outubro de 2012, 
            e estrelada por Stephen Amell. A série é baseada no personagem Oliver Queen / Arqueiro Verde da DC Comics, um homem que, depois de cinco anos preso em uma ilha hostil,
            volta para casa e se torna um herói empunhando um arco e flecha chamado de Arqueiro Verde. `,
  },
  {
    slug: "flash",
    image: "/images/flash.jpg",
    about: `The Flash é uma série de televisão americana de super-heróis desenvolvida por Greg Berlanti, 
            Andrew Kreisberg e Geoff Johns, transmitida pela emissora The CW desde 7 de outubro de 2014, 
            e estrelada por Grant Gustin. A série é baseada no personagem Barry Allen/Flash da DC Comics, 
            um super-herói fantasiado que combate o crime com o seu poder de se mover em velocidades inacreditáveis.`,
  },
  {
    slug: "lacasadepapel",
    image: "/images/lacasadepapel.png",
    about: `La casa de papel é uma série de televisão de drama policial espanhola criada por Álex Pina. 
            A trama traça dois assaltos muito preparados liderados por um homem conhecido como 
            O Professor, um na Casa da Moeda Real da Espanha e outro no Banco Central da Espanha. `,
  },
  {
    slug: "legends",
    image: "/images/legendsoftomorrow.png",
    about: `DC's Legends of Tomorrow, ou simplesmente Legends of Tomorrow, 
            é uma série de televisão americana desenvolvida por Greg Berlanti, Marc Guggenheim, 
            Andrew Kreisberg e Phil Klemmer, que também são produtores executivos com Sarah Schechter e Chris Fedak.`,
  },
  {
    slug: "lacasadepapel",
    image: "/images/lacasadepapel.png",
    about: `La casa de papel é uma série de televisão de drama policial espanhola criada por Álex Pina. 
    A trama traça dois assaltos muito preparados liderados por um homem conhecido como O Professor, 
    um na Casa da Moeda Real da Espanha e outro no Banco Central da Espanha. `,
  },
  {
    slug: "prisonbreak",
    image: "/images/prisonbreak.png",
    about: `A história gira em torno de Lincoln Burrows, um homem que foi sentenciado à morte 
            por supostamente ter assassinado o irmão da vice-presidente dos EUA, e seu irmão, Michael Scofield, 
            um engenheiro civil, que cria um plano para resgatá-lo da prisão antes que seja executado.`,
  },
  {
    slug: "stargirl",
    image: "/images/stargirl.png",
    about: `DC's Stargirl, ou simplesmente Stargirl é uma série de televisão americana de drama, 
            baseada na super-heroína da DC Comics de mesmo nome, criada por Geoff Johns e Lee Moder, que estreou no DC Universe.`,
  },
  {
    slug: "supermanelois",
    image: "/images/supermanelois.png",
    about: `Superman & Lois é uma série de televisão de super-heróis estadunidense desenvolvida por Todd Helbing que é 
            transmitida no canal The CW. É baseado no personagem Superman da DC Comics, criado por 
            Jerry Siegel e Joe Shuster, um super-herói disfarçado e um dos últimos kryptonianos sobreviventes.`,
  },
  {
    slug: "titans",
    image: "/images/titans.png",
    about: `Titans é uma série de televisão americana criada por Akiva Goldsman, 
            Geoff Johns e Greg Berlanti para a DC Universe. Baseado na equipe Novos Titãs, 
            da DC Comics, a série mostra um grupo de jovens heróis que unem suas forças na luta contra o mal. Destacados como membros dos Titãs de mesmo nome estão Dick Grayson (Brenton Thwaites), Kory Anders (Anna Diop), Rachel Roth (Teagan Croft), Gar Logan (Ryan Potter), 
            Jason Todd (Curran Walters), Donna Troy (Conor Leslie), Dawn Granger (Minka Kelly), e Hank Hall (Alan Ritchson).`,
  },
];

export const InfoSeries = createContext(series);