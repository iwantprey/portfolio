const testimonials = [
    {
        name: "Love Narag",
        role: "Marketing Director",
        content: "Martinez Security provides top-notch security services with professionalism and integrity. Their highly trained and capable personnel utilize advanced operations and technology for maximum protection. I highly recommend Martinez Security for all your security needs.",
        image: 'client4.jpg',
    },
    {
        name: "Carlo Ralph Rosete",
        role: "Events Director",
        content: "Martinez Security exemplifies professionalism and integrity in every aspect of their security services. Their highly trained and capable personnel utilize advanced operations and technology to ensure top-notch protection for clients. I highly recommend Martinez Security for anyone seeking dependable security solutions.",
        image: 'client5.jpg',
    },
    {
        name: "Ronald Jay Cruz",
        role: "Angkas Driver",
        content: "Martinez Security provides top-notch security services with professionalism and integrity. Their highly trained and capable personnel utilize advanced operations and technology to ensure the safety and security of their clients. I highly recommend Martinez Security for all your security needs.",
        image:'client3.jpg',
    },
    {
        name: "Luigi Domalaon",
        role: "Cannabis Seller",
        content: "I am incredibly impressed with Martinez Security's highly trained and capable personnel. Their security services are top-notch and provide me with peace of mind knowing that my property is in good hands.",
        image:'client1.jpg',
    },
    {
        name: "Jayrick Baui",
        role: "Oregano Chips CEO",
        content: "I am extremely satisfied with Martinez Security's security services. They are professional, reliable, and easy to work with. I couldn't be happier with the level of protection they provide. Highly recommend them!",
        image:'client2.jpg',
    },

];

const createTestimonialsCard = (testimonial) => {
    return`
        <div class="card">
            <div class="profile">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div>
                    <div class="name">${testimonial.name}</div>
                    <div class="role">${testimonial.role}</div>
                </div>
            </div>
            <div class="content">${testimonial.content}</div>
        </div>
    `;
};

const populateColumn = (columnId) => {
    const column = document.getElementById(columnId);

    [...testimonials, ...testimonials].forEach(testimonial => {
        column.innerHTML += createTestimonialsCard(testimonial);
    });
};

testimonials.sort(() => Math.random() - 0.5);
populateColumn("column1");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column2");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column3");