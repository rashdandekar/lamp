class GasProperties{
  public zfactor:number=0;
  public gasFormationVolumeFactor:number=0;
  public gasViscosity:number=0;
  public gasDensity:number=0;
}

class Gas{
// inputs
  private spgr:number;
  private h2s:number;
  private co2:number;
  private n2:number;

  constructor(spgr?:number, h2s?:number, co2?:number, n2?:number){
    this.spgr = (spgr==null) ? 0.65 : spgr;
    this.h2s = (h2s==null) ? 0.0 : h2s;
    this.co2 = (co2==null) ? 0.0 : co2;
    this.n2 = (n2 == null) ? 0.0 : n2;
  }

  getProperties(press:number, temp:number):GasProperties{
    let g:GasProperties= new GasProperties;
    return g;
  }

}



export { Gas };