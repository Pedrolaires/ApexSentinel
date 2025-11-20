public class MixedAtfd {

    public Account a1;
    public Contact c1;

    public void m1() {
        System.debug(a1.Name);
        System.debug(a1.Phone);
        System.debug(a1.OwnerId);
    }

    public void m2() {
        System.debug(c1.LastName);
    }
}
