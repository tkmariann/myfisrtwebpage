let imagesData=[
    {
        photo: './images/kacsak.jpg',
        title: 'Libák',
        description: 'A Kemenesháton sok kis tó található, lakóik nem félnek az embertől'
      },
      {
        photo: './images/lepkek.jpg',
        title: 'Lepke',
        description: 'Az út során megfigyelhettük a természet apró csodáit'
      },
      {
        photo: './images/koszegihegyseg.jpg',
        title: 'Kőszegi-hegység',
        description: 'Érdekes geológiai jelenségeket is megfigyelhetünk'
      },
      {
        photo: './images/mocsarihibiszkusz.jpg',
        title: 'Mocsári hibiszkus',
        description: 'Az ember és természet kapcsolata: aki a szépet szereti...'
      },
      {
        photo: './images/orseg.jpg',
        title: 'Őrségi emberek',
        description: 'Az Őrségben sok érdekes látnivaló van'
      },
      {
        photo: './images/raba.jpg',
        title: 'A Rába',
        description: 'A Rába a környék vizeinek gyűjtője, sok zűgóval'
      },
      {
        photo: './images/skanzen.jpg',
        title: 'Skanzen',
        description: 'A szombathelyi skanzen őrzi a régi idők emlékét'
      }
]


let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  
  $('#photo-title').html( imagesData[photoNumber].title);
  $('#photo-description').html(imagesData[photoNumber].description);
  
  //if $('#thumb').attr('data-index')===photoNumber
  
  
}




$('#left').click(() => {
  if(currentPhoto >0) {
    currentPhoto--;  
  }
  console.log(currentPhoto)
  loadPhoto(currentPhoto);
});

$('#right').click(() => {
  if(currentPhoto < 6) { 
    currentPhoto++; 
  }
  console.log(currentPhoto)
  loadPhoto(currentPhoto);
});

loadPhoto(currentPhoto);


imagesData.forEach((item, index) => {
  $('#container').append(`<div class="box" data-index="${index}"><p class="title">${item.title}</p><img class="thumb" data-index="${index}"  src="${item.photo}"><span id="clicked"></span> </div>`);
  
  $('.thumb').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    loadPhoto(numberIndex);
  });
});

$( ".thumb"  ).on( "mouseover", function() {
  $( this ).css( "opacity", "1" );
});

$( ".thumb" ).on( "mouseleave",  function() {
  $( this ).css( "opacity", "0.5" );
});
$( ".box .title"  ).on( "mouseover", function() {
  $( "p", this ).css( "display", "block" );
});

$( ".box .title" ).on( "mouseleave",  function() {
  $("p", this ).css( "display", "none" );
});




