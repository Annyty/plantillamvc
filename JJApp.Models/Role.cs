using System.Collections.Generic;

namespace JJApp.Models
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public ICollection<User> Usuarios { get; set; }

        public Role()
        {
            this.Usuarios = new List<User>();
        }

    }
}