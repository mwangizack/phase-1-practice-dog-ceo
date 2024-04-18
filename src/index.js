console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    // Fetch dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(image => {
            const dogImage = document.createElement('img')
            dogImage.src = image
            const container = document.querySelector('#dog-image-container')
            container.appendChild(dogImage)
        })
    })
    .catch(error => console.log(error))

    // Fetch dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const dogBreedsObj = data.message
        for(breed in dogBreedsObj){
            const dogBreed = document.createElement('li')
            dogBreed.textContent = breed
            const container = document.querySelector('#dog-breeds')
            container.appendChild(dogBreed)

            // Event handler
            dogBreed.addEventListener('click', e => e.target.style.color = 'purple')
        }
    })

    // Filter
    const dogBreedDropdown = document.querySelector('#breed-dropdown')
    
})