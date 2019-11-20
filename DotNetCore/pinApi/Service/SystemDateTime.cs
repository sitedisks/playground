using System;

namespace pinApi.Service
{
    using Interface;
    public class SystemDateTime : IDateTime
    {
        public DateTime Now
        {
            get { return DateTime.UtcNow; }
        }
    }
}