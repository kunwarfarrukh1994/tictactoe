import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // code goes here
squares:('X'|'O'| null)[]=Array(9).fill(null);
winner:('X'|'O'| null)=null;
count:number=0;

aP:'X'|'O'='X'; 

reset(){
  this.squares=Array(9).fill(null);
  this.winner=null;
  this.aP='X';
  this.count=0;
}


  ngOnInit() { 
    
  }


  allDone(){
    return this.squares.find(x=>x==null)==undefined;
  }

  moveTriggered(square:any,i:any){
    this.count=this.count+1;   
    if(this.count<=9)
    {
      this.squares[i]=this.aP;
      this.aP= this.aP=='X'?'O':'X';
      this.checkWinner();
    }
  }

  checkWinner(){


    //  we can do manuall checkes as well , but this pair of 2D array is good ;
    
      let lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]

    for(let [a,b,c] of lines)
    {

     if(this.squares[a] && 
        this.squares[a]===this.squares[b] && 
        this.squares[a]===this.squares[c]
     )
     {
          console.log("winner",this.squares[a]); 
          this.winner=this.squares[a];
          break;
     }
    }
  }
 
}
