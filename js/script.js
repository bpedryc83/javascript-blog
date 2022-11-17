{
  'use strict';
 
  /* document.getElementById('test-button').addEventListener('click', function(){
    const links1 = document.querySelectorAll('.titles a');
    console.log('links:', links1);
  }); */

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

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
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const aAttribute = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const newActiveArticle = document.querySelector(aAttribute);


    /* [DONE] add class 'active' to the correct article */
    newActiveArticle.classList.add('active');
  };
  
  function generateTitleLinks(){

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    
    let html = '';

    for(let article of articles){

      /* get the article id */
      const articleId = article.getAttribute('id');
  
      /* find the title element */
      /* get the title from the title element */
      
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* insert link into titleList */
      //titleList.innerHTML = titleList.innerHTML + linkHTML;
      //titleList.insertAdjacentHTML("beforeend", linkHTML);
      html = html + linkHTML;
    }

    titleList.innerHTML = html;
    
    const links = document.querySelectorAll('.titles a');
  
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();

  function generateTags(){
    /* find all articles */
    const allArticles = document.querySelectorAll(optArticleSelector);
    
    /* START LOOP: for every article: */
    for (let article of allArticles){
  
      /* find tags wrapper */
      const tagWrapper = article.querySelector(optArticleTagsSelector);
  
      /* make html variable with empty string */
      let tagHTML = '';
  
      /* get tags from data-tags attribute */
      const tags = article.getAttribute('data-tags');
      
      /* split tags into array */
      const tagsArray = tags.split(' ');
  
      /* START LOOP: for each tag */
        for (let tag of tagsArray){
  
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /* add generated code to html variable */
        tagHTML = tagHTML + ' ' + linkHTML;

      /* END LOOP: for each tag */
        }
  
      /* insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = tagHTML;

    /* END LOOP: for every article: */
    }
  }
  
  generateTags();

}