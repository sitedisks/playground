using MySql.Data.Types;
namespace webApiDB.Model
{
    public class Prodcut
    {
        public int Id { get; set; }
        public string Name { get; set; } 
        public int SerNo { get; set; }
        public string Description { get; set; }
    }
}