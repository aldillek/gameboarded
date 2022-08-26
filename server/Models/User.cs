﻿using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        [Required]
        public string? CreatedOn { get; set; }
        [Required]
        public Roles Role { get; set; }

    }


    public class AuthUser
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }


    public enum Roles
    {
        User,
        Moderator,
        Admin
    }

            
    
}
