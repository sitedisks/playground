using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GenFu;
using Microsoft.EntityFrameworkCore;
using WebToTest.Data.Entities;

namespace WebToTest.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public ApplicationDbContext() { }

        public virtual DbSet<Person> Persons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            var i = 1;
            var personsToSeed = A.ListOf<Person>(26);
            personsToSeed.ForEach(x => x.Id = i++);
            modelBuilder.Entity<Person>().HasData(personsToSeed);

        }
    }
}
