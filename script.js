const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    //Filter The List Based On User Input

    //ensures user input is read as lowercase
    let lowerCasedStr = str.toLowerCase();

    let results = fruit.filter(fruit => {
        //ensures fruit is read as lowercase for comparison
        let lowerCasedFruit = fruit.toLowerCase();

        //adds fruit to list if it includes user input
        return lowerCasedFruit.includes(lowerCasedStr);
    });
    
    return results;
}

function searchHandler(e) {
	// TODO
    //puting together search and showSuggestions to happen simultaneously on screen

    e.preventDefault();
    
    showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
	// TODO
    //Display The Results List As A Drop Down
   //highlight the suggestion below a user's cursor
   inputVal = input.value;
   results = search(inputVal);

   //clear previous suggestions
   suggestions.innerHTML = '';

   if(inputVal.length > 0){
    //populate the dropdown with results
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        suggestions.append(li);
    });
   }

}



function useSuggestion(e) {
	// TODO
    //Populate the search box with a user’s selected suggestion
    input.value = e.target.innerText;
    suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
