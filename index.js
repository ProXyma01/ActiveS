function addEvents(){
  let tab = document.getElementsByClassName('tab-name');
  for (let i=0; i<tab.length; i++) {
    tab[i].addEventListener('click',activeTab);
  }
}

addEvents();

function showContent(index){
  let tab-title-box = document.getElementsByClassName('tab-title');
  for (let i=0; i<tab-box-title.length; i++) {
    tab-title-box[i].classList.remove('show');
  }

  tab-title-box[index].classList.add('show');
}



function activeTab(){
  console.log('this',this);
  let tab = document.getElementsByClassName('tab-name');
  for (let i=0; i< tab.length; i++) {
    tab[i].classList.remove('active');
  }

  this.classList.add('active');

  for (let i=0; i< tab.length; i++) {
    if (tab[i].classList.contains('active')) {
      console.log(i);
      showContent(i);
    };
  }
