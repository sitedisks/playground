using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using razorApp.Data;
using razorApp.Models;

namespace razorApp.Pages.Movies
{
    public class IndexModel : PageModel
    {
        private readonly razorApp.Data.MovieContext _context;

        public IndexModel(razorApp.Data.MovieContext context)
        {
            _context = context;
        }

        public IList<Movie> Movie { get;set; }

        public async Task OnGetAsync()
        {
            Movie = await _context.Movie.ToListAsync();
        }
    }
}
