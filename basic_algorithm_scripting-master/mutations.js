
function mutation(arr) {

//a masolat az az alap string
let masolat = [...arr[1]];
//a betuit lekicsinyitjuk
for(let i=0;i<masolat.length;i++){
	masolat[i] = masolat[i].toLowerCase();
	
}
let flag = false;
let betuk = [];

//egy ciklus megy az atvett tomb ellenorizendo szavan beturol beture
//a betuk tombot letrehozzuk, a masodik string individual betuibol
for(let i=0;i<masolat.length;i++){
	flag = false;
	//for ciklus ami megy azon a tombon, amibe az eredeti tombben levo szo
	//betuibol, mindbol csak egyet beteszunk ebbe a tombbe
	for(let j=0;j<betuk.length;j++){
		if(masolat[i]===betuk[j]){
			flag = true;
		}
	}
	if(flag===false){
		betuk.push(masolat[i]);
	}
}
console.log(betuk);

let masolat2 = [...arr[0]];
for(let i=0;i<masolat2.length;i++){
	masolat2[i] = masolat2[i].toLowerCase();
}

console.log("masolat2 : "+masolat2);
//hansolitando betuit kiszedjuk
let hasonlo = [];
//fogjuk az eredeti tomb nulladik elemet és kiszedjuk ennek az individual betuit
for(let i=0;i<masolat2.length;i++){
	flag = false;
	//for ciklus ami megy azon a tombon, amibe az eredeti tombben levo szo
	//betuibol, mindbol csak egyet beteszunk ebbe a tombbe
	for(let j=0;j<hasonlo.length;j++){
		if(masolat2[i]===hasonlo[j]){
			flag = true;
		}
	}
	if(flag===false){
		hasonlo.push(masolat2[i]);
	}
}


//lekicsinyitjuk a nulladik elem individual betuit az uj tombben

let szamol=0;
for(let i=0;i<hasonlo.length;i++){
	
	//for ciklus ami megy azon a tombon, amibe az eredeti tombben levo szo
	//betuibol, mindbol csak egyet beteszunk ebbe a tombbe
	for(let j=0;j<betuk.length;j++){
		if(hasonlo[i]===betuk[j]){
			szamol++;
		}
	}
	
}
if(szamol===betuk.length){
		return true;
	}
	else{
		return false;
	}
console.log("nulladik elem betui uj tombben: "+hasonlo);


}
mutation(["hello", "hey"]);
