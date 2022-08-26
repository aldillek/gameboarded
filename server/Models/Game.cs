using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace server.Models
{
    public class Game
    {
        public int Id { get; set; }
        [AllowNull]
        public string? Thumbnail { get; set; }
        [AllowNull]
        public int? ReleaseYear { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public Roles Role { get; set; }
        [Required]
        public string? Author { get; set; }
        [AllowNull]
        public int? MinPlayersAmount { get; set; }
        [AllowNull]
        public int? MaxPlayersAmount { get; set; }
        [Required]
        public int? MinTimePlay { get; set; }
        [AllowNull]
        public int? MaxTimePlay { get; set; }
        [AllowNull]
        public int? MinAge { get; set; }
        [AllowNull]
        public string? Description { get; set; }
        [Required]
        public List<string>? Types { get; set; }
        [Required]
        public List<string>? Categories { get; set; }
       
    }


    public class GameDto
    {
        public string? Thumbnail { get; set; }
        public int? ReleaseYear { get; set; }
        public string? Title { get; set; }
        public Roles Role { get; set; }
        public string? Author { get; set; }
        public int? MinPlayersAmount { get; set; }
        public int? MaxPlayersAmount { get; set; }
        public int? MinTimePlay { get; set; }
        public int? MaxTimePlay { get; set; }
        public int? MinAge { get; set; }
        public string? Description { get; set; }
        public List<string>? Types { get; set; }
        public List<string>? Categories { get; set; }

    }


}
