using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JJApp.Models;
using JJApp.Models.Interfaces;

namespace JJApp.Data
{
    public class JJAppUow:IDisposable
    {
        private JJAppContext _contexto= new JJAppContext();        
        private IRepository<User> _usuarios = null;        
        private IRepository<Role> _roles = null;                
        public IRepository<Role> Roles
        {
            get
            {
                if (_roles == null)
                {
                    this._roles = new RepositorioGenerico<Role>(this._contexto);
                }
                return _roles;
            }
        }


        public IRepository<User> Usuarios
        {
            get
            {
                if (_usuarios == null)
                {
                    this._usuarios = new RepositorioGenerico<User>(this._contexto);
                }
                return _usuarios;
            }
        }

        public void GuardarCambios()
        {
            this._contexto.AplicarCambiosEstado();
            this._contexto.SaveChanges();
        }

        public void Dispose()
        {
            if (this._contexto != null)
            {
                this._contexto.Dispose();
            }
        }

    }
}
