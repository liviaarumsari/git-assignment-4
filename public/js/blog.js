const blogData = [
    {
        title: "Unlocking the Future: The Rise of Wearable Gadgets",
        image: "/assets/blog-1.webp",
        content: "Are you tired of feeling like you’re living in the future, but your gadgets are stuck in the past? Say farewell to those outdated tech woes because we’re about to embark on a journey through the exhilarating world of wearable gadgets! You might be skeptical, wondering if these gadgets are just another passing fad. Fear not, my friend, for we’re about to debunk that myth and unveil a realm of innovation beyond your wildest dreams.",
        web: "https://medium.com/@guilhermedesouza.dev/unlocking-the-future-the-rise-of-wearable-gadgets-95da827f9de6"
    },
    {
        title: "Modern Android Development in 2024",
        image: "/assets/blog-2.webp",
        content: "The new K2 compiler is also another addition in Kotlin 2.0, which will bring significant performance improvements, accelerate the development of new language features, unify all platforms supported by Kotlin, and provide a better architecture for multiplatform projects.",
        web: "https://devjorgecastro.medium.com/modern-android-development-in-2024-b70f194938bd"
    },
    {
        title: "Advice From a Software Engineer With 8 Years of Experience",
        image: "/assets/blog-3.webp",
        content: "My name is Benoit. I have been a software engineer for the past eight and a half years. I stayed at my previous (and first) company for seven and a half years, then I joined a new one in early 2022.\n" +
            "\n" +
            "This article comes from a recent self-reflection on the things I wish I had started doing earlier in my career and the things I wish I had done differently.",
        web: "https://betterprogramming.pub/advices-from-a-software-engineer-with-8-years-of-experience-8df5111d4d55"
    },
    {
        title: "Dependency Inversion Vs Dependency Injection",
        image: "/assets/blog-4.webp",
        content: "Dependency inversion and dependency injection are two closely related concepts in software development, often confused due to their overlapping aspects. While they work together, they serve different purposes in achieving a well-structured application. Here’s a breakdown of their differences with a example:",
        web: "https://medium.com/@guilhermedesouza.dev/unlocking-the-future-the-rise-of-wearable-gadgets-95da827f9de6"
    },
];

const displayBlogCards = (blogData) => {
    const blogCardsContainer = document.getElementById('blog-cards');

    blogData.forEach(blog => {
        const card = document.createElement('div');
        card.classList.add("flex", "flex-col","bg-white", "rounded-lg", "shadow-lg", "overflow-hidden");

        card.innerHTML = `
            <img src="${blog.image}" alt="${blog.name}" class="w-full lg:w-96 aspect-auto object-cover">
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">${blog.title}</h2>
                <p class="text-gray-700 mb-4">${blog.content}</p>
                <a href="${blog.web}" target="_blank" rel="noopener noreferrer" class="block bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600">See Full Article</a>
            </div>
            `;

        blogCardsContainer.appendChild(card);
    });
}

displayBlogCards(blogData)