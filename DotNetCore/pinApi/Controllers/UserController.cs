using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using pinApi.Data;
using pinApi.Model;

namespace  pinApi.Controllers{
    [ApiController, Route("api/[controller]")]
    public class UserController:ControllerBase{
        private readonly PinDbContext _context;

        public UserController(PinDbContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers(){

            return await _context.Users.ToListAsync();
        }
    }

}