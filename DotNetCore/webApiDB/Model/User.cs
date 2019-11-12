using System;
namespace webApiDB.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Alias { get; set; }
        public string Email { get; set; }
        public int Level { get; set; }

        public DateTime CreatedDate { get; set; }
        public bool Deleted { get; set; }

    }
}