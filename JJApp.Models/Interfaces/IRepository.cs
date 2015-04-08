using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JJApp.Models.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> ObtenerTodos();
        T ObtenerPorId(int id);
        void Agregar(T entity);
        void Actualizar(T entity);
        void Eliminar(T entity);
        void Eliminar(int id);

        //Detach->Separar, Desvincular, Desconectar
        void Detach(T entity);


    }
}
