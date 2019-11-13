using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Collections.Generic;

namespace pinApi.Model
{
    [Table("user")]
    public class User
    {
        [Column("userId")]
        public int Id { get; set; }
        [Column("userName")]
        public string UserName { get; set; }
        [Column("alias")]
        public string Alias { get; set; }
        [Column("email")]
        public string Email { get; set; }
        public DateTime? SignupDate { get; set; }
        [Column("Password")]
        public string Password { get; set; }
        [Column("Disabled")]
        public bool Disabled { get; set; } = false;
        [Column("Deleted")]
        public bool Deleted { get; set; } = false;
    }

}