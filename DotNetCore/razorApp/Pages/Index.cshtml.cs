using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace razorApp.Pages
{
    public class IndexModel : PageModel
    {
        public string Message;
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Message = "Page in C# Razoer";

        }

        public async Task<IActionResult> OnPost() {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            return RedirectToPage("./Index");
        }
    }
}
