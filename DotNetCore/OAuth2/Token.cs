﻿using System;
using System.Collections.Generic;
using System.Text;

namespace OAuth2
{
    public class Token
    {
        public string token_type { get; set; }
        public float expires_in { get; set; }
        public string access_token { get; set; }
        public string scope { get; set; }
    }
}
