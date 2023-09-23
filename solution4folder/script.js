var names=new Array();
names[0]="john";
names[1]="yaakov";
names[2]="jason";
names[3]="ali";
names[4]="sara";
names[5]="jim";
names[6]="mehwish";
names[7]="laiba";
names[8]="hamna";
names[9]="javeria";
names[10]="hasnat";

for(var i=0; i<names.length;i++) {
    if( names[i].charAt(0)==='j'|| names[i].charAt(0)==='J'){
        console.log("GOODBYE"  + names[i])
    }
    else{
        console.log("HELLO"  + names[i])
    }
}