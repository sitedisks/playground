using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace securepay_auth.Model
{
    public class WeChatModel
    {
        public string merchantCode { get; set; }
        public string ip { get; set; }
        public double amount { get; set; }
        public string orderId { get; set; }
        public string orderDescription { get; set; }
        public string paymentChannel { get; set; }
        public RedirectUrls redirectUrls { get; set; }
    }

    public class RedirectUrls
    {
        public string successUrl { get; set; }
    }
}
