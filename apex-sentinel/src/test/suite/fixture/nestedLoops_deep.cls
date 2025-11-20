public class NestedLoopsDeep {
    public void run() {
        for (Integer i = 0; i < 10; i++) {
            while (i < 5) {
                for (Integer j = 0; j < 10; j++) {
                    System.debug(i + j);
                }
            }
        }
    }
}
