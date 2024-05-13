const portfolioData = [
    {
        name: "2timestoo Online Shop",
        image: "/assets/2timestoo.webp",
        position: "Full Stack Developer",
        description: "Fashion brand online shop that handles end to end product purchase",
        stacks: ["React Typescript", "shadcn", "Tailwind", "Go", "RabbitMQ", "PostgreSQL"],
        web: "https://2timestoo.com"
    },
    {
        name: "Introduction to Computation Website",
        image: "/assets/pengkom.webp",
        position: "Full Stack Developer",
        description: "A part of obligatory course for first year students website that handles submission, attendance, and grading",
        stacks: ["React Typescript", "Chakra UI", "Go", "MariaDB"],
        web: "https://github.com/liviaarumsari"
    },
    {
        name: "Movie Review Website",
        image: "/assets/movie-review.webp",
        position: "Full Stack Developer",
        description: "A movie review website with authentication to post review and watchlist",
        stacks: ["React Typescript", "shadcn", "Tailwind", "Express.js", "MySQL"],
        web: "https://github.com/liviaarumsari"
    },
    {
        name: "Pattern Matching Chatbot Website",
        image: "/assets/chatbot.webp",
        position: "Front End Developer",
        description: "A simple chatbot website using pattern matching",
        stacks: ["React Typescript", "Daisy UI", "Tailwind", "Go", "PostgreSQL"],
        web: "https://github.com/liviaarumsari/pattern-matching-chatbot"
    },
    {
        name: "Point of Sales Application",
        image: "/assets/pos.webp",
        position: "Software Developer",
        description: "A desktop-based sales system application, created using the Java programming language using the JavaFX library for the user interface.",
        stacks: ["Java", "JavaFX"],
        web: "https://github.com/liviaarumsari/CBR-Business-Management-App"
    },
    {
        name: "Informed Patch Search Website",
        image: "/assets/path-search.webp",
        position: "Front End Developer",
        description: "A website to search for the shortest path using UCS and A* algorithm.",
        stacks: ["React.js", "Tailwind"],
        web: "https://github.com/liviaarumsari/informed-path-search"
    }
];

const displayPortfolioCards = (portfolioData) => {
    const portfolioCardsContainer = document.getElementById('portfolio-cards');

    portfolioData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden');

        card.innerHTML = `
                <img src="${project.image}" alt="${project.name}" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h2 class="text-2xl font-bold mb-2 text-blue-900">${project.name}</h2>
                    <p class="text-gray-700 mb-4">${project.description}</p>
                    <ul class="flex flex-wrap mb-4">
                        ${project.stacks.map(stack => `<li class="bg-black/90 text-white px-4 py-2 rounded-full mr-2 mb-2">${stack}</li>`).join('')}
                    </ul>
                    <a href="${project.web}" target="_blank" rel="noopener noreferrer" class="block bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600">Open</a>
                </div>
            `;

        portfolioCardsContainer.appendChild(card);
    });
}

displayPortfolioCards(portfolioData)