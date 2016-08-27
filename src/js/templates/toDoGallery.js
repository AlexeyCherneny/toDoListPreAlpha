function createTask() {
  var gallery = document.getElementById("toDoGallery"),
      article = document.createElement("div"),
      articleTitle = document.createElement("div"),
      scopeForDescription = document.createElement("div"),
      articleDescription = document.createElement("div"),
      eddit = document.createElement("button");
  articleTitle.onclick = toggleDescription;
  eddit.onclick = edditArticle;

  article.classList.add("article");
  articleTitle.classList.add("articleTitle");
  scopeForDescription.classList.add("scopeForDescription", "hiddenScopeForDescription");
  articleDescription.classList.add("articleDescription");
  eddit.classList.add("eddit");

  articleTitle.innerHTML = "This is your task's Title!";
  articleDescription.innerHTML = "This is you task's Description";
  eddit.innerHTML = "Eddit";

  gallery.appendChild(article);
  article.appendChild(articleTitle);
  article.appendChild(scopeForDescription);
  scopeForDescription.appendChild(articleDescription);
  scopeForDescription.appendChild(eddit);
}


function toggleDescription(e) {
  var tasksList = document.getElementsByClassName("article");
  var tasksList2 = document.getElementsByClassName("scopeForDescription");
  var hasOpenedDescription = false;
  var openedNum;
  var openedTargetNum;

  e.target.classList.add("counterClass");

  for (var i = 0; i < tasksList.length; i++) {
    if (tasksList2[i].classList.contains("hiddenScopeForDescription")) {
    } else {
        openedNum = i;
        hasOpenedDescription = true;
      }
  }

  if (!hasOpenedDescription) {
    e.target.nextElementSibling.classList.remove("hiddenScopeForDescription");
  } else {
    for (var i = 0; i < tasksList.length; i++){
      if (tasksList[i].firstElementChild.classList.contains("counterClass")){
        tasksList[i].firstElementChild.classList.remove("counterClass");
        openedTargetNum = i;
      }
    }
    if (openedTargetNum == openedNum){
      e.target.nextElementSibling.classList.add("hiddenScopeForDescription");
    } else {
      tasksList2[openedNum].classList.add("hiddenScopeForDescription");
      tasksList2[openedTargetNum].classList.remove("hiddenScopeForDescription");
    }
  }
}


function edditArticle(e) {

  var articleTitleInner;
  var articleDescriptionInner;

  function returnChanges(e) {
    articleTitleInner = articleTitleForm.value;
    articleDescriptionInner = articleDescriptionForm.value;

    articleTitle.innerHTML = articleTitleInner;
    articleDescription.innerHTML = articleDescriptionInner;

    article.removeChild(article.children[0]);
    article.insertBefore(articleTitle, scopeForDescription);

    scopeForDescription.removeChild(scopeForDescription.children[0]);
    scopeForDescription.insertBefore(articleDescription, scopeForDescription.children[0]);

    scopeForDescription.removeChild(scopeForDescription.children[1]);
    scopeForDescription.appendChild(eddit);
  }


  var article = e.target.parentNode.parentNode;
  var scopeForDescription = e.target.parentNode;

  var articleTitle = article.children[0].cloneNode(true);
  var articleDescription = scopeForDescription.children[0].cloneNode(true);
  var eddit = scopeForDescription.children[1].cloneNode(true);

  var articleTitleForm = document.createElement("input");
  var articleDescriptionForm = document.createElement("textarea");
  var edditForm = document.createElement("button");
  edditForm.onclick = returnChanges;

  articleTitleForm.setAttribute("type", "text");
  articleDescriptionForm.setAttribute("rows", "7");
  edditForm.innerHTML = "Save";

  article.removeChild(article.children[0]);
  article.insertBefore(articleTitleForm, scopeForDescription);

  scopeForDescription.removeChild(scopeForDescription.children[0]);
  scopeForDescription.insertBefore(articleDescriptionForm, scopeForDescription.children[0]);

  scopeForDescription.removeChild(scopeForDescription.children[1]);
  scopeForDescription.appendChild(edditForm);
}





var addEvent = document.getElementById("addEvent");

addEvent.onclick = createTask;
