public class Complex {
  public void complexMethod() {
    if(true){
        System.debug('a');
        if(true) {
            System.debug('b');
            if(true) {
                System.debug('c');
            }
        }
    }
    for(Integer i=0;i<3; i++){
        if(i==1) 
            System.debug(i); 
    }
    while(false){
        if(false)
            System.debug('x'); 
    }
  }
}
