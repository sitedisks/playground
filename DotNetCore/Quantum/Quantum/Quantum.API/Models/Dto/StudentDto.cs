﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quantum.API.Models.Dto
{
    public class StudentDto
    {
        public int Id { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
        public double GPA { get; set; }
        public int ClassId { get; set; }
    }
}
