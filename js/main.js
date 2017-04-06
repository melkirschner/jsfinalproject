// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAo1RtFfqN_ljDqg1vC3gBPWPbLazkL6YA",
    authDomain: "final-project-2722d.firebaseapp.com",
    databaseURL: "https://final-project-2722d.firebaseio.com",
    storageBucket: "final-project-2722d.appspot.com",
    messagingSenderId: "50441507580"
  };
  firebase.initializeApp(config);

  var messageAppReference = firebase.database();
    
$(document).ready(function() {
  $('button').on('click', function(){
      var search = $('.testing').val();
      console.log(search);
    function getRecipes() {
 
 var search1 = $('#message').val();
    var url = 'http://food2fork.com/api/search?key=1ca4c4883a96c79f678837c74a19f9cf&q='+search1;
        // var url = 'http://food2fork.com/api/search?key=1ca4c4883a96c79f678837c74a19f9cf&q=pork';
    // $('button').on('click', function(){
                  console.log(search);
                   var search1 = $('#message').val();
                   // alert(search1);
                  // console.log(response);
               
    callRecipeApi(url);
    // $('#redditSource').on('click', function() {
    //   $('#main').empty();
    //   callRedditApi(url);
    // });
  }

  function callRecipeApi(url) {
     console.log(search);
    $.ajax({

      url : url,
      success: function(response) {
                appendRecipes(response);
                // var object= JSON.parse(response);
                // console.log(object);

      }
    });
  } 
  getRecipes();
     });

  //slick 

  
  //

  function appendRecipes(response) {
    console.log("testing");
    var newObject = JSON.parse(response);
    var recipeObject = newObject.recipes;
    console.log(newObject);
    console.log(recipeObject);
  //    $('.slick-container').slick({
  //   // centerMode: true,
  //   // centerPadding: '60px',
  //   // slidesToShow: 3,
  //   arrows: true,
  //   autoplay:true,
  //   dots: true
  //   // focusOnSelect: true,
  //   // asNavFor: '.slider-for',
  // //   responsive: [
  // //   {
  // //     breakpoint: 768,
  // //     settings: {
  // //       // arrows: false,
  // //       // centerMode: true,
  // //       // centerPadding: '40px',
  // //       slidesToShow: 1
  // //     }
  // //   },
  // //   {
  // //     breakpoint: 480,
  // //     settings: {
  // //       // arrows: false,
  // //       // centerMode: true,
  // //       // centerPadding: '40px',
  // //       slidesToShow: 1
  // //     }
  // //   }
  // // ]
  // });
    $.each(recipeObject, function(i, item){

      var recipeCard = $('<div class="card"></div>');
      var recipeImage = $('<img class="card-img-top" alt="Card image cap" src="'+item.image_url+'">');
      var cardBlock = $('<div class="card-block"><h4 class="card-title">'+item.title+'</h4><a href="'+item.source_url+'" class="btn btn-primary">Get Recipe</a></div>');
      $('#menu-section').append(recipeCard);
      $(recipeCard).append(recipeImage, cardBlock);

      // var recipeBlock = $('<section class="recipeCard"></section>');
      // var article =$('<article class="recipe-content"></article>');
      // var title = $('<a href = "'+item.source_url+'><div class="ind_recipe"><h5>'+item.title+'</h5> <img class="recipe_img" src="'+item.image_url+'"></div></a>');
      // $(article).append(title);
      // $(recipeBlock).append(article);
      // $('#menu-section').append(recipeBlock);
      // $('.slick-container').append(recipeBlock);
      // console.log(recipeObject);
      // console.log(item.title);
      // console.log(item.source_url);
      // console.log(item.image_url);
      // console.log(item.social_rank);
      // console.log(f2f_url);
    });
       // console.log(recipeBlock);
    // console.log(recipeObject);
  }


  $('#message-form').submit(function (event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault()

    // grab user message input
    var message = $('#message').val()

    // clear message input (for UX purposes)
    $('#message').val('')

    // create a section for messages data in your db
    var messagesReference = messageAppReference.ref('messages');

    // use the push method to save data to the messages
    messagesReference.push({
      message: message,
      votes: 0
    });
  });
  messageClass.getPosts();
});

var messageClass = (function() {
  function getPosts() {
    // retrieve messages data when .on() initially executes
    // and when its data updates
    // see https://firebase.google.com/docs/reference/js/firebase.database.Reference#on
    messageAppReference.ref('messages').on('value', function (results) {
      var $messageBoard = $('.message-board');
      var messages = [];

      var allMsgs = results.val();
      // iterate through results coming from database call; messages
      for (var msg in allMsgs) {
        var message = allMsgs[msg].message;
        var votes = allMsgs[msg].votes;

        // create message element
        // var $messageListElement = $('<li>');

        // create delete element
        // var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>')
        // $deleteElement.on('click', function (e) {
        //   var id = $(e.target.parentNode).data('id')
        //   deleteMessage(id)
        // });

        // create up vote element
        // var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>')
        // $upVoteElement.on('click', function (e) {
        //   var id = $(e.target.parentNode).data('id');
        //   updateMessage(id, ++allMsgs[id].votes); //votes variable stores value independent of node id. this change targets the id.
        // });

        // create down vote element
        // var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>')
        // $downVoteElement.on('click', function (e) {
        //   var id = $(e.target.parentNode).data('id');
        //   updateMessage(id, --allMsgs[id].votes);
        // });

        // add id as data attribute so we can refer to later for updating
        // $messageListElement.attr('data-id', msg)

        // add message to li
        // $messageListElement.html(message);

        // add delete element
        // $messageListElement.append($deleteElement)

        // add voting elements
        // $messageListElement.append($upVoteElement)
        // $messageListElement.append($downVoteElement)

        // show votes
        // $messageListElement.append('<div class="pull-right">' + votes + '</div>')

        // push element to array of messages
        // messages.push($messageListElement);
      }

      // remove lis to avoid dupes
      // .empty() is a jQuery method to remove all child nodes
      $messageBoard.empty();
      for (var i in messages) {
        $messageBoard.append(messages[i]);
      }
    });
  }

  function updateMessage(id, votes) {
    // find message whose objectId is equal to the id we're searching with
    var messageReference =  messageAppReference.ref('messages').child(id);

    // update votes property
    messageReference.update({
      votes: votes
    });
  }

  function deleteMessage(id) {
    // find message whose objectId is equal to the id we're searching with
   var messageReference =  messageAppReference.ref('messages').child(id);

    messageReference.remove();
  }

  return {
    getPosts: getPosts
  };
  
})();