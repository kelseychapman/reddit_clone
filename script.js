// create the module
const app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope){

	$scope.postFormVisible = false;
  $scope.commentVisible = false;

  $scope.formShow = function() {
    if ($scope.postFormVisible === false) {
      $scope.postFormVisible = true;
    } else {
      $scope.postFormVisible = false;
    }
  }

  $scope.toggleCommentForm = function(post) {
    if (post.commentFormVisible === false) {
      post.commentFormVisible = true;
    } else {
      post.commentFormVisible = false;
    }
  }

  $scope.upvotePost = function(post) {
    post.upvotes++;
  }

  $scope.downvotePost = function(post) {
    post.upvotes--;
  }

  $scope.commentShow = function(post) {
    if (post.commentsVisible === false) {
      post.commentsVisible = true;
    } else {
      post.commentsVisible = false;
    }
  }

  $scope.formHandler = function() {
    if ($scope.newPost.$valid) {
      let post = {
        image: $scope.newPost.postImageUrl.$modelValue,
        title: $scope.newPost.postTitle.$modelValue,
        upvotes: 0,
        author: $scope.newPost.postAuthor.$modelValue,
        body: $scope.newPost.postBody.$modelValue,
        date: Date.now(),
        commentsVisible: false,
        commentFormVisible: false,
        comments : []
      }
      $scope.posts.push(post);
      $scope.postFormVisible = false;
      $scope.postImageUrl = '';
      $scope.postTitle = '';
      $scope.postAuthor = '';
      $scope.postBody = '';
      $scope.newPost.$setPristine();
    }
  }

  $scope.addComment = function(post, commentForm) {
    if (commentForm.$valid) {
      let comment = {
        author: $scope.commentAuthor,
        text: $scope.commentText
      }
      post.comments.push(comment);
      $scope.toggleCommentForm(post);
      $scope.commentShow(post);
      commentForm.$setPristine();
      $scope.commentAuthor = '';
      $scope.commentText = '';
    }
  }

  $scope.sort = {
    method: '-upvotes',
    prettyName: 'Votes'
  }

  $scope.sortByVotes = function() {
    $scope.sort = {
      method: '-upvotes',
      prettyName: 'Votes'
    }
  }
  $scope.sortByDate = function() {
    $scope.sort = {
      method: '-date',
      prettyName: 'Date'
    }
  }
  $scope.sortByTitle = function() {
    $scope.sort = {
      method: 'title',
      prettyName: 'Title'
    }
  }

	$scope.posts = [
	   {
	     image: "http://www.clipartkid.com/images/156/light-blue-square-clip-art-at-clker-com-vector-clip-art-online-KB2hYi-clipart.png",
	     title: "Blue",
	     upvotes: -12,
	     author: "Blue, Blue",
	     body: "Quisque auctor nunc id pulvinar sollicitudin. Ut tempus nunc non mollis pellentesque. Donec non arcu ut nunc mollis pulvinar ut varius ex. Duis blandit volutpat placerat. Suspendisse potenti. Morbi faucibus a ante vitae dapibus. Duis fringilla aliquam nunc tincidunt interdum. Duis sit amet mi et nisl rhoncus aliquam ut id sapien.",
	     date: Date.parse('Fri, 14 Sept 2016 19:35:00'),
	     commentsVisible: false,
	     commentFormVisible: false,
	     comments : [
	       {
	         author: 'Comment Author NAme',
	         text: 'I love blue.'
	       }
	     ]
	   },
	   {
	     image: "http://www.clker.com/cliparts/d/n/H/M/i/F/orange-square-hi.png",
	     title: "Orange",
	     upvotes: 15,
	     author: "Orange, Orange",
	     body: "Quisque auctor nunc id pulvinar sollicitudin. Ut tempus nunc non mollis pellentesque. Donec non arcu ut nunc mollis pulvinar ut varius ex. Duis blandit volutpat placerat. Suspendisse potenti. Morbi faucibus a ante vitae dapibus. Duis fringilla aliquam nunc tincidunt interdum. Duis sit amet mi et nisl rhoncus aliquam ut id sapien.",
	     date: Date.parse('Tues, 25 Oct 2016 04:30:00'),
	     commentsVisible: false,
	     commentFormVisible: false,
	     comments : [
	       {
	         author: 'Comment Author NAme',
	         text: 'I love orange.'
	       },
	       {
	         author: 'Comment Author NAme',
	         text: 'I love orange, too.'
	       }
	     ]
	   },
	   {
	     image: "http://www.clipartkid.com/images/166/green-square-clip-art-at-clker-com-vector-clip-art-online-royalty-wibQom-clipart.png",
	     title: "Green",
	     upvotes: 0,
	     author: "Green Green",
	     body: "Quisque auctor nunc id pulvinar sollicitudin. Ut tempus nunc non mollis pellentesque. Donec non arcu ut nunc mollis pulvinar ut varius ex. Duis blandit volutpat placerat. Suspendisse potenti. Morbi faucibus a ante vitae dapibus. Duis fringilla aliquam nunc tincidunt interdum. Duis sit amet mi et nisl rhoncus aliquam ut id sapien.",
	     date: Date.parse('Thurs, 13 Oct 2016 04:00:00'),
	     commentsVisible: false,
	     commentFormVisible: false,
	     comments : [
	       {
	         author: 'Comment Author Name',
	         text: 'I love green.'
	       }
	     ]
	   },
	   {
	     image: "http://www.clker.com/cliparts/7/g/j/h/i/2/teal-square-md.png",
	     title: "Teal",
	     upvotes: 7,
	     author: "Teal Teal",
	     body: "Duis ullamcorper mauris urna, ultricies ullamcorper est fermentum eu. Pellentesque purus sapien, sagittis a diam nec, blandit elementum erat. Nulla facilisi. Pellentesque enim sapien, dictum sit amet feugiat cursus, egestas at lectus.",
	     date: Date.parse('Thurs, 06 Oct 2016 00:00:00'),
	     commentsVisible: false,
	     commentFormVisible: false,
	     comments : comments : [
	       {
	         author: 'Comment Author Name',
	         text: 'I love teal.'
	       }
	     ]
	   }
	 ]
	});
