/* Beginn Blockkommentar in JS
	
	Das ist unser Modul. Ich werde nur was basteln, was ein paar Daten auf der View in einfachster Form ausgibt.
	
Ende Blockkommentar in JS*/

angular.module('MyApp', []) // unser Modul, wie man es benennt hängt davon ab, was es tun soll
	.controller('MyCtrl', ['$scope', function($scope){ // der Controller des Moduls, man kann auch mehrere schreiben bzw die Controller untereinander vererben [Exkurs: Vererbung]
		// .controller('MyCtrl', ['$scope', function($scope){ <- beachte, wie $scope injected wird! 
		// $scope ist der Geltungsbereich für Variablen in Angular 

		$scope.einAuto = { // so werden Objekte in JavaScript erstellt
			"name": "Honda", 
			"marke": "Civic",
			"reifen": 4,
			"image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Honda_Civic_(VIII)_%E2%80%93_Frontansicht,_13._Juni_2011,_Wuppertal.jpg"
		}

		// grds lassen sich auch mit var... Variablen erstellen. Sollen diese aber in der View angezeigt werden, müssen sie am Scope hängen!
		var einZweitesAuto = {
			"name": "Honda", 
			"marke": "Civic",
			"reifen": 4
		}

		// Datentypen, die du immer wieder brauchen wirst: 
		var integer = 1; 
		/*
			Integer ist eine einfache Zahl, ohne Nachkommastellen
			Wird immer wieder auch zum durchgehen irgendwelcher Schleifen benötigt
			JavaScript hat keine Typsicherheit. In anderen Sprachen, wie etwa Java gibt es noch Float, double, etc 
			JS kennt das in sofern auch, dass man einfach 
				var float = 1.12; schreiben würde um Nachkommastellen zu beachten 
				Java beispielsweise kennt int nur als ganzzahlige zahlen
				wollte man einen float nutzen müsste man schreiben: 
					float meinFloat = 1.12; 
					-> Typsicherheit
		*/
		var Stringa = "Hallo"; 
		/*
			Der String ist einfacher Text, beachte die "" <- 
		*/
		var StringMitHochkomma = "\"Will man Hochkommata ausgeben, muss man sie vorher maskieren\"";

		$scope.array = [1,2,3,4,5,6]; 
		/*
			Arrays sind Listen von Daten, die Indexiert sind
			will man bsw auf das Element 3 zugreifen, würde man array[2] nutzen, da der Index bei 0 beginnt
		*/ 

	}]);