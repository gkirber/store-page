# 🚴‍♂️ Bicycle and Accessories Store

A modern, responsive web application for browsing and searching bicycle products and accessories. Built with vanilla JavaScript and deployed on Vercel.

## 🌐 Live Demo

**[View Live Site](https://store-page-eta.vercel.app/)**

## ✨ Features

- **Product Catalog**: Browse bicycles and accessories with detailed information
- **Search Functionality**: Search products by name with real-time filtering
- **Dynamic Pricing**: Automatic discount calculation based on product arrival date
- **Responsive Design**: Mobile-friendly interface with smooth animations
- **Loading States**: Elegant loading animations for better user experience
- **Product Sorting**: Products automatically sorted by category (bicycles first, then accessories)

## 🛠️ Technologies Used

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

## 📁 Project Structure

```
store-page/
├── index.html         # Main HTML file
├── index.js           # JavaScript application logic
├── styles.css         # CSS styles and animations
├── data1.js           # Product data (part 1)
├── data2.js           # Product data (part 2)
├── img/               # Image assets
│   ├── bike.jpg       # Bicycle product images
│   ├── access.jpg     # Accessory product images
│   └── loading.gif    # Loading animation
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- No additional dependencies required

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gkirber/store-page.git
cd store-page
```

2. Open `index.html` in your web browser or serve it using a local server:

```bash
# Using pnpm
pnpm serve

# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## 💡 Key Features Implementation

### Dynamic Pricing System

Products automatically receive discounts based on their arrival date:

- Products older than 180 days: 20% discount
- Products older than 90 days: 10% discount

### Search Functionality

- Real-time search by product name
- Case-insensitive matching
- Loading animation during search
- "No products found" message for empty results

### Responsive Design

- Flexbox layout for optimal product grid
- Hover effects and smooth transitions
- Mobile-friendly interface
- Card-based product display

## 🎨 Design Features

- **Modern Card Layout**: Clean, shadow-based product cards
- **Hover Animations**: Smooth lift effect on product cards
- **Color-coded Pricing**: Red for current price, gray for old price
- **Loading Animation**: Custom GIF loader for better UX
- **Typography**: Clear hierarchy with Arial font family

## 👨‍💻 Author

**George Kirber**

- GitHub: [@gkirber](https://github.com/gkirber)

---

<div align="center">

⭐ **Star this repository if you found it helpful!** ⭐

</div>
