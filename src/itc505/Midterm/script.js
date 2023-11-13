// Story data
const storyData = {
    start: {
        text: "[Start] Welcome to the world of Neo-Cyria!",
        choices: ["Enter Neo-Cyria"],
        consequences: ["neo-cyria"],
        image: "https://kids.kiddle.co/images/thumb/c/c1/Map_of_Assyria.png/350px-Map_of_Assyria.png"
    },
    "neo-cyria": {
        text: "[Enter Neo-Cyria] You find yourself in a futuristic city filled with advanced technology.",
        choices: ["Quantum Institute", "Underbelly Exploration"],
        consequences: ["quantum-institute", "underbelly-exploration"],
        image: "https://i.natgeofe.com/k/51057134-22d3-4f29-85ab-9643d23cb829/Damascus_Syria_KIDS_0821_4x3.jpg"
    },
    "quantum-institute": {
        text: "[Quantum Institute] You join the Quantum Institute, a prestigious research organization.",
        choices: ["Join Team", "Rebel"],
        consequences: ["join-team", "rebel"],
        image: "https://uwaterloo.ca/institute-for-quantum-computing/sites/default/files/uploads/images/iqc-qncexterior-20130106_0.jpg"
    },
	"rebel": {
        text: "You can't handle being a rebel ",
        choices: [""],
        image: "https://i.natgeofe.com/k/51057134-22d3-4f29-85ab-9643d23cb829/Damascus_Syria_KIDS_0821_4x3.jpg"
    },
    "underbelly-exploration": {
        text: "Explore the Underbelly of Neo-Cyria",
        choices: ["Activate Portal"],
        consequences: ["active-portal"],
        image: "https://i0.wp.com/eos.org/wp-content/uploads/2019/10/downtown-los-angeles-earthquake-hazard-seismic-sensor-network.jpg?fit=820%2C615&ssl=1"
    },
    "active-portal": {
        text: "[Quantum Institute] You join the Quantum Institute, a prestigious research organization.",
        choices: ["Assimilate","Return Home"],
        consequences: ["assimilate","return-home"],
        image: "https://www.bbva.ch/wp-content/uploads/2021/10/25.-vent-y-desv-smart-cities-scaled-e1634284810515.jpg"
    },
    "return-home": {
        text: "Your quest to return home leads to encounters with alternate versions of yourself. ",
        choices: ["By car", "By Bus"],
        consequences: ["car", "bus"],
        image: "https://www.bbva.ch/wp-content/uploads/2021/10/25.-vent-y-desv-smart-cities-scaled-e1634284810515.jpg"
    },
	"car": {
        text: "You Reached Your Home ",
        choices:["Home"],
        image: "https://www.bankrate.com/2009/05/30180245/Should-I-use-a-home-equity-loan-to-buy-a-car.jpg"
    },
	"bus": {
        text: "theifs hijack the busand returned to Underbelly again",
        choices: ["Underbelly"],
        consequences: ["underbelly-exploration"],
        image: "https://www.daimlertruck.com/fileadmin/_processed_/9/d/csm_eb24002_58f4fb61dd.jpg"
    },
	"assimilate": {
        text: "[Assimilate] take in (information, ideas, or culture) and understand fully. in specific domians",
        choices: ["Drugs", "Illegal Weapons","Investigate everything"],
        consequences: ["drugs", "illegal","investigate"],
        image: "https://static01.nyt.com/images/2021/10/29/learning/LN-image-WOTD-assimilate/LN-image-WOTD--32-videoSixteenByNineJumbo1600.png"
	},
	"drugs": {
        text: "Addicted to drugs and stay in the underbelly",
        choices: [""],
        image: "https://www.bankrate.com/2009/05/30180245/Should-I-use-a-home-equity-loan-to-buy-a-car.jpg"
    },"illegal": {
        text: "Smuggle illegal weapons and it leads to stay in underbelly",
        choices: [""],
        image: "https://www.mlive.com/resizer/TQlIIsyeh5dRO01Uu1NDT_bpLfw=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/grpress/opinion_impact/photo/gr1201-guns-confiscated-4jpg-305bec2a54a42137.jpg"
    },"investigate": {
        text: "Investigate and explore everything and thinking what to do",
        choices: ["Police", "Gangster"],
        consequences: ["police", "gangster"],
        image: "https://prh.imgix.net/articles/detective-stories-1600x800.png"
    },
	"police": {
        text: "Explose all aillegal activities and gain rewards",
        choices: ["People will Respect You and you become very popular"],
        image: "https://www.nj.gov/njsp/images/slider/recruit-2020a.jpg"
    },
	"gangster": {
        text: "Give suggestions to gangster about improving the realm and stay in underblly",
        choices: ["People will threatened by you"],
        image: "https://www.nj.gov/njsp/images/slider/recruit-2020a.jpg"
    },
    "join-team": {
        text: "[Join Team] You become part of a respected research team at the Quantum Institute.",
        choices: ["Follow Orders", "Defy Orders"],
        consequences: ["follow-orders", "defy-orders"],
        image: "https://www.theperformanceroom.co.uk/wp-content/uploads/2017/07/Joining-a-new-team.jpg"
    },
	"defy-orders": {
        text: "You denied your higher orders so you get fired from your Job",
        choices: ["Fired"],
        image: "https://files.tobaccoreporter.com/wp-content/uploads/sites/2/2021/08/denied-850x560.jpg"
    },
    "follow-orders": {
        text: "[Follow Orders] You excel in your missions and gain a stable reputation.",
        choices: ["Stable Loop"],
        consequences: ["stable-loop"],
        image: "https://sievo.com/hubfs/follow-purchase-orders.jpg"
    },
    "stable-loop": {
        text: "[Stable Loop] Your skills are respected, and you enjoy a stable and successful career.",
        choices: ["Respected"],
        consequences: ["respected"],
        image: "https://b2059293.smushcdn.com/2059293/wp-content/uploads/2021/03/Insurance-Agent-1.jpg?lossy=1&strip=1&webp=1"
    },
    "respected": {
        text: "[Respected] You are celebrated as a respected figure in Neo-Cyria and YOU WON THE GAME",
        choices: ["You Win"],
        consequences: ["you-win"],
        image: "https://d3i6fh83elv35t.cloudfront.net/static/2023/01/GettyImages-1458699303-e1674487584191-1024x576.jpg"
    },
	
    // ... continue the story data for other paths
    // Remember to update the image URLs and add consequences for other choices
};

// Function to start the game
function startGame() {
    // Set initial state
    currentStage = "start";

    // Refresh page display
    updatePage();

    // Hide start container and show story container
    document.getElementById("start-container").style.display = "none";
    document.getElementById("story-container").style.display = "block";
}

// Function to update the page based on user choices
function updatePage() {
    const currentData = storyData[currentStage];
    document.getElementById("story-text").textContent = currentData.text;

    // Clear previous choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    // Display current choices
    currentData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => makeChoice(currentData.consequences[index]);
        choicesContainer.appendChild(button);
    });

    // Display current image
    const imageContainer = document.getElementById("image-container");
    const storyImage = document.getElementById("story-image");
    storyImage.src = currentData.image;
}

// Function to handle user choices and navigate to the next stage
function makeChoice(choice) {
    currentStage = choice;
    updatePage();

    // Check if it's an ending stage
    if (!storyData[choice].choices) {
        endGame();
    }
}

// Function to end the game and display the final image
function endGame() {
    const imageContainer = document.getElementById("image-container");
    const storyImage = document.getElementById("story-image");
    storyImage.src = storyData[currentStage].image;

    // Display a message or perform any other final actions
}

// Initialize the game
let currentStage = "";
startGame();
