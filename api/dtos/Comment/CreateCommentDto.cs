using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class CreateCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must be at least 5 chars length")]
        [MaxLength(280, ErrorMessage = "Title cannot be over 280 chars")]
        public string Title { get; set; }
        [Required]
        [MinLength(5, ErrorMessage = "Content must be at least 5 chars length")]
        [MaxLength(280, ErrorMessage = "Content cannot be over 280 chars")]
        public string Content { get; set; }

    }
}