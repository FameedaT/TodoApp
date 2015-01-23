angular.module("todoApp", [])
    .controller("MainCtrl", function ($scope) {
        $scope.todos = [
            //{
            //    text: "Todo 1",
            //    completed: false
            //},
            //{
            //    text: "Todo 2",
            //    completed: false
            //},
            //{
            //    text: "Todo 3",
            //    completed: false
            //},
            //{
            //    text: "Todo 4",
            //    completed: false
            //}
        ];

        $scope.add = function () {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        };

        $scope.delete = function (item) {
            var index = $scope.todos.indexOf(item);
            $scope.todos.splice(index, 1);
            $scope.$setPristine();
        };

        $scope.clearSubmitted = function () {
            var length = $scope.todos.length;
            for (var index = length - 1; index >= 0; index--) {
                if (this.todos[index].completed === true) {
                    this.todos.splice(this.todos.indexOf(this.todos[index]), 1);
                }
            }
        }
    });
