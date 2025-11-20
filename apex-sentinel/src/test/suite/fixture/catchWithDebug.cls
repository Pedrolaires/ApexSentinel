public class CatchWithDebug {
    public void run() {
        try {
            Integer x = 10;
        } catch (Exception e) {
            System.debug(e);
        }
    }
}
