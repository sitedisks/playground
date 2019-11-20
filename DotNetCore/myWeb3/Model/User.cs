using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myWeb3.Model
{
    // User.cs
    // The model you want to map from
    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        // Constructor to initialize User
        public User()
        {
            Name = "Nicky";
            Email = "myemail@gmail.com";
            Phone = "+81234588";
        }
    }
}
