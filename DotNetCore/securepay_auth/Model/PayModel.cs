﻿namespace securepay_auth.Model
{
    public class PayModel
    {
        public string merchantCode { get; set; }
        public double amount { get; set; }
        public string token { get; set; }
        public string ip { get; set; }
    }
}
