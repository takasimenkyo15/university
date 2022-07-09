'use strict';

{
  const menuItems = document.querySelectorAll('.container-menu li a')
  const contents = document.querySelectorAll('.content')
  const closes = document.querySelectorAll('.close')



  document.querySelector('.fa-bars').addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('is-remove');
    });

    document.querySelector('.fa-times').addEventListener('click', function(){
      document.querySelector('.hamburger-menu').classList.add('is-remove');
      });
   


  const containerMenus = document.querySelectorAll('.container-30-menu li a');
  const contents30 = document.querySelectorAll('.content-30');
  // const contents30Responsive = document.querySelectorAll('.container-30-menu li');
 


  containerMenus.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      containerMenus.forEach(item => {
        item.classList.remove('content-30-active');
      });
      // clickedItem.parentNode.classList.toggle('content-30-active-responsive');
      clickedItem.classList.add('content-30-active');
      

      contents30.forEach(content => {
        content.classList.remove('content-30-active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('content-30-active');
    });
  });






  function switchByWidth(){
    if (window.matchMedia('(max-width: 720px)').matches) {
        //スマホ処理
  
    
        contents.forEach(clickedContent => {
          clickedContent.addEventListener('click', () => {
            contents.forEach(content => {
              content.classList.remove('active-responsive');
            });
            clickedContent.classList.add('active-responsive');
    
            menuItems.forEach(menu => {
              // menu.classList.remove('active-responsive');
              menu.classList.remove('active');
            });
            document.getElementById(clickedContent.dataset.id).classList.add('active-responsive');
          });
    
          clickedContent.addEventListener('click', () => {
            clickedContent.classList.remove('active-responsive');
            menuItems.forEach(menu => {
              menu.classList.remove('active-responsive');
              menu.classList.remove('active');
            });
          });
        });

        menuItems.forEach(clickedMenu => {
          clickedMenu.addEventListener('click', () => {
            if(clickedMenu.classList.contains('active')) {
              contents.forEach(content => {
                content.classList.remove('active-responsive');
              });
                menuItems.forEach(menu => {
                  menu.classList.remove('active-responsive');
                  menu.classList.remove('active');
              });
            } else {
              // menuItems.forEach(clickedMenu => {
                menuItems.forEach(content => {
                  content.classList.remove('active');
                  content.classList.remove('active-responsive');
                });
                clickedMenu.classList.add('active');
                // メニューがクリックされたら擬似要素にactiveクラスを付与
                clickedMenu.classList.add('active-responsive');
            // });
            contents.forEach(content => {
              content.classList.remove('active-responsive');
            });
            contents.forEach(content => {
              document.getElementById(clickedMenu.dataset.id).classList.add('active-responsive');
            });
          }
         });
        });

// メニューがクリックされたらメニューのactiveを切り替え
        closes.forEach(clickedClose => { 
          clickedClose.addEventListener('click', () => {
            menuItems.forEach(menu => {
              menu.classList.remove('active-responsive');
              menu.classList.remove('active');
            });
          });
        });

// content-30処理
// containerMenus.forEach(clickedItem => {
//   clickedItem.addEventListener('click', e => {
//     e.preventDefault();

    // containerMenus.forEach(item => {
    //   item.classList.remove('content-30-active');
    // });
    // clickedItem.parentNode.classList.toggle('content-30-active-responsive');
    // contents30.classList.toggle('content-30-active');
   
    

    // contents30.forEach(content => {
    //   content.classList.remove('content-30-active');
    // });
//     document.getElementById(clickedItem.dataset.id).classList.add('content-30-active');
//   });
// });
// containerMenus.addEventListener('click', function(event) {
//  contents30.classList.toggle('content-30-active');
//  containerMenus.parentNode.classList.toggle('content-30-active-responsive');
// });
// document.querySelectorAll('.container-30-menu li a').onclick = function() {
//   document.querySelectorAll('.content-30').classList.toggle('content-30-active');
//   this.parentNode.classList.toggle('content-30-active-responsive');
// };
const containerMenusLi = document.querySelectorAll('.content-30-li');
console.log(containerMenusLi);
const contents30 = document.querySelectorAll('.content-30');
console.log(contents30);
containerMenusLi.addEventListener('click', () => {
 containerMenusLi.classList.toggle('content-30-active-responsive');
});


// containerMenus.addEventListener('click', () => {
//   this.parentNode.classList.toggle('content-30-active-responsive');
//   contents30.classList.toggle('content-30-active');
 
// });






        
    } else if (window.matchMedia('(min-width:721px)').matches) {
        //PC処理

        menuItems.forEach(clickedItem => {
          clickedItem.addEventListener('mouseover', e => {
            e.preventDefault();
    
            menuItems.forEach(item => {
              item.classList.remove('active');
            });
            clickedItem.classList.add('active');
    
            contents.forEach(content => {
              content.classList.remove('active');
            });
            document.getElementById(clickedItem.dataset.id).classList.add('active');
          });
    
          clickedItem.addEventListener('mouseleave', () => {
            clickedItem.classList.remove('active');
            // contents.classList.remove('active');
            contents.forEach(content => {
              content.classList.remove('active');
            });
          });
        });
    
        contents.forEach(clickedContent => {
          clickedContent.addEventListener('mouseover', () => {
            contents.forEach(content => {
              content.classList.remove('active');
            });
            clickedContent.classList.add('active');
    
            menuItems.forEach(menu => {
              menu.classList.remove('active');
            });
            document.getElementById(clickedContent.dataset.id).classList.add('active');
          });
    
          clickedContent.addEventListener('mouseleave', () => {
            clickedContent.classList.remove('active');
            menuItems.forEach(menu => {
              menu.classList.remove('active');
            });
          });
        });
    
        closes.forEach(clickedClose => { 
          clickedClose.addEventListener('click', () => {
            menuItems.forEach(menu => {
              menu.classList.remove('active');
            });
            contents.forEach(content => {
              content.classList.remove('active');
            });
          });
        });
    }
}

//ロードとリサイズの両方で同じ処理を付与する
window.onload = switchByWidth;
window.onresize = switchByWidth;














}

