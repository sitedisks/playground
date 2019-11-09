using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebToTest.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    DateOfBirth = table.Column<DateTime>(nullable: false),
                    City = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Telephone = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 1, "8546 Bliss Terrace ", "San Anselmo", new DateTime(1989, 8, 2, 14, 49, 9, 0, DateTimeKind.Unspecified), "Courtney.Miller@telus.net", "Tiffany", "Iginla", "Minnesota", "craft" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 24, "7419 Stewart Street ", "Coronado", new DateTime(1971, 12, 1, 15, 28, 40, 0, DateTimeKind.Unspecified), "Miguel.Carter@microsoft.com", "Isaac", "Price", "Idaho", "Tofu" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 23, "4922 Seagate Avenue ", "Shiner", new DateTime(1960, 3, 3, 19, 57, 45, 0, DateTimeKind.Unspecified), "Alexandra.Morris@gmail.com", "Rosalinda", "Hernandez", "Idaho", "them" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 22, "7751 Taaffe Place ", "Citrus City", new DateTime(1972, 11, 22, 21, 43, 41, 0, DateTimeKind.Unspecified), "Sydney.Brugger@gmx.com", "Benjamin", "Hall", "Georgia", "bicycle" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 21, "4472 Plumb 1st Street ", "Parker", new DateTime(1945, 3, 10, 22, 44, 14, 0, DateTimeKind.Unspecified), "Alejandro.Richardson@gmail.com", "Vanessa", "Price", "Iowa", "PBR" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 20, "8002 Elliott Walk ", "Truckee", new DateTime(2004, 9, 22, 21, 31, 28, 0, DateTimeKind.Unspecified), "Benjamin.Phillips@gmx.com", "Aaliyah", "Foster", "Montana", "park" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 19, "9574 Henry Street ", "Desbiens", new DateTime(1914, 8, 9, 18, 42, 34, 0, DateTimeKind.Unspecified), "Nathaniel.Green@gmail.com", "Madeline", "Taylor", "Ohio", "locavore" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 18, "2180 Blake Court ", "Hart", new DateTime(1985, 5, 27, 0, 27, 57, 0, DateTimeKind.Unspecified), "Mia.Coleman@microsoft.com", "Hunter", "Russell", "Pennsylvania", "place" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 17, "2272 Keen Court ", "Garden Hills", new DateTime(1978, 6, 13, 14, 21, 27, 0, DateTimeKind.Unspecified), "Jordan.Davis@microsoft.com", "Angel", "Wilson", "Colorado", "Lo-fi" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 16, "2012 57th Street ", "Fort Davis", new DateTime(1951, 6, 8, 5, 10, 40, 0, DateTimeKind.Unspecified), "Kimberly.Gray@telus.net", "Sierra", "Ross", "Nebraska", "terry" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 15, "1466 Brighton 5th Lane ", "Laval", new DateTime(1913, 9, 2, 14, 3, 39, 0, DateTimeKind.Unspecified), "Lucas.Barnes@shaw.ca", "Joshua", "Martinez", "Delaware", "freegan" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 14, "4267 Union Avenue ", "Point Arena", new DateTime(1959, 7, 23, 13, 57, 31, 0, DateTimeKind.Unspecified), "Andrea.MacKenzie@microsoft.com", "Sierra", "Powell", "North Dakota", "you" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 13, "8896 Park Cir ", "Hawkins", new DateTime(1907, 1, 29, 22, 36, 23, 0, DateTimeKind.Unspecified), "Luis.Lewis@live.com", "Taylor", "Cooper", "Alabama", "week" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 12, "6456 9th Avenue ", "Shady Shores", new DateTime(1992, 3, 10, 22, 55, 32, 0, DateTimeKind.Unspecified), "Terica.Ramirez@rogers.ca", "Nathaniel", "Scott", "Nevada", "small" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 11, "2932 Ebony Court ", "La Tuque", new DateTime(1939, 10, 4, 6, 50, 54, 0, DateTimeKind.Unspecified), "Ashley.Brown@gmail.com", "Jacqueline", "Henderson", "Minnesota", "pack" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 10, "9103 Avenue A  ", "Wallis", new DateTime(1967, 11, 22, 3, 13, 56, 0, DateTimeKind.Unspecified), "John.Hall@att.com", "Jerica", "Carter", "Nebraska", "of" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 9, "2423 Fane Court ", "Coronado", new DateTime(1919, 7, 4, 14, 2, 56, 0, DateTimeKind.Unspecified), "Sophia.Long@telus.net", "Ariana", "Scott", "Florida", "future" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 8, "2984 Eastern Parkway ", "Oak Grove", new DateTime(1922, 4, 6, 13, 38, 48, 0, DateTimeKind.Unspecified), "Kaylee.Johnson@live.com", "Kaycee", "Brooks", "Delaware", "authentic" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 7, "4175 Kane Place ", "Sainte-Anne-de-Bellevue", new DateTime(2015, 6, 15, 6, 37, 17, 0, DateTimeKind.Unspecified), "Gabriella.Reed@microsoft.com", "Jake", "Pitt", "New York", "out" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 6, "6514 Rutland Road ", "Eagle Lake", new DateTime(1940, 3, 10, 21, 31, 58, 0, DateTimeKind.Unspecified), "Shelby.Rodriguez@rogers.ca", "Nicole", "Yarobi", "Kentucky", "life" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 5, "7386 Lamont Court ", "Brackettville", new DateTime(1927, 3, 27, 0, 11, 17, 0, DateTimeKind.Unspecified), "Adam.Pearson@telus.net", "Nicholas", "Kelly", "Alabama", "freegan" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 4, "5562 Wallaston Court ", "Dimmitt", new DateTime(2017, 6, 28, 22, 31, 10, 0, DateTimeKind.Unspecified), "Riley.Nelson@gmail.com", "Isabel", "Price", "Hawaii", "carles" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 3, "2373 Bowne Street ", "Amqui", new DateTime(1930, 5, 19, 20, 33, 24, 0, DateTimeKind.Unspecified), "Mia.Gomes@shaw.ca", "Cary", "Wilson", "North Dakota", "government" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 2, "7351 Rodney Street ", "Newburgh", new DateTime(2012, 7, 3, 6, 43, 40, 0, DateTimeKind.Unspecified), "Lucas.Cox@gmail.com", "Hunter", "Sanchez", "Virginia", "carles" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 25, "3662 56th Drive ", "Winnipeg Beach", new DateTime(1946, 8, 5, 11, 13, 4, 0, DateTimeKind.Unspecified), "Elijah.Turner@hotmail.com", "Rebecca", "Perry", "Louisiana", "shorts" });

            migrationBuilder.InsertData(
                table: "Persons",
                columns: new[] { "Id", "Address", "City", "DateOfBirth", "Email", "FirstName", "LastName", "State", "Telephone" },
                values: new object[] { 26, "7175 Harbor View Terrace ", "Roberval", new DateTime(1906, 4, 13, 3, 3, 12, 0, DateTimeKind.Unspecified), "Grace.Flores@att.com", "Michael", "Long", "Illinois", "life" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Persons");
        }
    }
}
