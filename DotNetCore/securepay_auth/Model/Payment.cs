namespace securepay_auth.Model
{
    public class Payment
    {
        public string Token { get; set; }
        public string AccessToken { get; set; }
        public double Amount { get; set; }
        public string Description { get; set; }
        public string SuccessUrl { get; set; }
    }
}
