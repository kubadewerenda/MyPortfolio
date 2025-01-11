export const texts = {
    hero: {
        w_static_text: "Hi, I'm",
        w_dynamic_text_1: "Kuba",
        w_dynamic_text_2: "a begginer programmer.",
        w_button: "Get to know me",
    },
    about: {
        about_me: "About Me",
        ab_text_1: "My name is Kuba, I’m a passionate programmer and computer science student who has been developing skills in creating modern solutions since 2021. I have completed several projects, including websites for clients. I am particularly fascinated by backend development, although frontend also intrigues me and provides great satisfaction.",
        ab_text_2: "I enjoy learning new technologies and improving my techniques to deliver functional solutions.",
        my_skills: "My Skills",
        interests: "Interests",
        i_text_1: "I am mainly passionate about backend programming, using languages like Python, which is my favorite in this field, and React.js when it comes to frontend development.",
        i_text_2: "Beyond technology, I’m also interested in cryptocurrencies, cars, and sports, which provide inspiration and help me develop diverse perspectives.",
        contact_me: "Contact Me",
    },
    projects: {
        my_projects: "My Projects",
    },
    clients: {
        my_clients: "My Clients",
    },
    work: {
        my_work: "I’m currently<br />seeking<br />work",
    },
    contact: {
        c_header: "Contact me...",
        c_header_sub: "I will reply as soon as possible.",
        name_surname: "Name and Surname",
        name_surname_ph: "Jakub Dewerenda",
        email: "Email",
        email_ph: "kubadewerendaa@gmail.com",
        message: "Message",
        message_ph: "Hi, I’m reaching out regarding job opportunities...",
        c_button: "Send Message",
        c_button_sending: "Sending...",
    },
};

export const myProjects = [
    {
        title: 'JumpyIcyTower - Game',
        desc: 'A game inspired by the classic Icy Tower, written in Python using Pygame. It features advanced jump mechanics, screen scrolling, a bonus system, combos, and character selection, providing dynamic and engaging gameplay.',
        subdesc: 'Modern optimization techniques ensure smooth gameplay. Additional visual and sound effects, along with character customization, enrich the player’s experience, delivering excitement and challenges.',
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
        title: 'Contact Manager',
        desc: 'A web application serving as a contact manager, built on a REST API created in Python using Flask, with a front-end implemented in React. It allows users to register, log in, add, edit, and delete contacts.',
        subdesc: 'An easy-to-use interface and solid backend architecture ensure smooth application performance. The functionality is enhanced by complete user customization and intuitive contact data management.',
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
        title: 'Website - Html',
        desc: 'The first website created for a client, designed using pure HTML, PHP, and JavaScript. It includes multiple subpages, a photo gallery managed with JavaScript, and a connected database, ensuring seamless functionality.',
        subdesc: 'The website was carefully designed with a responsive layout based on Bootstrap, ensuring smooth performance across different devices. The combination of aesthetics and functionality guarantees intuitive use and full client satisfaction.',
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
        title: 'Website - WordPress',
        desc: 'A website created for a client using WordPress, designed to be fully responsive and aesthetically refined. It features many smooth animations, such as seamless transitions and dynamic element appearance effects.',
        subdesc: 'The project offers an attractive design, intuitive navigation, and excellent user experience. Optimized for performance and modern standards, it stands out with its professional character, responsive adaptability, and modern aesthetics.',
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
        desc: 'A portfolio created using React, Tailwind CSS, Three.js, and Framer Motion, ensuring smooth animations and a modern design. The website is designed with responsiveness and consistency in mind, making it work well across different devices.',
        subdesc: 'The project features interactive animations, 3D elements, and an intuitive layout. A solid architecture ensures smooth operation, effectively showcasing my skills and creativity in developing modern applications.',
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
        position: 'Owner',
        img: 'assets/logo-aj.png',
        review:
            '"The website created by Kuba is a true masterpiece. Every detail was crafted with aesthetics and functionality in mind, giving the site a professional look. Its intuitive navigation and dynamic animations impress clients, effectively building our company’s image."',
    },
    {
        id: 2,
        name: 'Diamond Care',
        position: 'Founder',
        img: 'assets/logo-dc.png',
        review:
            '"Working with Kuba to create our website was an absolute pleasure. He delivered a modern and professional website that perfectly reflects the nature of our detailing company. Thanks to his creativity and attention to detail, the site attracts clients effectively."',
    },
];
