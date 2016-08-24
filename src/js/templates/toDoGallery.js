function createTask() {
  var gallery = document.getElementById("toDoGallery"),
      article = document.createElement("div"),
      articleTitle = document.createElement("div"),
      scopeForDescription = document.createElement("div"),
      articleDescription = document.createElement("div"),
      eddit = document.createElement("button");
  articleTitle.onclick = toggleDescription;

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

var addEvent = document.getElementById("addEvent");

addEvent.onclick = createTask;
