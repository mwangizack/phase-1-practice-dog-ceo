console.log('%c HI', 'color: firebrick')

function filterBreeds(firstCharacter) {
    const breedsList = document.querySelectorAll('#dog-breeds li');

    breedsList.forEach(breed => {
        const dogBreed = breed.textContent;
        // Check if the breed starts with the specified character
        if (dogBreed.charAt(0) === firstCharacter) {
            breed.style.display = ''; // Show the breed item
        } else {
            breed.style.display = 'none'; // Hide the breed item
        }
    });
}

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

    // Filter based on option selected
    const dogBreedDropdown = document.querySelector('#breed-dropdown')
    dogBreedDropdown.addEventListener('change', e => {
        switch (e.target.value){
            case 'a':
                filterBreeds('a');
                break;
            case 'b':
                filterBreeds('b');
                break;
            case 'c':
                filterBreeds('c');
                break;
            case 'd':
                filterBreeds('d');
                break;
        }
    })
})