export function createHomePage(){
    const contentDiv = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Restaurant';

  const description = document.createElement('p');
  description.textContent = 'Experience the finest dining in town at our restaurant.';

  contentDiv.appendChild(headline);
  
  contentDiv.appendChild(description);

}