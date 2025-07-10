import { products1 } from './data1.js'
import { products2 } from './data2.js'

const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')
const productsContainer = document.getElementById('products-container')
const loader = document.getElementById('loader')

const data1 = JSON.parse(products1)
const data2 = JSON.parse(products2)

const allProducts = data1.concat(data2)

const productsWithOrderedIds = allProducts.map((product, index) => ({
	...product,
	id: index + 1,
}))

const sortedProducts = productsWithOrderedIds.sort((a, b) => {
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

function renderProducts(discountedProducts) {
	if (discountedProducts.length === 0) {
		productsContainer.innerHTML = '<p class="message">No products found</p>'
		return
	}

	const productsHTML = discountedProducts
		.map(
			({
				id,
				name,
				brand,
				img,
				price,
				newPrice,
				color,
				description,
				size,
				weight,
				quantity,
			}) => {
				const isOutOfStock = quantity === 0
				const hasDiscount = price !== newPrice

				return `
		<div class="product${isOutOfStock ? ' out-of-stock-item' : ''}">
						<h2>${name}</h2>
						<p><strong>Brand:</strong> ${brand}</p>
						<img src="./img/${img}" alt="${name}" />
						${isOutOfStock ? '<p class="out-of-stock"><strong>Out of stock</strong></p>' : ''}
						<p class="product-price">
							<strong>Price:</strong>
							<span class="new-price">${Math.round(newPrice)} zł</span>
						</p>
						${
							hasDiscount && !isOutOfStock
								? `<p class="product-old-price">
						<strong>Old price:</strong>
						<span class="old-price">${Math.round(price)} zł</span>
					</p>`
								: ''
						}
						<p><strong>Color:</strong> ${color}</p>
						<p class="product-description">
							<strong>Description:</strong> ${description}
						</p>
						${size ? `<p class="product-size"><strong>Size:</strong> ${size}</p>` : ''}
						<p class="product-weight"><strong>Weight:</strong> ${weight} kg</p>
					</div>`
			}
		)
		.join('')

	productsContainer.innerHTML = productsHTML
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
	renderProducts(discountedProducts)
	hideLoader()
}, 2000)

searchBtn.addEventListener('click', performSearch)

searchInput.addEventListener('keyup', event => {
	if (event.key === 'Enter') {
		performSearch()
	}
})

function performSearch() {
	const searchQuery = searchInput.value.toLowerCase().trim()
	const foundProducts = discountedProducts.filter(product =>
		product.name.toLowerCase().includes(searchQuery)
	)

	showLoader()

	setTimeout(() => {
		renderProducts(foundProducts)
		hideLoader()
	}, 2000)
}
