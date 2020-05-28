using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace securepay_auth.Model
{
    public class Payment
    {
        public string Token { get; set; }
        public string AccessToken { get; set; }
        public double Amount { get; set; }
    }
}
