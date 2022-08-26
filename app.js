/* Exercise 1 : to display the divisor of entier positive not nul*/
let   nbres = parseInt(prompt("Type the entier not nul please :"));
while (nbres<=0) {
    nbres = parseInt(prompt("Type the entier not nul please :"));
}
for (let i = 1; i <=nbre; i++) {
     if (nbres%i==0) {
        console.log(i);
     }
}

/* Exercise 2 : to display the total price of Amal account*/
let age = parseInt(prompt("Enter the old of Amal: "));
let som=0
for (let i = 1; i <=age; i++) {
     som=som+(500+i*3)
}
alert( som + "$ in the account of Amal this birthday" )

/* Exercise 3: calcule U(n)*/
let n = parseInt(prompt("Enter n : "));
let u =6;
for (let i = 1; i <=n; i++) {
    u =  4*u + 10
}
alert(u)

/*Exercise 4: calcule U(n) of Fibonacci */
let nb= parseInt(prompt("Enter un number")), upp=0,up = 1,ut;
while (nb<2) {
    nb = parseInt(prompt("Enter un number")); 
}
console.log("les termes de la suite de Fibonacci sont : " + `${ upp}` + " " + `${up}`);
for (let i = 2; i <=nb; i++) {
    ut = up+upp
    console.log(ut);
    upp=up
    up=ut
}

/*Exercise 5: check if the number is first */
 let nbre = parseInt(prompt("enter a number : "));
 let premier=0;
for (let i = 2; i <=Math.sqrt(nbre); i++) {
     if (nbre%i == 0) {
        premier= 1
     }
}
if (premier == 1 || nbre==1) {
    alert(nbre+ " is not first ")
} else {
    alert(nbre+ " is first ")
}


/*Exercise 6: The random game*/
const MAX = 30;
const MIN = 1;
 let ans = (Math.random()%((MAX - MIN) +1))+MIN, 
 i=1;
 alert("J'ai choisi un nombre entre 1 & 30. A vous de le deviner en 5 tentatives au maximum");
 let answers
  while ((ans != answers) && (i<=5)) {
     answers = parseInt(prompt("Quel est le nombre?"));
     if (answers<ans) {
        alert("C'est plus")
   }else  if (answers>ans) {
    alert("C'est moins")
} else{
    alert("Bravo ! vous avez trouvé la reponse " + `${ans}` + " en " + `${i} essais`)
}  
     i=i+1;
  }
if ((i)==6) {
    alert("Oups vous avez depassé les 5 tentatives autorisées. le nombre etait : " + ans);
} 

/* Exercice 7 : conversion de Fahrenheit en Celsius*/
let degC;
 for (let i = -20; i <= 250; i = i+10) {
      degC = ((5*i)/9)-(160/9);
      console.log("pour i =" + `${i}, degre C = ${degC}°C`);
 }


/* Exercice 8 : Tri par ordre croissant.*/
let a = parseInt(prompt("saisissez a : "))
let b = parseInt(prompt("saisissez b : ")),temp;
let c = parseInt(prompt("saisissez c : "))

if (a>b) {
    temp=a;
       a=b;
       b=temp; 
} else
if (b>c) {
        temp=b;
        b=c;
        c=temp; 
    }
    alert(a+" "+b + " " + c)
 

/** Exercice 9 : Calculator*/
let otherOperation=true
while (otherOperation==true) {
    let menu = prompt("Veuillez choisir l'opération que vous voulez effectuer !");
    let number1 = parseFloat(prompt("Entrer le 1er nombre : "))
    let number2 = parseFloat(prompt("Entrer le 2eme nombre : "));
    let answer = 0
     switch (menu) {
       case "somme" :
             answer = number1+number2
           break;
       case "soustraction" :
           answer = number1-number2
           break;
       case "multiplication" :
           answer = number1*number2
           break;
       case "division" :
             if (number2 !=0) {
                answer = number1/number2
             }
           break;
       case "modulo" :
           answer =Math.floor(number1)% Math.floor(number2)
           break;
       case "carrée" :
           answer = Math.pow(number1,number2)  
           break;                                                     
       default:
           alert("What do you mean?")
           break;
   }
   alert(answer)
otherOperation = confirm("Voulez vous demarrer une autre opération?")
   if (otherOperation == false) {
       break
   }  
} 

/* Exercice 10 : compteur du nombre d'entier*/
let nbr = parseInt(prompt("Entrer un nombre : ")),inc=0;
while (nbr !=0) {
    nbr=Math.floor(nbr/10);
    inc=inc+1
}
alert( inc + " entiers") 

/*Exercice 11 : Representation de l'heure en ajoutant une seconde */
let heure = parseInt(prompt("Entrer heure "));
let min = parseInt(prompt("Entrer min "));
let second = parseInt(prompt("Entrer second "));
second = second+1
if (second >59) {
    second=0
    min =min+1
}
if (min>59) {
    min=0
    heure = heure+1
}
if (heure > 23) {
    heure =0
}
alert("Dans une minute, il sera : " + heure + ":" +min+ ":" + second) 

/*Exercice 12 : Payement d''impôt ou non en fonction de l'age et du sexe */

let ages = parseInt(prompt("Veuillez entrer votre âge :"));
let anc = parseInt(prompt("Veuillez entrer votre ancienneté en mois :"));
let conge = 0;
cdre = prompt("Etes-vous un cadre (O/N) : ");

if (anc<12) {
    conge=2
} else {
    conge=28
}
if (cdre=="O" && ages>=35 && anc>36) {
    conge=conge+2
} 
if(cdre=="O" && ages >=45 && anc >60){
    conge=conge+4
}

/*Exercice 13 :  Inversion d'un nombre */
let nbrs = parseInt(prompt("Veuillez entre le nombre : "));
let nbres_reverse=0;
while (nbrs>0) {
    nbres_reverse =Math.floor(nbres_reverse*10)+(nbrs%10);
    nbrs=Math.floor(nbrs/10)
}
alert(nbres_reverse)

/* Exercice 14 : Multiplication de deux entiers grâce à l'addition entière*/
let x= parseInt(prompt("Veuillez entre le nombre x : "));
let y= parseInt(prompt("Veuillez entre le nombre y : "));
let soms=0   
for (let i = 0; i < x; i++) {
    soms=soms+y
}
alert(soms)

/*Exercice 15 :  Verification d'un nombre palindrome ou non*/
let nombre =parseInt(prompt("Veuillez entrer le nombre :"));
let palindrome=0, nbrs_reverse=0;
palindrome=nombre;
while (nombre !=0) {
    nbrs_reverse = Math.floor((nbrs_reverse*10)+(nombre%10));
    nombre=Math.floor(nombre/10)
}
if (palindrome==nbrs_reverse) {
    alert(palindrome+ " est palindrome")
} else {
alert(palindrome+" n'est pas palindrome")
}

/* Exercice 17 : Affichage de tout les nombre paire dans une intervalle*/
let nbs = parseInt(prompt("Veuillez entrer un nombre "));
for (let i = 0; i<=nbs; i++) {
    if (i%2==0) {
       console.log(i + " "); 
    } 
}

/* Exercice 18 : Sommes des entiers impaires */
let nbre_u = parseInt(prompt("Tapez un nombre : "));
let som_tle = 0
for (let i = 1; i <nbre_u; i++) {
   if (i%2 !=0) {
    som_tle+=i
   }  
}
alert(som)

/* Exercice 19: the gcd for two numbers*/
let num1 = parseInt(prompt("Entrez le nombre 1 :"));
let num2 = parseInt(prompt("Entrez le nombre 2 :")),ig=1,com_div=0;
while (num1<=0 || num2<=2) {
     num1 = parseInt(prompt("Entrez le nombre 1 :"));
     num2 = parseInt(prompt(" le nombre 2 :"));
}
while (ig<=num1 && ig<=num2) {
     if (num1%ig==0 && num2%ig ==0) {
       com_div=i
     }
     ig=ig+1;
}
alert("PGCD("+num1+","+num2+") = " + com_div)

 /*Exercice 20 : Affichage de triangle rectangle */
let numc = parseInt(prompt("Veuillez entrer un nombre : "))
for (let i = 1; i <=numc; i++) {
     for (let j = 1; j <=i; j++) {
         alert(i);    
     }
}

/* Exercice 21 : Affichage de  rectangle */
let ligne =parseInt(prompt("nombre de ligne : "));
let col = parseInt(prompt("nombre de colonne : "));
for (let i = 1; i <=ligne; i++) {
     for (let j =1; j <=col; j++) {
          console.log("*")
     }
}

/*Exercice 22 : Verification d'un lien d'amitié entre deux nombres*/
let mb =parseInt(prompt("nombre de ligne : "));
let nm = parseInt(prompt("nombre de colonne : "));
let som_m =0, som_n=0;

for (let i = 2; i <mb; i++) {
     if (mb%i==0) {
        som_m=som_m+i
    }
}
for (let i = 2; i <nm; i++) {
    if (mb%i==0) {
       som_n=som_n+i
    }
}
if (som_m==som_n) {
    alert("les nombres "+mb+" et "+ nm + " sont deux nombres amis")
} else {
    alert("les nombres "+mb+"et "+ nm + " ne sont pas deux nombres amis")
}

/*Exercice 23 :  remplissage de tableau*/
let tabs=[];
let num;
for (let  i= 0;  i<=8; i++) {
      num=parseInt(prompt("entrer un nombre "+i));
      tabs[i]=num;
}
for (let  i= 0;  i<=8; i++) {
   console.log(tab[i])
}

/*Exercice 24 : Calcul de moyenne*/

let tabl = [];
let nums , som_ut=0 , moys=0;
for (let i = 0; i <=9; i++) {
    nums=parseInt(prompt("entrer un nombre "+i));
    tabl[i]=nums;
    som_ut+=tabl[i] 
}
moys=som_ut/10
alert(moys)
 
/*Exercice 25 :  affichage des valeurs positives/negatives */
let tabls = [];
let nx,mx,Ip=0,Ine=0;
 m = parseInt(prompt("Comment de valeur voulez-vous stocker?"));
 for (let i = 0; i <=mx-1; i++) {
    nx = parseInt(prompt("Entrer le nombre?"));
    tabls[i]=n;
    if (tab[i]<0) {
        Ine+=1;
    } else{
        Ip+=1
    }
 }
alert('les valeurs positives : '+Ip)
alert('les valeurs negatives : '+Ine)

/*Exercice 26 :  affichage de la sommes des valeurs du tab*/
let table =[10,12,14];
let somx=0;
for (let index = 0; index < table.length; index++) {
    somx=somx+table[index]
}
alert(somx);

/*Exercice 27 :  affichage de la sommes des valeurs de  deux tab*/
let table1=[];
let table2=[];
let tab_tog=[];
let numx,numx1;

len=parseInt(prompt("la longueur de tab"));
for (let i = 0; i <=len-1; i++) {
    numx=parseInt(prompt("Veuillez entrer les valeurs"));
    table1[i]=num;
    numx1=parseInt(prompt("Veuillez entrer les valeurs2"));
    table2[i]=numx1
    tab_tog[i] = table1[i]+table2[i]
}

for (let i = 0; i < tab_tog.length; i++) {
     console.log(tab_tog[i]);
}


/*Exercice 28 :  Calcule de strumptref*/
let tabl1=[];
let tabl2=[];
let tabl_tog=[];
let numl,numl1,nl,ml,p=0;

ml = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab1?"));
for (let i = 0; i <=ml-1; i++) {
     numl= parseInt(prompt("Veuillez entrer les valeurs "));
     tabl1[i]=numl;
}

nl = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab2?"));
for (let j = 0; j <=nl-1; j++) {
     numl1= parseInt(prompt("Veuillez entrer les valeurs "));
     tabl2[j]=numl1;
}

for (let i = 0; i <=ml-1 ; i++) {
    for (let j = 0; j <=nl-1; j++) {
        p=p+tabl1[i]*tabl2[j]
    }
}
alert(p)

/*Exercice 29 :  affichage des valeurs de tab en augmentant de 1*/
let tabd=[],md,numd;

md = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab?"));
for (let i = 0; i <=md-1; i++) {
     numd= parseInt(prompt("Veuillez entrer les valeurs "));
     tabd[i]=numd+1;
} 
for (let i = 0; i <=md-1; i++) {
    console.log(tabd[i]);
}

/*Exercice 30 :  affichage de la valeur max dans un tableau*/
let tabf=[],mf,maxf,numf, posf=0;

m = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab?"));
for (let i = 0; i <=mf-1; i++) {
     numf= parseInt(prompt("Veuillez entrer les valeurs "));
     tabf[i]=numf;
} 
maxf=tabf[0]
for (let i = 0; i <=mf-1; i++) {
    if (maxf<tabf[i]) {
         maxf=tabf[i];
        posf=i
    }
}
alert("la valeur la plus grande est : " + maxf + " elle est en position : " + posf)

/*Exercice 31 :  affichage de la note sup à la moyenne*/
let taby=[],my,somy=0,moyy=0, posy=0,maxy=0,numy=0;

my = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab?"));
for (let i = 0; i <=my-1; i++) {
     numy= parseInt(prompt("Veuillez entrer les valeurs "));
     taby[i]=numy;
     somy = taby[i]+somy
} 
moyy = somy/my;
for (let i = 0; i <=my-1; i++) {
    if (moyy<taby[i]) {
         maxy=taby[i];
        posy= posy+1
    }
}
alert("la moyenne : " + moyy + " notes superieures : " + posy)

/*Exercice 32 :  la recherche des elements dans un tableau*/
let tabn=[],mn,maxn, posn=0,numn=0;

mn = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab1?"));
for (let i = 0; i <=mn-1; i++) {
     numn= parseInt(prompt("Veuillez entrer les valeurs "));
     tabn[i]=numn;
} 
 maxn = parseInt(prompt("Veuillez saisir n : "))
for (let i = 0; i <=mn-1; i++) {
    if (maxn==tabn[i]) {
         posn = posn+1;
    }
}
if (posn!=0) {
    alert(maxn + " se trouve dans le tableau")
} else {
    alert(maxn + " ne se trouve pas dans le tableau")
}

/*Exercice 33 :  affichage de la sommes des valeurs de  deux tab*/

let tabg=[],mg,maxg, posg=0;

mg = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab1?"));
for (let i = 0; i <=mg-1; i++) {
     numg= parseInt(prompt("Veuillez entrer les valeurs "));
     tabg[i]=numg;
} 
 maxg = parseInt(prompt("Veuillez saisir n : "))
for (let i = 0; i <=mg-1; i++) {
    if (maxg==tabg[i]) {
         posg = posg+1;
    }
}
if (posg!=0) {
    alert(posg)
} 

/*Exercice 34 :  affichage de la sommes des valeurs de  deux tab*/

let tab=[],tab1=[], tab2=[],m,max,k=0,j=0, inv=0, pos=0;

m = parseInt(prompt("Combien de valeur voulez-vous stocker dans dans tab1?"));
for (let i = 0; i <=m-1; i++) {
     num= parseInt(prompt("Veuillez entrer les valeurs "));
     tab[i]=num;
} 
for (let i = 0; i <=m-1; i++) {
    if (tab[i]%2==0) {
         tab1[j] = tab[i];
         j+=1
        }else{
            tab2[k] = tab[i]
            k+=1
        }
    }
    console.log("tab1");
    for (let i = 0; i <j; i++) {
        console.log(tab1[i]);
}
console.log("tab2");

for (let i = 0; i<k; i++) {
    console.log(tab2[i]);
   
}