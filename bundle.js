"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);
  }

  _createClass(TodoList, [{
    key: "toNum",
    value: function toNum(text) {
      var texto = text;
      var retornoSplit = texto.split("");
      var trad = ["a2", "b22", "c222", "d3", "e33", "f333", "g4", "h44", "i444", "j5", "k55", "l555", "m6", "n66", "o666", "p7", "q77", "r777", "s7777", "t8", "u88", "v888", "w9", "x99", "y999", "z9999", " 0"];
      var traduzido = ""; //console.log("1"+trad[26].split('')[0]+"1");

      for (var i = 0; i < retornoSplit.length; i++) {
        for (var n = 0; n < retornoSplit.length; n++) {
          if (retornoSplit[i] == trad[n].split("")[0]) {
            for (var x = 1; x < trad[n].split("").length; x++) {
              traduzido = traduzido + trad[n].split("")[x];
            }

            for (var y = 0; y < retornoSplit.length; y++) {
              if (retornoSplit[i + 1] == trad[y].split("")[0]) {
                if (traduzido.split("")[traduzido.split("").length - 1] == trad[y].split("")[1]) {
                  traduzido = traduzido + "_";
                }
              }
            }
          }
        }
      }

      return traduzido;
    }
  }, {
    key: "toText",
    value: function toText(numero) {
      var texto = numero;
      var retornoSplit = texto.split("");
      var novoRetorno = [""];
      var cont = 0;
      var cont2 = 0;
      var temp = "";

      for (var i = 0; i < retornoSplit.length; i++) {
        if (retornoSplit[i] == "_") {} else if (retornoSplit[i] != retornoSplit[i + 1]) {
          if (cont !== 0) {
            cont++;

            for (var n = 0; n < cont; n++) {
              temp = temp + retornoSplit[i];
            }

            novoRetorno[cont2] = temp;
            temp = "";
            cont2++;
            cont = 0;
          } else {
            novoRetorno[cont2] = retornoSplit[i];
            cont2++;
          }
        } else {
          cont++;
        }
      }

      var trad = [{
        id: "2",
        nome: "a"
      }, {
        id: "22",
        nome: "b"
      }, {
        id: "222",
        nome: "c"
      }, {
        id: "3",
        nome: "d"
      }, {
        id: "33",
        nome: "e"
      }, {
        id: "333",
        nome: "f"
      }, {
        id: "4",
        nome: "g"
      }, {
        id: "44",
        nome: "h"
      }, {
        id: "444",
        nome: "i"
      }, {
        id: "5",
        nome: "j"
      }, {
        id: "55",
        nome: "k"
      }, {
        id: "555",
        nome: "l"
      }, {
        id: "6",
        nome: "m"
      }, {
        id: "66",
        nome: "n"
      }, {
        id: "666",
        nome: "o"
      }, {
        id: "7",
        nome: "p"
      }, {
        id: "77",
        nome: "q"
      }, {
        id: "777",
        nome: "r"
      }, {
        id: "7777",
        nome: "s"
      }, {
        id: "8",
        nome: "t"
      }, {
        id: "88",
        nome: "u"
      }, {
        id: "888",
        nome: "v"
      }, {
        id: "9",
        nome: "w"
      }, {
        id: "99",
        nome: "x"
      }, {
        id: "999",
        nome: "y"
      }, {
        id: "9999",
        nome: "z"
      }];
      var traduzido = "";

      for (var i = 0; i < novoRetorno.length; i++) {
        if (novoRetorno[i] == "0") {
          traduzido = traduzido + " ";
        }

        for (var n = 0; n < novoRetorno.length; n++) {
          if (trad[n].id == novoRetorno[i]) {
            traduzido = traduzido + trad[n].nome;
          }
        }
      } //console.log(novoRetorno);


      return traduzido;
    }
  }]);

  return TodoList;
}();

var MinhaLista = new TodoList();

document.getElementById("paranumero").onclick = function () {
  //document.getElementById("traduz").setAttribute("value", "bom dia");
  document.getElementById("traduz").setAttribute("value", MinhaLista.toNum(document.getElementById("traduz").getAttribute));
};

document.getElementById("paratexto").onclick = function () {
  MinhaLista.toText("novo todo");
}; //console.log(MinhaLista.toNum("bom dia meus amigo"));


console.log(MinhaLista.toText("22666_634442633777726444_46667777")); //console.log(document.getElementById("traduz").textContent);
