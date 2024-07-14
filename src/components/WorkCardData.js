import proj1 from "../assets/ergomodpcb.PNG"
import proj2 from "../assets/SJSULproject.PNG"
import proj3 from "../assets/financemanager.PNG"
import proj4 from "../assets/egress.PNG"
import proj5 from "../assets/tempreader.jpg"

const projectCardData = [
    {
        imgsrc: proj1,
        title: "ErgoMod",
        text: `Collaborated with a team of three members to create an ergonomic controller from scratch, 
        leveraging Fusion360 for design, STM32 Microprocessor for implementation, and CubeIDE for development. 
        Assisted and co-led the design process for the controller shell, PCB components, and ergonomic features, 
        ensuring universal comfort for all users through meticulous design iterations and testing phases. 
        This project provided hands-on experience in hardware design, embedded systems development, and 
        collaborative problem-solving, further enriching my skills in both hardware and software engineering and project management.` ,
        view: "https://drive.google.com/file/d/134nNdrYJGLQ7y7P4F5RlfRMra32wyxjs/view",
        source: "https://github.com/vincebreezy/ergomod"
        
    },
    {
        imgsrc: proj2,
        title: "RBAC SJSU Library",
        text: `Developed a Role-Based-Action-Control model for SJSU's Library website, ensuring tailored user 
        roles, verification, and authentication. Implemented robust security measures by employing hash functions
        and utilizing an SQLite database to encrypt and securely store user passwords. This project enhanced 
        my understanding of access control systems, database security, and web application development practices, 
        demonstrating my ability to design and implement secure authentication systems in real-world applications.` ,
        view: "https://docs.google.com/document/d/1JLxoDuLFSFFF-4lj_-y_u1YN_ta3bkHH7gOJUr26Iq0/edit",
        source: "https://github.com/vincebreezy/cmpe132project"
        
    },
    {
        imgsrc: proj5,
        title: "Temperature Reader",
        text: `Utilized a TI MSP432 Launchpad microcontroller to develop a temperature measurement system with 
        precise LCD1602 screen output. Implemented software using Code Composer Studio (CCS) and CCS's driver 
        library to integrate GPIO pins with RGB LEDs and an LCD screen, providing visual feedback. This project 
        deepened my expertise in microcontroller programming, sensor interfacing, and real-time system design, 
        showcasing my ability to deliver robust solutions in embedded systems development.` 
    },
    {
        imgsrc: proj3,
        title: "Finance Manager",
        text: `Designed and implemented a full-stack finance managing system with a SCRUM development
        team that allows users to keep track of bank expenses and transactions through one single 
        application. Developed a backend using Python and Flask, a frontend using ReactJS, and SQLite 
        to hold and store user account creation. Please note that this project is only a prototype and not completed.` ,
        
        source: "https://github.com/vincebreezy/Finance-Manager"
        
    },
    {
        imgsrc: proj4,
        title: "Egress",
        text: `Collaborated with a team of two programmers and one artist in an Agile development 
        environment to create a mini hack-and-slash adventure game using Unity2D. Implemented player 
        movement, enemy AI, random map generation, and animations using Unity's version of C#. This 
        project served as an excellent introduction to both software development practices and game 
        development techniques, providing valuable experience in teamwork, Agile methodologies, and 
        leveraging Unity's powerful tools for creating immersive gameplay experiences. Please note 
        that this game was developed as a prototype and proof of concept, and is not 100% completed.` ,
        view: "https://nate12k.itch.io/egress"
    },
    
]

export default projectCardData