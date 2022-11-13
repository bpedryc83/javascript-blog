 'use strict';
 
/* document.getElementById('test-button').addEventListener('click', function(){
    const links1 = document.querySelectorAll('.titles a');
    console.log('links:', links1);
  }); */

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
        console.log('clickedElement: ', clickedElement);
        clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const aAttribute = clickedElement.getAttribute('href');
    console.log(aAttribute); 

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const newActiveArticle = document.querySelector(aAttribute);
    console.log("new: ", newActiveArticle);

    /* [DONE] add class 'active' to the correct article */
    newActiveArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
        link.addEventListener('click', titleClickHandler);
  }