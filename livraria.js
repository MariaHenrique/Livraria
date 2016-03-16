'use strict';
(function() {

	var app = angular.module('Livraria', []);
	app.controller("LivrariaController", function($scope) {
		$scope.index = 0;
		$scope.book = db[$scope.index];
		
		$scope.next = function() {
			$scope.index = $scope.index == db.length - 1 ? 0 : $scope.index + 1;
			$scope.book = db[$scope.index];		
		};
		$scope.previous = function() {
			$scope.index = $scope.index == 0 ? db.length - 1 : $scope.index - 1;
			$scope.book = db[$scope.index];
		};
		
		$scope.addComment = function(comment) {
			$scope.book.comments.push(comment);
		};
		
		$scope.addBook = function(mtitle, mauthors, mdescription, mphoto, mprice, mcomments) {
			db.push({title: mtitle, authors: mauthors, description: mdescription, photo: mphoto, price: mprice, comments: mcomments});
		
		}
		
		
		
	});	

})();