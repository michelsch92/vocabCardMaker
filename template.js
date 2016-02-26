"use strict";

var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope', function($scope) {

  $scope.chineseTitle = 'Chinese Title';
  $scope.pinyinTitle = 'Pinyin Title';
  $scope.englishTitle = 'English Title';

  var vocabList = [
'我 me',
'你 you',]

  $scope.vocabWords = {};

  for (var i=0; i<vocabList.length;i++) {
    var word = vocabList[i];
    var chinese = word.substr(0, word.indexOf(" "));
    var pinyin = cjst.chineseToPinyin(chinese).join(' ');
    var english = word.slice(word.indexOf(" "));
    $scope.vocabWords['word' +  String(i)] = {
      chinese:chinese,
      pinyin:pinyin,
      english:english,
    }
  }

}]);
