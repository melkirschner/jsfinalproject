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
//scroll down to recipe section
    $('html,body').animate({
        scrollTop: $(".row").offset().top},
        'slow');

      var search = $('.testing').val();
      console.log(search);
    function getRecipes() {
 //call search API to search recipe database
          var search1 = $('#message').val();
          var url = 'http://food2fork.com/api/search?key=1ca4c4883a96c79f678837c74a19f9cf&q='+search1;
          console.log(url.recipes);
           console.log(search);
           var search1 = $('#message').val();
               
    callRecipeApi(url);

    }

    function callRecipeApi(url) {
       console.log(search);
      $.ajax({

        url : url,
        crossDomain:true,
        success: function(response) {
                  appendRecipes(response);
             

          }
      });
    } 
  getRecipes();
  });



  function appendRecipes(response) {
    console.log("testing");
    var newObject = JSON.parse(response);
    var recipeObject = newObject.recipes;
    console.log(newObject);
    console.log(recipeObject);
//function to append recipe cards to DOM
    $.each(recipeObject, function(i, item){
      var recipeId = item.recipe_id;
      console.log(recipeId);
       var getUrl = 'http://food2fork.com/api/get?key=1ca4c4883a96c79f678837c74a19f9cf&rId='+recipeId;
       console.log(getUrl);
      

       $.getJSON( getUrl, function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          // console.log(key, val, data);
          items.push(val.ingredients)

          for( i=0; i<items.length; i++ )
            {
          // console.log(items[i].join('\n'));
          var list12 = items[i].join('\n');
          // console.log(list);
        var list = '<ul class="myList collapse" id="collapseExample"><li class="ui-menu-item">' + items[i].join('</li><li>') + '</li></ul>';
// console.log(list12);
            }
      



      var recipeCard = $('<div class="card"></div>');
  
      var recipeImage = $('<img class="card-img-top" alt="Card image cap" src="'+val.image_url+'">');
      // var cardBlock = $('<div class="card-block"><h4 class="card-title">'+val.title+'</h4><p>'+val.ingredients+'<br/>'+'</p><a href="'+val.source_url+'" class="btn btn-primary">Get Recipe</a></div>');
      // var cardBlock = $('<div class="card-block"><h4 class="card-title">'+val.title+'</h4><i class="fa fa-cutlery" aria-hidden="true"></i><a href="'+val.source_url+'" class="btn btn-primary">Get Recipe</a></div>');
      var cardBlock = $('<div class="card-block"><h4 class="card-title">'+val.title+'</h4><i class="fa fa-cutlery"></i>'+list+'<a href="'+val.source_url+'" class="btn btn-primary">Get Recipe</a></div>');


      // var seeMore = $('<i class="fa fa-cutlery" aria-hidden="true"></i>')
      $('#menu-section').append(recipeCard);
      $(recipeCard).append(recipeImage, cardBlock);

      $('.fa-cutlery').on('click', function(){
       // if($('.myList', this).hasClass('collapse')){
         // $(this).closest('.myList').toggleClass('collapse');
        // $(this).siblings('.myList').toggleClass('collapse');
        $(this).closest('.card-block').find('.myList').toggleClass('collapse');


         //maybe change this to closest/find
        //   $('.myList', this).removeClass('collapse');
        // }else{
          // $('.myList', this).addClass('collapse')
          // }
      });
        });
        });
    });
  
  };


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