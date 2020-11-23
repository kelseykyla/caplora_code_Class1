class Calc{
    constructor(a, b){
        this.Aa = a;
        this.Bb = b;
        this._add()
    }
      _add( ){
        console.log(this.Aa+this.Bb);
        return this.Aa+this.Bb
    }
    sub(){
        console.log(this.Aa-this.Bb);
        return this.Aa-this.Bb
        
    }
}

let calc = new Calc(10,20);
let v =calc._add( );
calc.sub ()
// console.log(v);