export const texts = {
    hero:{
        w_static_text:"Cześć, jestem",
        w_dynamic_text_1:"Kuba",
        w_dynamic_text_2:"początkującym programistą.",
        w_button:"Poznajmy się",
    },
    about:{
        about_me:"O mnie",
        ab_text_1:"Mam na imię Kuba, jestem pasjonatem programowania i studentem informatyki, który od 2021 roku rozwija swoje umiejętności w tworzeniu nowoczesnych rozwiązań. Zrealizowałem kilka projektów, w tym strony internetowe dla klientów. Szczególnie fascynuje mnie backend, choć frontend również mnie ciekawi i sprawia mi wiele satysfakcji.",
        ab_text_2:"Uwielbiam uczyć się nowych technologii i doskonalić swoje techniki, aby dostarczać dopracowane, funkcjonalne rozwiązania.",
        my_skills:"Moje Umiejętności",
        interests:"Zainteresowania",
        i_text_1:"Głównie pasjonuję się programowaniem backendu, wykorzystując języki takie jak Python, który jest moim ulubionym w tej dziedzinie, oraz React.js w kontekście frontendu.",
        i_text_2:"Poza światem technologii interesuję się także kryptowalutami, motoryzacją oraz sportem, które dostarczają mi inspiracji i pozwalają na rozwijanie różnych perspektyw.",
        contact_me:"Skontaktuj się",
    },
    projects:{
        my_projects:"Moje Projekty",
    },
    clients:{
        my_clients:"Moi Klienci",
    },
    work:{
        my_work:"Obecnie<br />szukam<br />pracy",
    },
    contact:{
        c_header:"Napisz do mnie...",
        c_header_sub:"Odpiszę możliwie jak najszybciej.",
        name_surname:"Imie i Nazwisko",
        name_surname_ph:"Jakub Dewerenda",
        email:"Email",
        email_ph:"kubadewerendaa@gmail.com",
        message:"Wiadomość",
        message_ph:"Cześć, kontaktuję się w sprawie pracy...",
        c_button:"Wyślij wiadomość",
        c_button_sending:"Wysyłanie...",
    },
};

export const myProjects = [
    {
      title: 'JumpyIcyTower - Gra',
      desc: 'Gra inspirowana klasycznym Icy Tower, napisana w Pythonie z użyciem Pygame. Oferuje zaawansowane mechaniki skoku, przewijanie ekranu, system bonusów, combosów oraz możliwość wyboru postaci, zapewniając dynamiczną i wciągającą rozgrywkę.',
      subdesc:
        'Zastosowano nowoczesne techniki optymalizacji, które gwarantują płynność gry. Dodatkowe efekty wizualne, dźwiękowe i personalizacja postaci wzbogacają doświadczenie gracza, dostarczając emocji i wyzwań.',
      href: 'https://github.com/kubadewerenda/JumpyIcyTower',
      texture: '/textures/project/project1.mp4',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'Pygame',
          path: 'assets/pygame.png',
        },
      ],
    },
    {
      title: 'Menadżer kontaktów',
      desc: 'Aplikacja webowa typu menedżer kontaktów, zbudowana w oparciu o REST API stworzone w Pythonie przy użyciu Flaska oraz front-end zaimplementowany w React. Umożliwia rejestrację użytkownika, logowanie, dodawanie, edytowanie oraz usuwanie kontaktów.',
      subdesc:
        'Prosty w obsłudze interfejs oraz solidna architektura backendu zapewniają płynne działanie aplikacji. Funkcjonalność została wzbogacona o pełną personalizację użytkownika i intuicyjne zarządzanie danymi kontaktowymi.',
      href: 'https://github.com/kubadewerenda/Rest-Api-FullStack-App',
      texture: '/textures/project/project2.mp4',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 4,
          name: 'Flask',
          path: '/assets/flask.png',
        },
      ],
    },
    {
      title: 'Strona internetowa - Html',
      desc: 'Pierwsza strona internetowa stworzona dla klienta, zaprojektowana przy użyciu czystego HTML, PHP i JavaScript. Posiada wiele podstron, galerię zdjęć zarządzaną JavaScriptem oraz podłączoną bazę danych.',
      subdesc:
        'Strona została starannie zaprojektowana z responsywnym designem opartym na Bootstrap, zapewniając płynne działanie na różnych urządzeniach. Połączenie estetyki z funkcjonalnością gwarantuje intuicyjną obsługę i pełną satysfakcję klienta.',
      href: 'https://github.com/kubadewerenda/HTML-Sample-Page-for-a-Client',
      texture: '/textures/project/project3.mp4',
      tags: [
        {
          id: 1,
          name: 'Html',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'JavaScript',
          path: 'assets/js.png',
        },
        {
          id: 3,
          name: 'PHP',
          path: '/assets/php.png',
        },
        {
          id: 4,
          name: 'Bootstrap',
          path: '/assets/bootstrap.png',
        },
      ],
    },
    {
      title: 'Strona internetowa - WordPress',
      desc: 'Strona internetowa stworzona dla klienta przy użyciu WordPressa, zaprojektowana tak, aby była w pełni responsywna i estetycznie dopracowana. Zawiera wiele płynnych animacji, takich jak przejścia i efekty pojawiania się elementów.',
      subdesc:
        'Projekt oferuje atrakcyjną ofertę, intuicyjną nawigację i doskonałe wrażenia użytkowe. Zoptymalizowany pod kątem wydajności i nowoczesnych standardów, wyróżnia się profesjonalnym charakterem.',
      href: '#',
      texture: '/textures/project/project4.mp4',
      tags: [
        {
          id: 1,
          name: 'Wordpress',
          path: '/assets/wordpress.png',
        },
      ],
    },
    {
      title: 'Portfolio - React.js',
      desc: 'Portfolio stworzone za pomocą Reacta, Tailwind CSS, Three.js oraz Framer Motion, które zapewniają płynne animacje i nowoczesny design. Strona została zaprojektowana z myślą o responsywności i spójności, dzięki czemu świetnie działa na różnych urządzeniach.',
      subdesc:
        'Projekt wyróżnia się interaktywnymi animacjami, trójwymiarowymi elementami i intuicyjnym układem. Solidna architektura zapewnia płynność działania, a strona skutecznie prezentuje moje umiejętności i kreatywność w tworzeniu nowoczesnych aplikacji.',
      href: 'https://github.com/kubadewerenda/MyPortfolio',
      texture: '/textures/project/project5.mp4',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'Three.js',
          path: '/assets/threejs.png',
        },
        {
          id: 5,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'ART - JOL',
        position: 'Właściciel',
        img: 'assets/logo-aj.png',
        review:
        '"Strona wykonana w przez Kubę to prawdziwy majstersztyk. Każdy detal został dopracowany z myślą o estetyce i funkcjonalności, dzięki czemu witryna wygląda profesjonalnie. Dzięki intuicyjnej nawigacji i dynamicznym animacjom strona robi wrażenie na klientach, skutecznie budując wizerunek naszej firmy."',
    },
    {
        id: 2,
        name: 'Diamond Care',
        position: 'Założyciel',
        img: 'assets/logo-dc.png',
        review:
        '"Współpraca z Jakubem przy tworzeniu naszej strony internetowej była czystą przyjemnością. Kuba stworzył dla nas nowoczesną i profesjonalną stronę internetową, która doskonale oddaje charakter naszej firmy detailingowej. Dzięki jego kreatywności i dbałości o szczegóły witryna przyciąga klientów."',
    },
];
