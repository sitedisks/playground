using System;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using webApiDB.Data;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using webApiDB.Model;
using System.Linq;
using NetTopologySuite;
using NetTopologySuite.Geometries;

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
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            // 0.00001 - 1m
            // 0.01 - 1000m
            var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);
            var point1 = new Coordinate(-122.121512, 47.6739882);
            var point2 = new Coordinate(-122.321512, 47.5739882);
            var pointDis = point1.Distance(point2);

            var currentLocation1 = geometryFactory.CreatePoint(point1);
            var currentLocation2 = geometryFactory.CreatePoint(point2);
            var locationDis = currentLocation1.Distance(currentLocation2);

            _logger.LogInformation("point distance: " + pointDis);
            _logger.LogInformation("location distance: " + locationDis);

            return await _context.Users.ToListAsync();
        }
    }

}