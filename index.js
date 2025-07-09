import { products1 } from './data1.js'
import { products2 } from './data2.js'

const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')
const productsContainer = document.getElementById('products-container')
const loader = document.getElementById('loader')

const data1 = JSON.parse(products1)
const data2 = JSON.parse(products2)

const allProducts = data1.concat(data2)

const sortedProducts = allProducts.sort((a, b) => {
	if (a.type === 'accessories' && b.type === 'bicycles') return 1
	if (a.type === 'bicycles' && b.type === 'accessories') return -1
	return 0
})

const currentDate = new Date()

const discountedProducts = sortedProducts.map(product => {
	const arrivalDate = new Date(product.arrival_date)
	const timeDifference = currentDate - arrivalDate
	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

	let discountedPrice = product.price

	if (daysDifference > 180) {
		discountedPrice *= 0.8
	} else if (daysDifference > 90) {
		discountedPrice *= 0.9
	}

	return {
		...product,
		newPrice: discountedPrice,
	}
})

function renderProduct() {
	const productsHTML = discountedProducts.map(product => {
		return `
		<div class="product">
						<h2>${product.name}</h2>
						<p><strong>Brand:</strong> ${product.brand}</p>
						<img src="./img/${product.img}" alt="${product.name}" />
						<p class="product-price">
							<strong>Price:</strong>
							<span class="new-price">${product.newPrice} zł</span>
						</p>
						${
							product.price !== product.newPrice
								? `<p class="product-old-price">
						<strong>Old price:</strong>
						<span class="old-price">${product.price} zł</span>
					</p>`
								: ''
						}
						<p><strong>Color:</strong> ${product.color}</p>
						<p class="product-description">
							<strong>Description:</strong> ${product.description}
						</p>
						${product.size ? `<p class="product-size"><strong>Size:</strong> M</p>` : ''}
						<p class="product-weight"><strong>Weight:</strong> ${product.weight} kg</p>
					</div>`
	})

	productsContainer.innerHTML = productsHTML.join('')
}

function showLoader() {
	loader.style.display = 'block'
	productsContainer.style.display = 'none'
}

function hideLoader() {
	loader.style.display = 'none'
	productsContainer.style.display = 'flex'
}

showLoader()

setTimeout(() => {
	renderProduct()
	hideLoader()
}, 2000)

function performSearch() {
	const searchQuery = searchInput.ariaValueMax.toLocaleLowerCase()
}