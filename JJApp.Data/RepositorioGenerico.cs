using JJApp.Models.Interfaces;
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace JJApp.Data
{
    public class RepositorioGenerico<T>:IRepository<T> where T:class
    {

        protected DbSet<T> DBSet { get; set; }
        protected DbContext Context { get; set; }

        public RepositorioGenerico(DbContext context)
        {
            if (context == null)
            {
                throw new ArgumentException("Una instancia de DbContext es requeridad para usar este repositorio.","context");
            }
            this.Context = context;
            this.DBSet = this.Context.Set<T>();
        }

        public virtual IQueryable<T> ObtenerTodos()
        {
            return this.DBSet;
        }

        public virtual T ObtenerPorId(int id)
        {
            return this.DBSet.Find(id);
        }

        public virtual void Agregar(T entity)
        {
            DbEntityEntry entry = this.Context.Entry(entity);
            if (entry.State != EntityState.Detached)
            {
                entry.State = EntityState.Added;
            }
            else
            {
                this.DBSet.Add(entity);
            }
        }

        public virtual void Actualizar(T entity)
        {
            
            DbEntityEntry entry = this.Context.Entry(entity);
            if (entry.State == EntityState.Detached)
            {
                this.DBSet.Attach(entity);
            }
            entry.State = EntityState.Modified;

        }

        public void Detach(T entity)
        {
            DbEntityEntry entry = this.Context.Entry(entity);
            entry.State = EntityState.Detached;
        }

        public void Eliminar(T entity)
        {
            DbEntityEntry entry = this.Context.Entry(entity);
            if (entry.State != EntityState.Deleted)
            {
                entry.State = EntityState.Deleted;
            }
            else
            {
                this.DBSet.Attach(entity);
                this.DBSet.Remove(entity);
            }
        }

        public void Eliminar(int id)
        {

            var entity = this.ObtenerPorId(id);

            if (entity != null)
            {
                this.Eliminar(entity);
            }

        }


    }
}
