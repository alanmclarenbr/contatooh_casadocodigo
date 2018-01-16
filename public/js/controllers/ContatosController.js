angular.module('contatooh').controller('ContatosController',
    function ($scope, $resource) {
        $scope.filtro = '';
        $scope.contatos = [];

        var Contato = $resource('/contatos/:id');

        function buscarContatos() {

            Contato.query(function (contatos) {
                    $scope.contatos = contatos;
                },
                function (erro) {
                    console.log("Não foi possível obter a lista de contatos.");
                    console.log(statusText);
                }
            );

        }

        $scope.init = function(){
            buscarContatos();
        };

        $scope.init();
    });