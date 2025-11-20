public class GodWmcLcom {
  public Integer a;
  public Integer b;
  public Integer c;
  public Integer d;
  public Integer e;

  public void m1() {
    if (a == 0) { System.debug('x'); }
    if (a == 1) { System.debug('x'); }
    if (a == 2) { System.debug('x'); }
    for (Integer i=0; i<3; i++) { if(i==1) System.debug(i); }
  }

  public void m2() {
    if (b == 0) { System.debug('y'); }
    if (b == 1) { System.debug('y'); }
    for (Integer i=0; i<2; i++) { if(i==0) System.debug(i); }
  }

  public void m3() {
    if (c == 5) { System.debug('z'); }
    if (c == 6) { System.debug('z'); }
    if (c == 7) { System.debug('z'); }
    if (c == 8) { System.debug('z'); }
  }

  public void m4() {
    if (d == 0) { System.debug('d'); }
  }

  public void m5() {
    if (e == 0) { System.debug('e'); }
  }
}
