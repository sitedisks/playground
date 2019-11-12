using System;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using webApiDB.Data;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using webApiDB.Model;
using System.Linq;

namespace webApiDB.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly WebAPIDbContext _context;
        private readonly ILogger<UserController> _logger;

        public UserController(WebAPIDbContext context, ILogger<UserController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers(){
            return await _context.Users.ToListAsync();
        }
    }

}