document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const overlay = document.getElementById('welcomeOverlay');

    const sections = {
        home: `
            <h2>Welcome to Our Restaurant</h2>
            <p>We offer a delightful dining experience with a variety of delicious dishes.</p>
            <h3>Services We Offer:</h3>
            <ul>
                <li>Dine-in</li>
                <li>Takeaway</li>
                <li>Delivery</li>
            </ul>
            <h3>Location:</h3>
            <p>Sheggar Caffee Arera</p>
            <h3>Contact Us:</h3>
            <p>Email: abubeker@gmail.com</p>
            <p>Phone: (+251) 968-31-8913</p>
        `,
        menu: `
            <h2>Menu</h2>
            <p>Explore our delicious food and drink options:</p>
            <div class="menu-container">
                <div class="menu-box">
                    <h3>Food</h3>
                    <h4>Caccabsaa</h4>
                    <ul>
                        <li>Butter Bread</li>
                        <li>Garlic Bread</li>
                        <li>Butter Stuffed Mushrooms</li>
                    </ul>
                    <h4>Main Sweet</h4>
                    <ul>
                        <li>Grilled Salmon</li>
                        <li>Spaghetti Carbonara</li>
                        <li>Vegetable Stir Fry</li>
                    </ul>
                    <h4>Desserts</h4>
                    <ul>
                        <li>Chocolate Mousse</li>
                        <li>Tiramisu</li>
                        <li>Cheesecake</li>
                    </ul>
                </div>
                <div class="menu-box">
                    <h3>Drinks</h3>
                    <h4>Cocktails</h4>
                    <ul>
                        <li>Pepsi</li>
                        <li>Coca</li>
                        <li>Merinda</li>
                    </ul>
                    <h4>Sodas</h4>
                    <ul>
                        <li>Coke</li>
                        <li>Sprite</li>
                        <li>Root Beer</li>
                    </ul>
                    <h4>Milk</h4>
                    <ul>
                        <li>Hot milk</li>
                        <li>Cold milk</li>
                        <li>Spider Milk</li>
                    </ul>
                </div>
            </div>
        `,
        about: `
            <h2>About Us</h2>
            <p>We are a family-owned restaurant dedicated to serving the best food with the freshest ingredients.</p>
            <p>Our chefs are passionate about creating delightful dishes that will leave you coming back for more!</p>
        `,
        contact: `
            <h2>Contact Us</h2>
            <p>For inquiries, please reach out to us:</p>
            <p>Email: abu@gmail.com</p>
            <p>Phone: +251 ----89</p>
            <p>Address: Caffee Arara, Finfinnee, Ethiopia</p>
        `
    };

    // Event listeners for navigation buttons
    document.getElementById('homeBtn').addEventListener('click', () => {
        contentDiv.innerHTML = sections.home;
    });

    document.getElementById('menuBtn').addEventListener('click', () => {
        contentDiv.innerHTML = sections.menu;
    });

    document.getElementById('aboutBtn').addEventListener('click', () => {
        contentDiv.innerHTML = sections.about;
    });

    document.getElementById('contactBtn').addEventListener('click', () => {
        contentDiv.innerHTML = sections.contact;
    });

    // Load the home section by default
    contentDiv.innerHTML = sections.home;

    // Hide the overlay after 3 seconds
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 3000);
});