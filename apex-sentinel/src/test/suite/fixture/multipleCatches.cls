public class MultipleCatches {
    public void run() {
        try {
            Integer x = 10;
        } catch (TypeException e) {
            System.debug(e);
        } catch (Exception e) {
        }
    }
}
